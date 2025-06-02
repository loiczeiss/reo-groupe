interface TermsAndConditionBlockProps {
  sections: {
    heading: string
    content: string
  }[]
  title: string
}

export function TermsAndConditionBlock(props: TermsAndConditionBlockProps) {
  const { sections, title } = props
  return (
    <section className="max-w-4xl mx-auto p-6 text-gray-800">
      <h1 className="text-3xl font-bold mb-6">{title}</h1>
      <div className="space-y-6">
        {sections.map((section, i) => (
          <section key={i}>
            <h2 className="text-xl font-semibold">{section.heading}</h2>
            <p>{section.content}</p>
          </section>
        ))}
      </div>
    </section>
  )
}
