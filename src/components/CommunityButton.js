import * as React from "react";
// import { styled } from "@mui/material/styles";
import {
  Card,
  CardHeader,
  Avatar,
  Typography,
  Grid,
  CardActionArea,
} from "@mui/material";

export default function TeamCard({ teamMember }) {
  const { name, title, avatarUrl, link } = teamMember;

  const handleClick = () => {
    window.location.href = link;
  };

  return (
    <Grid xs={12} sm={8} style={{ margin: "auto" }}>
      <Card sx={{ width: "100%", marginBottom: 2, boxShadow: 3 }}>
        <CardActionArea onClick={handleClick}>
          <CardHeader
            style={{ margin: "0" }}
            avatar={
              <Avatar
                src={avatarUrl}
                aria-label="team"
                style={{ height: "4em", width: "4em", padding: 0 }}
              />
            }
            title={
              <Typography
                variant="h5"
                color="primary"
                style={{ margin: 0, fontWeight: "600", lineHeight: "20px" }}
                paragraph
              >
                {name}
              </Typography>
            }
            subheader={
              <>
                <Typography style={{ margin: 0 }}>{title}</Typography>
              </>
            }
          />
        </CardActionArea>
      </Card>
    </Grid>
  );
}
