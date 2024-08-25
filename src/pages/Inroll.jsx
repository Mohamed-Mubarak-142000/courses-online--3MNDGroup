import React, { useState, useMemo, useEffect } from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { useParams } from "react-router-dom";
import ListVideos from "../components/ListVideos";
import MainVideo from "../components/MainVideo";
import useFetching from "../hooks/useFetching";
import Error from "../common/Error";
import { CircularProgress, Typography } from "@mui/material";
import TabsSection from "../components/TabsSection";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Helmet } from "react-helmet-async";

const drawerWidth = 300;

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      marginLeft: 0,
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
    }),
  })
);

const StyledAppBar = styled(AppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

const Inroll = () => {
  const theme = useTheme();
  const { courseId } = useParams();
  const { data, error, isLoading } = useFetching({
    title: "Course By Id",
    endPoint: `courses/${courseId}`,
  });

  const [open, setOpen] = useState(true);
  const [mainVideo, setMainVideo] = useState(null);

  const handleSelectedUrlVideo = (url) => {
    setMainVideo(url);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const videoUrl = useMemo(
    () => mainVideo || data?.data?.videos[0]?.url,
    [mainVideo, data]
  );

  if (error) return <Error />;

  if (isLoading)
    return (
      <div className="flex justify-center items-center my-28">
        <CircularProgress />
      </div>
    );

  return (
    <>
      <Helmet>
        <title>Enroll Page </title>
      </Helmet>
      <Header />
      <section className="min-h-[100vh] flex items-center justify-center mt-16">
        <Box sx={{ display: "flex" }}>
          <CssBaseline />
          <StyledAppBar
            position="fixed"
            open={open}
            sx={{
              top: "80px",
              backgroundColor: "white",
            }}
          >
            <Toolbar>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                onClick={() => setOpen(true)}
                edge="start"
                sx={{
                  mr: 2,
                  ...(open && { display: "none" }),
                  backgroundColor: "#1C1E53",
                  "&:hover": {
                    backgroundColor: "#1C1E53",
                  },
                }}
              >
                <MenuIcon />
              </IconButton>
              <Typography
                variant="h6"
                sx={{ color: "#000", fontWeight: "bold" }}
              >
                Content
              </Typography>
            </Toolbar>
          </StyledAppBar>

          <Drawer
            sx={{
              width: drawerWidth,
              flexShrink: 0,
              "& .MuiDrawer-paper": {
                width: drawerWidth,
                boxSizing: "border-box",
                top: "80px",
              },
            }}
            variant="persistent"
            anchor="left"
            open={open}
          >
            <DrawerHeader>
              <IconButton onClick={() => setOpen(false)}>
                {theme.direction === "ltr" ? (
                  <ChevronLeftIcon />
                ) : (
                  <ChevronRightIcon />
                )}
              </IconButton>
            </DrawerHeader>
            <Divider />
            <ListVideos
              courseId={courseId}
              handleSelectedUrlVideo={handleSelectedUrlVideo}
            />
          </Drawer>

          <Main
            open={open}
            sx={{ width: "100%", marginTop: "100px", padding: "0px" }}
          >
            <MainVideo mainVideo={videoUrl} data={data} />
            <TabsSection courseId={courseId} data={data} />
            <Footer />
          </Main>
        </Box>
      </section>
    </>
  );
};

export default Inroll;
