import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  p {
    font-size: 40px;
    font-style: italic;
    color: #3B4252;
  }
`;

export const SearchBar = styled.form`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  input {
    border: 1px solid #3B4252;
    border-radius: 5px;
    width: 400px;
    height: 50px;
    padding: 12px 23px;
    margin-bottom: 10px;

    &::placeholder {
      color: #8190A5;
      font-style: italic;
      font-size: 18px;
    }
  }
  
  button {
    width: 118px;
    height: 50px;
    border-radius: 5px;
    
    display: flex;
    gap: 5px;
    align-items: center;
    justify-content: center;

    background-color: #47525E;

    font-style: italic;
    font-size: 22px;
    color: #ECEFF4;
  }
`;