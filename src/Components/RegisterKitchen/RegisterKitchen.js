//react arrow function export rafce
import React, { useState } from "react";
import { Container, LeftReg, RightReg } from "./RegisterKitchen.styles";
import reg from "../../Images/reg.jpg";
import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";
import { MenuItem } from "@material-ui/core";
import InputAdornment from "@mui/material/InputAdornment";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import { Email, Phone } from "@mui/icons-material";
const RegisterKitchen = () => {
  const [value, setValue] = useState("");

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
              <FormControl>
                <TextField
                  value={value}
                  onChange={(e) => setValue(e.target.value)}
                  select
                  label="Restaurant Type"
                  variant="filled"
                >
                  <MenuItem key={1} value="test">
                    Chinese
                  </MenuItem>
                  <MenuItem key={2} value="test2">
                    Indian
                  </MenuItem>
                  <MenuItem key={3} value="test3">
                    Italian
                  </MenuItem>
                </TextField>

                <TextField
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <PersonOutlineOutlinedIcon />
                      </InputAdornment>
                    ),
                  }}
                  variant="filled"
                  type={Text}
                  label="Restaurant Name"
                />

                <TextField
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <Email />
                      </InputAdornment>
                    ),
                  }}
                  variant="filled"
                  label="Email"
                  type={Email}
                />
                <TextField
                  variant="filled"
                  label="Phone no."
                  type={Phone}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <Phone />
                      </InputAdornment>
                    ),
                  }}
                />
              </FormControl>
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
