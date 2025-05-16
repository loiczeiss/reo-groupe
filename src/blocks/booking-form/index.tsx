'use client'

import { useState } from 'react'
import { Calendar } from '@/components/ui/calendar'
import { Checkbox } from '@/components/ui/checkbox'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { format } from 'date-fns'
import { fr } from 'date-fns/locale'
import StyledButton from '@/components/Styled-button/Styled-button'
import { zodResolver } from '@hookform/resolvers/zod'
import { Controller, SubmitHandler, useForm } from 'react-hook-form'
import { bookingFormSchema } from '@/blocks/booking-form/formSchema'
import { z } from 'zod'
import { toast } from 'sonner';

interface BookingFormBlockProps {
  nameInput: {
    label: string
    placeholder: string
  }
  mailInput: {
    label: string
    placeholder: string
  }
  select: {
    label: string
    placeholder: string
    selections: {
      id: string
      selection: string
    }[]
  }[]
  dateInput: {
    label: string
  }
  otherInput: {
    label: string
    placeholder: string
  }
  detailsInput: {
    label: string
    placeholder: string
  }
  checkboxGroup: {
    checkboxText: string
    conditions: string
    conditionsURL: string
  }
  buttonGroup: {
    label: string
    url: string
  }
  requiredIndication: string
}

