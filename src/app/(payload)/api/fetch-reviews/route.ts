// pages/api/fetch-reviews.ts

import redis from "@/lib/redis"
import { getPayload } from 'payload'
import { getJson } from "serpapi"
import config from '@payload-config'
import { NextResponse } from 'next/server'

export async function GET() {
  const cacheKey = "google-reviews-last-fetch"
  const lastFetch = await redis.get(cacheKey)

  if (lastFetch) {
    console.log("Redis cache hit – skipping fetch.")
    return NextResponse.json({ message: "Already fetched today" })
  }

  const payload = await getPayload({ config })


  try {
    const { reviews } = await getJson({
      engine: "google_maps_reviews",
      data_id: process.env.GOOGLE_REVIEW_DATA_ID,
      hl: "fr",
      api_key: process.env.SERP_API_KEY,
    })


    await payload.delete({ collection: "googleReviews", where: {} })

    for (const review of reviews.slice(0, 10)) {
      await payload.create({
        collection: "googleReviews",
        data: {
          author: review.user.name,
          rating: review.rating,
          review: review.snippet,
          authorImage: review.user.thumbnail,
          date: review.iso_date,
        },
      })
    }

    // Set key with 24h expiration to avoid duplicate runs
    await redis.set(cacheKey, "done", "EX", 60 * 60 * 24)

    return NextResponse.json({ message: "Fetched and saved reviews" })
  } catch (err) {
    console.error(err)
    return NextResponse.json({ message: "Error fetching reviews" })
  }
}
