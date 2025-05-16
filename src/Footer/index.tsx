'use client'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

import { Input } from '@/components/ui/input'
import { Footer } from '@/payload-types'
import { SvgFromUrl } from '@/Header/SvgFromUrl'
import Image from 'next/image'
import StyledButton from '@/components/Styled-button/Styled-button'

interface FooterProps {
 footerData: Footer
}

export function FooterComponent(props: FooterProps) {
  const {
    heading,
    mailInput,
    subheading,
    images,
    bgImage,
    button,
    socials,
    copyrightText,
    confidentiality,
    legalNotice,
    navArray,
  } = props.footerData

  return (
    <main className="bg-gray-100 p-4">
      {/* Config Section - Rounded with dark blue background */}
      <section className="rounded-2xl bg-[#232548] text-white mb-4 overflow-hidden">
        <div className="flex flex-row gap-4">
          <div className="p-4 sm:p-8 md:p-12 lg:p-16 flex flex-col justify-center w-4/6">
            <h1 className="text-[13px] sm:text-3xl md:text-4xl  font-bold leading-tight mb-2 sm:mb-8">{heading}</h1>
            <div className="flex md:w-2/3  max-w-md rounded-full overflow-hidden bg-white items-center text-black">
              <Input type="email" placeholder={mailInput?.inputPlaceholder || "Entrez votre adresse e-mail"} className={'border-0 max-sm:text-[6px] max-sm:h-4'} />
              <Button className="rounded-full bg-[#7ab51d] hover:bg-[#6a9e18] text-white border-0 m-1 sm:m-2 max-sm:text-[6px] max-sm:h-4">
                {mailInput?.buttonLabel || `S'inscrire`}
              </Button>
            </div>
          </div>
          <div className="bg-gray-200 w-2/6 mt-4 sm:mt-8 rounded-2xl rounded-b-none mr-4 sm:mr-8 flex items-center justify-center  relative">
            {images?.map((item, i) => {
              const media = item?.image

              if (!media || typeof media !== 'object' || !('url' in media)) return null

              return (
                <Image
                  key={i}
                  src={media.url as string}
                  alt={media.alt || ''}
                  fill
                  className="object-cover rounded-2xl rounded-b-none"
                />
              )
            })}

          </div>
        </div>
      </section>

      {/* Content Section - Rounded with green background */}
      <section
        className="rounded-2xl  text-white mt-4 "
        style={{
          backgroundImage:
            bgImage && typeof bgImage === 'object' && 'url' in bgImage
              ? `url(${bgImage.url})`
              : undefined,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="container mx-auto flex flex-row gap-8 justify-end">
          {/* Left side - placeholder for background image */}

          {/* Right side with content */}
          <div className=" max-sm:pl-0 p-8 lg:p-16 w-4/6  flex flex-col justify-between">
            <div>
              <h2 className="max-sm:leading-tight text-[11px] md:text-4xl font-bold sm:mb-4 w-2/3">{subheading}</h2>

              <div className={'flex flex-row justify-between space-x-2'}>
                <div className={'flex flex-col'}>
                  <div className="flex flex-row gap-2 sm:gap-4 mt-8">
                    {button?.[0]?.label && button?.[0]?.url && (
                      <StyledButton
                        button={{ label: button[0].label, url: button[0].url }}
                        className="max-lg:h-6 md:px-2 max-lg:pl-2 max-sm:h-5 text-[#7ab51d] text-[7px] sm:text-[11px] lg:text-base"
                        iconClassName="h-2 w-2 md:w-3 md:h-3"
                        bgColor="#232548"
                      />
                    )}

                    {button?.[1]?.label && button?.[1]?.url && (
                      <StyledButton
                        button={{ label: button[1].label, url: button[1].url }}
                        className="max-lg:h-6 md:px-2 max-lg:pl-2 max-sm:h-5 text-[#7ab51d] text-[7px] sm:text-[11px] lg:text-base"
                        iconClassName="h-2 w-2 md:w-3 md:h-3"
                        bgColor="#FFF"
                      />
                    )}
                  </div>

                  <div className="flex gap-6 mt-4 sm:mt-12 mb-2 sm:mb-4">
                    {socials?.map((item, i) => (
                      <Link
                        href={item.url || '#'}
                        key={i}
                        className="text-white hover:text-slate-900 h-4 w-4 sm:h-6 sm:w-6"
                      >
                        {typeof item.logo !== 'number' && item.logo?.url ? (
                          item.logo.url.endsWith('.svg') ? (
                            <SvgFromUrl url={item.logo.url} alt={item.logo.alt} className={"h-4 w-4 sm:h-6 sm:w-6 text-[#232548]"} />
                          ) : (
                            <Image src={item.logo.url} alt={item.logo.alt} fill />
                          )
                        ) : null}

                      </Link>
                    ))}
                  </div>
                </div>


                    <div className="max-sm:space-y-4 space-y-2 flex flex-col justify-center">
                      {navArray?.map((item, i) => (
                        <Link
                          key={i}
                          href={item.navUrl as string}
                          className="block text-white hover:underline text-[8px] md:text-base max-sm:leading-tight"
                        >
                          {item.navText}
                        </Link>
                      ))}


                </div>
              </div>
            </div>


              <div className=" flex flex-row justify-between w-full max-sm:leading-tight text-[6px] sm:text-[10px] md:text-sm mt-4 md:mt-0  self-center sm:self-end">
                <p> {copyrightText}</p>
                <div className="space-x-4 ">
                  <Link
                    href={confidentiality?.confidentialityURL || ''}
                    className="text-white hover:underline"
                  >
                    {confidentiality?.confidentialityText}
                  </Link>
                  <Link
                    href={legalNotice?.legalNoticeURL || ''}
                    className="text-white hover:underline"
                  >
                    {legalNotice?.legalNoticeText}
                  </Link>
                </div>

            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
