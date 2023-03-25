// The Card to be exported goes here
import Image from 'next/image';
import Link from "next/link";  
import { StyledParagraph, StyledCardTextContent, StyledTitle, StyledImageContainer, StyledCardContainer } from './elements';

export function Card({ cardsParams }) {
    console.log(cardsParams)
    return (
        <Link href={cardsParams.link}>
            <StyledCardContainer {...cardsParams} >
                <StyledImageContainer>
                    <Image layout="responsive" src={cardsParams.icon.src} alt={cardsParams.icon.alt} width={cardsParams.icon.width} height={cardsParams.icon.height} />
                </StyledImageContainer>
                <StyledCardTextContent>
                    <StyledTitle>{cardsParams.Title}</StyledTitle>
                    <StyledParagraph>{cardsParams.Paragraph}</StyledParagraph>
                </StyledCardTextContent>
            </StyledCardContainer>
        </Link>
    )
}