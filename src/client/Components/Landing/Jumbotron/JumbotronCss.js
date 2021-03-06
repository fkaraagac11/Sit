import styled from "styled-components";

export const Section = styled.section`
  width: 60%;
  margin: 120px auto 0px auto;
  @media (max-width: 700px) {
    width: 80%;
    margin: 60px auto 0px auto;
  }
`;

export const Title = styled.h1`
  font-size: 3rem;
  color: white;
  font-family: "Quicksand", sans-serif;
  @media (max-width: 700px) {
    font-size: 1.5rem;
  }
`;

export const Paragraph = styled.p`
  font-size: 1.4rem;
  color: white;
  @media (max-width: 700px) {
    font-size: 1rem;
  }
`;

export const Button = styled.button`
  background: none;
  color: white;
  width: 170px;
  height: 50px;
  font-size: 1.3rem;
  outline: none;
  cursor: pointer;
  border: 1px solid white;
  &:hover {
    color: black;
    background: white;
  }
  @media (max-width: 700px) {
    width: 120px;
    height: 40px;
    font-size: 1rem;
  }
`;

export const Info = styled.p`
  color: white;
  font-size: 1rem;
`;

export const Link = styled.a`
  color: white;
  font-size: 1rem;
`;
