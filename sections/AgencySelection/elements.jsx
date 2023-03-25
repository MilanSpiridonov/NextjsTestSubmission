import styled from "styled-components";
import { SectionContainer, SectionBigHeading, SectionSubheading } from "~/components";

export const StyledContainerWithBackground = styled(({ bgImageSrc, height, ...props }) => <SectionContainer {...props} />)`
  display:flex;
  justify-content:center;
  height:100vh;
  text-align:center;
  margin: 100px 0;
`
export const StyledTitle = styled((props) => <SectionBigHeading {...props} />)`
  margin: 0;
  color: black;
`;

export const StyledDescription = styled((props) => <SectionSubheading {...props} />)`
  margin: 0 0 3rem 0;
`;

export const StyledTextContainer = styled(({ ...props }) => <div {...props} />)`
  color: black;
  width: 30 %;
  font-family: sans - serif;
`;

export const StyledImageContainer = styled(({ ...props }) => <div {...props} />)`
  width: 100%;
  height: 100%;
  margin-left: auto;
`;

export const FlexContainer = styled(({ ...props }) => <div {...props} />)`
`

export const MainContentGrid = styled(({ bgImageSrc, ...props }) => <div {...props} style={{
  backgroundImage: `url(${bgImageSrc})`,
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'contain',
}} />)`
  display:grid;
  grid-template-columns:auto auto;
  gap:4rem;
  width:100vw;
  justify-content:center;
  
  @media (max-width: 1023px) {
    grid-template-columns: auto;
  }
`
export const CardsContainer = styled(({ ...props }) => <div {...props} />)`
  display:flex;
  flex-flow:column;
  gap:2rem;
  margin:20px 0;
`