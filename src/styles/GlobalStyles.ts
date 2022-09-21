import styled, { createGlobalStyle } from "styled-components";
import {
  backGroundColor,
  colorGreenDark,
  colorGreenLight,
  colorRedDark,
  colorRedLight,
  colorWhite,
  grey_200,
  grey_300,
  grey_400,
  primary_500,
  textColor,
} from "../config/colors";

export default createGlobalStyle`
  :root {
    // Shadhows
    --shadow-1: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
    --shadow-2: 0 4px 6px -1px rgba(0, 0, 0, 0.1)
    0 2px 4px -1px rgba(0, 0, 0, 0.06);
    --shadow-3: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
    0 4px 6px -2px rgba(0, 0, 0, 0.05);
    --shadow-4: 0 20px 25px -5px rgba(0, 0, 0, 0.1),
    0 10px 10px -5px rgba(0, 0, 0, 0.04);

    // Rest
    --borderRadius: 0.25rem;
    --letterSpacing: 1px;
    --transition: 0.3s ease-in-out all;
    --max-width: 1120px;
    --fixed-width: 600px;

  }

  *{
    margin: 0;
    padding: 0;
    outline: none;
    box-sizing: border-box;
  }

  body {
    font-family: sans-serif;
    background-color: ${backGroundColor};
    color: ${textColor};
  }

  p {
    margin-bottom: 1.5rem;
    max-width: 40em;
  }

  h1,
  h2,
  h3,
  h4,
  h5 {
    margin: 0;
    margin-bottom: 1.4rem;
    font-weight: 400;
    line-height: 1.3;
    text-transform: capitalize;
    letter-spacing: var(--letterSpacing);
  }

  h1 {
    margin-top: 0;
    font-size: 3.052rem;
  }

  h2 {
    font-size: 2.441rem;
  }

  h3 {
    font-size: 1.953rem;
  }

  h4 {
    font-size: 1.563rem;
  }

  h5 {
    font-size: 1.25rem;
  }

  small,
  .text-small {
  font-size: var(--small-text);
  }


  a {
    text-decoration: none;
  }

  ul {
    list-style-type: none;
  }

  .img {
    width: 100%;
    display: block;
    object-fit: cover;
  }

  .btn {

  }

  .btn:hover {

  }

  .alert {
    padding: 0.375rem 0.75rem;
    margin-bottom: 1rem;
    border-color: transparent;
    border-radius: var(--borderRadius);
  }

  .alert-danger {
    color: ${colorRedDark};
    background: ${colorRedLight};
  }
  .alert-success {
    color: ${colorGreenDark};
    background: ${colorGreenLight};
  }

  .location {
    font-size: 1.2rem;
    padding: 1rem;
  }

  ::placeholder {
    font-family: inherit;
    color: ${grey_400};
  }

  .form {
    width: 90vw;
    max-width: var(--fixed-width);
    background: ${colorWhite};
    border-radius: var(--borderRadius);
    box-shadow: var(--shadow-2);
    padding: 2rem 2.5rem;
    margin: 3rem auto;
  }

  .form-label {
    display: block;
    font-size: var(--small-text);
    margin-bottom: 0.5rem;
    text-transform: capitalize;
    letter-spacing: var(--letterSpacing);
  }

  .form-input,
  .form-textarea {
    width: 100%;
    padding: 0.375rem 0.75rem;
    border-radius: var(--borderRadius);
    background: ${backGroundColor};
    border: 1px solid ${grey_200};
  }

  .form-row {
    margin-bottom: 1rem;
  }

  .form-textarea {
    height: 7rem;
  }

  .form-alert {
    color: ${colorRedDark};
    letter-spacing: var(--letterSpacing);
    text-transform: capitalize;
  }

  @keyframes spinner {
    to {
      transform: rotate(360deg);
    }
  }

  .loading {
    width: 6rem;
    height: 6rem;
    border: 5px solid ${grey_400};
    border-radius: 50%;
    border-top-color: ${primary_500};
    animation: spinner 0.6s linear infinite;
  }

  .loading {
    display: flex;
  }

  .title {
    text-align: center;
  }
`;

export const Container = styled.section`
  max-width: var(--max-width);
  max-height: 100vh;
  margin: 0 auto;
`;

export const Loading = styled.div`
  background-color: ${grey_200};
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
