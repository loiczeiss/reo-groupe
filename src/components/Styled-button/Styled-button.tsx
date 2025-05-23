'use client'

import { MoveUpRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/utilities/ui'
import { redirect } from 'next/navigation'

interface StyledButtonProps {
  button:
    | {
        label?: string | null | undefined
        url?: string | null | undefined
      }
    | undefined
  bgColor?: string
  divColor?: string
  className?: string // ✅ allow passing custom className
  iconClassName?: string
  divIconClassName?: string
  type?: 'button' | 'submit'
  redirectBool?: boolean
}

export default function  StyledButton(props: StyledButtonProps) {
  const {
    button,
    bgColor = '#668E2E',
    divColor = '#000',
    divIconClassName,
    className, // ✅ destructure
    iconClassName,
    type = 'button',
    redirectBool = true,
  } = props

  return (
    <Button
      type={type}
      className={cn(
        'flex rounded-4xl justify-center items-center space-x-4 px-[1.083px] pt-[3.25px] pb-[3.25px] pl-[4.333px] hover:cursor-pointer',
        className, // ✅ merge external className
      )}
      style={{ backgroundColor: bgColor }}
      onClick={() => redirectBool  && redirect(button?.url as string)}
    >
      <p className={'m-0 md:mx-2 max-sm:leading-tight'}>{button?.label}</p>
      <div
        className={cn('rounded-4xl ml-2 p-1', divIconClassName)}
        style={{ backgroundColor: divColor }}
      >
        <MoveUpRight className={cn('w-2 h-2 md:w-6 md:h-6 ', iconClassName)} />
      </div>
    </Button>
  )
}
