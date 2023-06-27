import styled from "styled-components";

import { Logo, LinkButton } from "../components";

import figures from "../assets/images/figures.svg";

export function Home() {
  return (
    <Wrapper>
      <Navigation>
        <Logo />
      </Navigation>
      <Body>
        <TextContent>
          <Info>
            <Title>
              Modern <span>job</span> tracking
            </Title>
            <Subtitle>
              Find your next creative gig with <span>Jobify</span>
            </Subtitle>
          </Info>
          <LinkButton to="/dashboard">Login / Register</LinkButton>
        </TextContent>
        <Figures src={figures} alt="standing-human-figures" />
      </Body>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  height: 100vh;
  max-width: var(--max-width);
  width: var(--fluid-width);
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Navigation = styled.nav`
  height: var(--nav-height);
`;

const Body = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 50px;
  padding-bottom: 200px;
`;

const TextContent = styled.div`
  span {
    color: var(--primary-600);
  }
`;

const Info = styled.div`
  margin-bottom: 3rem;
`;

const Title = styled.h1``;

const Subtitle = styled.p`
  font-size: 1.2rem;
`;

const Figures = styled.img`
  max-width: 600px;
`;
