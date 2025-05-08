import { MoveUpRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/utilities/ui' // make sure this utility exists

interface StyledButtonProps {
  button: {
    label: string
    url: string
  }
  bgColor?: string
  divColor?: string
  className?: string // ✅ allow passing custom className
  iconClassName?: string,
  divIconClassName?: string,

}

export default function StyledButton(props: StyledButtonProps) {
  const {
    button,
    bgColor = '#668E2E',
    divColor = '#000',
    divIconClassName,
    className, // ✅ destructure
    iconClassName,

  } = props
  console.log(divIconClassName)
  return (
    <Button
      className={cn(
        'flex rounded-4xl justify-center items-center space-x-4 px-[1.083px] pt-[3.25px] pb-[3.25px] pl-[4.333px] hover:cursor-pointer',
        className // ✅ merge external className
      )}
      style={{ backgroundColor: bgColor }}
    >
      <p className={'m-0 md:mx-2'}>{button.label}</p>
      <div className={cn("rounded-4xl ml-2 p-1", divIconClassName)} >
        <MoveUpRight className={cn("w-2 h-2 md:w-6 md:h-6 ", iconClassName)} />

      </div>
    </Button>
  )
}
