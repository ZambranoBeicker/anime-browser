import styled from "styled-components";

export default function AnimeCard({ title, src }) {
  const MainWrapper = styled.div`
    width: 25%;
    margin-top: 1.25rem;
  `;

  const TitleWrapper = styled.div`

    text-align:center;
    font-weight: bold;
    font-size: 1.5rem
    line-height: 2rem;

  `;
  return (
    <MainWrapper>
      <div className="px-5">
        <div>
          <img src={src} alt="Anime Card" />
        </div>
        <TitleWrapper>
          <h5>{title}</h5>
        </TitleWrapper>
      </div>
    </MainWrapper>
  );
}
