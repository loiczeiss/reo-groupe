import { MoveUpRight } from 'lucide-react'
import { Button } from '@/components/ui/button'


interface StyledButtonProps {
  button: {
    label: string,
    url: string,
  }
  bgColor?: string,
    divColor?: string


}
export default function StyledButton(props: StyledButtonProps) {
const { button, bgColor = '#668E2E', divColor = '#fff'} = props


  return(<Button
    className={'flex rounded-4xl  justify-between space-x-4 pr-1'}
    style={{backgroundColor: bgColor}}
  >
    <p>{button.url}</p>
    <div className={' rounded-4xl p-1'} style={{backgroundColor: divColor}}>
      <MoveUpRight />
    </div>
  </Button>)
}