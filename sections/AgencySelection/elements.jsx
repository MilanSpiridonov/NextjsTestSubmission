import exp from "constants";
import styled from "styled-components";
import { Button, SectionContainer, SectionBigHeading, SectionSubheading } from "~/components";

export const StyledContainer = styled(({ height, ...props }) => <SectionContainer {...props} />)`
align-items: center;
`;
export const StyledContainerWithBackground = styled(({ bgImageSrc, height, ...props }) => <SectionContainer style={{
  backgroundImage: `url(${bgImageSrc})`

}} {...props} />)`
display:flex;
justify-content:center;
height:100vh;
text-align:center;
`
export const StyledGetStartedBtn = styled((props) => <Button {...props} variant="contained" color="main" />)`
margin - top: 4.375rem;
padding - top: 0;
padding - bottom: 0;
`;

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

export const StyledCTAContainer = styled(({ ...props }) => <div {...props} />)`
display: flex;
`;

export const StyledImageContainer = styled(({ ...props }) => <div {...props} />)`
width: 100%;
height: 100%;
margin-left: auto;
`;

export const FlexContainer = styled(({ ...props }) => <div {...props} />)`
`

export const MainContentGrid = styled(({ ...props }) => <div {...props} />)`
display:grid;
grid-template-columns:auto auto;
gap:4rem;
`
export const CardsContainer = styled(({ ...props }) => <div {...props} />)`
display:flex;
flex-flow:column;
gap:2rem;
margin:20px 0;
`