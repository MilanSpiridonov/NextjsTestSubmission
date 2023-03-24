import Image from 'next/image';
import { Card } from '../../collections/Card'

import {
    StyledTextContainer,
    StyledContainer,
    StyledGetStartedBtn,
    StyledTitle,
    StyledDescription,
    StyledCTAContainer,
    StyledImageContainer,
    StyledContainerWithBackground,
    MainContentGrid,
    CardsContainer
} from "./elements";



export const AgencySelection = ({ video, cards, bgImage, title, description, ctaText, ...props }) => {
    const cardsParams = [
        {
            cardData: cards[0],
            width: '350'//px
        },
        {
            cardData: cards[1],
            width: '380'//px
        },
        {
            cardData: cards[2],
            width: '410'//px
        },
    ]
    return (
        <StyledContainerWithBackground bgImageSrc={bgImage.src} {...props} >
            <StyledTextContainer>
                <StyledTitle>{title}</StyledTitle>
                <StyledDescription>{description}</StyledDescription>
                <MainContentGrid bgImageSrc={bgImage.src} {...props}>
                    <StyledImageContainer>
                        <Image layout="fixed" src={video.src} alt={video.alt} width={video.width} height={video.height} />
                    </StyledImageContainer>
                    <CardsContainer>
                        {/* in index, calculate width of card, by adding ~20px to each next one and pass the width to card */}
                        <Card cardsParams={cardsParams[0]} />
                        <Card cardsParams={cardsParams[1]} />
                        <Card cardsParams={cardsParams[2]} />
                    </CardsContainer>
                </MainContentGrid>
            </StyledTextContainer>
        </StyledContainerWithBackground >

    )
}