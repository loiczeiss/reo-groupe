'use client'

interface NavProps {
  nav: {
    id: string
    navItemName: string
    navItemUrl: string
  }[]
}

export function Nav(props: NavProps) {
  const { nav } = props

  return (
    <div className={'flex flex-row space-x-2'}>
      {nav.map((item, index) => (
        <a key={index} href={item.navItemUrl} className={'text-[#668E2E] text-[11px] hover:underline'}>
          {item.navItemName}
        </a>
      ))}
    </div>
  )
}
