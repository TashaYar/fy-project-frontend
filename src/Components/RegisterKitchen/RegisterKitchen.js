//react arrow function export rafce
import React from "react";
import { Container, LeftReg, RightReg } from "./RegisterKitchen.styles";
import reg from "../../Images/reg.jpg";
import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";
import { Select, MenuItem, InputLabel } from "@material-ui/core";
import InputAdornment from "@mui/material/InputAdornment";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import { Email, Phone } from "@mui/icons-material";
import Box from "@mui/material/Box";
const RegisterKitchen = () => {
  return (
    <Container>
      <div className="row">
        <LeftReg>
          <div className="left-side-register">
            <div>
              <h3>Welcome to Cloud Kitchen</h3>
              <p>
                One step is all it takes, Fallin' in love with us. We look like
                all you need…{" "}
              </p>
            </div>
            <div>
              <Box
                sx={{
                  display: "grid",
                  gridTemplateColumns: "270px 270px",
                  gridGap: 10,
                }}
              >
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">
                    Cuisine Type
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    variant="outlined"
                  >
                    <MenuItem>Chinese</MenuItem>
                    <MenuItem>Indian</MenuItem>
                    <MenuItem>Italian</MenuItem>
                  </Select>

                  <TextField
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <PersonOutlineOutlinedIcon />
                        </InputAdornment>
                      ),
                    }}
                    variant="standard"
                    label="Restaurant Name"
                  />
                  <Email />
                  <TextField
                    hiddenLabel
                    variant="filled"
                    label="Email"
                    type={Email}
                  />
                  <TextField
                    variant="standard"
                    label="Phone no."
                    type={Phone}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <Phone />
                        </InputAdornment>
                      ),
                    }}
                  />
                </FormControl>
              </Box>
            </div>
          </div>
        </LeftReg>
        <RightReg>
          <div>
            <img src={reg} alt="side" />
          </div>
        </RightReg>
      </div>
    </Container>
  );
};

export default RegisterKitchen;
