import * as S from "./style";

function Loading({ isloading }: { isloading: boolean }) {
  return (
    <>
      {isloading && (
        <S.LoadingContainer>
          <S.Loading />
        </S.LoadingContainer>
      )}
    </>
  );
}

export default Loading;
