import Image from 'next/image'

interface HeroBlockProps {
  title?: string
  description?: string
  backgroundImage?: string
}

export function HeroBlock(props: HeroBlockProps) {
  const { title, description, backgroundImage }: HeroBlockProps = props

  return (
    <div
      className={`text-black flex mx-8 h-[calc(100vh-64px)] my-8 rounded-lg`}
      style={{
        backgroundImage: `url(${backgroundImage?.url})`,
      }}
    >
      <div className={'flex flex-col justify-center w-1/2 pl-8'}>
        <h1 className={'text-6xl '}>{title}</h1>
        <p className={'text-[14px]'}> {description}</p>
      </div>
    </div>
  )
}
