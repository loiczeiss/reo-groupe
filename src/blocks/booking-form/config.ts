import { Block } from 'payload'

export const BookingForm: Block = {
  slug: 'bookingForm',
  fields: [
    {
      name: 'nameInput',
      label: 'Name Input',
      type: 'group',
      fields: [
        { name: 'label', label: 'label', type: 'text' },
        { name: 'placeholder', label: 'placeholder', type: 'text' },
      ],
    },
    {
      name: 'mailInput',
      label: 'Mail Input',
      type: 'group',
      fields: [
        { name: 'label', label: 'label', type: 'text' },
        { name: 'placeholder', label: 'placeholder', type: 'text' },
      ],
    },
    {
      name: 'serviceInput',
      label: 'service Input',
      type: 'group',
      fields: [
        { name: 'label', label: 'label', type: 'text' },
        { name: 'placeholder', label: 'placeholder', type: 'text' },
      ],
    },
    {
      name: 'houseTypeInput',
      label: 'House Type',
      type: 'group',
      fields: [
        { name: 'label', label: 'label', type: 'text' },
        { name: 'placeholder', label: 'placeholder', type: 'text' },
      ],
    },
    {
      name: 'dateInput',
      label: 'Date Input',
      type: 'group',
      fields: [{ name: 'label', label: 'label', type: 'text' }],
    },
    {
      name: 'otherInput',
      label: 'OtherInput',
      type: 'group',
      fields: [
        { name: 'label', label: 'label', type: 'text' },
        { name: 'placeholder', label: 'placeholder', type: 'text' },
      ],
    },
    {
      name: 'detailsInput',
      label: 'Details Input',
      type: 'group',
      fields: [
        { name: 'label', label: 'label', type: 'text' },
        { name: 'placeholder', label: 'placeholder', type: 'text' },
      ],
    },
    { name: 'checkboxLabel', label: 'Checkbox label', type: 'text' },
    {
      name: 'buttonGroup',
      label: 'button group',
      type: 'group',
      fields: [
        { name: 'label', label: 'button label', type: 'text' },
        { name: 'url', label: 'button url', type: 'text' },
      ],
    },
  ],
}
