import { Box, Typography, useMediaQuery } from "@mui/material";
import { useDispatch } from "react-redux";
import Navbar from "components/Navbar";
import UserWidget from "components/UserWidget";
import MyPostWidget from "components/MyPostWidget";
import Timeline from "components/Timeline";
import AdvertWidget from "components/AdvertWidget";
import FriendListWidget from "components/FriendListWidget";
import { useEffect } from "react";
import { getTimeline } from "common";

const HomePage = () => {
  const isNonMobileScreens = useMediaQuery("(min-width:1000px)");
  const dispatch = useDispatch();

  useEffect(()=>{
    getTimeline(dispatch)
  },[])


  return (
    <Box>
      <Navbar />
      <Box
        width="100%"
        padding="2rem 6%"
        display={isNonMobileScreens ? "flex" : "block"}
        gap="0.5rem"
        justifyContent="space-between"
      >
        <Box flexBasis={isNonMobileScreens ? "26%" : undefined}>
          <UserWidget />
        </Box>
        <Box
          flexBasis={isNonMobileScreens ? "42%" : undefined}
          mt={isNonMobileScreens ? undefined : "2rem"}
        >
          <MyPostWidget />
          <Timeline />
        </Box>
        {isNonMobileScreens && (
          <Box flexBasis="26%">
            <AdvertWidget />
            <Box m="2rem 0" />
            <FriendListWidget />
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default HomePage;
