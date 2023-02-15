import "./Main.styles.js";
import sideimg from "../../Images/sideimage2.jpg";
import React, { useState } from "react";
import logo from "../../Images/logo.png";
import { CardsRow, Container, LeftColumn, RightColumn } from "./Main.styles.js";
import card1img from "../../Images/healthy.jpg";
import card2img from "../../Images/card2.jpg";
import card3img from "../../Images/card3.jpg";
import Footer from "../Footer/Footer.js";
import Modal from "../Modal/Modal.js";
import Login from "../LogIn/Login.js";
import { useNavigate } from "react-router-dom";

const Main = () => {
  const [showLoginModal, setShowLoginModal] = useState(false);
  const navigate = useNavigate();

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
              <button
                onClick={(e) => {
                  navigate("/register");
                }}
              >
                Register
              </button>
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
            <div className="img-div">
              <img src={card1img} alt="card-imgae" />
            </div>
            <div className="card-text">
              <h2>Eat healthy and tasty</h2>
              <p>
                Enjoy nutritious and delicious meals by incorporating fresh
                produce and wholesome ingredients into your diet. Make healthy
                eating a tasty experience.
              </p>
            </div>
          </div>
          <div className="card">
            <div className="img-div">
              <img src={card2img} alt="card-imgae" />
            </div>

            <div className="card-text">
              <h2>Vocal for Local</h2>
              <p>You can promote local restaurants to grow thier business</p>
            </div>
          </div>
          <div className="card">
            <div className="img-div">
              <img src={card3img} alt="card-imgae" />
            </div>
            <div className="card-text">
              <h2>Excluisve Perks</h2>
              <p>Explore our kitchens</p>
            </div>
          </div>
        </CardsRow>
      </div>
      <Footer></Footer>
    </Container>
  );
};

export default Main;
