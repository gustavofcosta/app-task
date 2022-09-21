import styled from "styled-components";
import {
  dayColor,
  grey_300,
  nightColor,
  primary_400,
  primary_500,
  secondary_200,
  secondary_300,
  textColor,
} from "../../config/colors";
import { md } from "../../config/responsive";

export const Wrapper = styled.div<{ isDayTime: boolean }>`
  background-color: ${({ isDayTime }) => (isDayTime ? dayColor : nightColor)};
  color: ${({ isDayTime }) => (isDayTime ? textColor : grey_300)};
  padding-bottom: 1.5rem;

  nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 2rem;

    ${md} {
      padding: 1rem 4rem;
    }

    div {
      font-size: 1.5rem;

      ${md} {
        font-size: 2.5rem;
      }
    }

    button {
      height: 3rem;
      width: 3rem;
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 1.2rem;
      border: none;
      background-color: ${primary_500};

      :hover {
        background-color: ${primary_400};
        cursor: pointer;
        transform: scale(1.1);
      }

      ${md} {
        height: 4.5rem;
        width: 4.5rem;
        font-size: 2rem;
      }
    }
  }
`;

export const Actives = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.6rem;
  font-size: 1rem;
  text-transform: uppercase;
  border-radius: 1rem;
  width: 200px;
  padding: 0.4rem;
  margin-left: 2rem;
  background-color: rgba(207, 207, 207, 0.314);
  -webkit-backdrop-filter: blur(10px);
  backdrop-filter: blur(10px);

  ${md} {
    margin-left: 5rem;
    width: 250px;
    font-size: 1.2rem;
  }
`;

export const DayOfTheWeek = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
