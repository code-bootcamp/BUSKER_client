import { gql } from "@apollo/client";

export const FETCH_BOARDS_BY_SEARCH = gql`
  query fetchBoardsBySearch($searchBoardInput: SearchBoardInput) {
    fetchBoardsBySearch(searchBoardInput: $searchBoardInput) {
      id
      artist {
        id
        active_name
      }
      title
      contents
      start_time
      end_time
      isShowTime
      boardAddress {
        id
        address
        lat
        lng
      }
      boardImageURL {
        id
        url
      }
      category {
        id
        name
      }
    }
  }
`;

export const FETCH_CITY = gql`
  query fetchCity($name: String!) {
    fetchCity(name: $name) {
      name
      district
    }
  }
`;

export const FETCH_CITYS = gql`
  query {
    fetchCitys {
      id
      name
    }
  }
`;

export const FETCH_CATEGORIES = gql`
  query {
    fetchCategories {
      id
      name
    }
  }
`;
