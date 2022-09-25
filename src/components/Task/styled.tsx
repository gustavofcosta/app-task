import styled from "styled-components";
import {
  colorGreenDark,
  colorGreenLight,
  colorRedDark,
  grey_200,
} from "../../config/colors";
import { md } from "../../config/responsive";

export const Wrapper = styled.li<{ isCompleted: boolean }>`
  display: flex;
  align-items: center;
  height: 2.8rem;
  padding: 1px;
  font-size: 1.2rem;
  justify-content: space-between;
  padding: 0 1rem;
  border: 0.1rem solid ${grey_200};
  border-left: 0.3rem solid
    ${({ isCompleted }) => (isCompleted ? colorRedDark : colorGreenDark)};

  ${md} {
    font-size: 1.8rem;
    border-left: 0.5rem solid
      ${({ isCompleted }) => (isCompleted ? colorRedDark : colorGreenDark)};
  }

  div {
    display: flex;
    text-transform: lowercase;
  }

  .completed {
    text-decoration: line-through;
  }
`;

export const IsDone = styled.div<{ isCompleted: boolean }>`
  margin-right: 1.4rem;
  font-size: 1.4rem;
  cursor: pointer;

  ${md} {
    font-size: 1.9rem;
  }

  :hover {
    color: ${({ isCompleted }) =>
      isCompleted ? colorRedDark : colorGreenDark};
  }
`;

export const Remove = styled.div`
  font-size: 1.4rem;

  ${md} {
    font-size: 1.9rem;
  }

  cursor: pointer;

  :hover {
    color: ${colorRedDark};
  }
`;
