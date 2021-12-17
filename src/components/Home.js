import * as React from "react";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import { Grid, Typography, Box, useTheme } from "@mui/material";

export default function Home() {
  const theme = useTheme();

  return (
    <Grid
      item
      sm={12}
      md={8}
      style={{
        backgroundColor: theme.palette.background.paper,
        margin: "auto",
        marginTop: "2em",
        borderRadius: "10px",
        padding: "2em",
      }}
    >
      <Box
        style={{
          backgroundColor: theme.palette.background.paper,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <img
          component="img"
          src="/static-assets/logo_main.png"
          alt="Fantom Drugz Logo"
          style={{
            display: "flex",
            backgroundColor: theme.palette.background.paper,
            width: "80%",
            maxWidth: "30em",
            justifyContent: "center",
            alignSelf: "center",
            margin: "auto",
          }}
        />

        <Typography
          style={{
            lineHeight: ".85em",
            textAlign: "center",
            alignContent: "center",
            maxWidth: "30em",
            margin: "auto",
            marginTop: "1em",
          }}
          variant={"h4"}
        >
          BUYING DRUGZ ON THE INTERNET <br />
        </Typography>
        <Typography
          style={{
            lineHeight: ".85em",
            textAlign: "center",
            alignContent: "center",
            margin: "auto",
            marginTop: ".25em",
            fontSize: "3em",
          }}
        >
          <span
            style={{
              fontWeight: "800",

              color: theme.palette.primary.main,
            }}
          >
            HAS NEVER BEEN EASIER!
          </span>
        </Typography>
        <br />
        <Typography
          style={{
            fontSize: "20px",
            textAlign: "center",
            alignContent: "center",
            maxWidth: "30em",
            margin: "auto",
          }}
        >
          Introducing a collection of 2500{" "}
          <span
            style={{
              fontWeight: "800",

              color: theme.palette.secondary.main,
            }}
          >
            FREE
          </span>{" "}
          pixel art drugz for you to buy, sell and trade on the Fantom Opera
          Network!
        </Typography>

        <Typography
          style={{
            fontSize: "20px",
            textAlign: "center",
            alignContent: "center",
            maxWidth: "30em",
            margin: "auto",
          }}
        >
          <span
            style={{
              fontWeight: "800",
              fontSize: "24px",
              color: theme.palette.secondary.main,
            }}
          >
            More details coming soon!
          </span>
        </Typography>
      </Box>
    </Grid>
  );
}
