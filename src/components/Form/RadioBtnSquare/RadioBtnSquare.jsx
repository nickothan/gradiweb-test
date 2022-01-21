//* Import styles
import { LabelBtn } from "./styles"

export default function RadioBtnSquare({ value }) {
  return (
    <LabelBtn>
      <input type="radio" value={value} name="size" />
      {value}
    </LabelBtn>
  )
}
