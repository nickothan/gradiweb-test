//* Import styles
import { Contenedor, Images, Contenido } from "./styles"

export default function Item({
  images = [],
  options = [],
  title,
  price,
  compare_at_price,
  ...args
}) {
  console.log(args)
  return (
    <Contenedor>
      <Images>
        <img />
        <img src="" alt="" />
        <img src="" alt="" />
        <img src="" alt="" />
      </Images>

      <Contenido>
        <div>
          <span></span>
          <h2>{title}</h2>
          <p>
            $ {price} <span>$ {compare_at_price}</span>
          </p>
        </div>
        <form>
          <div>
            <h4>Color:</h4>
            {options[0].values.map((value) => (
              <label>
                <input type="radio" value={value} name="color" />
                {value}
              </label>
            ))}
          </div>
          <div>
            <h4>Size:</h4>
            {options[1].values.map((value) => (
              <label key={Math.random() * 10}>
                <input type="radio" value={value} name="color" />
                {value}
              </label>
            ))}
          </div>
          <div>
            <div>
              <button type="button">+</button>
              <input type="number" name="contador" />
              <button type="button">-</button>
            </div>
            <p>Total price: #</p>
          </div>

          <button type="button">Agregar a favoritos</button>
          <button type="submit">Agregar al carrito</button>
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
