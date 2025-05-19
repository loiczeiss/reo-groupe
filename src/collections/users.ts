import type { CollectionConfig } from 'payload'

export const Users: CollectionConfig = {
    slug: 'users',
    admin: {
      useAsTitle: 'email',
    },
    auth: {
      maxLoginAttempts: 5,
      lockTime: 5,
      forgotPassword: {
        generateEmailHTML: ({ token}={}) => {
          const resetURL = `http://localhost:3000/reset-password?token=${token}`
          return `<p>Click <a href="${resetURL}">here</a> to reset your password.</p>`
        },
      },
    },

  fields: [
    // Email added by default
    // Add more fields as needed
  ],
  }
