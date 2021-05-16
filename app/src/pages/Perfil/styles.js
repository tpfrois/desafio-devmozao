import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  display: flex;
  height: 100vh;
`;

export const Error = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #3B4252;
  h1 {
    color: #ECEFF4;
    margin-bottom: 10px;
  }
  a {
    margin-top: 0;
  }
`;

export const ProfileContainer = styled.aside`
  display: flex;
  flex-direction: column;
  
  width: 450px;
  padding: 30px 25px;
  
  background: #3B4252;

  img {
    align-self: center;
    width: 300px;
    margin: 30px 0;
  }

  h1 {
    font-weight: 300;
    font-style: italic;
    font-size: 40px;
    color: #ECEFF4;
  }
  
  span {
    font-style: italic;
    font-size: 28px;
    color: #ECEFF4;
  }

  .bio {
    margin: 23px 0;
    font-weight: 400;
    font-size: 18px;
    color: #8190A5;
  }
`;

export const ProfileStats = styled.div`
  display: flex;
  align-items: center;
  color: #ECEFF4;
  margin-bottom: 20px;
  max-width: 100%;

  span {
    font-style: italic;
    font-size: 20px;
    margin: 0 8px 0 4px;
  }
`;

export const OptionalInfo = styled.div`
    display: flex;
    align-items: center;

    margin-bottom: 15px;
    word-break: break-all;
    color: #ECEFF4;

    svg {
      margin-right: 14px;
    }
    span {
      flex: 1;
    }
`;

export const Button = styled(Link)` 
  display: grid;
  place-content: center;
  align-self: center;

  width: 193px;
  height: 50px;
  margin-top: auto;

  background-color: #ECEFF4;
  border-radius: 5px;

  font-size: 18px;
  font-style: italic;
  color: #3B4252;
`;

export const Repositories = styled.main`
  flex: 1;
  padding: 15px 70px 0px 70px;
  max-height: 100vh;

  overflow-y: auto;
  overflow-x: hidden;

  //SCROLLBAR
  &::-webkit-scrollbar {
    width: 15px;
  }

  &::-webkit-scrollbar-track {
    display: none;
  }

  &::-webkit-scrollbar-thumb {
    border-right: 3px solid white;
    background: #3B4252;
    border-radius: 50px;
  }
  
  &::-webkit-scrollbar-thumb:hover {
    background: #8190a5;
  }
`;

export const RepositorieCard = styled.div`  
    padding: 15px 0;
    color: #3B4252;
    font-style: italic;

    border-bottom: 1px solid #ECEFF4;
    h2 {
      font-size: 24px;
    }
    p {
      font-size: 18px;
      word-wrap: break-word;
    }

    div {
      margin-top: 7px;
      display: flex;
      align-items: center;
      color: #8190a5;
      font-size: 20px;

      .circle {
        margin: 0 10px;
        height: 7px;
        width: 7px;
        border-radius: 50%;
        background: #8190A5;
      }
    }
`;