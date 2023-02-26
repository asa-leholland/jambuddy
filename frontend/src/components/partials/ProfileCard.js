import * as React from "react";
import CardMedia from "@mui/material/CardMedia";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import "../css/Global.css";
import Modal from "./Modal";
import ReviewModal from "./ReviewModal";
import Reviews from "./Reviews";

import { Card, CardContent, CardHeader, IconButton } from "@mui/material";

export default function ProfileCard({ profile }) {
  return (
    <div className="m-5">
      <Card sx={{ position: "relative" }}>
        <CardHeader
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title={`${profile.first_name} ${profile.last_name}`}
          subheader={profile.username}
        />
        <div className="aspect-[4/3]">
          <img
            src={profile.photo}
            alt={profile.first_name}
            className="object-cover position-absolute w-full h-full"
          />
        </div>

        <CardContent>
          <Typography variant="body2" color="text.secondary">
            {profile.city}, {profile.state}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {profile.genre}
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>
        </CardActions>
        <div className="flex place-content-between  ">
          <Modal {...profile} />
          <ReviewModal {...profile} />
          <Reviews {...profile} />
        </div>
      </Card>
    </div>
  );
}
