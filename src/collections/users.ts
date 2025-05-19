import type { CollectionConfig } from 'payload'

export const Users: CollectionConfig = {
  slug: 'users',
  admin: {
    useAsTitle: 'email',
  },
  auth: { tokenExpiration: 28800, maxLoginAttempts: 5, lockTime: 30000},
  fields: [
    // Email added by default
    // Add more fields as needed
  ],
}
