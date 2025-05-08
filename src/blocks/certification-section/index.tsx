import { Card, CardContent } from '@/components/ui/card'
import { Media } from '@/payload-types'
import Image from 'next/image'

interface CertificationSectionBlockProps {
  title: string
  logo: Media
  certificationArray: {
    textContent: string
    textSubContent: string
  }[]
}

export function CertificationSectionBlock(props: CertificationSectionBlockProps) {
  const { title, logo, certificationArray } = props

  return (
    <section className="bg-[#668E2E] py-12 px-4 md:py-16">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-white text-3xl md:text-4xl font-bold text-center mb-10">{title}</h2>

        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {certificationArray.map((cert, index) => (
            <Card key={index} className="bg-white rounded-lg overflow-hidden border-none">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="mb-4 relative">
                  <div className="w-12 h-12 rounded-full  flex items-center justify-center relative">
                    <Image src={logo.url as string} alt={logo.alt} fill />
                  </div>
                </div>
                <h3 className="font-medium text-lg mb-2">{cert.textContent}</h3>
                <p className="text-gray-600 text-sm">{cert.textSubContent}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
