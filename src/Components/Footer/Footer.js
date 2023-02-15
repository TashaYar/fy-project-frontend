import React, { Component } from "react";
import { Foo, FooLeft, FooRight } from "./Footer.styles.js";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CallIcon from "@mui/icons-material/Call";
import MailIcon from "@mui/icons-material/Mail";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
export class Footer extends Component {
  render() {
    return (
      <Foo>
        <div className="footer-row">
          <FooLeft>
            <div className="footer-sections">
              <span>
                <LocationOnIcon></LocationOnIcon>
              </span>
              <p>Prayagraj, Uttar Pradesh</p>
            </div>
            <div className="footer-sections">
              <span>
                <CallIcon></CallIcon>
              </span>
              <p>+91 9369721427</p>
            </div>
            <div className="footer-sections">
              <span>
                <MailIcon></MailIcon>
              </span>
              <p>support@kitchen.com</p>
            </div>
          </FooLeft>
          <FooRight>
            <div className="about-footer">
              <h3>Who we are?</h3>
              <p>
                Lorem ipsum doler Lorem ipsum doler Lorem ipsum doler Lorem
                ipsum doler Lorem ipsum doler Lorem ipsum doler
              </p>
            </div>
            <div className="about-footer">
              <span>
                <InstagramIcon></InstagramIcon>
              </span>
              <span>
                <TwitterIcon></TwitterIcon>
              </span>
              <span>
                <GitHubIcon></GitHubIcon>
              </span>
              <span>
                <YouTubeIcon></YouTubeIcon>
              </span>
            </div>
          </FooRight>
        </div>
      </Foo>
    );
  }
}

export default Footer;
