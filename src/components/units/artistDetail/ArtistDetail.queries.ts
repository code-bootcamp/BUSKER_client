import { gql } from "@apollo/client";

export const FETCH_ARTIST_WITHOUT_AUTH = gql`
  query fetchArtist($artistId: String!) {
    fetchArtist(artistId: artistId) {
      id
      active_name
      description
      promotion_url
      artistImageURL
      category {
        name
      }
    }
  }
`;

export const ARTIST_LIKE_TOGGLE = gql`
  mutation artistLikeToggle($artistId: String!, $status: Boolean!) {
    artistLikeToggle(artistId: $artistId, status: $status)
  }
`;
