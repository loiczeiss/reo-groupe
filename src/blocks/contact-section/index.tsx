import { Phone, Mail } from "lucide-react"
import { Media } from '@/payload-types'
interface ContactSectionBlockProps {
  title: string
  telephone: {
    number:string
    subheading: string
  }
  mail:{
    email: string
    subheading: string
  }
}
export function ContactSectionBlock(props: ContactSectionBlockProps) {
  const { title, telephone, mail } = props
  return (
    <div className="bg-[#6b9a3e] py-12 px-4  max-sm:px-16 text-center">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-white text-3xl font-semibold text-center mb-10">{title}</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Phone Card */}
          <div className="bg-[#1e2147] rounded-lg p-8 flex flex-col items-center text-white">
            <Phone className="w-10 h-10 mb-4" />
            <p className=" md:text-2xl font-medium mb-3">{telephone.number}</p>
            <p className="max-sm:text-[14px] text-center opacity-90">{telephone.subheading}</p>
          </div>

          {/* Email Card */}
          <div className="bg-[#1e2147] rounded-lg p-8 flex flex-col items-center text-white">
            <Mail className="w-10 h-10 mb-4" />
            <p className="md:text-2xl font-medium mb-3">{mail.email}</p>
            <p className="max-sm:text-[14px] text-center opacity-90">{mail.subheading}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
