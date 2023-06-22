import "./Footer.css";
import { Stack, Typography } from "@mui/material";
import EastIcon from "@mui/icons-material/East";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <>
      <div className="footer">
        <Link to={"/AboutUs"} style={{ textDecoration: "none" }}>
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="center"
            spacing={2}
          >
            <Typography
              color={"white"}
              variant="h4"
              fontWeight={550}
              style={{ textAlign: "center" }}
            >
              Meet the team
            </Typography>
            <EastIcon className="icon" fontSize="large"></EastIcon>
          </Stack>
        </Link>
        <div className="dividerDiv"></div>
        <Typography
          color={"white"}
          variant="subtitle2"
          style={{ marginTop: "15px", textAlign: "center" }}
        >
          All rights reserved. 2023
        </Typography>
      </div>
    </>
  );
}