export function BookingFormBlock(props: BookingFormBlockProps) {
  const {
    nameInput,
    mailInput,
    select,
    dateInput,
    otherInput,
    detailsInput,
    checkboxGroup,
    buttonGroup,
    requiredIndication,
  } = props
  const [date, setDate] = useState<Date | undefined>(new Date())
  const form = useForm<z.infer<typeof bookingFormSchema>>({
    mode: 'onChange',
    resolver: zodResolver(bookingFormSchema),
    defaultValues: {
      name: '',
      email: '',
      serviceType: '',
      propertyType: '',
      date: new Date(),
      otherRequest: '',
      projectDetails: '',
    },
  })


  const onSubmit: SubmitHandler<z.infer<typeof bookingFormSchema>> = async (values) => {
    const { termsAccepted, ...valuesMail } = values;


    const res = await fetch('/api/booking-mail', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(valuesMail),
    });



    if (!res.ok) {
   toast.error(`Erreur durant l'envoi du mail`)
    } else {
    toast.success('Email envoyé');
    }
  };

  return (
    <form
      onSubmit={form.handleSubmit(onSubmit)}
      {...form}
      className="max-w-4xl mx-auto p-6 bg-white"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Name */}
        <div className="max-sm:order-1 space-y-2">
          <label htmlFor="name" className="block text-sm font-medium">
            {nameInput.label}
          </label>
          <input
            id="name"
            type="text"
            {...form.register('name')}
            placeholder={nameInput.placeholder}
            className="w-full px-4 py-3 rounded bg-[#668E2E] bg-opacity-80 text-white placeholder-white/50 focus:outline-none"
          />
          {form.formState.errors.name && (
            <p className="text-red-300 text-sm">{form.formState.errors.name.message}</p>
          )}
        </div>

        {/* Email */}
        <div className="space-y-2 max-sm:order-2">
          <label htmlFor="email" className="block text-sm font-medium">
            {mailInput.label}
          </label>
          <input
            id="email"
            type="email"
            {...form.register('email')}
            placeholder={mailInput.placeholder}
            className="w-full px-4 py-3 rounded bg-[#668E2E] bg-opacity-80 text-white placeholder-white/50 focus:outline-none"
          />
          {form.formState.errors.email && (
            <p className="text-red-300 text-sm">{form.formState.errors.email.message}</p>
          )}
        </div>

        {/* Service Type */}
        <div className="space-y-2 max-sm:order-3">
          <label htmlFor="service-type" className="block text-sm font-medium">
            {select[0].label}
          </label>
          <Controller
            control={form.control}
            name="serviceType"
            render={({ field }) => (
              <Select value={field.value} onValueChange={field.onChange}>
                <SelectTrigger
                  id="service-type"
                  className="bg-[#668E2E] border-none text-white h-6 sm:h-10 max-sm:text-[12px] focus:outline-none focus:ring-0 data-[placeholder]:text-white/50"
                >
                  <SelectValue placeholder={select[0].placeholder} />
                </SelectTrigger>
                <SelectContent className="bg-[#6b9a3e] border-[#7dac51] text-white">
                  {select[0].selections.map((item, i) => (
                    <SelectItem
                      key={i}
                      value={item.selection}
                      className="focus:bg-[#7dac51] hover:bg-[#7dac51]"
                    >
                      {item.selection}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            )}
          />
          {form.formState.errors.serviceType && (
            <p className="text-red-300 text-sm">{form.formState.errors.serviceType.message}</p>
          )}
        </div>

        {/* Property Type */}
        <div className="space-y-2 max-sm:order-4">
          <label htmlFor="property-type" className="block text-sm font-medium">
            {select[1].label}
          </label>
          <Controller
            control={form.control}
            name="propertyType"
            render={({ field }) => (
              <Select value={field.value} onValueChange={field.onChange}>
                <SelectTrigger
                  id="property-type"
                  className="bg-[#668E2E] border-none text-white h-6 sm:h-10 max-sm:text-[12px] focus:outline-none focus:ring-0 data-[placeholder]:text-white/50"
                >
                  <SelectValue placeholder={select[1].placeholder} />
                </SelectTrigger>
                <SelectContent className="bg-[#6b9a3e] border-[#7dac51] text-white">
                  {select[1].selections.map((item, i) => (
                    <SelectItem
                      key={i}
                      value={item.selection}
                      className="focus:bg-[#7dac51] hover:bg-[#7dac51]"
                    >
                      {item.selection}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            )}
          />
          {form.formState.errors.propertyType && (
            <p className="text-red-300 text-sm">{form.formState.errors.propertyType.message}</p>
          )}
        </div>

        {/* Date */}
        <div className="max-sm:order-5 space-y-2">
          <label htmlFor="date" className="block text-sm font-medium">
            {dateInput.label}
          </label>
          <input
            id="date"
            type="text"
            {...form.register('date')}
            value={date ? format(date, 'dd MMMM yyyy', { locale: fr }) : ''}
            readOnly
            className="w-full px-4 py-3 rounded bg-[#668E2E] bg-opacity-80 text-white/50 focus:outline-none"
          />
          {form.formState.errors.date && (
            <p className="text-red-300 text-sm">{form.formState.errors.date.message}</p>
          )}
        </div>

        {/* Other Request */}
        <div className="max-sm:order-7 space-y-2">
          <label htmlFor="other-request" className="block text-sm font-medium">
            {otherInput.label}
          </label>
          <input
            id="other-request"
            type="text"
            {...form.register('otherRequest')}
            placeholder={otherInput.placeholder}
            className="w-full px-4 py-3 rounded bg-[#668E2E] bg-opacity-80 text-white placeholder-white/50 focus:outline-none"
          />
          {form.formState.errors.otherRequest && (
            <p className="text-red-300 text-sm">{form.formState.errors.otherRequest.message}</p>
          )}
        </div>

        {/* Calendar */}
        <Calendar
          className={'max-sm:order-6'}
          mode="single"
          selected={date}
          onSelect={(selectedDate) => {
            setDate(selectedDate)
            form.setValue('date', selectedDate as Date)
          }}
          fromDate={new Date()}
          locale={fr}
          classNames={{
            root: 'w-full bg-[#668E2E] text-white rounded-md',
            months: 'w-full flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0',
            month: 'w-full space-y-4',
            caption: 'flex justify-center pt-1 relative items-center w-full',
            caption_label: 'text-sm font-medium',
            nav: 'space-x-1 flex items-center',
            nav_button: 'h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100',
            nav_button_previous: 'absolute left-1',
            nav_button_next: 'absolute right-1',
            table: 'w-full border-collapse space-y-1',
            head_row: 'flex w-full',
            head_cell: 'w-full rounded-md font-normal text-[0.8rem] text-white',
            row: 'flex w-full mt-2',
            cell: 'w-full h-9 text-center rounded-md text-sm relative',
            day: 'h-9 w-full p-0 font-normal aria-selected:opacity-100 hover:bg-[#232548] rounded-md bg-transparent',
            day_selected: 'bg-[#232548] text-white',
            day_today: 'text-accent-foreground font-bold underline',
            day_outside: 'text-white opacity-50',
            day_disabled: 'text-white opacity-50',
            day_range_middle: 'aria-selected:bg-[#232548] aria-selected:text-white',
            day_hidden: 'invisible',
          }}
        />

        {/* Project Details & Checkbox */}
        <div className="space-y-2 max-sm:order-9">
          <label htmlFor="project-details" className="block text-sm font-medium">
            {detailsInput.label}
          </label>
          <textarea
            id="project-details"
            {...form.register('projectDetails')}
            placeholder={detailsInput.placeholder}
            rows={6}
            className="w-full px-4 py-3 rounded bg-[#668E2E] bg-opacity-80 text-white placeholder-white/50 focus:outline-none resize-none"
          />
          {form.formState.errors.projectDetails && (
            <p className="text-red-300 text-sm">{form.formState.errors.projectDetails.message}</p>
          )}

          {/* Checkbox */}
          <div className="mt-6 flex items-start space-x-3">
            <Controller
              control={form.control}
              name="termsAccepted"
              render={({ field }) => (
                <Checkbox
                  id="terms"
                  checked={field.value}
                  onCheckedChange={field.onChange}
                  className="mt-1 border-[#668E2E] data-[state=checked]:bg-[#668E2E] data-[state=checked]:text-white"
                />
              )}
            />
            <label htmlFor="terms" className="text-sm">
              {checkboxGroup.checkboxText}
              <a href={checkboxGroup.conditionsURL} className={'hover:underline text-[#668E2E]'}>
                {checkboxGroup.conditions}
              </a>
            </label>
          </div>
          {form.formState.errors.termsAccepted && (
            <p className="text-red-300 text-sm">{form.formState.errors.termsAccepted.message}</p>
          )}
        </div>
      </div>
      <p className={'text-[9px]'}>{requiredIndication}</p>
      {/* Submit Button */}
      <div className="mt-6 flex justify-center">
        <StyledButton
          iconClassName={'max-sm:w-4 max-sm:h-4 md:h-5 md:w-5'}
          className={'px-2'}
          redirectBool={false}
          type="submit"
          button={buttonGroup}
          bgColor="#232548"
          divColor="#668E2E"
        />
      </div>
    </form>
  )
}
