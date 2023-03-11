import * as React from "react";
import CardActions from "@mui/material/CardActions";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteUserButton from "./FavoriteUserButton";
import "../css/Global.css";
import Modal from "./Modal";
import JamsModal from "./JamsModal";
import Reviews from "./Reviews";
import ReviewModal from "./ReviewModal";
import { useSelector } from "react-redux";

import { Card, CardContent, CardHeader, IconButton } from "@mui/material";

export default function ProfileCard({ profile }) {
  const user = useSelector((state) => state.user);
  const userMatch = profile.username == user.user.username;
  return (
    <div>
      <Card sx={{ position: "relative" }}>
        <CardHeader
          title={`${profile.first_name} ${profile.last_name}`}
          subheader={profile.username}
        />
        <div className="aspect-[4/3]">
          <img
            src={profile.photo ? profile.photo : "./sunset.jpg"}
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
            {!userMatch ? (
              <FavoriteUserButton
                userId={user.user.id}
                profileId={profile.id}
              />
            ) : null}
          </IconButton>
          <JamsModal {...profile} />
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
