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

export const FETCH_USER = gql`
  query fetchUser {
    fetchUser {
      id
    }
  }
`;

export const FETCH_ARTIST = gql`
  query fetchArtist {
    fetchArtist {
      id
      active_name
      description
      promotion_url
      artist_image {
        url
      }
      category {
        id
        string
      }
      member {
        id
        artist
        memberImage {
          url
        }
      }
    }
  }
`;

export const UPDATE_ARTIST_IMAGE = gql`
  mutation updateArtistImage($updateArtistImageInput: UpdateArtistImageInput!) {
    updateArtistImage(updateArtistImageInput: $updateArtistImageInput) {
      id
    }
  }
`;

export const UPDATE_ARTIST = gql`
  mutation updateArtist($updateArtistInput: UpdateArtistInput!) {
    updateArtist(updateArtistInput: $updateArtistInput)
  }
`;
