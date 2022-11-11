export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  DateTime: any;
  Upload: any;
};

export type IArtist = {
  __typename?: 'Artist';
  active_name: Scalars['String'];
  artist_image?: Maybe<IArtistImage>;
  category?: Maybe<ICategory>;
  description: Scalars['String'];
  id: Scalars['String'];
  pick_user: Array<ILikeArtist>;
  promotion_url: Scalars['String'];
};

export type IArtistImage = {
  __typename?: 'ArtistImage';
  artist: IArtist;
  id: Scalars['String'];
  url: Scalars['String'];
};

export type IBoardAddress = {
  __typename?: 'BoardAddress';
  address: Scalars['String'];
  address_city: Scalars['String'];
  address_district: Scalars['String'];
  id: Scalars['String'];
  lat: Scalars['Float'];
  lng: Scalars['Float'];
};

export type IBoardAddressInput = {
  address: Scalars['String'];
  lat: Scalars['Float'];
  lng: Scalars['Float'];
};

export type IBoardImages = {
  __typename?: 'BoardImages';
  boards: IBoards;
  id: Scalars['String'];
  url: Scalars['String'];
};

export type IBoards = {
  __typename?: 'Boards';
  artist: IArtist;
  boardAddress: IBoardAddress;
  boardImages: Array<IBoardImages>;
  category: ICategory;
  comments: Array<IComments>;
  contents: Scalars['String'];
  createAt: Scalars['DateTime'];
  day: Scalars['DateTime'];
  end_time: Scalars['DateTime'];
  id: Scalars['String'];
  isShowTime: Scalars['Boolean'];
  start_time: Scalars['DateTime'];
  title: Scalars['String'];
};

export type ICategory = {
  __typename?: 'Category';
  id: Scalars['String'];
  name: Scalars['String'];
};

export type IComments = {
  __typename?: 'Comments';
  board: IBoards;
  content: Scalars['String'];
  id: Scalars['String'];
  user: IUser;
};

export type ICreateArtistImageInput = {
  artistId: Scalars['String'];
  url: Scalars['String'];
};

export type ICreateArtistInput = {
  active_name: Scalars['String'];
  category: Scalars['String'];
  description: Scalars['String'];
  promotion_url: Scalars['String'];
};

export type ICreateBoardInput = {
  boardAddressInput: IBoardAddressInput;
  category: Scalars['String'];
  contents: Scalars['String'];
  day?: InputMaybe<Scalars['String']>;
  end_time?: InputMaybe<Scalars['String']>;
  start_time?: InputMaybe<Scalars['String']>;
};

export type ICreateCommentInput = {
  boardId: Scalars['String'];
  content: Scalars['String'];
};

export type ICreateMemberImageInput = {
  memberId: Scalars['String'];
  url: Scalars['String'];
};

export type ICreateMemberInput = {
  name: Scalars['String'];
  role: Scalars['String'];
};

export type ICreateUserImageInput = {
  url: Scalars['String'];
  userId: Scalars['String'];
};

export type ICreateUserInput = {
  email: Scalars['String'];
  password: Scalars['String'];
};

export type ILikeArtist = {
  __typename?: 'LikeArtist';
  artist: IArtist;
  id: Scalars['String'];
  user: IUser;
};

export type IMember = {
  __typename?: 'Member';
  artist: IArtist;
  id: Scalars['String'];
  memberImage: IMemberImage;
};

export type IMemberImage = {
  __typename?: 'MemberImage';
  id: Scalars['String'];
  member: IMember;
  url: Scalars['String'];
};

