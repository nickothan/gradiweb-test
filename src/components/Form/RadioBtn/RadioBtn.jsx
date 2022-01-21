//* Import styles
import { LabelRadio } from "./styles"

export default function RadioBtn({ value }) {
  return (
    <LabelRadio>
      <input type="radio" value={value} name="color" />
      {value}
    </LabelRadio>
  )
}
