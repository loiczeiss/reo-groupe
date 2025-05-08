import { CollectionConfig } from 'payload'
import { Hero } from '@/blocks/Hero/Hero'
import { TextContent } from '@/blocks/Text/text'
import { TextAndFourImages } from '@/blocks/text-and-four-images/config'
import { ThreeByThreeContent } from '@/blocks/three-by-three-content/config'
import { WhyUs } from '@/blocks/why-us/config'
import { ContentCarousel } from '@/blocks/content-carousel/config'
import { CardAndImage } from '@/blocks/card-and-image/config'
import { RealisationsCarousel } from '@/blocks/realisations-carousel/config'
import { FaqComponent } from '@/blocks/FAQ-component/config'
import { CertificationSection } from '@/blocks/certification-section/config'
import { BookingForm } from '@/blocks/booking-form/config'

const Pages: CollectionConfig = {
  slug: 'pages',
  labels: {
    singular: 'Page',
    plural: 'Pages',
  },
  access: {
    read: () => true,
    create: () => true,
  },
  fields: [
    {
      name: 'name',
      label: 'Name',
      type: 'text',
      required: true,
    },
    {
      name: 'slug',
      label: 'Slug',
      type: 'text',
      required: true,
    },
    {
      name: 'layout',
      label: 'Layout',
      type: 'blocks',
      blocks: [
        Hero,
        TextContent,
        TextAndFourImages,
        ThreeByThreeContent,
        WhyUs,
        ContentCarousel,
        CardAndImage,
        RealisationsCarousel,
        FaqComponent,
        CertificationSection,
        BookingForm,
      ],
    },
  ],
}

export { Pages }
