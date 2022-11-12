import { gql } from "@apollo/client";

export const CREATE_ARTIST = gql`
  mutation createArtist($createArtistInput: CreateArtistInput!) {
    createArtist(createArtistInput: $createArtistInput) {
      id
    }
  }
`;

export const CREATE_ARTIST_IMAGE = gql`
  mutation createArtistImage($createArtistImageInput: CreateArtistImageInput!) {
    createArtistImage(createArtistImageInput: $createArtistImageInput) {
      id
      url
    }
  }
`;
