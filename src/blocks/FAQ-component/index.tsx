"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"
import { cn } from "@/utilities/ui"


interface FaqComponentBlockProps {
  title: string
  description: string
  questionsArray: {
    question: string
    answer: string
  }[]
}
export  function FaqComponentBlock(props: FaqComponentBlockProps) {
  const { title, description, questionsArray } = props
  const [openIndex, setOpenIndex] = useState<number | null>(null)



  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (<main className="bg-[#F5F3F3]">
    <div className="max-w-4xl mx-auto px-4 py-12 ">
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-bold text-[#2d2d5f] mb-2">{title}</h1>
        <p className="text-gray-600">
          {description}</p>
      </div>

      <div className="space-y-4">
        {questionsArray.map((faq, index) => (
          <div
            key={index}
            className={cn("border rounded-md overflow-hidden", openIndex === index ? "bg-white shadow-sm" : "bg-white")}
          >
            <button className="flex justify-between items-center w-full p-4 text-left" onClick={() => toggleFAQ(index)}>
              <span className="font-medium text-[#2d2d5f]">{faq.question}</span>
              <div className={cn("transition-transform duration-200", openIndex === index ? "rotate-180" : "")}>
                <ChevronDown className="h-5 w-5 text-gray-500" />
              </div>
            </button>

            {openIndex === index && (
              <div className="p-4 pt-0 pb-4 text-gray-600">
                {openIndex === 2 ? (
                  <div className="flex">
                    <div className="flex-grow">
                      <p>{faq.answer}</p>
                    </div>
                    <div className="ml-2 flex items-start">
                     
                    </div>
                  </div>
                ) : (
                  <p>{faq.answer}</p>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
    </main>
  )
}