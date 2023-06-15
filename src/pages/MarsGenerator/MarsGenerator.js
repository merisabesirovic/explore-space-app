import React, { useEffect, useState } from "react";
import dayjs from "dayjs";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import "./MarsGenerator.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const KEY = "OIabT3zBh1iqsJkFE3T740jK32aDZRoV5CgWqC3D";

export default function MarsGenerator() {
  const [pictureData, setPictureData] = useState(null);
  const [startDate, setStartDate] = useState(() => {
    const date = new Date();
    date.setDate(date.getDate() - 3);
    return date;
  });

  function formatDate(date) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");

    return `${year}-${month}-${day}`;
  }

  console.log(formatDate(startDate));

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
          `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=${formatDate(
            startDate
          )}
          )}&api_key=${KEY}`
        );
        const data = await res.json();
        console.log(data);
        setPictureData(data.photos);
      } catch (error) {
        console.log(error);
      }
    }
  }, [startDate]);
  const numOfPages = Math.ceil((pictureData?.length || 0) / imagePerPage);

  return (
    <div className="mars">
      <h1 className="mars-title">Pick a Date to see photos from Mars </h1>
      <p className="note">
        *Note that we cannot provide photos from today or tomorrow{" "}
      </p>
      <div className="date-select">
        <div className="date-picker">
          <DatePicker
            className="date-input"
            showIcon
            placeholderText="Enter a date"
            selected={startDate}
            onChange={(newValue) => setStartDate(newValue)}
          />
        </div>
      </div>
      {pictureData && pictureData.length > 0 ? (
        <div className="mars2">
          <h1 className="img-title">{pictureData[0].camera.full_name}</h1>
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
        <Stack className="pag" spacing={2}>
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
