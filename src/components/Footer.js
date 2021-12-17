import * as React from "react";
import { FaDiscord, FaTwitter } from "react-icons/fa";
import {
  useTheme,
  IconButton,
  Typography,
  Toolbar,
  Box,
  Grid,
} from "@mui/material";

export default function Footer() {
  const theme = useTheme();

  const handleTwitterBtn = () => {
    window.open("https://twitter.com/fantomdrugznft", "_blank");
  };
  const handleDiscordBtn = () => {
    window.open("https://discord.gg/wgu4trd49q", "_blank");
  };

  return (
    <Grid
      item
      style={{
        backgroundColor: theme.palette.background.default,
        borderRadius: "10px",
        margin: "auto",
        marginTop: "1em",
        marginBottom: "1em",
      }}
      sm={12}
      md={8}
      fluid
    >
      <Box
        style={{
          borderRadius: "10px",
          position: "relative",
          backgroundColor: theme.palette.background.default,
        }}
      >
        <Toolbar style={{ margin: "auto" }}>
          <Typography
            style={{ marginLeft: 20, fontWeight: "900" }}
            variant="p"
            component="div"
            sx={{ flexGrow: 1 }}
          >
            FANTOM DRUGZ® 2021
          </Typography>

          <Box sx={{ ml: 2 }}>
            <IconButton
              onClick={handleTwitterBtn}
              size="small"
              edge="start"
              color="primary"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <FaTwitter />
            </IconButton>
            <IconButton
              onClick={handleDiscordBtn}
              size="small"
              edge="start"
              color="primary"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <FaDiscord />
            </IconButton>
          </Box>
        </Toolbar>
      </Box>
    </Grid>
  );
}
