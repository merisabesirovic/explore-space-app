import "./BannerTelescope.css";
import { Typography, Stack } from "@mui/material";
import { Link } from "react-router-dom";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";

export default function BannerTelescope() {
  return (
    <>
      <div className="banner">
        <Typography variant="h2" fontWeight={550} className="textStyle">
          Want to know what is
          <br />
          Hubble Looking at now?
        </Typography>
        <div className="dividerDiv"></div>
        <Link
          to={"https://spacetelescopelive.org/latest"}
          style={{ textDecoration: "none" }}
        >
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="center"
            spacing={2}
          >
            <Typography variant="h4" fontWeight={550} className="textStyle">
              Visit space telescope now
            </Typography>
            <OpenInNewIcon className="icon" fontSize="large"></OpenInNewIcon>
          </Stack>
        </Link>
      </div>
    </>
  );
}
