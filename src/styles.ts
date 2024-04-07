import { createGlobalStyle } from 'styled-components'

//estilização do DOM, ou seja, de toda árvore HTML

const EstiloGlobal = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
  }
`

export default EstiloGlobal
