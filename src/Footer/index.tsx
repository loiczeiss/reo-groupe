'use client'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

import { Input } from '@/components/ui/input'
import { Media } from '@/payload-types'
import { SvgFromUrl } from '@/Header/SvgFromUrl'
import Image from 'next/image'
import StyledButton from '@/components/Styled-button/Styled-button'

interface FooterProps {
  footerData: {
    heading: string
    mailInput: {
      inputPlaceholder: string
      buttonLabel: string
    }
    images: {
      image: Media
    }[]
    bgImage: Media
    subheading: string
    button: {
      label: string
      url: string
    }[]
    socials: {
      logo: Media
      url: string
    }[]
    copyrightText: string
    confidentiality: {
      confidentialityText: string
      confidentialityURL: string
    }
    legalNotice: {
      legalNoticeText: string
      legalNoticeURL: string
    }
    navArray: {
      navText: string
      navUrl: string
    }[]
  }
}

export function Footer(props: FooterProps) {
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
      {/* Hero Section - Rounded with dark blue background */}
      <section className="rounded-2xl bg-[#232548] text-white mb-4 overflow-hidden">
        <div className="flex flex-row gap-4">
          <div className="p-4 sm:p-8 md:p-12 lg:p-16 flex flex-col justify-center w-4/6">
            <h1 className="text-[13px] sm:text-3xl md:text-4xl  font-bold leading-tight mb-2 sm:mb-8">{heading}</h1>
            <div className="flex md:w-2/3  max-w-md rounded-full overflow-hidden bg-white items-center text-black">
              <Input type="email" placeholder={mailInput.inputPlaceholder} className={'border-0 max-sm:text-[6px] max-sm:h-4'} />
              <Button className="rounded-full bg-[#7ab51d] hover:bg-[#6a9e18] text-white border-0 m-1 sm:m-2 max-sm:text-[6px] max-sm:h-4">
                {mailInput.buttonLabel}
              </Button>
            </div>
          </div>
          <div className="bg-gray-200 w-2/6 mt-4 sm:mt-8 rounded-2xl rounded-b-none mr-4 sm:mr-8 flex items-center justify-center  relative">
            {images.map((image, i) => (
              <Image
                key={i}
                src={image.image.url as string}
                alt={image.image.alt}
                fill
                className={'object-cover rounded-2xl rounded-b-none'}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Content Section - Rounded with green background */}
      <section
        className="rounded-2xl  text-white mt-4"
        style={{
          backgroundImage: `url(${bgImage?.url})`,
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
                    <StyledButton
                      button={button[0]}
                      className={'max-lg:h-6 md:px-2  text-[#7ab51d] text-[7px] sm:text-[11px] lg:text-xl '}
                      iconClassName={"h-2 w-2 md:w-3 md:h-3"}
                      bgColor={'#232548'}
                    />
                    <StyledButton
                      button={button[1]}
                      className={'max-lg:h-6 md:px-2  text-[#7ab51d] text-[7px] sm:text-[11px] lg:text-xl'}
                      iconClassName={"h-2 w-2 md:w-3 md:h-3"}
                      bgColor={'#FFF'}
                    />
                  </div>

                  <div className="flex gap-6 mt-2 sm:mt-12 mb-2 sm:mb-4">
                    {socials.map((item, i) => (
                      <Link
                        href={item.url || '#'}
                        key={i}
                        className="text-white hover:text-slate-900 h-3 w-3 sm:h-6 sm:w-6"
                      >
                        {item.logo?.url?.endsWith('.svg') ? (
                          <SvgFromUrl url={item.logo.url as string} alt={item.logo.alt} />
                        ) : (
                          <Image src={item.logo.url as string} alt={item.logo.alt} fill />
                        )}
                      </Link>
                    ))}
                  </div>
                </div>


                    <div className="max-sm:space-y-4 space-y-2 flex flex-col justify-center">
                      {navArray.map((item, i) => (
                        <Link
                          key={i}
                          href={item.navUrl}
                          className="block text-white hover:underline text-[11px] lg:text-xl max-sm:leading-tight"
                        >
                          {item.navText}
                        </Link>
                      ))}


                </div>
              </div>
            </div>


              <div className=" flex flex-row justify-between w-full max-sm:leading-tight text-[6px] sm:text-[10px] md:text-sm mt-8 md:mt-0  self-center sm:self-end">
                <p> {copyrightText}</p>
                <div className="space-x-4 ">
                  <Link
                    href={confidentiality.confidentialityURL || ''}
                    className="text-white hover:underline"
                  >
                    {confidentiality.confidentialityText}
                  </Link>
                  <Link
                    href={legalNotice.legalNoticeURL || ''}
                    className="text-white hover:underline"
                  >
                    {legalNotice.legalNoticeText}
                  </Link>
                </div>

            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
