import {
  Box,
  Typography,
  IconButton,
  Card,
  CardContent,
  Avatar,
  useTheme,
} from "@mui/material";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

const testimonials = [
  {
    name: "t",
    avatar: "/images/users/user1.jpg",
    text: "",
  },
  {
    name: "f ",
    avatar: "/images/users/user2.jpg",
    text: "g",
  },
  {
    name: "h",
    avatar: "/images/users/user3.jpg",
    text: "j",
  },
];

export const CustomerTestimonials = () => {
  const theme = useTheme();

  return (
    <Box sx={{ bgcolor: "#f3f3f3", py: 6 }}>
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        maxWidth="lg"
        mx="auto"
        px={2}
        mb={4}
      >
        <Typography variant="h5" fontWeight="bold">
          m
        </Typography>
        <Box>
          <IconButton className="swiper-button-prev">
            <ArrowBackIos />
          </IconButton>
          <IconButton className="swiper-button-next">
            <ArrowForwardIos />
          </IconButton>
        </Box>
      </Box>

      <Swiper
        modules={[Navigation]}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        spaceBetween={20}
        breakpoints={{
          640: { slidesPerView: 1 },
          900: { slidesPerView: 2 },
          1200: { slidesPerView: 3 },
        }}
      >
        {testimonials.map((testimonial, index) => (
          <SwiperSlide key={index}>
            <Card sx={{ mx: 1, height: "100%" }}>
              <CardContent>
                <Box display="flex" alignItems="center" mb={2}>
                  <Avatar src={testimonial.avatar} sx={{ mr: 2 }} />
                  <Typography fontWeight="bold">{testimonial.name}</Typography>
                </Box>
                <Typography color="text.secondary" fontSize={14}>
                  "{testimonial.text}"
                </Typography>
              </CardContent>
            </Card>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};
