import { Card } from "lib";

import { Paragraph, Title } from "components";

import transition from "./SlideInLeft.css";

const About = () => {
  return (
    <div
      className={transition.slideInLeft}
      style={{
        animationDelay: "0.5s",
        marginTop: "60px",
      }}
    >
      <Card style={{ padding: "12px", paddingTop: "0", margin: "8px" }}>
        <Title>Welcome on my website !</Title>
        <br />
        <Paragraph style={{ fontSize: "24px" }}>
          Are you looking to enhance your written materials? Whether it's
          captivating stories, engaging articles, compelling dissertations,
          persuasive advertising content, captivating magazines, or professional
          company press releases, you've come to the right place. I offer
          top-notch editing services that cater to individuals, professionals,
          associations, and organizations alike. With my expertise, you can
          elevate your content to new heights. Say goodbye to grammar and
          spelling mistakes, and welcome impeccable writing that resonates with
          your audience. Regardless of your location, be it Paris, France, or
          anywhere in the world, let's collaborate to refine your written works.
          <br />
          <br />
          Remember, "Constructive criticism is an art that nurtures growth." -
          Boris Vian, Acclaimed French Writer, Poet, Lyricist, and Singer
          (1920-1959) "No matter the subject, rise above mediocrity; even the
          simplest style possesses inherent elegance." - Nicolas Boileau,
          Celebrated French Writer and Poet (1636-1711)
        </Paragraph>
      </Card>
    </div>
  );
};

export default About;
