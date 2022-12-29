import styled from "styled-components";

export const OuterCont = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background-color: rgba(28, 28, 28, 0.75);
  visibility: visible;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 150;
`;

export const InnerCont = styled.div`
  width: ${(props) => (props.width ? props.width : "40em")};
  height: ${(props) => (props.height ? props.height : "auto")};
  display: flex;
  flex-direction: column;
  background-color: rgba(255, 255, 255, 1);
  opacity: 1;
  border-radius: 1em;

  .modalHeader {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-inline: 2em;

    margin-top: 0.1em;
    h2 {
      font-weight: 600;
    }
    span {
      svg {
        color: #666666;
        font-size: 1.8em;
      }
      cursor: pointer;
    }
  }
  .modalBody {
    display: flex;
    flex-direction: column;
    width: 100%;
  }
`;
