// The Card to be exported goes here
import Image from 'next/image';
import { StyledParagraph, StyledCardTextContent, StyledTitle, StyledImageContainer, StyledCardContainer } from './elements';
export function Card({ cardsParams }) {
    return (
        <StyledCardContainer width={cardsParams.width}>
            <StyledImageContainer>
                <Image layout="responsive" src={cardsParams.cardData.icon.src} alt={cardsParams.cardData.icon.alt} width={cardsParams.cardData.icon.width} height={cardsParams.cardData.icon.height} />
            </StyledImageContainer>
            <StyledCardTextContent>
                <StyledTitle>{cardsParams.cardData.Title}</StyledTitle>
                <StyledParagraph>{cardsParams.cardData.Paragraph}</StyledParagraph>
            </StyledCardTextContent>
        </StyledCardContainer>
    )
}