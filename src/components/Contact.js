import React from "react";
import styled from "styled-components";

const Contact = () => {
  return (
    <Wrapper>
      <div className="section-center">
        <h3>Join our newsletter for an exclusive 20% discount</h3>
        <div className="content">
          <p>
            Stay updated with the latest trends, design inspirations, and
            exclusive offers from Saideluxe. Unlock the luxury of bespoke
            furniture tailored just for you, ensuring your space reflects your
            unique style impeccably. Subscribe now and elevate your living
            experience!
          </p>
          <form className="contact-form">
            <input
              type="email"
              className="form-input"
              placeholder="enter email"
            />
            <button type="submit" className="submit-btn">
              subscribe
            </button>
          </form>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 5rem 0;
  h3 {
    text-transform: none;
  }
  p {
    line-height: 2;
    max-width: 45em;
    color: var(--clr-grey-5);
  }
  .section-center {
    width: 90vw;
    margin: 0 auto;
    max-width: 1170px;
  }
  .content {
    width: 100%;
    margin-top: 2rem;
  }
  .contact-form {
    display: flex;
    gap: 0; /* Remove gap between form input and button */
  }

  .form-input {
    font-size: 1rem;
    padding: 0.5rem 1rem;
    border: 2px solid var(--clr-black);
    width: 100%;
    border-top-left-radius: var(--radius);
    border-bottom-left-radius: var(--radius);
  }

  .submit-btn {
    background: var(--clr-primary-5);
    text-transform: capitalize;
    letter-spacing: var(--spacing);
    cursor: pointer;
    transition: var(--transition);
    color: var(--clr-black);
    border: none;
    padding: 0.5rem 1rem;
    border-top-right-radius: var(--radius);
    border-bottom-right-radius: var(--radius);
  }
  .submit-btn:hover {
    color: var(--clr-white);
  }

  @media (min-width: 992px) {
    .content {
      display: grid;
      grid-template-columns: 1fr 1fr;
      align-items: center;
      gap: 8rem;
      margin-top: 2rem;
    }
    p {
      margin-bottom: 0;
    }
  }
  @media (min-width: 1280px) {
    padding: 15rem 0;
  }
`;

export default Contact;
