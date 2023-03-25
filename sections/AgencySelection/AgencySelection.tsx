import Image from 'next/image';
import { Card } from '../../collections/Card'

import {
    StyledTextContainer,
    StyledTitle,
    StyledDescription,
    StyledImageContainer,
    StyledContainerWithBackground,
    MainContentGrid,
    CardsContainer
} from "./elements";



export const AgencySelection = ({ video, cards, bgImage, title, description, ctaText, ...props }) => {
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
                        <Card cardsParams={cards[0]} />
                        <Card cardsParams={cards[1]} />
                        <Card cardsParams={cards[2]} />
                    </CardsContainer>
                </MainContentGrid>
            </StyledTextContainer>
        </StyledContainerWithBackground >

    )
}