import { CollectionConfig } from 'payload'
import {
  MetaTitleField,
  MetaDescriptionField,
  MetaImageField,
  OverviewField,
} from '@payloadcms/plugin-seo/fields'
import { QuoteForm } from '@/blocks/quote-form/config'
import { contactForm } from '@/blocks/contact-form/config'
import { Config } from '@/blocks/hero/config'
import { TextAndFourImages } from '@/blocks/text-and-four-images/config'
import { ThreeByThreeContent } from '@/blocks/three-by-three-content/config'
import { WhyUs } from '@/blocks/why-us/config'
import { ContentCarousel } from '@/blocks/content-carousel/config'
import { CardAndImage } from '@/blocks/card-and-image/config'
import { RealisationsCarousel } from '@/blocks/realisations-carousel/config'
import { FaqComponent } from '@/blocks/faq-component/config'
import { CertificationSection } from '@/blocks/certification-section/config'
import { BookingForm } from '@/blocks/booking-form/config'
import { ContactSection } from '@/blocks/contact-section/config'
import { TestimonialCarousel } from '@/blocks/testimonial-carousel/config'
import { MidHero } from '@/blocks/mid-hero/config'
import { IntroductionComponent } from '@/blocks/introduction/config'
import { revalidatePageHook } from '@/hooks/RevalidatePageHook'

// ... (your imports for all blocks like Config, TextContent, etc.)

const Pages: CollectionConfig = {
  slug: 'pages',
  hooks: {
    afterChange: [
      (args) => {
        console.log('[Pages.afterChange] Hook fired with args:', {
          operation: args.operation,
          slug: args.doc?.slug,
        })

        return revalidatePageHook(args )
      },
    ],
  },
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
        Config,
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
        IntroductionComponent,

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
