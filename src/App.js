import { useEffect, useState, Fragment, memo, useCallback } from "react";
import styled from "styled-components";
import AnimeCard from "./components/AnimeCard";
import SearchBar from "./components/SearchBar";

function App() {
  const [animes, setAnimes] = useState([]);
  const [value, setValue] = useState("");
  const MemoizedSearchBar = memo(SearchBar);

  const Main = styled.div`
    text-align: center;
    padding: 0 2.5rem;
    margin-top: 8rem;
  `;

  const TitleWrapper = styled.div`
    font-weight: bold;
    font-size: 3rem;
    line-height: 1;
    margin-bottom: 3.5rem;
  `;

  const ContentWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
  `;

  useEffect(() => {
    const fetchData = () => {
      fetch("https://kitsu.io/api/edge/anime")
        .then((res) => res.json())
        .then((res) => {
          console.info(res.data);
          setAnimes(res.data);
        })
        .catch((e) => {
          throw e;
        });
    };

    fetchData();
  }, []);

  return (
    <div>
      <Main>
        <TitleWrapper>
          <h1>Browse your animes</h1>
        </TitleWrapper>
        <div>
          <SearchBar
            onChange={(e) => {
              setValue(e.target.value);
              fetch(
                `https://kitsu.io/api/edge/anime?filter[text]=${e.target.value}`
              )
                .then((res) => res.json())
                .then((res) => setAnimes(res.data));
            }}
            value={value}
          />
        </div>
      </Main>

      <ContentWrapper>
        {animes.map((anime, index) => {
          return (
            <Fragment key={index}>
              <AnimeCard
                src={anime.attributes.posterImage.small}
                title={
                  anime.attributes.titles.en || anime.attributes.titles.en_jp
                }
              />
            </Fragment>
          );
        })}
      </ContentWrapper>
    </div>
  );
}

export default App;
