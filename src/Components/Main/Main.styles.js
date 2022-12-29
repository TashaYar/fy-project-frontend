import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  .row {
    display: flex;
    width: 100%;
    justify-content: center;
  }
`;

export const LeftColumn = styled.div`
  width: 55%;
  .innerCont {
    width: 60%;
    display: flex;
    flex-direction: column;
    margin-left: auto;
    margin-right: 4em;
    .headerRow {
      display: flex;
      justify-content: space-between;
      align-items: center;

      img {
        height: 8em;
        width: auto;
      }
      .btns-container {
        display: flex;
        justify-content: center;
        gap: 1em;
        button {
          border: none;
          outline: none;
          height: 3em;
          padding-inline: 2em;
          cursor: pointer;
          font-weight: 600;
          font-size: 1em;
        }
        .login {
          background-color: ${(props) => props.theme.colorSecondary};
          color: ${(props) => props.theme.colorTertiary};
          &:hover {
            color: ${(props) => props.theme.colorPrimary};
          }
        }
        .signup {
          background-color: ${(props) => props.theme.colorTertiary};
          color: #fff;
        }
      }
    }

    .titleRow {
      display: flex;
      flex-direction: column;
      width: 100%;
      align-items: flex-start;
      padding-top: 1rem;
      h1 {
        font-size: 2.5rem;
        margin: 0;
      }
      p {
        font-size: 1.5rem;
        color: gray;
      }
    }

    .searchrow {
      display: flex;
      width: 100%;
      padding-top: 1rem;

      button {
        width: 60%;
        cursor: pointer;
        font-size: 1rem;
        font-weight: 600;
        border: none;
        background-color: ${(props) => props.theme.colorPrimary};
        color: ${(props) => props.theme.colorSecondary};
      }
      input {
        width: 100%;
        font-weight: 600;
        border: 1px solid gray;
        font-size: 1rem;
        padding: 1.2rem;
        &:focus-visible {
          outline: none;
          border: 1px solid gray;
        }
      }
    }
    .textbelowsearchrow {
      align-items: flex-start;
      display: flex;
      flex-direction: column;
      color: grey;
      font-size: 1.1rem;
      button {
        padding-block: 1rem;
        padding-inline: 2rem;
        cursor: pointer;
        font-size: 1rem;
        font-weight: 600;
        border: none;
        background-color: ${(props) => props.theme.colorPrimary};
        color: ${(props) => props.theme.colorSecondary};
      }
    }
  }
`;

export const RightColumn = styled.div`
  width: 45%;
  img {
    width: 100%;
    height: 100%;
  }
`;

export const CardsRow = styled.div`
  width: 70em;
  max-width: 90%;
  gap: 3em;
  display: flex;
  justify-content: center;
  margin-top: 3em;
  margin-bottom: 1em;

  .card {
    //padding: 1rem !important;
    display: flex;
    flex-direction: column;
    border-radius: 1.2em;
    width: 45%;

    border: 1px solid #eaeaea;

    scale: 0.99;
    transition: scale 150ms linear;
    cursor: pointer;

    &:hover {
      scale: 1.05;
    }

    img {
      height: 10em;
      border-top-left-radius: 1.2em;
      border-top-right-radius: 1.2em;
    }
    .card-text {
      padding: 1em;
      h2 {
        text-align: start;
      }
      p {
        text-align: start;
        color: #565656;
      }
    }
  }
`;
