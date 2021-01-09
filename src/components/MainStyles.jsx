import styled, { createGlobalStyle } from 'styled-components'

const TopTitle = styled.h2`
  font-size: 2rem;
  color: ${(props) => props.color || '#000'};

  text-align: center;
  padding: 1.5rem 0;
`

const HeadTitle = styled.h3`
  font-size: 1.625rem;
  color: ${(props) => props.color || '#000'};
`

const SlideTitle = styled(TopTitle)`
  color: ${(props) => props.color || '#000'};
`

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body {
    padding: 0;
    margin: 0;
    font-family: ${(props) => props.font};
  }

  h1,
  h2,
  h3,
  h4,
  p {
    margin: 0;
  }

  ul, li {
    padding: 0;
    margin: 0;
    list-style: none;
  }
`

export { TopTitle, HeadTitle, SlideTitle, GlobalStyle }
