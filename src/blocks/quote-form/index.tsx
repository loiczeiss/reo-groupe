'use client'

import { Input } from '@/components/ui/input'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Textarea } from '@/components/ui/textarea'

import { Media } from '@/payload-types'
import Image from 'next/image'
import StyledButton from '@/components/Styled-button/Styled-button'
import { defaultValues, quoteFormSchema } from '@/blocks/quote-form/formSchema'
import { Controller, SubmitHandler, useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

interface QuoteFormBlockProps {
  title?: string
  description?: string
  copyrightNotice?: string
  firstName: {
    label: string
    placeholder: string
  }
  lastName: {
    label: string
    placeholder: string
  }
  select: {
    label: string
    placeholder: string
    selections: {
      selection: string
      id: string
    }[]
  }[]
  mail: {
    label: string
    placeholder: string
  }
  descriptionInput: { label: string; placeholder: string }
  button: {
    label: string
    url: string
  }
  consentText: {
    prefix: string
    termsLabel: {
      texte: string
      url: string
    }
    andSeparator: string
    privacyLabel: {
      texte: string
      url: string
    }
  }

  image: Media
  requiredIndication: string
}

export function QuoteFormBlock(props: QuoteFormBlockProps) {
  const {
    title,
    description,
    firstName,
    lastName,
    select,
    button,
    descriptionInput,
    copyrightNotice,
    mail,
    consentText,
    image,
    requiredIndication,
  } = props

  const form = useForm<z.infer<typeof quoteFormSchema>>({
    mode: 'onChange',
    resolver: zodResolver(quoteFormSchema),
    defaultValues,
  })

  const onSubmit: SubmitHandler<z.infer<typeof quoteFormSchema>> = (values) => {
    console.log(values)
  }

  return (
    <div className={'p-8'}>
      <div className="bg-[#6b9a3e] text-white rounded-lg overflow-hidden shadow-lg">
        <div className="grid md:grid-cols-2">
          <div className="p-8">
            <h1 className="text-2xl font-bold mb-2 break-words">{title}</h1>
            <p className="max-sm:text-[12px] text-sm mb-6 opacity-90 leading-tight break-words">
              {description}
            </p>

            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label htmlFor="firstname" className="block text-sm">
                    {firstName.label}
                  </label>
                  <Input
                    id="firstname"
                    {...form.register('firstName')}
                    placeholder={firstName.placeholder}
                    className="bg-[#7dac51] border-none placeholder:text-white/70 text-white h-10"
                  />
                  {form.formState.errors.firstName && (
                    <p className="text-xs text-red-400 mt-1">{form.formState.errors.firstName.message}</p>
                  )}
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="lastname" className="block text-sm">
                    {lastName.label}
                  </label>
                  <Input
                    id="lastname"
                    {...form.register('lastName')}
                    placeholder={lastName.placeholder}
                    className="bg-[#7dac51] border-none placeholder:text-white/70 text-white h-10"
                  />
                  {form.formState.errors.lastName && (
                    <p className="text-xs text-red-400 mt-1">{form.formState.errors.lastName.message}</p>
                  )}
                </div>
              </div>

              <div className="space-y-1.5">
                <label htmlFor="type" className="block text-sm">
                  {select[0].label}
                </label>
                <Controller
                  control={form.control}
                  name="whoAreYou"
                  render={({ field }) => (
                    <Select value={field.value} onValueChange={field.onChange}>
                      <SelectTrigger className="bg-[#7dac51] border-none text-white h-10">
                        <SelectValue placeholder={select[0].placeholder} />
                      </SelectTrigger>
                      <SelectContent className="bg-[#6b9a3e] border-[#7dac51] text-white">
                        {select[0].selections.map((item, i) => (
                          <SelectItem
                            value={item.selection}
                            key={i}
                            className="focus:bg-[#7dac51] hover:bg-[#7dac51]"
                          >
                            {item.selection}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  )}
                />
                {form.formState.errors.whoAreYou && (
                  <p className="text-xs text-red-400 mt-1">{form.formState.errors.whoAreYou.message}</p>
                )}
              </div>

              <div className="space-y-1.5">
                <label htmlFor="email" className="block text-sm">
                  {mail.label}
                </label>
                <Input
                  id="email"
                  type="email"
                  {...form.register('mail')}
                  placeholder={mail.placeholder}
                  className="bg-[#7dac51] border-none placeholder:text-white/70 text-white h-10"
                />
                {form.formState.errors.mail && (
                  <p className="text-xs text-red-400 mt-1">{form.formState.errors.mail.message}</p>
                )}
              </div>

              <div className="space-y-1.5">
                <label htmlFor="worktype" className="block text-sm">
                  {select[1].label}
                </label>
                <Controller
                  control={form.control}
                  name="workType"
                  render={({ field }) => (
                    <Select value={field.value} onValueChange={field.onChange}>
                      <SelectTrigger className="bg-[#7dac51] border-none text-white h-10">
                        <SelectValue placeholder={select[1].placeholder} />
                      </SelectTrigger>
                      <SelectContent className="bg-[#6b9a3e] border-[#7dac51] text-white">
                        {select[1].selections.map((selection) => (
                          <SelectItem
                            key={selection.id}
                            value={selection.selection}
                            className="focus:bg-[#7dac51] hover:bg-[#7dac51]"
                          >
                            {selection.selection}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  )}
                />
                {form.formState.errors.workType && (
                  <p className="text-xs text-red-400 mt-1">{form.formState.errors.workType.message}</p>
                )}
              </div>

              <div className="space-y-1.5">
                <label htmlFor="description" className="block text-sm">
                  {descriptionInput.label}
                </label>
                <Textarea
                  id="description"
                  {...form.register('description')}
                  placeholder={descriptionInput.placeholder}
                  className="bg-[#7dac51] border-none placeholder:text-white/70 text-white min-h-[120px] resize-none"
                />
                {form.formState.errors.description && (
                  <p className="text-xs text-red-400 mt-1">{form.formState.errors.description.message}</p>
                )}
              </div>

              <p className="text-[9px]">{requiredIndication}</p>

              <div className="flex justify-center mt-6">
                <StyledButton
                  redirectBool={false}
                  type="submit"
                  className="text-[12px] p-4 max-sm:h-5 text-[#7dac51]"
                  button={button}
                  divIconClassName="hidden"
                  bgColor="#232548"
                />
              </div>
            </form>
          </div>

          <div className="hidden md:flex items-center p-8">
            <div className="w-full h-full rounded-lg overflow-hidden relative">
              <Image src={image.url as string} alt={image.alt} className="object-cover" fill />
            </div>
          </div>
        </div>

        <div className="mt-2 text-xs text-center md:w-1/2 space-y-2 md:space-y-4 p-8">
          <p>
            {consentText.prefix}{' '}
            <a href="#" className="underline text-[#232548]">
              {consentText.termsLabel.texte}
            </a>{' '}
            {consentText.andSeparator}{' '}
            <a href="#" className="underline text-[#232548]">
              {consentText.privacyLabel.texte}
            </a>
          </p>
          <p className="mt-1 text-[10px]">© {copyrightNotice}</p>
        </div>
      </div>
    </div>
  )
}
