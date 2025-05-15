import { z } from 'zod'


export const contactFormSchema = z.object({
  firstName: z.string().min(2, { message: 'Le prénom doit être de deux caractères minimum' }),
  lastName: z.string().min(2, { message: 'Le nom doit être de deux caractères minimum' }),
  whoAreYou: z.string().min(1, { message: 'Veuillez sélectionner une réponse' }),
  mail: z.string().email({ message: 'Adresse e-mail invalide' }),
  question: z.string().min(10, { message: 'Votre question doit faire au moins dix caractères' }),
})

export const defaultValues: z.infer<typeof contactFormSchema> = {
  firstName: "",
  lastName: "",
  whoAreYou: "",
  mail: "",
  question: "",
}