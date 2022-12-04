import React from "react";
import BaseImage from "views/components/BaseImage";
import BaseCard from "views/components/BaseCard";
import { useSelector } from "react-redux";
import RouterLink from "views/components/RouterLink";
import ModalLink from "views/components/ModalLink";
import { makeStyles } from "@material-ui/styles";
import { selectors } from "core/reducers/index";
import BaseCardHeader from "views/components/BaseCardHeader";
import MovieRatingTag from "./MovieRatingTag";
import { getAspectRatioString } from "./AspectRatio";
import { useConfiguration } from "./ConfigurationProvider";

const useStyles = makeStyles(theme => ({
  link: {
    textDecoration: "none"
  }
}));

function ArtistCard({ artistId, subheader }) {
  const classes = useStyles();
  const artist = useSelector(state => selectors.selectArtist(state, artistId));
  const { getImageUrl } = useConfiguration();

  // function renderItem(artist) {
  //   if (!artist.images) {
  //     return null;
  //   } else {
  //     return artist.images[0].url;
  //
  //   }
  // }
  function renderItem(artist) {
    if (artist.images && artist.images.length) {
      return artist.images[0].url;
    } else {
      return null;

    }
  }

  // function renderItem(artist) {
  //   // return artist.images ? ({artist.images[0].url}) : null;
  //
  //   return artist.images && artist.images.length ? (
  //       <img src={artist.images[0].url} alt={artist.name} />
  //   ) : null
  // }



  // return (
  //   // <ModalLink to={`/artist/${artistId}`}>
  //
  //     <RouterLink className={classes.link} to={`/artist/${artistId}`}>
  //       <BaseCard hasActionArea>
  //         <BaseImage
  //           src={artist.images[0].url}
  //           alt={artist.name}
  //           aspectRatio={getAspectRatioString(3, 3)}
  //         />
  //         <BaseCardHeader title={artist.name} subheader={subheader} />
  //         <BaseCardHeader  subheader={subheader} />
  //       </BaseCard>
  //     </RouterLink>
  //   // </ModalLink>
  // );

  // return (
  //   // <ModalLink to={`/artist/${artistId}`}>
  //
  //     <RouterLink className={classes.link} to={`/artist/${artistId}`}>
  //       <BaseCard hasActionArea>
  //         <BaseImage
  //           src={getImageUrl(artist.images)}
  //           alt={artist.name}
  //           aspectRatio={getAspectRatioString(3, 3)}
  //         />
  //         <BaseCardHeader title={artist.name} subheader={subheader} />
  //         <BaseCardHeader  subheader={subheader} />
  //       </BaseCard>
  //     </RouterLink>
  //   // </ModalLink>
  // );

  return (
    // <ModalLink to={`/artist/${artistId}`}>

      <RouterLink className={classes.link} to={`/artist/${artistId}`}>
        <BaseCard hasActionArea>
          <BaseImage
            src={artist.images[0] ? artist.images[0].url : ""}
            alt={artist.name}
            aspectRatio={getAspectRatioString(3, 3)}
          />
          <BaseCardHeader title={artist.name} subheader={subheader} />
          <BaseCardHeader  subheader={subheader} />
        </BaseCard>
      </RouterLink>
    // </ModalLink>
  );
}

export default ArtistCard;
