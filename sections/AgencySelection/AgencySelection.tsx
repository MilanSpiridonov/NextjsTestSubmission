import { Card } from '../../collections/Card'

import {
    StyledTextContainer,
    StyledContainer,
    StyledGetStartedBtn,
    StyledTitle,
    StyledDescription,
    StyledCTAContainer,
    StyledImageContainer,
    StyledContainerWithBackground
} from "./elements";



export const AgencySelection = ({ cards, bgImage, title, description, ctaText, ...props }) => {
    return (
        <StyledContainerWithBackground bgImageSrc={bgImage.src} {...props} >
            
            <StyledTextContainer>
                <StyledTitle>{title}</StyledTitle>
                <StyledDescription>{description}</StyledDescription>
                <Card {...cards[0]} />
            </StyledTextContainer>
        </StyledContainerWithBackground >

    )
}