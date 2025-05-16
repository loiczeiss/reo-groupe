import { z } from 'zod'
import { isSameDay } from 'date-fns'

const today = new Date()
export const bookingFormSchema = z.object({
  name: z
    .string()
    .refine((value) => {
      const words = value.trim().split(/\s+/)
      return words.length >= 2 && words.every((word) => word.length >= 2)
    }, {
      message: 'Chaque mot doit contenir au moins 2 lettres (prénom et nom requis)',
    }),

  email: z.string().email({ message: 'Adresse e-mail invalide' }),
  serviceType: z.string().min(1, { message: 'Veuillez sélectionner un type de service' }),
  propertyType: z.string().min(1, { message: 'Veuillez sélectionner un type de bien' }),
  date: z.date({
    invalid_type_error: 'Date invalide',
  }).refine(
    (d) => !isSameDay(d, today),
    { message: 'Veuillez sélectionner une autre date que celle d’aujourd’hui', }),


  otherRequest: z.string().optional(),
  projectDetails: z.string().min(10, { message: 'Veuillez entrer les détails du projet en minimum 10 caractères' }),
  termsAccepted: z.literal(true, {
    errorMap: () => ({ message: 'Vous devez accepter les conditions' }),
  }),
})
