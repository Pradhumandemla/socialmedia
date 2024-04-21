import { useSelector } from "react-redux";
import Post from "components/Post";
import { Typography } from "@mui/material";
import { StyledEngineProvider, CssVarsProvider } from "@mui/joy/styles";
import { useEffect } from "react";

const Timeline = () => {
  const timeline = useSelector((state) => state.timeline);

  if (!(timeline && timeline.length > 0)) {
    return (
      <>
        <Typography
          variant="h2"
          sx={{ textAlign: "center", padding: "0", margin: "20px" }}
        >
          No Post Found
        </Typography>
      </>
    );
  }
  return (
    <>
      <StyledEngineProvider injectFirst>
        <CssVarsProvider>
          {timeline.map((post, index) => (
            <Post key={index} {...post} />
          ))}
        </CssVarsProvider>
      </StyledEngineProvider>
    </>
  );
};
export default Timeline;
