import {
  ChatBubbleOutlineOutlined,
  FavoriteBorderOutlined,
  FavoriteOutlined,
  ShareOutlined,
} from "@mui/icons-material";
import { Box, Divider, IconButton, Typography, useTheme } from "@mui/material";
import FlexBetween from "components/FlexBetween";
import Friend from "components/Friend";
import WidgetWrapper from "components/WidgetWrapper";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Slider from "react-slick";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "red",opacity:0.3, width: "20px", height: "100%"}}
      onClick={onClick}
    />
  );
}

const PostWidget = ({ _id, userId, description, images, likes, comments }) => {
  const [isComments, setIsComments] = useState(false);
  const dispatch = useDispatch();
  // const loggedInUserId = useSelector((state) => state.auth.user._id);
  // const isLiked = Boolean(likes[loggedInUserId]);

  const { palette } = useTheme();
  const main = palette.neutral.main;
  const primary = palette.primary.main;
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <SampleNextArrow />,
    appendDots: (dots) => (
      <div style={{ overflow: "hidden",bottom:"-45px" }}>
        <ul style={{ paddingInlineStart: "0px" }}> {dots} </ul>
      </div>
    ),
  };

  const patchLike = async () => {
    // const response = await fetch(`${process.env.REACT_APP_BACKEND}/posts/${_id}/like`, {
    //   method: "PATCH",
    //   headers: {
    //     Authorization: `Bearer ${token}`,
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify({ userId: loggedInUserId }),
    // });
    // const updatedPost = await response.json();
    // dispatch(setPost({ post: updatedPost }));
  };

  return (
    <WidgetWrapper m="2rem 0">
      <Friend {...userId} />
      <Typography color={main} sx={{ my: ".75rem" }}>
        {description}
      </Typography>
      {images && images.length > 0 && (
        <Box
          className="slider-container"
          style={{ maxWidth: "600px", lineHeight: "0px", marginRight: "0px",marginLeft: "-24px" }}
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
          <FlexBetween mt="0.25rem" style={{ position: "initial" }}>
            <FlexBetween gap="1rem">
              <FlexBetween gap="0.3rem">
                <IconButton onClick={patchLike}>
                  {/* {isLiked ? ( */}
                  {/* <FavoriteOutlined sx={{ color: primary }} /> */}
                  {/* ) : ( */}
                  <FavoriteBorderOutlined />
                  {/* )} */}
                </IconButton>
                <Typography>{likes && likes.length}</Typography>
              </FlexBetween>

              <FlexBetween gap="0.3rem" style={{ marginRight: "-70px" }}>
                <IconButton onClick={() => setIsComments(!isComments)}>
                  <ChatBubbleOutlineOutlined />
                </IconButton>
                <Typography>{comments.length}</Typography>
              </FlexBetween>
            </FlexBetween>

            <IconButton>
              <ShareOutlined />
            </IconButton>
          </FlexBetween>
        </Box>
      )}

      {/* {isComments && (
        <Box mt="0.5rem">
          {comments.map((comment, i) => (
            <Box key={`${name}-${i}`}>
              <Divider />
              <Typography sx={{ color: main, m: "0.5rem 0", pl: "1rem" }}>
                {comment}
              </Typography>
            </Box>
          ))}
          <Divider />
        </Box>
      )} */}
    </WidgetWrapper>
  );
};

export default PostWidget;
