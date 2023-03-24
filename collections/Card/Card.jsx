// The Card to be exported goes here
import Image from 'next/image';
import { StyledParagraph, StyledCardTextContent, StyledTitle, StyledImageContainer, StyledCardContainer } from './elements';
export function Card({ icon, Title, Paragraph }) {
    return (
        <StyledCardContainer>
            <StyledImageContainer>
                <Image layout="responsive" src={icon.src} alt={icon.alt} width={icon.width} height={icon.height} />
            </StyledImageContainer>
            <StyledCardTextContent>
                <StyledTitle>{Title}</StyledTitle>
                <StyledParagraph>{Paragraph}</StyledParagraph>
            </StyledCardTextContent>
        </StyledCardContainer>
    )
}