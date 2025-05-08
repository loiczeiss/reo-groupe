import {Block} from 'payload'


export const FaqComponent: Block ={
  slug: "faqComponent",
  fields:[
    {name: 'title', label: 'Title', type: 'text'},
    {name: 'description', label: 'description', type: 'text'},
    {name: 'questionsArray', label: 'questionsArray', type: 'array', minRows:1, maxRows:10, fields:[
        {name: 'question', label: 'Question', type: 'text'},
        {name: 'answer', label: 'Answer', type: 'text'}
      ]},
  ]
}