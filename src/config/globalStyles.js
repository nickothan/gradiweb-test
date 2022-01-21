import { createGlobalStyle } from "styled-components"

export const GlobalStyles = createGlobalStyle`
*{
  margin: 0;
	padding: 0;
	box-sizing: border-box;
	list-style: none;
	text-decoration: none;
	border: none;
	outline: none;
	font: inherit;
  font-size: 18px;
	font-family: ${({ theme }) =>
    theme.fonts.primary ? theme.fonts.primary : "Roboto"}, sans-serif;
	vertical-align: baseline;
}

article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section, div, button {
	display: block;
}

ol, ul {
	list-style: none;
}

li {
	font-weight: 600;
}

blockquote, q {
	quotes: none;
}

blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}

table {
	border-collapse: collapse;
	border-spacing: 0;
}

h1 {
	font-size: 50px;
	font-weight: 600;

	@media (max-width: 425px){
      font-size: 42px;
    }
}

h2 {
	font-size: 40px;
	font-weight: 600;
	margin: 20px 0;

	@media (max-width: 425px){
      font-size: 32px;
    }
}

h3 {
	margin: 15px 0;
	font-size: 30px;
	font-weight: 600;

	@media (max-width: 425px){
    font-size: 22px;
  }
}
h4 {
	margin: 10px 0;
	font-size: 22px;
	font-weight: 600;


	@media (max-width: 425px){
    font-size: 18px;
  }
}

p{
	font-size: 18px;
  font-weight: 500;
  line-height: 1.3;
	
	@media (max-width: 425px) {
		font-size: 14px;
    
  }
}
`
