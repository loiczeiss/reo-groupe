// storage-adapter-import-placeholder
import { postgresAdapter } from '@payloadcms/db-postgres'
import { payloadCloudPlugin } from '@payloadcms/payload-cloud'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import path from 'path'
import { buildConfig } from 'payload'
import { fileURLToPath } from 'url'
import { resendAdapter } from '@payloadcms/email-resend'

import sharp from 'sharp'
import dotenv from 'dotenv'
import { Users } from '@/collections/users'
import { Media } from '@/collections/media'
import { Pages } from '@/collections/pages'
import { Header } from '@/Header/config'
import { Footer } from '@/Footer/config'
import { plugins } from './plugins'
import { GoogleReviews } from '@/collections/google-reviews'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)
dotenv.config()
export default buildConfig({
  email: resendAdapter({
    defaultFromAddress: 'onboarding@resend.dev',
    defaultFromName: 'Payload CMS',
    apiKey: process.env.RESEND_API_KEY ||"",

  }),
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
  },
  collections: [Users, Media, Pages, GoogleReviews],
  globals:[Header, Footer],
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || '',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URI || '',
    },
  }),
  sharp,
  plugins: [
    ...plugins,
    payloadCloudPlugin(),
    // storage-adapter-placeholder
  ],
})
