import * as React from "react";
import Card from "@mui/joy/Card";
import CardCover from "@mui/joy/CardCover";
import CardContent from "@mui/joy/CardContent";
import Typography from "@mui/joy/Typography";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import "./PlanetCard.css";

export default function PlanetCard({ name, image, desc, wikiLink }) {
  const [isHovered, setIsHovered] = React.useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <Card
      style={{ overflow: "hidden" }}
      sx={{ minHeight: "200px", width: 300 }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <CardCover>
        <img src={image} loading="lazy" alt="" />
      </CardCover>
      {isHovered && (
        <CardCover
          sx={{
            background: `linear-gradient(to top, rgba(0,0,0,0.4), rgba(0,0,0,0) 200px),
                         linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0) 300px)`,
          }}
        />
      )}
      <CardContent
        style={{ overflow: "hidden" }}
        sx={{ justifyContent: "flex-end" }}
      >
        <Typography
          style={{ overflow: "hidden" }}
          level="h2"
          fontSize="lg"
          textColor="#fff"
          mb={1}
        >
          {name}
        </Typography>
        {isHovered && (
          <div className="desc-container">
            <div>
              <a className="desc-icon" href={wikiLink}>
                <AutoStoriesIcon
                  style={{ width: "25px", height: "25px", color: "#ffffff" }}
                  className="desc-icon"
                />
              </a>
            </div>
            <Typography className="desc-text" textColor="neutral.300">
              {desc}
            </Typography>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
