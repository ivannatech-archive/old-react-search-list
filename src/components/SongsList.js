import React from 'react';
import styled from 'styled-components';

const ItemContainer = styled.div`
  border-radius: 4px;
  background-color: #fff;
  height: 150px;
  width: 480px;
  color: #29303b;
  margin-bottom: 20px;
  margin-right: 15px;
  padding: 15px;
`;

const Thumbnail = styled.img`
  width: auto;
  height: 100%;
  border: 0;
  vertical-align: middle;
  float: left;
  margin-right: 10px;
`;

const SongTitle = styled.div`
  font-weight: 700;
  margin-bottom: 5px;
`;

const Artist = styled.div`
  margin-bottom: 5px;
`;

const Album = styled.div`
  margin-bottom: 5px;
`;

const ItemLink = styled.a`
  text-decoration: none;
`;

function SongsList(props) {
  return (
    <ItemLink
      href="https://www.youtube.com/watch?v=u7ukvQZIgn8"
      title="Clique para ouvir"
    >
      <ItemContainer>
        <Thumbnail src={props.image} />

        <SongTitle>{props.title}</SongTitle>
        <Artist> Artista: {props.artist}</Artist>
        <Album> Álbum: {props.album}</Album>
        {/* <Button variant="primary">Ouvir</Button> */}

        {/* <SongTitle>"SWARM" lyric video</SongTitle>
        <Artist>Artista: Thank You Scientist</Artist>
        <Album> Álbum: Terraformer</Album> */}
      </ItemContainer>
    </ItemLink>
  );
}

export default SongsList;
