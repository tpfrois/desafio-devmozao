import React from 'react';
import { useHistory } from 'react-router-dom';
import { FiSearch } from 'react-icons/fi';
import { Container, SearchBar } from './styles';

const Home = () => {
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    const user = data.get("user");

    history.push(`/perfil/${user}`);
  };

  return (
    <Container>
      <p>Search Devs</p>
      <SearchBar onSubmit={handleSubmit}>
        <input name="user" type="text" placeholder="Type the username here..." required />
        <button type="submit">
          <FiSearch size={30} />
          Buscar
        </button>
      </SearchBar>
    </Container>
  )
};

export default Home;