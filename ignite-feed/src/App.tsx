import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/theme/default";
import { Header } from "./components/Header/Index";
import { GlobalStyle } from "./styles/global";
import { Container } from "./App";
import { CardPerfil } from "./components/CardPerfil/Index";
import { Post } from "./components/Post/Index";
import { postsDefault } from "./util/PostsDefault";

export function App() {

  const posts = postsDefault

  return (
    <>
      <ThemeProvider theme={defaultTheme}>
        <GlobalStyle />
        <Header />
          <Container>
            <CardPerfil />
            <main>
              {posts.map(post=>{
                return (
                  <Post 
                    key={post.id}
                    author={post.author}
                    content={post.content}
                    id={post.id}
                    publishedAt={post.publishedAt}
                  />
                )
              })}
            </main>
          </Container>
      </ThemeProvider>
    </>
  )
}

