import React from "react";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Link from "@material-ui/core/Link";
import pdf from "../static/docs/Calder_Marshall_Resume.pdf";
import ATL from "../static/images/atlanta-united-fc.svg";
import OUT from "../static/images/outkast.png";
import SEAL from "../static/images/seal.png";
import BRAVES from "../static/images/braves.png";

export default function AboutContainer() {
  return (
    <Container style={{ padding: "0 5px" }} maxWidth={false}>
      <div
        style={{
          backgroundColor: "#ededed",
          borderRadius: 10,
          padding: 15,
        }}
      >
        <Typography variant="h6" paragraph align="left">
          About Me
        </Typography>
        <Typography paragraph variant="subtitle1">
          Hey, I'm Calder, a Web Engineer at{" "}
          <Link target="none" href="https://www.wahoofitness.com/">
            Wahoo Fitness
          </Link>{" "}
          in Atlanta.
        </Typography>
        <Typography paragraph>
          Most of my career has been spent writing front end Javascript
          and React.  At Wahoo, I am currently in a majority ruby on rails full stack role.    
          I advocate for, and prefer the use of modern Javascript
          features, and the Ecmascript syntax. Working in our MVC rails app at Wahoo has certainly strengthened my skills in object oriented programming.
          Most recently at Wahoo, I've been working with some cool tools including Bitbucket CI/CD, AWS
          Lambda, PubSub, and SonarQube.
        </Typography>
        <Typography paragraph>
          I support and believe in unit testing. I've held roles where
          developers are responsible for maintaining quality, and I've also
          worked with Quality Assurance departments. I'm also comfortable
          supporting applications in older, less compliant browsers. At
          Sharecare, I played a large part in updating the Health Profile
          section of their Web Application to meet{" "}
          <Link
            target="none"
            href="https://www.w3.org/WAI/standards-guidelines/wcag/"
          >
            accesibility standards
          </Link>
          .
        </Typography>
        <Typography paragraph>
          My programming career started at{" "}
          <Link target="none" href="https://www.digitalcrafts.com/">
            Digital Crafts
          </Link>{" "}
          in Buckhead, February of 2017.
        </Typography>
        <Typography paragraph>
          Want to learn more about my qualifications and experience?
          <br />
          Take a look at my{" "}
          <Link target="none" href={pdf}>
            resume
          </Link>
          .
        </Typography>
        <Typography paragraph>
          I am truly a problem solver at heart, which lends aptitude towards my
          skills as a developer. Outside of work, I spend hours tackling more
          physical engineering challenges. Mainly working on cars, bicycles, and
          motorbikes.
        </Typography>
        <Typography paragraph>
          I've got more time invested in that Chevy Van than I'd care to admit.
          I have been neglecting using my GoPro, but there is one video of my
          friend and I putting on a new door{" "}
          <Link
            target="none"
            href="https://www.youtube.com/channel/UC6tErm8Mz7xarxacuMcIEkg"
          >
            here
          </Link>
          .
        </Typography>
      </div>
      <div
        style={{
          backgroundColor: "#ededed",
          borderRadius: 10,
          padding: 15,
          margin: "20px 0px",
        }}
      >
        <img
          style={{ margin: "0px 5px" }}
          src={SEAL}
          alt="City Of Atlanta Seal"
          height="50"
          width="50"
        />
        <img
          style={{ margin: "0px 5px" }}
          src={ATL}
          alt="Atlanta United"
          height="50"
          width="50"
        />
        <img
          style={{ margin: "0px 5px" }}
          src={OUT}
          alt="Outkast"
          height="50"
          width="74"
        />
        <img
          style={{ margin: "0px 5px" }}
          src={BRAVES}
          alt="Atlanta Braves"
          height="50"
          width="50"
        />

        <Typography style={{ padding: "10px 0px" }} variant="h6">
          Atlanta, GA
        </Typography>
        <Typography paragraph>
          I love the outdoors, but this city has my heart.
        </Typography>
      </div>
    </Container>
  );
}
