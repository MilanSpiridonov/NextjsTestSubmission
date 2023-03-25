import { BriefGenerator } from "../sections";

export default function Home() {

    const briefProps = {
        pageTitle: 'Brief Generator'
    }

    return (
        <>
            <BriefGenerator {...briefProps} />
        </>
    )
}