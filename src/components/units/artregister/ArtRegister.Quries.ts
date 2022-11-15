import { gql } from "@apollo/client";

export const CREATE_BOARD = gql`
  mutation createBoards($createBoardInput: CreateBoardInput) {
    createBoards(createBoardInput: $createBoardInput) {
      id
    }
  }
`;

export const FETCH_ARTIST = gql`
  query fetchArtist($artistId: String!) {
    fetchArtist(artistId: $artistId) {
      active_name
    }
  }
`;

export const CREATE_BOARD_IMAGES = gql`
  mutation createBoardImages($boardId: String!, $urls: [String]!) {
    createBoardImages(boardId: $boardId, urls: $urls) {
      id
      url
    }
  }
`;
