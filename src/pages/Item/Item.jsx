import { useState } from "react"

//* Import styles
import {
  Contenedor,
  Images,
  Contenido,
  FormFooter,
  ButtonsForm,
  HeadContenido
} from "./styles"

//* Import Components
import RadioBtn from "../../components/Form/RadioBtn"
import RadioBtnSquare from "../../components/Form/RadioBtnSquare"

export default function Item({
  images = [],
  options = [],
  title,
  price,
  compare_at_price,
  ...args
}) {
  const [contador, setContador] = useState(0)
  const [totalPrice, setTotalPrice] = useState(0)
  return (
    <Contenedor>
      <Images>
        {images.map((img) => (
          <img src={img} alt="" key={Math.random() * 10} />
        ))}
      </Images>

      <Contenido>
        <HeadContenido>
          <span>lorem ipsum.</span>
          <h2>{title}</h2>
          <p>
            $ {price} / <span>$ {compare_at_price}</span>
          </p>
        </HeadContenido>
        <form>
          <div>
            <h4>Color:</h4>
            {/* {options[0].values.map((value) => (
              <RadioBtn key={Math.random() * 10} value={value} />
            ))} */}
          </div>
          <div>
            <h4>Size:</h4>
            {/* {options[1].values.map((value) => (
              <RadioBtnSquare key={Math.random() * 10} value={value} />
            ))} */}
          </div>
          <FormFooter>
            <div>
              <button type="button" onClick={() => setContador(contador + 1)}>
                +
              </button>
              <p>{contador}</p>
              <button type="button" onClick={() => setContador(contador - 1)}>
                -
              </button>
            </div>
            <p>Total price: $ {totalPrice}</p>
          </FormFooter>

          <ButtonsForm>
            <button type="button">Agregar a favoritos</button>
            <button type="submit">Agregar al carrito</button>
          </ButtonsForm>
        </form>

        <div></div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
          culpa laudantium quae fuga rerum autem ipsa voluptatibus, laboriosam
          sint quibusdam dolorum illum eum iste sapiente consequuntur id
          adipisci soluta perferendis. Illo non aperiam dolores magni laborum,
          consequuntur delectus saepe facilis ipsam, id a corporis molestias
          veniam aliquam iste velit? Suscipit, rem. Sed consequatur cupiditate
          rem, corrupti at necessitatibus omnis vitae?
        </p>
      </Contenido>
    </Contenedor>
  )
}
