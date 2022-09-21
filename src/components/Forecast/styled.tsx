import styled from "styled-components";
import { md } from "../../config/responsive";

export const Temperature = styled.div`
  width: 100%;
  padding: 1.5rem;
  font-size: 1.1rem;

  ${md} {
    font-size: 1.8rem;
    padding: 4rem;
  }

  figure {
    display: flex;
    align-items: center;

    div {
      font-size: 1.8rem;
      padding: 0 0.5rem;

      ${md} {
        font-size: 4rem;
        padding: 0 0.5rem;
      }
    }

    img {
      height: 4rem;
      width: 4rem;

      ${md} {
        height: 8rem;
        width: 8rem;
      }
    }

    span {
      font-size: 1rem;
      text-transform: capitalize;
      padding: 0 0.5rem;
    }
  }
`;
