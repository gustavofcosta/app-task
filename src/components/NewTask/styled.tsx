import styled from "styled-components";
import { colorBlack, grey_800 } from "../../config/colors";

export const Wrapper = styled.div<{ isModal: boolean }>`
  display: ${({ isModal }) => (isModal ? "block" : "none")};
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: 99;
  backdrop-filter: blur(5px);
  color: ${grey_800};
  font-size: 1.4rem;
  transition: var(--transition);
`;