export type IMutation = {
  __typename?: 'Mutation';
  SendVerificationEmail: Scalars['String'];
  artistLikeToggle: Scalars['Boolean'];
  confirmVerificationEmail: Scalars['Boolean'];
  createArtist: IArtist;
  createArtistImage: IArtistImage;
  createBoardImages: Array<IBoardImages>;
  createBoards: IBoards;
  createComment: IComments;
  createMember: IMember;
  createMemberImage: IMemberImage;
  createUser: IUser;
  createUserImage: IUserImage;
  deleteArtist: Scalars['Boolean'];
  deleteArtistImage: Scalars['Boolean'];
  deleteArtistLike: Scalars['Boolean'];
  deleteBoard: Scalars['Boolean'];
  deleteBoardImages: Scalars['Boolean'];
  deleteComment: Scalars['Boolean'];
  deleteMember: Scalars['Boolean'];
  deleteMemberImage: Scalars['Boolean'];
  deleteUser: Scalars['Boolean'];
  deleteUserImage: Scalars['Boolean'];
  login: Scalars['String'];
  logout: Scalars['String'];
  nonLoginConfirmVerificationEmail: Scalars['Boolean'];
  nonLoginSendVerificationEmail: Scalars['String'];
  resetPassword: Scalars['Boolean'];
  restoreAccessToken: Scalars['String'];
  updateArtist: Scalars['Boolean'];
  updateArtistImage: IArtistImage;
  updateBoard: IBoards;
  updateBoardImages: Array<IBoardImages>;
  updateComment: IComments;
  updateMember: Scalars['Boolean'];
  updateMemberImage: IMemberImage;
  updateUser: IUser;
  updateUserImage: IUserImage;
  uploadFile: Scalars['String'];
  uploadFiles: Array<Scalars['String']>;
};


export type IMutationArtistLikeToggleArgs = {
  artistId: Scalars['String'];
  status: Scalars['Boolean'];
};


export type IMutationConfirmVerificationEmailArgs = {
  authNumber: Scalars['String'];
};


export type IMutationCreateArtistArgs = {
  createArtistInput: ICreateArtistInput;
};


export type IMutationCreateArtistImageArgs = {
  createArtistImageInput: ICreateArtistImageInput;
};


export type IMutationCreateBoardImagesArgs = {
  boardId: Scalars['String'];
  urls: Array<Scalars['String']>;
};


export type IMutationCreateBoardsArgs = {
  createBoardInput?: InputMaybe<ICreateBoardInput>;
};


export type IMutationCreateCommentArgs = {
  createCommentInput: ICreateCommentInput;
};


export type IMutationCreateMemberArgs = {
  artistId: Scalars['String'];
  createMemberInput: ICreateMemberInput;
};


export type IMutationCreateMemberImageArgs = {
  createMemberImageInput: ICreateMemberImageInput;
};


export type IMutationCreateUserArgs = {
  createUserInput: ICreateUserInput;
};


export type IMutationCreateUserImageArgs = {
  createUserImageInput: ICreateUserImageInput;
};


export type IMutationDeleteArtistImageArgs = {
  artistImageId: Scalars['String'];
};


export type IMutationDeleteArtistLikeArgs = {
  artistId: Scalars['String'];
};


export type IMutationDeleteBoardArgs = {
  boardId: Scalars['String'];
};


export type IMutationDeleteBoardImagesArgs = {
  boardImagesId: Scalars['String'];
};


export type IMutationDeleteCommentArgs = {
  commentId: Scalars['String'];
};


export type IMutationDeleteMemberArgs = {
  memberId: Scalars['String'];
};


export type IMutationDeleteMemberImageArgs = {
  memberImageId: Scalars['String'];
};


export type IMutationDeleteUserImageArgs = {
  userImageId: Scalars['String'];
};


export type IMutationLoginArgs = {
  email: Scalars['String'];
  password: Scalars['String'];
};


export type IMutationNonLoginConfirmVerificationEmailArgs = {
  authNumber: Scalars['String'];
  email: Scalars['String'];
};


export type IMutationNonLoginSendVerificationEmailArgs = {
  email: Scalars['String'];
};


export type IMutationResetPasswordArgs = {
  updatePasswordInput: IUpdatePasswordInput;
};


export type IMutationUpdateArtistArgs = {
  updateArtistInput: IUpdateArtistInput;
};


export type IMutationUpdateArtistImageArgs = {
  updateArtistImageInput: IUpdateArtistImageInput;
};


export type IMutationUpdateBoardArgs = {
  boardId: Scalars['String'];
  updateBoardInput: IUpdateBoardInput;
};


export type IMutationUpdateBoardImagesArgs = {
  boardId: Scalars['String'];
  urls: Array<Scalars['String']>;
};


export type IMutationUpdateCommentArgs = {
  commentId: Scalars['String'];
  content: Scalars['String'];
};


