import styled from "styled-components";
import { SectionSubheading, SectionBigHeading } from "~/components";
// Styled elements for the Card go here
export const StyledDescription = styled((props) => <SectionSubheading {...props} />)`
margin: 1.563rem 0 0;
`;
export const StyledTitle = styled.h3`
font-family: Poppins;
  font-size: 1.5rem;
  line-height: 1rem;
  font-weight: 600;
padding:0;
margin-bottom:0;
`
export const StyledParagraph = styled.p`
font-family: Poppins;
  font-size: 1rem;
margin-top:8pt;
//   padding:0;
//   margin:0;
`
export const StyledImageContainer = styled(({ ...props }) => <div {...props} />)`
width: 100%;
height: 100%;
display: flex;
flex-direction:column;
justify-content:center;
// margin-left: auto;
`;

export const StyledCardContainer = styled(({ ...props, cardWidth })).div`
width:${({ cardWidth }) => cardWidth}px;
text-align:left;
display:grid;
grid-template-columns: 64px auto;
padding 0 2rem;
background-color:whitesmoke;
border-radius:6%;
grid-column-gap:20px;
`
export const StyledCardTextContent = styled.div`
margin:.5rem;
`