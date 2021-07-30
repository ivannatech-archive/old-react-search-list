import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import { InputGroup, FormControl, Button, Form, Col } from 'react-bootstrap';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { getSongs } from '../service/SongsService';

const SearchHeader = styled.div`
  margin-top: 4px;
`;

function SearchBar(props) {
  const [search, setSearch] = useState('');

  const history = useHistory();

  function newBook() {
    history.push('/songs/new');
  }

  function handleOnSubmit(event) {
    event.preventDefault();
    const songs = getSongs();
    const results = songs.filter(
      (song) => song.artist.toLowerCase().indexOf(search) !== -1
    );
    props.setSongs(results);
  }

  function handleSearchChange(event) {
    setSearch(event.target.value.toLowerCase());
  }

  return (
    <SearchHeader>
      <Form onSubmit={handleOnSubmit}>
        <Form.Row>
          <Col className="col-xl-4">
            <InputGroup className="mb-3">
              <FormControl
                placeholder="Pesquise pela sua banda favorita"
                aria-label="Pesquise suas músicas"
                onChange={handleSearchChange}
              />
              <InputGroup.Append>
                <Button type="submit">
                  <FontAwesomeIcon icon={faSearch} />
                </Button>
              </InputGroup.Append>
            </InputGroup>
          </Col>
        </Form.Row>
      </Form>
    </SearchHeader>
  );
}

export default SearchBar;
