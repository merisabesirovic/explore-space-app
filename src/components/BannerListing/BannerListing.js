import "./BannerListing.css";
import { Stack } from "@mui/material";
import ListingCard from "../ListingCard/ListingCard";

const SaturnImage =
  "https://www.transcontinentaltimes.com/wp-content/uploads/2023/05/Saturn-NASA.jpg";
const EarthImage =
  "https://cdn.pixabay.com/photo/2016/10/20/18/35/earth-1756274_960_720.jpg";

export default function BannerListing() {
  return (
    <>
      <div className="main">
        <div className="bannerListing">
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="center"
            spacing={25}
          >
            <ListingCard
              title={"IMAGES"}
              image={SaturnImage}
              link={"/PlanetImages"}
            />
            <ListingCard
              title={"NEWS"}
              image={EarthImage}
              link={"https://hubblesite.org/news/news-releases"}
            />
          </Stack>
        </div>
      </div>
    </>
  );
}
