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
  width: 100%;
`;

export const LinkContainer = styled.div`
  height: 380px;
  width: 100%;
  border-radius: 7px;
  overflow: hidden;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  margin: 1em 0;
`;
export const LinkPoster = styled.div`linear-gradient(-45deg, #d1ced1, #8d8b89);
  background-image: linear-gradient(-45deg, #d1ced1, #8d8b89);
  height: 100%;
  width: 100%;
  background-size: cover;
  background-position: center center;
  position: relative;
`;

export const PosterTitle = styled.p`
  position: absolute;
  bottom: 10%;
  left: 5%;
  background-color: rgba(212, 210, 210, 0.7);
  padding: 0.5em;
  border-radius: 10px;
  font-size: 2.5em;
  font-weight: 500;
  color: white;
  text-shadow: 1px 1px 1px #141313;
  box-shadow: 2px 2px 3px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
`;

export const MovieContainer = styled.div`
  width: 100%;
  height: 100vh;
  background-image: linear-gradient(-45deg, rgba(215, 84, 171, 0.78), rgba(253, 114, 58, 0.87));
  display: flex;
  justify-content: space-around;
  align-items: center;
  color: white;
  padding: 1em 0;
  margin: 1em 0;
`;

export const MovieColumn = styled.div`
  margin-left: 10px;
  width: 50%;
`;

export const MoviePoster = styled.div`
  width: 25%;
  height: 60%;
  background-color: transparent;
  position: relative;
`;

export const MovieTitle = styled.h1`
  font-size: 65px;
  margin-bottom: 15px;
`;
export const MovieSubtitle = styled.h4`
  font-size: 35px;
  margin-bottom: 10px;
`;
export const MovieDescription = styled.p`
  font-size: 28px;
`;
