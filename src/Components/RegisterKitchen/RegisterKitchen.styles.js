import styled from "styled-components";
export const Container = styled.div`
  button {
    border: none;
    outline: none;
    height: 3em;
    padding-inline: 2em;
    cursor: pointer;
    font-weight: 600;
    font-size: 1em;
    margin-right: 1em;
    background-color: ${(props) => props.theme.colorPrimary};
    color: ${(props) => props.theme.colorSecondary};
  }
  /* .register-kitchen {
    padding: 1em;
  }*/
  .row {
    display: flex;
    flex-direction: row;
  }
`;
export const LeftReg = styled.div`
  width: 50%;
  margin: auto;
  .left-side-register {
    width: 80%;
    margin-inline: auto;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding-left: 2em;
    text-align: start;
  }
`;
export const RightReg = styled.div`
  width: 50%;
  height: 100%;

  img {
    height: auto;
    max-width: 100%;
  }
`;
