import styled from 'styled-components'

// tipagem ou criação de props
type BotaoProps = {
  principal: boolean
  fontSize?: string //tornando o atributo fontSize opcional através da interrogação
}

//Instanciando uma constante Botao que recebe um componente
//estilizado button que é do tipo <BotaoProps>
//Caso a prop principal seja true no elemento sua cor será verde, do contrário será azul
//fontSize opcional, ou seja, caso esteja presente como propriedae do elemento
//terá o valor especificado, caso não esteja o valor padrão será 16px
const Botao = styled.button<BotaoProps>`
  background-color: ${(props) => (props.principal ? 'green' : 'blue')};
  font-size: ${(props) => props.fontSize || '16px'};
`
//efeito cascata do CSS sobrescrevendo a estilização da prop principal
//como se fosse uma herança do objeto Botao que é uma classe mais específica
//e nela se faz as configurações
//Estilizando a tag span dentro do elemento<BotaoPerigo>
const BotaoPerigo = styled(Botao)`
  background-color: red;
  color: #fff;

  span {
    text-decoration: line-through;
  }
`

function Teste() {
  return (
    <>
      <Botao fontSize="18px" principal>
        Enviar
      </Botao>
      <Botao principal={false}>Cancelar</Botao>
      <BotaoPerigo as="a" principal>
        <span>Não clique aqui!</span>
      </BotaoPerigo>
    </>
  )
}

export default Teste
