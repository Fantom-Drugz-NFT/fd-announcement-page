import * as React from "react";
import { Grid, Typography, useTheme } from "@mui/material";
import CommunityButton from "./CommunityButton";

export default function Community() {
  const theme = useTheme();

  return (
    <Grid
      item
      sm={12}
      md={8}
      style={{
        backgroundColor: theme.palette.background.default,
        margin: "auto",
        marginTop: "1em",
        borderRadius: "10px",
        padding: "2em",
      }}
      container
    >
      <Typography
        style={{
          lineHeight: ".85em",
          textAlign: "center",
          alignContent: "center",
          margin: "auto",
          marginBottom: ".5em",
          color: theme.palette.primary.main,
        }}
        variant={"h3"}
      >
        JOIN THE DRUG DEALERZ <br />
      </Typography>

      <Grid container>
        <CommunityButton
          teamMember={{
            name: "Fantom Drugz 💊",
            title: "Official Discord Server",
            avatarUrl: "/static-assets/logo_with_BG.png",
            link: "https://discord.gg/wgu4trd49q",
          }}
        />
        <CommunityButton
          teamMember={{
            name: "@FantomDrugzNFT",
            title: "Official Twitter Page",
            avatarUrl: "/static-assets/logo_with_BG.png",
            link: "https://twitter.com/fantomdrugznft",
          }}
        />
      </Grid>
    </Grid>
  );
}
