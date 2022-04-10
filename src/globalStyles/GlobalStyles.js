import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`

/* custom scroll */

body::-webkit-scrollbar {
  width: 0.6rem;
}

body::-webkit-scrollbar-track {
  box-shadow: 5px 5px 5px -5px rgba(34, 60, 80, 0.2) inset;
  background-color: transparent;
  border-radius: 1rem;
}

body::-webkit-scrollbar-thumb {
  border-radius: 1rem;
  background: rgb(115, 117, 117);
  background: linear-gradient(264deg, rgba(115, 117, 117, 1) 0%, rgba(76, 74, 74, 1) 96%);
  transition: rgb(115, 117, 117) .2s linear;
}

body::-ms-scrollbar {
  width: 0.6rem;
}

body::-ms-scrollbar-track {
  box-shadow: 5px 5px 5px -5px rgba(34, 60, 80, 0.2) inset;
  background-color: transparent;
  border-radius: 1rem;
}

body::-ms-scrollbar-thumb {
  border-radius: 1rem;
  background: rgb(115, 117, 117);
  background: linear-gradient(264deg, rgba(115, 117, 117, 1) 0%, rgba(76, 74, 74, 1) 96%);
}

body::-moz-scrollbar {
  width: 0.6rem;
}

body::-moz-scrollbar-track {
  box-shadow: 5px 5px 5px -5px rgba(34, 60, 80, 0.2) inset;
  background-color: transparent;
  border-radius: 1rem;
}

body::-moz-scrollbar-thumb {
  border-radius: 1rem;
  background: rgb(115, 117, 117);
  background: linear-gradient(264deg, rgba(115, 117, 117, 1) 0%, rgba(76, 74, 74, 1) 96%);
}

*,
*::before,
*::after,
h1,h2,h3,h4,h5,h6 {
    margin: 0;
    padding: 0;
}

h1,h2,h3,h4,h5,h6 {
    display: inline-block;
}

html {
    font-size: 10px;
}

body {
    background-color: #000000;
    color: white;
    margin: 0;
    padding: 0;
    font-size: 16px;
    overflow-x: hidden;
    font-family: 'Source Sans Pro', sans-serif;
}

.container {
  max-width: 144rem;
  margin: 0 auto;
  padding: 1rem;
}
`

export default GlobalStyles;