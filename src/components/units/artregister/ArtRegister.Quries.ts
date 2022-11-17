import { gql } from "@apollo/client";

export const CREATE_BOARDS = gql`
  mutation createBoards($createBoardInput: CreateBoardInput!) {
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

export const UPLOAD_FILE = gql`
  mutation uploadFile($file: Upload!) {
    uploadFile(file: $file)
  }
`;
