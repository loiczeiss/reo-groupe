import { CollectionConfig } from 'payload'
import {
  MetaTitleField,
  MetaDescriptionField,
  MetaImageField,
  OverviewField,
} from '@payloadcms/plugin-seo/fields'
import { QuoteForm } from '@/blocks/quote-form/config'
import { contactForm } from '@/blocks/contact-form/config'
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
import { ContactSection } from '@/blocks/contact-section/config'
import { TestimonialCarousel } from '@/blocks/testimonial-carousel/config'
import { MidHero } from '@/blocks/mid-hero/config'

// ... (your imports for all blocks like Hero, TextContent, etc.)

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
      name: 'title',
      label: 'titre',
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
        QuoteForm,
        contactForm,
        ContactSection,
        TestimonialCarousel,
        MidHero,
      ],
    },
    {
      name: 'meta',
      label: 'SEO',
      type: 'group',
      fields: [
        OverviewField({
          titlePath: 'meta.name',
          descriptionPath: 'meta.description',
          imagePath: 'meta.image',
        }),
        MetaTitleField({
          hasGenerateFn: true,
        }),
        MetaImageField({
          relationTo: 'media',
        }),
        MetaDescriptionField({}),
      ],
    },
  ],
}

export { Pages }
