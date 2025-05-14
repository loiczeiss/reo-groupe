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
  } = props
  const [date, setDate] = useState<Date | undefined>(new Date())

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Name */}
        <div className="max-sm:order-1 space-y-2">
          <label htmlFor="name" className="block text-sm font-medium">
            {nameInput.label}
          </label>
          <input
            id="name"
            type="text"
            placeholder={nameInput.placeholder}
            className="w-full px-4 py-3 rounded bg-[#668E2E] bg-opacity-80 text-white placeholder-white/50 placeholder-opacity-80 focus:outline-none"
          />
        </div>

        {/* Email */}
        <div className="space-y-2 max-sm:order-2">
          <label htmlFor="email" className="block text-sm font-medium">
            {mailInput.label}
          </label>
          <input
            id="email"
            type="email"
            placeholder={mailInput.placeholder}
            className="w-full px-4 py-3 rounded bg-[#668E2E] bg-opacity-80 text-white placeholder-white/50 placeholder-opacity-80 focus:outline-none"
          />
        </div>

        {/* Service Type - Replaced with Select */}
        <div className="space-y-2 max-sm:order-3">
          <label htmlFor="service-type" className="block text-sm font-medium">
            {select[0].label}
          </label>
          <Select>
            <SelectTrigger
              id="service-type"
              className="bg-[#668E2E] border-none text-white h-6 sm:h-10 max-sm:text-[12px]
               data-[placeholder]:text-white/50 focus:outline-none focus:ring-0"
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
        </div>

        {/* Property Type - Replaced with Select */}
        <div className="space-y-2 max-sm:order-4">
          <label htmlFor="property-type" className="block text-sm font-medium">
            {select[1].label}
          </label>
          <Select>
            <SelectTrigger
              id="property-type"
              className="bg-[#668E2E] border-none text-white h-6 sm:h-10 max-sm:text-[12px]
               data-[placeholder]:text-white/50 focus:outline-none focus:ring-0"
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
        </div>

        {/* Date Estimation */}
        <div className=" max-sm:order-5 space-y-2">
          <label htmlFor="date" className="block text-sm font-medium">
            {dateInput.label}
          </label>
          <input
            id="date"
            type="text"
            value={date ? format(date, 'dd MMMM yyyy', { locale: fr }) : ''}
            readOnly
            className="w-full px-4 py-3 rounded bg-[#668E2E] bg-opacity-80 text-white/50 focus:outline-none"
          />

          {/* Calendar */}
        </div>

        {/* Other Request */}
        <div className=" max-sm:order-7 space-y-2">
          <label htmlFor="other-request" className="block text-sm font-medium">
            {otherInput.label}
          </label>
          <input
            id="other-request"
            type="text"
            placeholder={otherInput.placeholder}
            className="w-full px-4 py-3 rounded bg-[#668E2E] bg-opacity-80 text-white placeholder-white/50 placeholder-opacity-80 focus:outline-none"
          />
        </div>
        <Calendar
          className={'max-sm:order-6'}
          mode="single"
          selected={date}
          onSelect={setDate}
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
            head_cell: 'w-full rounded-md font-normal text-[0.8rem] text-white', // Changed to white
            row: 'flex w-full mt-2',
            cell: 'w-full h-9 text-center rounded-md text-sm relative [&:has([aria-selected])]:bg-[#232548] first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20',
            day: 'h-9 w-full p-0 font-normal aria-selected:opacity-100 hover:bg-[#232548] rounded-md bg-transparent',
            day_selected:
              'bg-[#232548] text-white hover:bg-[#232548] hover:text-white focus:bg-[#232548] rounded-md focus:text-white',
            day_today: 'text-accent-foreground font-bold underline',
            day_outside: 'text-white opacity-50',
            day_disabled: 'text-white opacity-50',
            day_range_middle: 'aria-selected:bg-[#232548] aria-selected:text-white',
            day_hidden: 'invisible',
          }}
        />
        <div className="space-y-2 max-sm:order-9">
          <label htmlFor="project-details" className="block text-sm font-medium">
            {detailsInput.label}
          </label>
          <textarea
            id="project-details"
            placeholder={detailsInput.placeholder}
            rows={6}
            className="w-full px-4 py-3 rounded bg-[#668E2E] bg-opacity-80 text-white placeholder-white/50 placeholder-opacity-80 focus:outline-none resize-none"
          />
          <div className="mt-6 flex items-start space-x-3">
            <Checkbox
              id="terms"
              className="mt-1 border-[#668E2E] data-[state=checked]:bg-[#668E2E] data-[state=checked]:text-white"
            />
            <label htmlFor="terms" className="text-sm">
              {checkboxGroup.checkboxText}
              <a href={checkboxGroup.conditionsURL} className={"hover:underline text-[#668E2E] "}>{checkboxGroup.conditions}</a>
            </label>
          </div>
        </div>
      </div>

      {/* Submit Button */}
      <div className="mt-6 flex justify-center">
        <StyledButton button={buttonGroup} bgColor={'#232548'} divColor={'#668E2E'} />
      </div>
    </div>
  )
}
