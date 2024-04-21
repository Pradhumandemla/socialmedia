import { Box, useMediaQuery } from "@mui/material";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Navbar from "components/Navbar";
import FriendListWidget from "components/FriendListWidget";
import MyPostWidget from "components/MyPostWidget";
import Timeline from "components/Timeline";
import UserWidget from "components/UserWidget";
import { useDispatch } from "react-redux";
import { getTimeline } from "common";



const ProfilePage = () => {
  const dispatch = useDispatch();
  const { userId } = useParams();
  const token = useSelector((state) => state.auth.token);
  const user = useSelector((state) => state.auth.user);
  const isNonMobileScreens = useMediaQuery("(min-width:1000px)");


  useEffect(()=>{
    getTimeline(dispatch, userId);
  },[])

  return (
    <Box>
      <Navbar />
      <Box
        width="100%"
        padding="2rem 6%"
        display={isNonMobileScreens ? "flex" : "block"}
        gap="2rem"
        justifyContent="center"
      >
        <Box flexBasis={isNonMobileScreens ? "26%" : undefined}>
          <UserWidget userId={userId} picturePath={user.picturePath} />
          <Box m="2rem 0" />
          <FriendListWidget userId={userId} />
        </Box>
        <Box
          flexBasis={isNonMobileScreens ? "42%" : undefined}
          mt={isNonMobileScreens ? undefined : "2rem"}
        >
          <MyPostWidget picturePath={user.picturePath} />
          <Box m="2rem 0" />
          <Timeline isProfile='true' />
        </Box>
      </Box>
    </Box>
  );
};

export default ProfilePage;
