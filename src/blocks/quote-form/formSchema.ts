import { z } from 'zod'



export const quoteFormSchema = z.object({
  firstName: z.string().min(2, { message : 'Le prénom doit être de deux caractères minimum' }),
  lastName: z.string().min(2, {message:'Le nom doit être de deux caractères minimum'}),
  whoAreYou: z.string().min(1, {message: "Veuillez sélectionner une réponse"}),
  mail: z.string().email({message: "Adresse e-mail invalide"}),
  workType: z.string().min(1, {message : 'Veuillez sélectionner un type de travail'}),
  description: z.string().min(10, {message: 'Votre description doit faire au moins dix caractères'})
})

export const defaultValues: z.infer<typeof quoteFormSchema> = {
  firstName: "",
  lastName: "",
  whoAreYou: "",
  mail: "",
  workType: "",
  description: "",
}