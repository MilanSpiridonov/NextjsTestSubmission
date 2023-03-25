import styled from "styled-components";

export const StyledImageContainer = styled(({ ...props }) => <div {...props} />)`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction:column;
  justify-content:center;
`;

export const StyledCardContainer = styled.div`
  width: ${({ width }) => width}px;
  text-align: left;
  display: grid;
  grid-template-columns: 64px auto;
  padding: 0 2rem;
  background-color: whitesmoke;
  border-radius: .5rem;
  grid-column-gap: 20px;
  &:hover {
    border: 2px solid dodgerblue;
    cursor: pointer;
  }
  

  // @media (max-width: 1023px) {
  //   // width: ${({ width }) => width}px;
  //   max-width: 70vw;
  }
`;

export const StyledTitle = styled.h3`
  font-family: Poppins;
  font-size: 1.5rem;
  line-height: 1rem;
  font-weight: 600;
  padding:0;
  margin-bottom:0;
  ${StyledCardContainer}:hover & {
  color: dodgerblue;
  text-decoration:underline;
  }
`


export const StyledParagraph = styled.p`
  font-family: Poppins;
  font-size: 1rem;
  margin-top:8pt;
`

export const StyledCardTextContent = styled.div`
  margin: .5rem;
`