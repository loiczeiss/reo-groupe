import { Block } from 'payload'

interface TextBlockProps {
  content: string
}

export function TextBlock(props: TextBlockProps) {
  const { content } = props

  return (
    <div>
      <p>{content}</p>
    </div>
  )
}
