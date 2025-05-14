import { Block } from 'payload'

export const FaqComponent: Block = {
  slug: "faqComponent",
  labels: { singular: "Foire aux questions", plural: "Foire aux questions" },
  fields: [
    { name: 'title', label: 'Titre', type: 'text' },
    { name: 'description', label: 'Description', type: 'textarea' },
    {
      name: 'questionsArray',
      label: 'Liste des questions',
      type: 'array',
      minRows: 1,
      maxRows: 10,
      fields: [
        { name: 'question', label: 'Question', type: 'textarea' },
        { name: 'answer', label: 'Réponse', type: 'textarea' }
      ]
    },
  ]
}
