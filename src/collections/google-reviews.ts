// payload.config.ts
import { CollectionConfig } from "payload"

export const GoogleReviews: CollectionConfig = {
  slug: "googleReviews",
  admin: { useAsTitle: "author" },
  fields: [
    { name: "author", type: "text", required: true },
    { name: "rating", type: "number", required: true },
    { name: "review", type: "textarea" },
    { name: "authorImage", type: "text" },
    { name: "date", type: "date" },
  ],
}
