import { gql } from "@apollo/client";

export const CREATE_ARTIST = gql`
  mutation createArtist($createArtistInput: CreateArtistInput!) {
    createArtist(createArtistInput: $createArtistInput) {
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
      artistImageURL
      category {
        id
        name
      }
      member {
        id
        artist
        memverImageURL
      }
    }
  }
`;

export const UPDATE_ARTIST = gql`
  mutation updateArtist($updateArtistInput: UpdateArtistInput!) {
    updateArtist(updateArtistInput: $updateArtistInput)
  }
`;
