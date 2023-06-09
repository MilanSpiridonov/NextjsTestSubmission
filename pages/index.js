import { Hero, AgencySelection } from "../sections";

const heroProps = {
  image: { src: "/img/heroimg.png", alt: "", width: 1000, height: 1680 },
  title: "Agency procurement, outsourced.",
  description: "Start the process here",
  ctaText: "Start",
};

const card1 = {
  icon: { src: "/img/brief_ico.png", alt: "", width: '64', height: '64' },
  Title: 'Brief',
  Paragraph: <>Complete <b>brief writing or simple guidance</b> on what to include, we've got you covered.</>,
  width: '350',//px
  link: '/briefgenerator'
}
const card2 = {
  icon: { src: "/img/search_ico.png", alt: "", width: '64', height: '64' },
  Title: 'Search',
  Paragraph: <>In-depth agency search covering; <b>criteria matching</b>, door knocking and due-dilligence vetting.</>,
  width: '380',//px
  link: '/404'
}
const card3 = {
  icon: { src: "/img/pitch_ico.png", alt: "", width: '64', height: '64' },
  Title: 'Pitch',
  Paragraph: <>Comprehensive <b>pitch management</b>, including comms, diary management and pitch hosting.</>,
  width: '410',//px
  link: '/404'
}
const agencyVideo = { src: "/img/video.png", alt: "", width: '358', height: '555' }
const agencySelectionProps = {
  video: agencyVideo,
  title: "Managed agency selection",
  description: "Strengthen your onboarding process",
  bgImage: { src: "/img/background.png", alt: "", width: '100vw', height: '100vh' },
  cards: [
    card1,
    card2,
    card3
  ]
};
export default function Home() {
  return (
    <>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        />
      </head>
      <div>
        <Hero {...heroProps} />
        <AgencySelection {...agencySelectionProps} />
        {/** Other sections */}
      </div>
    </>
  );
}
