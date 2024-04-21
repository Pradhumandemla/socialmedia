/* eslint-disable jsx-a11y/anchor-is-valid */
import * as React from "react";

import {
  Avatar,
  Box,
  Link,
  Input,
  Typography,
  AspectRatio,
  Card,
  CardContent,
  CardOverflow,
  IconButton,
} from "@mui/joy";
import MoreHoriz from "@mui/icons-material/MoreHoriz";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import ModeCommentOutlined from "@mui/icons-material/ModeCommentOutlined";
import SendOutlined from "@mui/icons-material/SendOutlined";
import Face from "@mui/icons-material/Face";
// import BookmarkBorderRoundedIcon from "@mui/icons-material/BookmarkBorderRounded";
import { useNavigate } from "react-router-dom";
import Slider from "react-slick";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "red",
        opacity: 0.3,
        width: "20px",
        height: "100%",
      }}
      onClick={onClick}
    />
  );
}

export default function Post({ userId, description, images, likes, comments }) {
  const navigate = useNavigate();
  var settings = {
    dots: false,
    // arrows: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    // nextArrow: <SampleNextArrow />,
    // appendDots: (dots) => (
    //   <div style={{ overflow: "hidden", bottom: "-45px" }}>
    //     <ul style={{ paddingInlineStart: "0px" }}> {dots} </ul>
    //   </div>
    // ),
  };

  return (
    <Card
      variant="outlined"
      sx={{
        minWidth: 300,
        borderRadius: "0.75rem",
        border: "0px",
        marginY: "2rem",
        "--Card-radius": (theme) => theme.vars.radius.xs,
      }}
    >
      <CardContent
        orientation="horizontal"
        sx={{ alignItems: "center", gap: 1 }}
      >
        <Box
          sx={{
            position: "relative",
            "&::before": {
              content: '""',
              position: "absolute",
              top: 0,
              left: 0,
              bottom: 0,
              right: 0,
              m: "-2px",
              borderRadius: "50%",
              background:
                "linear-gradient(45deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%)",
            },
          }}
        >
          <Avatar
            size="lg"
            src={`${process.env.REACT_APP_BACKEND}/public/assets/${userId.profilePicture}`}
            sx={{ p: 0, border: "2px solid", borderColor: "background.body" }}
          />
        </Box>
        <Typography
          fontWeight="lg"
          sx={{ cursor: "pointer" }}
          onClick={() => {
            navigate(`/profile/${userId._id}`);
          }}
        >
          {userId.firstName + " " + userId.lastName}
        </Typography>
        <IconButton
          variant="plain"
          color="neutral"
          size="sm"
          sx={{ ml: "auto" }}
        >
          <MoreHoriz />
        </IconButton>
      </CardContent>
      <CardOverflow>
        {/* <AspectRatio> */}
        {images && images.length > 1 ? (
          <Box
            className="slider-container"
            style={{
              maxWidth: "600px",
              lineHeight: "0px",
              // marginRight: "0px",
              // marginLeft: "-24px",
            }}
          >
            <Slider {...settings}>
              {images.map((img, index) => (
                <img
                  key={index}
                  height="auto"
                  alt="post"
                  src={`${process.env.REACT_APP_BACKEND}/${img.path}`}
                />
              ))}
            </Slider>
          </Box>
        ) : (
          <Box
            className="slider-container"
            style={{
              maxWidth: "600px",
              lineHeight: "0px",
              // marginRight: "0px",
              // marginLeft: "-24px",
            }}
            >
            <img
              height="auto"
              width='100%'
              alt="post"
              style={{borderRadius:'.75rem'}}
              src={`${process.env.REACT_APP_BACKEND}/${images[0].path}`}
            />
          </Box>
        )}
        {/* </AspectRatio> */}
      </CardOverflow>
      <CardContent
        orientation="horizontal"
        sx={{ alignItems: "center", mx: -1 }}
      >
        <Box sx={{ width: 0, display: "flex", gap: 0.5 }}>
          <IconButton variant="plain" color="neutral" size="sm">
            <FavoriteBorder />
          </IconButton>
          <IconButton variant="plain" color="neutral" size="sm">
            <ModeCommentOutlined />
          </IconButton>
          <IconButton variant="plain" color="neutral" size="sm">
            <SendOutlined />
          </IconButton>
        </Box>
        <Box
          sx={{ display: "flex", alignItems: "center", gap: 0.5, mx: "auto" }}
        >
          {[...Array(5)].map((_, index) => (
            <Box
              key={index}
              sx={{
                borderRadius: "50%",
                width: `max(${6 - index}px, 3px)`,
                height: `max(${6 - index}px, 3px)`,
                bgcolor: index === 0 ? "primary.solidBg" : "background.level3",
              }}
            />
          ))}
        </Box>
      </CardContent>
      <CardContent>
        <Link
          component="button"
          underline="none"
          fontSize="sm"
          fontWeight="lg"
          textColor="text.primary"
        >
          8.1M Likes
        </Link>
        <Typography fontSize="sm">
          <Link
            component="button"
            color="neutral"
            fontWeight="lg"
            textColor="text.primary"
          >
            MUI
          </Link>{" "}
          The React component library you always wanted
        </Typography>
        <Link
          component="button"
          underline="none"
          fontSize="sm"
          startDecorator="…"
          sx={{ color: "text.tertiary" }}
        >
          more
        </Link>
        <Link
          component="button"
          underline="none"
          fontSize="10px"
          sx={{ color: "text.tertiary", my: 0.5 }}
        >
          2 DAYS AGO
        </Link>
      </CardContent>
      <CardContent orientation="horizontal" sx={{ gap: 1 }}>
        <IconButton size="sm" variant="plain" color="neutral" sx={{ ml: -1 }}>
          <Face />
        </IconButton>
        <Input
          variant="plain"
          size="sm"
          placeholder="Add a comment…"
          sx={{ flex: 1, px: 0, "--Input-focusedThickness": "0px" }}
        />
        <Link disabled underline="none" role="button">
          Post
        </Link>
      </CardContent>
    </Card>
  );
}
