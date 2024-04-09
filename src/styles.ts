import styled, { createGlobalStyle } from 'styled-components'

//estilização do DOM, ou seja, de toda árvore HTML

// <uniquifier>: Use a unique and descriptive class name
// <weight>: Use a value from 100 to 900

// .inter-<uniquifier> {
//   font-family: "Inter", sans-serif;
//   font-optical-sizing: auto;
//   font-weight: <weight>;
//   font-style: normal;
//   font-variation-settings:
//     "slnt" 0;
//}

const EstiloGlobal = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    font-family: "Inter", sans-serif;
    list-style: none;
  }

  body {
      padding-top: 80px;
      padding-bottom: 80px;

      @media (max-width: 768px) {
        padding-top: 16px;
      }
  }
`

export default EstiloGlobal

// styled é o export default de styled-components
export const Container = styled.div`
  max-width: 1024px;
  width: 100%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 128px auto;
  column-gap: 56px;

  @media (max-width: 768px) {
    max-width: 80%;
    display: block;
  }
`
