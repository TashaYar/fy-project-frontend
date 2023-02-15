//react arrow function export rafce
import React from "react";
import { Container, LeftReg, RightReg } from "./RegisterKitchen.styles";
import reg from "../../Images/reg.jpg";
const RegisterKitchen = () => {
  return (
    <Container>
      <div className="row">
        <LeftReg>
          <div className="left-side-register">
            <h3>Register your kitchen with us</h3>

            <div>
              <p>Get more customers</p>
              <button>Register your Kitchen</button>
              <button>Already listed? Login now</button>
            </div>
          </div>
        </LeftReg>
        <RightReg>
          <img src={reg} alt="side" />
        </RightReg>
      </div>
    </Container>
  );
};

export default RegisterKitchen;
