import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/theme/default";
import { Header } from "./components/Header/Index";
import { GlobalStyle } from "./styles/global";
import { Container } from "./App";
import { CardPerfil } from "./components/CardPerfil/Index";
import { Post } from "./components/Post/Index";

export function App() {
  
  return (
    <>
      <ThemeProvider theme={defaultTheme}>
        <GlobalStyle />
        <Header />
        <Container>
          <CardPerfil />
          <Post />
        </Container>
      </ThemeProvider>
    </>
  )
}

