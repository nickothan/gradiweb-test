import styled from "styled-components"

export const Contenedor = styled.div`
  display: grid;

  grid-template-columns: 3fr 4fr;
  margin: 20px auto;
  max-width: 1024px;

  @media (max-width: 768px) {

  }
  @media (max-width: 425px) {
    grid-template-columns: 1fr;
  }
`
export const Contenido = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 30px;

  form {
    margin-top: 20px;
    display: flex;
    flex-direction: column;
   

    div {
      padding: 10px ;
      &:nth-child(1) {
        
        padding-bottom: 20px ;
        border-top: 1px solid #000;
        border-bottom: 1px solid #000;
      }
      &:nth-child(2) {

        padding-bottom: 20px ;
        border-bottom: 1px solid #000;

        div{
          padding: 0;
          display: flex;
          gap: 10px;

          border: none;
        }
      }
      &:nth-child(3) {
        padding: 20px 10px;
        
        div {
          padding: 10px ;
          border: 1px solid #5e5e5e;
          border-radius: 5px;
          
        }
      }
    }
  }
`

export const Images = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 10px;

  img {
    width: 100px;
    height: 100px;


    &:first-child {
      width: 90%;
      height: auto;
      
    }
  }
`
export const FormFooter = styled.div`
  display: flex;
  justify-content: space-between;

  div {
    display: flex;
    justify-content: start;
    gap: 24px;

    button {
      background-color: grey;
      padding: 3px 10px;
      border-radius: 3px;
      box-shadow: 0px 5px 20px -4px #000;
      transition: 0.3s all ease-in-out;

      &:hover {
        box-shadow: 0px 5px 20px -3px #000;
        transform: scale(1.1);
      }

      &:active {
        box-shadow: 0px 5px 20px -5px #000;
        transform: scale(0.9);
      }

    }

     input {
       width: 20px;
     }
  }

  p:last-child {
    font-size: 12px;
    color: grey;
  }
`

export const ButtonsForm = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;

  @media (max-width: 425px){
    grid-template-columns: 1fr ;

  }

  button {
    padding: 7px;

    border-radius: 5px;
    transition: 0.3s all ease-in-out;
    box-shadow: 0px 5px 20px -10px #000;

    &:hover {
      box-shadow: 0px 5px 25px -10px #000;
      transform: scale(1.01);
    }

    &:active {
      box-shadow: 0px 5px 15px -20px #000;
      transform: scale(0.9);
    }

    &:last-child {
      background-color: grey;
    }
  }
`
export const HeadContenido = styled.div`
  span {
    font-size: 16px;
    font-weight: 400;
  }

  p {
    font-size: 28px;
    font-weight: 600;
  }
`

export const LabelRadio = styled.label`
  display: inline-block;
`
export const LabelBtn = styled.label`
  display: block;
  padding: 5px;
  border: 1px solid #000;

  input {
    display: none;
  }
`
