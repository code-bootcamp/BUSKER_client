import { Divider } from "antd";
import * as S from "./MyPageDetail.styles";
import "antd/dist/antd.css";
import Button01 from "../../../common/buttons/01";
import ImageBox from "../../../common/imageBox";
import { IMyPageProps } from "./MyPageDetail.types";

const MyPageDetailUI = (props: IMyPageProps) => {
  return (
    <S.Wrapper>
      <S.Container>
        <S.Title>My Page</S.Title>
        <S.Contents>
          <S.UserInfo>
            <ImageBox width="72px" height="72px" src="" />
            <S.UserName>zㅣ존 법사</S.UserName>
          </S.UserInfo>
          <Divider />
          <S.MyPickBox>
            <S.PickComment>zㅣ존 법사님은 n명을 찜했어요!</S.PickComment>
            <S.PickedArtistBox>
              {props.data?.map((artist) => (
                <S.PickedArtistLi
                  onClick={props.onClickPickedArtist(artist.id)}
                  key={artist.id}
                >
                  <S.PickedArtistProfile>
                    <ImageBox width="4rem" height="4rem" src={artist.image} />
                    <S.PickedArtistName>{artist.name}</S.PickedArtistName>
                  </S.PickedArtistProfile>
                  <span>{artist.nextDate}</span>
                  <Button01
                    type="button"
                    onClick={props.onClickPickOff(artist.id)}
                  >
                    찜 해제
                  </Button01>
                </S.PickedArtistLi>
              ))}
            </S.PickedArtistBox>
          </S.MyPickBox>
        </S.Contents>
      </S.Container>
    </S.Wrapper>
  );
};

export default MyPageDetailUI;
