import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  flex-shrink: 0;
`;

export const Section = styled.section`
  max-width: 80%;
  width: 100%;
  margin: 0 auto;
  //padding: 1em 0;
`

export const Header = styled.header`
  background-image: linear-gradient(-45deg, #d754ab, #fd723a);
  height: 140px;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 0.5em 0;
`;

export const Title = styled.h1`
  font-size: 60px;
  font-weight: 600;
  margin-bottom: 20px;
`;

export const Subtitle = styled.h3`
  font-size: 35px;
`;

export const Loading = styled.div`
  font-size: 18px;
  opacity: 0.5;
  font-weight: 500;
  margin-top: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
  width: 100%;
`;

export const Footer = styled.footer`
  flex: 0;
  padding: 1em 0;
`;

export const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: stretch;
`;

export const Main = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

export const Error = styled.div`
  font-size: 18px;
  font-weight: 500;
  margin-top: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  //flex: 1;
  width: 100%;
`;

export const MovieWrapper = styled.div`
  padding: 1em 0;
`;
