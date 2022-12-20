import { Html, Head, Main, NextScript } from 'next/document'
import styled, { ThemeProvider } from "styled-components"

const theme = {
  bg: "#EFF5F5",
  text: "#497174",
  border: "#D6E4E5",
  error: "#EB6440",
}

export default function Document() {
  return (
    <ThemeProvider theme={theme}>
      <Html lang="en">
        <Head />
        <Wrapper>
          <Main />
          <NextScript />
        </Wrapper>
      </Html>
    </ThemeProvider>
  )
}

const Wrapper = styled.body`
  font-size: 30px;
  background-color: ${({ theme }) => theme.bg};
  color: ${({ theme }) => theme.text};
`