export type IMutationUpdateMemberArgs = {
  memberId: Scalars['String'];
  updateMemberInput: IUpdateMemberInput;
};


export type IMutationUpdateMemberImageArgs = {
  updateMemberImageInput: IUpdateMemberImageInput;
};


export type IMutationUpdateUserArgs = {
  updateUserInput: IUpdateUserInput;
};


export type IMutationUpdateUserImageArgs = {
  updateUserImageInput: IUpdateUserImageInput;
};


export type IMutationUploadFileArgs = {
  file: Scalars['Upload'];
};


export type IMutationUploadFilesArgs = {
  files: Array<Scalars['Upload']>;
};

export type IQuery = {
  __typename?: 'Query';
  fetchArtist: IArtist;
  fetchBoard: IBoards;
  fetchBoardByAddress_city: Array<IBoards>;
  fetchBoardByAddress_district: Array<IBoards>;
  fetchBoardByCategory: Array<IBoards>;
  fetchBoards: Array<IBoards>;
  fetchComment: IComments;
  fetchMapBoards: Array<IBoards>;
  fetchRecentBoards: Array<IBoards>;
  fetchUser: IUser;
};


export type IQueryFetchBoardArgs = {
  boardId: Scalars['String'];
};


export type IQueryFetchBoardByAddress_CityArgs = {
  city: Scalars['String'];
};


export type IQueryFetchBoardByAddress_DistrictArgs = {
  district: Scalars['String'];
};


export type IQueryFetchBoardByCategoryArgs = {
  category: Scalars['String'];
};


export type IQueryFetchBoardsArgs = {
  searchBoardInput?: InputMaybe<ISearchBoardInput>;
};


export type IQueryFetchCommentArgs = {
  boardId: Scalars['String'];
};


export type IQueryFetchMapBoardsArgs = {
  distance: Scalars['Float'];
  lat: Scalars['Float'];
  lng: Scalars['Float'];
};


export type IQueryFetchRecentBoardsArgs = {
  artistId: Scalars['String'];
};

export type ISearchBoardInput = {
  category?: InputMaybe<Array<Scalars['String']>>;
  district?: InputMaybe<Scalars['String']>;
  page?: InputMaybe<Scalars['Int']>;
};

export type IUpdateArtistImageInput = {
  artistId?: InputMaybe<Scalars['String']>;
  url?: InputMaybe<Scalars['String']>;
};

export type IUpdateArtistInput = {
  active_name?: InputMaybe<Scalars['String']>;
  category?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  promotion_url?: InputMaybe<Scalars['String']>;
};

export type IUpdateBoardInput = {
  boardAddressInput?: InputMaybe<IBoardAddressInput>;
  category?: InputMaybe<Scalars['String']>;
  contents?: InputMaybe<Scalars['String']>;
  day?: InputMaybe<Scalars['String']>;
  end_time?: InputMaybe<Scalars['String']>;
  start_time?: InputMaybe<Scalars['String']>;
};

export type IUpdateMemberImageInput = {
  memberId?: InputMaybe<Scalars['String']>;
  url?: InputMaybe<Scalars['String']>;
};

export type IUpdateMemberInput = {
  name?: InputMaybe<Scalars['String']>;
  role?: InputMaybe<Scalars['String']>;
};

export type IUpdatePasswordInput = {
  password: Scalars['String'];
};

export type IUpdateUserImageInput = {
  url?: InputMaybe<Scalars['String']>;
  userId?: InputMaybe<Scalars['String']>;
};

export type IUpdateUserInput = {
  nickname: Scalars['String'];
};

export type IUser = {
  __typename?: 'User';
  authorities: IUserAuthority;
  email: Scalars['String'];
  id: Scalars['String'];
  liked_artist: Array<ILikeArtist>;
  nickname: Scalars['String'];
  userImage?: Maybe<IUserImage>;
  wrong_pass: Scalars['Int'];
};

export type IUserAuthority = {
  __typename?: 'UserAuthority';
  artist: IArtist;
  artistId: Scalars['String'];
  authority: Scalars['String'];
  id: Scalars['String'];
  userId: Scalars['String'];
};

export type IUserImage = {
  __typename?: 'UserImage';
  id: Scalars['String'];
  url: Scalars['String'];
  user: IUser;
};
