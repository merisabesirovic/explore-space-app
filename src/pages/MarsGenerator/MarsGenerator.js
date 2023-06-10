import React, { useEffect, useState } from "react";
import { DatePicker } from "@mui/x-date-pickers";
import { LocalizationProvider } from "@mui/x-date-pickers";
import dayjs from "dayjs";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import "./MarsGenerator.css";

const KEY = "OIabT3zBh1iqsJkFE3T740jK32aDZRoV5CgWqC3D";

export default function MarsGenerator() {
  const [pictureData, setPictureData] = useState(null);
  const today = dayjs().subtract(2, "days").format("YYYY-MM-DD");
  console.log(today);
  const [date, setDate] = useState(dayjs(today));
  const [page, setPage] = useState(1);
  const handleChange = (event, value) => {
    setPage(value);
  };
  const imagePerPage = 4;

  useEffect(() => {
    fetchPhoto();

    async function fetchPhoto() {
      try {
        const res = await fetch(
          `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=${date.format(
            "YYYY-MM-DD"
          )}&api_key=${KEY}`
        );
        const data = await res.json();
        console.log(data);
        setPictureData(data.photos);
      } catch (error) {
        console.log(error);
      }
    }
  }, [date]);
  const numOfPages = Math.ceil((pictureData?.length || 0) / imagePerPage);

  return (
    <div className="mars">
      <h1 className="mars-title">Pick a Date to see photos from Mars </h1>
      <div className="date-picker">
        <LocalizationProvider dateAdapter={AdapterDayjs} locale="en">
          <DatePicker
            className="date-picker"
            value={date}
            onChange={(newValue) => setDate(newValue)}
          />
        </LocalizationProvider>
      </div>
      {pictureData && pictureData.length > 0 ? (
        <div className="mars">
          <h1>{pictureData[0].camera.full_name}</h1>
          <div className="mars-container">
            {pictureData
              .slice((page - 1) * imagePerPage, page * imagePerPage)
              .map((photo) => (
                <div className="mars-photos">
                  <img src={photo.img_src} alt={photo.camera.full_name} />
                </div>
              ))}
          </div>
        </div>
      ) : (
        <p>Loading picture data...</p>
      )}
      <div className="pagination">
        <Stack spacing={2}>
          <Pagination
            count={numOfPages}
            page={page}
            onChange={handleChange}
            showFirstButton
            showLastButton
          />
        </Stack>
      </div>
    </div>
  );
}
