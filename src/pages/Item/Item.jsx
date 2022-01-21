import { useState } from "react"

//* Import styles
import {
  Contenedor,
  Images,
  Contenido,
  FormFooter,
  ButtonsForm,
  HeadContenido,
  LabelRadio,
  LabelBtn
} from "./styles"

//* Import Components
/* import RadioBtn from "../../components/Form/RadioBtn" */
import RadioBtnSquare from "../../components/Form/RadioBtnSquare"

export default function Item({
  images = [],
  options = [],
  title,
  price,
  id,
  compare_at_price,
  ...args
}) {
  const [contador, setContador] = useState(0)
  const [totalPrice, setTotalPrice] = useState(0)

  const [compra, setCompra] = useState({
    idcompra: id,
    title: title,
    price: price,
    color: "",
    size: "",
    amount: 0,
    totalCompra: 0
  })

  const inputValueChange = (event) => {
    setCompra({
      ...compra,
      [event.target.name] : event.target.value
    })
  } 

  const enviarCompra = (event) => {
    event.preventDefault()

    setTotalPrice()

    console.log(compra)

  }
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
        <form onSubmit={enviarCompra}>
          <div>
            <h4>Color:</h4>
           
               {options[0].values.map((value) => (
                  <LabelRadio key={Math.random() * 10}>
                    <input type="radio" value={value} name="color" onChange={inputValueChange} />
                    {value}
                  </LabelRadio>
            ))}   
          </div>
          <div>
            <h4>Size:</h4>
              
             {options[1].values.map((value) => (
              <LabelBtn key={Math.random() * 10}>
                <input type="radio" value={value} name="size" onChange={inputValueChange} />
                {value}
              </LabelBtn>
            ))} 
          </div>
          <FormFooter>
            <div>
              <button type="button" onClick={() => setCompra({
                ...compra,
                amount : compra.amount + 1, totalCompra : compra.totalCompra + price/10
              })}>
                +
              </button>
              <p>{compra.amount}</p>
              

              <button type="button" onClick={() => setCompra({
                ...compra,
                amount : compra.amount - 1,  totalCompra : compra.totalCompra - price
              })}>
                -
              </button>
            </div>
            <p>Total price: $ {compra.totalCompra}</p>
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
