import styled from "styled-components";
export const Foo = styled.div`
  .footer-row {
    background-color: #dafebd;
    display: flex;
    padding-inline: 21%;
    padding-block: 5%;
  }
`;
export const FooLeft = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  .footer-sections {
    display: flex;
    flex-direction: row;
    align-items: center;
  }
  span {
    padding: 8px;
    background: ${(props) => props.theme.colorPrimary};
    border-radius: 50%;
  }

  p {
    padding: 10px;
  }
`;
export const FooRight = styled.div`
  width: 50%;
  .about-footer {
    text-align: start;
  }
  span {
    padding-right: 10px;
  }
`;
