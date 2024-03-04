import React from "react";
import styled from "styled-components";
import { PageHero } from "../components";
import aboutImg from "../assets/hero-bcg2.jpeg";

const AboutPage = () => {
  return (
    <main>
      <PageHero title="about" />
      <Wrapper className="page section section-center">
        <img src={aboutImg} alt="nice desk" />
        <article>
          <div className="title">
            <h2>our story</h2>
            <div className="underline"></div>
          </div>
          <p>
            Our story is one of passion and dedication to artisanal excellence.
            With a legacy spanning decades, SaiDeluxe has been crafting bespoke
            furniture to perfection, earning a reputation for unparalleled
            quality and innovation globally. <br /> Founded on the belief that
            everyone deserves a home that reflects their personality and
            lifestyle, we've been transforming spaces with custom furniture
            since our inception. With a legacy of craftsmanship and dedication
            to exceeding customer expectations, we continue to evolve, setting
            new standards in personalized home decor.
          </p>
        </article>
      </Wrapper>
    </main>
  );
};

const Wrapper = styled.section`
  display: grid;
  gap: 4rem;
  img {
    width: 100%;
    display: block;
    border-radius: var(--radius);
    height: 500px;
    object-fit: cover;
  }
  p {
    line-height: 2;
    max-width: 45em;
    margin: 0 auto;
    margin-top: 2rem;
    color: var(--clr-grey-5);
  }
  .title {
    text-align: left;
  }
  .underline {
    margin-left: 0;
  }
  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
  }
`;
export default AboutPage;
