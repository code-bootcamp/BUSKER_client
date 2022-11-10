import { gql } from "@apollo/client";

export const SEND_VERIFICATION_EMAIL = gql`
  mutation SendVerificationEmail {
    SendVerificationEmail
  }
`;

export const CONFIRM_VERIFICATION_EMAIL = gql`
  mutation confirmVerificationEmail($authNumber: String!) {
    confirmVerificationEmail(authNumber: $authNumber)
  }
`;
