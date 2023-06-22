import { Typography } from "@mui/material";
import "./ListingCard.css";
import { Link } from "react-router-dom";

export default function ListingCard({ title, image, link }) {
  return (
    <>
      <div className="listingContainer">
        <img src={image} className="listingImage" />
        <div className="listingCenterText">
          <Link to={link} style={{ textDecoration: "none" }}>
            <Typography color={"white"} variant="h4">
              {title}
            </Typography>
          </Link>
        </div>
      </div>
    </>
  );
}
