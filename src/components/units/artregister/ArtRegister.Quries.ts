import { gql } from "@apollo/client";

export const UPLOAD_FILE = gql`
  mutation uploadFile($file: Upload!) {
    uploadFile(file: $file)
  }
`;

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
