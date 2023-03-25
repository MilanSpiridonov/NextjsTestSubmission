import {
    StyledTitle,
} from "./elements";
export const BriefGenerator = ({ pageTitle, ...props }) => {
    return (
        <StyledTitle>
            {pageTitle}
        </StyledTitle>
    )
}