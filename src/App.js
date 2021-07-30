import SongsList from './components/SongsList';
import { Container } from 'react-bootstrap';
import { getSongs } from './service/SongsService';
import { useEffect, useState } from 'react';
import styled from 'styled-components';

import SearchBar from './components/SearchBar';

const ListContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  background-color: #ccc;
  padding: 60px;
`;

function App() {
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    setSongs(getSongs());
  }, []);

  return (
    <Container>
      <h1>Trabalho Prático - AJS por Ivanna Oliveira</h1>
      <h2>Lista de Músicas</h2>
      <hr />
      <SearchBar setSongs={setSongs} />
      <ListContainer>
        {songs.map((song) => {
          return (
            <SongsList
              key={song.url}
              title={song.title}
              image={song.image}
              artist={song.artist}
              album={song.album}
              url={song.url}
            />
          );
        })}
      </ListContainer>
    </Container>
  );
}

export default App;
