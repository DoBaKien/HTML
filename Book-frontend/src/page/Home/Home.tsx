import { Box, Stack } from "@mui/material";

import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import "./style.css";

import "swiper/css";
import "swiper/css/pagination";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { dataMenu } from "../../component/data";
import { useState } from "react";
import MenuHover from "./MenuHover";

const Home = () => {
  const [isHovered, setIsHovered] = useState({
    check: false,
    content: "",
  });
  return (
    <div>
      <Box
        onMouseLeave={() =>
          setIsHovered((prevState) => ({
            ...prevState,
            check: false,
            content: "",
          }))
        }
      >
        <Stack direction={"row"} spacing={3} sx={{ position: "relative" }}>
          <Box className="box-menu">
            {Array.isArray(dataMenu) && dataMenu.length > 0 ? (
              dataMenu.map((item) => (
                <Stack
                  direction={"row"}
                  className="menu-item"
                  key={item.id}
                  onMouseEnter={() =>
                    setIsHovered((prevState) => ({
                      ...prevState,
                      check: true,
                      content: item.name,
                    }))
                  }
                >
                  <p> {item.name}</p>
                  <ArrowForwardIosIcon sx={{ fontSize: "1.2rem" }} />
                </Stack>
              ))
            ) : (
              <></>
            )}
          </Box>
          {isHovered.check ? <MenuHover content={isHovered.content} /> : <></>}
          <Box className="slide">
            <Swiper
              pagination={true}
              modules={[Pagination]}
              className="mySwiper"
            >
              <SwiperSlide>Slide 1</SwiperSlide>
              <SwiperSlide>Slide 2</SwiperSlide>
              <SwiperSlide>Slide 3</SwiperSlide>
              <SwiperSlide>Slide 4</SwiperSlide>
              <SwiperSlide>Slide 5</SwiperSlide>
              <SwiperSlide>Slide 6</SwiperSlide>
              <SwiperSlide>Slide 7</SwiperSlide>
              <SwiperSlide>Slide 8</SwiperSlide>
              <SwiperSlide>Slide 9</SwiperSlide>
            </Swiper>
          </Box>
          <Box className="box-right"></Box>
        </Stack>
        <Stack></Stack>
      </Box>
    </div>
  );
};

export default Home;
