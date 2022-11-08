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

export type IBoards = {
  __typename?: 'Boards';
  artist: IArtist;
  boardAddress: IBoardAddress;
  category: ICategory;
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

export type ICreateArtistInput = {
  active_name: Scalars['String'];
  description: Scalars['String'];
  promotion_url: Scalars['String'];
};

export type ICreateBoardInput = {
  artist: Scalars['String'];
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

export type IMutation = {
  __typename?: 'Mutation';
  artistLikeToggle: Scalars['Boolean'];
  confirmVerificationEmail: Scalars['Boolean'];
  createArtist: IArtist;
  createBoards: IBoards;
  createComment: IComments;
  createUser: IUser;
  deleteArtist: Scalars['Boolean'];
  deleteBoard: Scalars['Boolean'];
  deleteComment: Scalars['Boolean'];
  deleteUser: Scalars['Boolean'];
  login: Scalars['String'];
  logout: Scalars['String'];
  resetPassword: Scalars['Boolean'];
  restoreAccessToken: Scalars['String'];
  updateArtist: Scalars['Boolean'];
  updateBoard: IBoards;
  updateComment: IComments;
  updateUser: IUser;
  uploadFile: Scalars['String'];
  uploadFiles: Array<Scalars['String']>;
};


export type IMutationArtistLikeToggleArgs = {
  artistId: Scalars['String'];
  status: Scalars['Boolean'];
  userId: Scalars['String'];
};


export type IMutationConfirmVerificationEmailArgs = {
  authNumber: Scalars['String'];
  email: Scalars['String'];
};


export type IMutationCreateArtistArgs = {
  createArtistInput: ICreateArtistInput;
};


export type IMutationCreateBoardsArgs = {
  createBoardInput?: InputMaybe<ICreateBoardInput>;
};


export type IMutationCreateCommentArgs = {
  createCommentInput: ICreateCommentInput;
};


export type IMutationCreateUserArgs = {
  createUserInput: ICreateUserInput;
};


export type IMutationDeleteArtistArgs = {
  artistId: Scalars['String'];
};


export type IMutationDeleteBoardArgs = {
  boardId: Scalars['String'];
};


export type IMutationDeleteCommentArgs = {
  commentId: Scalars['String'];
};


export type IMutationDeleteUserArgs = {
  userId: Scalars['String'];
};


export type IMutationLoginArgs = {
  email: Scalars['String'];
  password: Scalars['String'];
};


export type IMutationResetPasswordArgs = {
  updatePasswordInput: IUpdatePasswordInput;
};


export type IMutationUpdateArtistArgs = {
  artistId: Scalars['String'];
  updateArtistInput: IUpdateArtistInput;
};


export type IMutationUpdateBoardArgs = {
  boardId: Scalars['String'];
  updateBoardInput: IUpdateBoardInput;
};


export type IMutationUpdateCommentArgs = {
  commentId: Scalars['String'];
  content: Scalars['String'];
  userId: Scalars['String'];
};


export type IMutationUpdateUserArgs = {
  updateUserInput: IUpdateUserInput;
  userId: Scalars['String'];
};


export type IMutationUploadFileArgs = {
  file: Scalars['Upload'];
};


export type IMutationUploadFilesArgs = {
  files: Array<Scalars['Upload']>;
};

export type IQuery = {
  __typename?: 'Query';
  SendVerificationEmail: Scalars['String'];
  fetchArtist: IArtist;
  fetchBoard: IBoards;
  fetchBoardByCategory: Array<IBoards>;
  fetchBoards: Array<IBoards>;
  fetchComment: IComments;
  fetchUser: IUser;
};


export type IQuerySendVerificationEmailArgs = {
  email: Scalars['String'];
};


export type IQueryFetchArtistArgs = {
  artistId: Scalars['String'];
};


export type IQueryFetchBoardArgs = {
  boardId: Scalars['String'];
};


export type IQueryFetchBoardByCategoryArgs = {
  category: Scalars['String'];
};


export type IQueryFetchUserArgs = {
  userId: Scalars['String'];
};

export type IUpdateArtistInput = {
  active_name?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  promotion_url?: InputMaybe<Scalars['String']>;
};

export type IUpdateBoardInput = {
  artist?: InputMaybe<Scalars['String']>;
  boardAddressInput?: InputMaybe<IBoardAddressInput>;
  category?: InputMaybe<Scalars['String']>;
  contents?: InputMaybe<Scalars['String']>;
  day?: InputMaybe<Scalars['String']>;
  end_time?: InputMaybe<Scalars['String']>;
  start_time?: InputMaybe<Scalars['String']>;
};

export type IUpdatePasswordInput = {
  password: Scalars['String'];
  userId: Scalars['String'];
};

export type IUpdateUserInput = {
  email?: InputMaybe<Scalars['String']>;
  is_auth?: InputMaybe<Scalars['Boolean']>;
  nickname?: InputMaybe<Scalars['String']>;
};

export type IUser = {
  __typename?: 'User';
  authorities: Array<IUserAuthority>;
  email: Scalars['String'];
  id: Scalars['String'];
  liked_artist: Array<ILikeArtist>;
  nickname: Scalars['String'];
  wrong_pass: Scalars['Int'];
};

export type IUserAuthority = {
  __typename?: 'UserAuthority';
  authority: Scalars['String'];
  id: Scalars['String'];
  userId: Scalars['String'];
};
