import styled from "styled-components"

export const Contenedor = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`
export const Images = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 20px;

  img {
    width: 100px;
    height: 100px;

    &:first-child {
      width: 100%;
      height: auto;
    }
  }
`
export const Contenido = styled.div``
