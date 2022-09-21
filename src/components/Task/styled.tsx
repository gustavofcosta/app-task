import styled from "styled-components";
import {
  colorGreenDark,
  colorGreenLight,
  colorRedDark,
  grey_200,
} from "../../config/colors";
import { md } from "../../config/responsive";

export const Wrapper = styled.li`
  display: flex;
  align-items: center;
  height: 2.8rem;
  padding: 1px;
  font-size: 1.2rem;
  justify-content: space-between;
  padding: 0 1rem;
  border: 0.1rem solid ${grey_200};
  border-left: 0.3rem solid ${colorGreenDark};

  ${md} {
    font-size: 1.8rem;
    border-left: 0.5rem solid ${colorGreenDark};
  }

  div {
    display: flex;
  }
`;

export const IsDone = styled.div`
  margin-right: 1rem;
  cursor: pointer;

  :hover {
    color: ${colorGreenDark};
  }
`;

export const Remove = styled.div`
  cursor: pointer;

  :hover {
    color: ${colorRedDark};
  }
`;
