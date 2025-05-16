import { Phone, Mail } from "lucide-react"
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
        <h2 className="text-white text-xl sm:text-3xl font-semibold text-center mb-6 sm:mb-10">{title}</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Phone Card */}
          <div className="bg-[#1e2147] rounded-lg p-8 flex flex-col items-center text-white">
            <Phone className="h-4 w-4 sm:w-10  sm:h-10 mb-4" />
            <a href={`tel:${telephone.number}`} className="max-sm:text-sm md:text-2xl font-medium mb-3 hover:underline">{telephone.number}</a>
            <p className="max-sm:text-sm text-center opacity-90">{telephone.subheading}</p>
          </div>

          {/* Email Card */}
          <div className="bg-[#1e2147] rounded-lg p-8 flex flex-col items-center text-white">
            <Mail className="h-4 w-4 sm:w-10  sm:h-10 mb-4" />
            <a href={`mailto:${mail.email}`} className="max-sm:text-sm md:text-2xl font-medium mb-3 hover:underline">{mail.email}</a>
            <p className="max-sm:text-sm text-center opacity-90">{mail.subheading}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
