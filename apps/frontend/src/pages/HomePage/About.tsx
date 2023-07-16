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
        <Title>Bonjour a tous !</Title>
        <br />
        <Paragraph style={{fontSize: "24px"}} >
          Pour vos récits, articles, mémoires, supports publicitaires,
          magazines, presse d’entreprise, sites Internet..., particuliers,
          professionnels, associations, collectivités, pensez à la correction
          professionnelle ! Moins cher et moins chronophage qu’un stage de
          formation en orthographe, plus concret que des séances de coaching
          orthographique, plus fiable qu’un correcteur informatique…, avec la
          correction professionnelle, améliorez progressivement votre niveau,
          tout en éradiquant tout de suite les erreurs. De Paris, de France, de
          n’importe où dans le monde, écrivez-moi ! <br /> <br />« La critique,
          art aisé, se doit d’être constructive. » Boris Vian, écrivain, poète,
          parolier et chanteur français (1920-1959) « Quoi que vous écriviez,
          évitez la bassesse ; le style le moins noble a pourtant sa noblesse. »
          Nicolas Boileau, écrivain et poète français (1636-1711)
        </Paragraph>
      </Card>
    </div>
  );
};

export default About;
