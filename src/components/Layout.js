import { Container, Footer, Header, Main, Section, Subtitle, Title, Wrapper } from './StyledComponents';

export const Layout = ({ children }) => (
  <Wrapper>
    <Container>
      <Header>
        <Title>Apollo 2023</Title>
        <Subtitle>Movies DB on React, Apollo, GraphQL</Subtitle>
      </Header>
      <Main>
        {children}
      </Main>
      <Section>
        <Footer>Assembled by React</Footer>
      </Section>
    </Container>
  </Wrapper>
);
