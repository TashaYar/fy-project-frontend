import "./Main.styles.js";
import sideimg from "../../Images/sideimage2.jpg";
import React, { useState } from "react";
import logo from "../../Images/logo.png";
import { CardsRow, Container, LeftColumn, RightColumn } from "./Main.styles.js";
import kitchenimg from "/home/pallavi/Documents/fy-project/src/Images/kitchen.jpg";
import Modal from "../Modal/Modal.js";
import Login from "../LogIn/Login.js";

const Main = () => {
  const [showLoginModal, setShowLoginModal] = useState(false);

  return (
    <Container>
      {showLoginModal && (
        <Modal
          height="30em"
          width="30em"
          header="Login"
          onClose={setShowLoginModal}
        >
          <Login />
        </Modal>
      )}
      <div className="row">
        <LeftColumn>
          <div className="innerCont">
            <div className="headerRow">
              <img src={logo} alt="Logo" />
              <div className="btns-container">
                <button
                  className="login"
                  onClick={(e) => setShowLoginModal(true)}
                >
                  Login
                </button>
                <button className="signup">Sign up</button>
              </div>
            </div>
            <div className="titleRow">
              <h1>Hungry?</h1>
              <p>Order food from favourite restaurants near you.</p>
            </div>
            <div className="searchrow">
              <input
                type="text"
                placeholder="Enter your delivery location"
              ></input>

              <button>Find Food</button>
            </div>
            <div className="textbelowsearchrow">
              <p>Register your kitchen with us.</p>
              <button>Register</button>
            </div>
          </div>
        </LeftColumn>
        <RightColumn>
          <img src={sideimg} alt="Sideim" />
        </RightColumn>
      </div>

      <div className="row">
        <CardsRow>
          <div className="card">
            <img src={kitchenimg} alt="card-imgae"></img>
            <div className="card-text">
              <h2>Order Online</h2>
              <p>Stay home and enjoy your food by ordering it online.</p>
            </div>
          </div>
          <div className="card">
            <img src={kitchenimg} alt="card-imgae"></img>
            <div className="card-text">
              <h2>Order Online</h2>
              <p>Stay home and enjoy your food by ordering it online.</p>
            </div>
          </div>
        </CardsRow>
      </div>
    </Container>
  );
};

export default Main;
