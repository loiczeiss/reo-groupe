'use client'

import { useState } from 'react'

export function RevalidateTest() {
  const [result, setResult] = useState<string | null>(null)

  const handleClick = async () => {
    const res = await fetch('/api/revalidate-page-globals', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ slug: 'home' }), // replace 'home' with your test slug
    })

    const data = await res.json()
    setResult(JSON.stringify(data))
    console.log(result)
  }

  return (
    <div className="p-4 border rounded">
      <button
        onClick={handleClick}
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Test Revalidation
      </button>
      {result && (
        <pre className="mt-4 bg-gray-100 p-2 rounded text-sm">{result}</pre>
      )}
    </div>
  )
}