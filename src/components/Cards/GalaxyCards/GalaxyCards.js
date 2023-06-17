import * as React from "react";
import Box from "@mui/joy/Box";
import Card from "@mui/joy/Card";
import CardCover from "@mui/joy/CardCover";
import CardContent from "@mui/joy/CardContent";
import Typography from "@mui/joy/Typography";
import "./GalaxyCards.css";

export default function GalaxyCard({ name, image }) {
  return (
    <Box
      component="ul"
      sx={{ display: "flex", gap: 2, flexWrap: "wrap", p: 0, m: 0 }}
    >
      <Card component="li" sx={{ width: 300, flexGrow: 1 }}>
        <CardCover>
          <img src={image} loading="lazy" alt="" />
        </CardCover>
        <CardContent>
          <Typography
            level="h6"
            fontWeight="lg"
            textColor="#fff"
            mt={{ xs: 12, sm: 18 }}
            className="g-name"
          >
            {name}
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
}
