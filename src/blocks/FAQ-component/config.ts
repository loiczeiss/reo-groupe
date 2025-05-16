import { Block } from 'payload'

export const FaqComponent: Block = {
  slug: 'faqComponent',
  labels: { singular: 'Foire aux questions', plural: 'Foire aux questions' },
  fields: [
    { name: 'title', label: 'Titre', type: 'text', required: true },
    { name: 'description', label: 'Description', type: 'textarea', required: true },
    {
      name: 'questionsArray',
      label: 'Liste des questions',
      type: 'array',
      required: true,
      minRows: 1,
      maxRows: 10,
      fields: [
        { name: 'question', label: 'Question', type: 'textarea', required: true },
        { name: 'answer', label: 'Réponse', type: 'textarea', required: true },
      ],
    },
  ],
}
