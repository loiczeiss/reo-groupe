'use client'

import { useState } from 'react'
import { Calendar } from '@/components/ui/calendar'
import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { format } from 'date-fns'
import { fr } from 'date-fns/locale'

interface BookingFormBlockProps {
  nameInput: {
    label: string
    placeholder: string
  }
  mailInput: {
    label: string
    placeholder: string
  }
  serviceInput: {
    label: string
    placeholder: string
  }
  houseTypeInput: {
    label: string
    placeholder: string
  }
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
  checkboxLabel: string
  buttonGroup: {
    buttonLabel: string
    buttonUrl: string
  }
}

export default function BookingFormBlock(props: BookingFormBlockProps) {
  const {
    nameInput,
    mailInput,
    serviceInput,
    houseTypeInput,
    dateInput,
    otherInput,
    detailsInput,
    checkboxLabel,
    buttonGroup,
  } = props
  const [date, setDate] = useState<Date | undefined>(new Date(2025, 4, 25))

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Name */}
        <div className="space-y-2">
          <label htmlFor="name" className="block text-sm font-medium">
            {nameInput.label}
          </label>
          <input
            id="name"
            type="text"
            placeholder={nameInput.placeholder}
            className="w-full px-4 py-3 rounded bg-[#6B8E23] bg-opacity-80 text-white placeholder-white placeholder-opacity-80 focus:outline-none"
          />
        </div>

        {/* Email */}
        <div className="space-y-2">
          <label htmlFor="email" className="block text-sm font-medium">
            {mailInput.label}
          </label>
          <input
            id="email"
            type="email"
            placeholder={mailInput.placeholder}
            className="w-full px-4 py-3 rounded bg-[#6B8E23] bg-opacity-80 text-white placeholder-white placeholder-opacity-80 focus:outline-none"
          />
        </div>

        {/* Service Type */}
        <div className="space-y-2">
          <label htmlFor="service-type" className="block text-sm font-medium">
            {serviceInput.label}
          </label>
          <Select>
            <SelectTrigger className="w-full px-4 py-6 rounded bg-[#6B8E23] bg-opacity-80 text-white border-none focus:ring-0">
              <SelectValue placeholder={serviceInput.placeholder} />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="consultation">Consultation</SelectItem>
              <SelectItem value="installation">Installation</SelectItem>
              <SelectItem value="maintenance">Maintenance</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Property Type */}
        <div className="space-y-2">
          <label htmlFor="property-type" className="block text-sm font-medium">
            {houseTypeInput.label}
          </label>
          <Select>
            <SelectTrigger className="w-full px-4 py-6 rounded bg-[#6B8E23] bg-opacity-80 text-white border-none focus:ring-0">
              <SelectValue placeholder={houseTypeInput.placeholder} />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="residential">Résidentielle</SelectItem>
              <SelectItem value="commercial">Commerciale</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Date Estimation */}
        <div className="space-y-2">
          <label htmlFor="date" className="block text-sm font-medium">
            {dateInput.label}
          </label>
          <input
            id="date"
            type="text"
            value={date ? format(date, 'dd MMMM yyyy', { locale: fr }) : ''}
            readOnly
            className="w-full px-4 py-3 rounded bg-[#6B8E23] bg-opacity-80 text-white focus:outline-none"
          />

          {/* Calendar */}
          <div className="mt-2 bg-[#6B8E23] rounded p-4 text-white">
            <div className="flex items-center justify-between mb-4">
              <button className="p-1 rounded-full bg-white/20">
                <ChevronLeft className="h-5 w-5" />
              </button>
              <div className="font-medium">Mai 2025</div>
              <button className="p-1 rounded-full bg-white/20">
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>

            <div className="grid grid-cols-7 gap-1 text-center text-sm mb-2">
              <div>Dim</div>
              <div>Lun</div>
              <div>Mar</div>
              <div>Mer</div>
              <div>Jeu</div>
              <div>Ven</div>
              <div>Sam</div>
            </div>

            <Calendar
              mode="single"
              selected={date}
              onSelect={setDate}
              className="border-none bg-transparent p-0"
              classNames={{
                day_selected: '',
                day: 'h-9 w-9 p-0 font-normal aria-selected:opacity-100',
                head_cell: 'text-white',
                cell: 'text-white p-0',
                row: 'flex w-full mt-2',
                table: 'w-full border-collapse',
                months: 'hidden',
                caption: 'hidden',
                nav: 'hidden',
              }}
              components={{
                Day: ({ day, selected }) => {
                  const isSelected =
                    selected &&
                    day.getDate() === selected.getDate() &&
                    day.getMonth() === selected.getMonth() &&
                    day.getFullYear() === selected.getFullYear()

                  return (
                    <div
                      className={`h-9 w-9 p-0 font-normal flex items-center justify-center
                      ${isSelected ? 'bg-[#5D3FD3] text-white rounded-full' : ''}`}
                    >
                      {day.getDate()}
                    </div>
                  )
                },
              }}
              fromDate={new Date(2025, 4, 1)}
              toDate={new Date(2025, 4, 31)}
            />
          </div>
        </div>

        {/* Other Request */}
        <div className="space-y-2">
          <label htmlFor="other-request" className="block text-sm font-medium">
            {otherInput.label}
          </label>
          <input
            id="other-request"
            type="text"
            placeholder={otherInput.placeholder}
            className="w-full px-4 py-3 rounded bg-[#6B8E23] bg-opacity-80 text-white placeholder-white placeholder-opacity-80 focus:outline-none"
          />
        </div>
      </div>

      {/* Project Details */}
      <div className="mt-6 space-y-2">
        <label htmlFor="project-details" className="block text-sm font-medium">
          {detailsInput.label}
        </label>
        <textarea
          id="project-details"
          placeholder={detailsInput.placeholder}
          rows={6}
          className="w-full px-4 py-3 rounded bg-[#6B8E23] bg-opacity-80 text-white placeholder-white placeholder-opacity-80 focus:outline-none resize-none"
        />
      </div>

      {/* Terms Checkbox */}
      <div className="mt-6 flex items-start space-x-3">
        <Checkbox
          id="terms"
          className="mt-1 border-[#6B8E23] data-[state=checked]:bg-[#6B8E23] data-[state=checked]:text-white"
        />
        <label htmlFor="terms" className="text-sm">
          {checkboxLabel}
        </label>
      </div>

      {/* Submit Button */}
      <div className="mt-6 flex justify-center">
        <Button className="bg-[#1E3A8A] hover:bg-[#1E3A8A]/90 text-white px-6 py-2 rounded-full">
          <span>{buttonGroup.buttonLabel}</span>
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </div>
  )
}
