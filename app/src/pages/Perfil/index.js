import React, { useEffect, useState } from 'react';
import { useRouteMatch } from 'react-router-dom';
import api from '../../services/api';
import { calculateDaysDifference } from '../../helpers/dateDifference';

import { FiUsers, FiHeart, FiStar, FiBriefcase, FiMapPin, FiMail, FiLink, FiTwitter } from 'react-icons/fi';
import { Error, Button, Container, OptionalInfo, ProfileContainer, ProfileStats, RepositorieCard, Repositories } from './styles';

const Perfil = () => {

  const { params } = useRouteMatch();

  const [error, setError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [user, setUser] = useState({});
  const [userRepos, setUserRepos] = useState([]);
  const [userStarred, setUserStarred] = useState(0);

  useEffect(() => {
    async function getUser() {
      try {
        const response = await api.get(`/users/${params.user}`);
        const reposResponse = await api.get(`/users/${params.user}/repos`);
        const starredResponse = await api.get(`/users/${params.user}/starred`);

        setUser(response.data);
        setUserRepos(reposResponse.data);
        setUserStarred(starredResponse.data.length);
        setIsLoaded(true);
      } catch (error) {
        setIsLoaded(true);
        setError(true);
      }
    }
    getUser();
  }, [params.user, params.users]);

  if (!isLoaded) {
    return (
      <Error>
        <h1>Carregando...</h1>
      </Error>
    )
  }

  if (error) {
    return (
      <Error>
        <h1>Usuário não encontrado</h1>
        <Button to="/">Voltar</Button>
      </Error>
    )
  };

  return (
    <Container>
      <ProfileContainer>
        <img src={user.avatar_url} alt={user.name} />
        <h1>{user.name}</h1>
        <span>@{user.login}</span>
        <p className="bio">{user.bio}</p>

        <ProfileStats>
          <FiUsers size={20} />
          <span>{user.followers} followers</span>
          <FiHeart size={20} />
          <span>{user.following} following</span>
          <FiStar size={20} />
          <span>{userStarred} stars</span>
        </ProfileStats>
        {user.company &&
          <OptionalInfo>
            <FiBriefcase size={30} />
            <span>{user.company}</span>
          </OptionalInfo>
        }
        {user.location &&
          <OptionalInfo>
            <FiMapPin size={30} />
            <span>{user.location}</span>
          </OptionalInfo>
        }
        {user.email &&
          <OptionalInfo>
            <FiMail size={30} />
            <span>{user.email}</span>
          </OptionalInfo>
        }
        {user.blog &&
          <OptionalInfo>
            <FiLink size={30} />
            <span>{user.blog}</span>
          </OptionalInfo>
        }
        {user.twitter_username &&
          <OptionalInfo>
            <FiTwitter size={30} />
            <span>{user.twitter_username}</span>
          </OptionalInfo>
        }
        <Button to="/">Voltar</Button>
      </ProfileContainer>
      <Repositories>
        {
          userRepos.length > 0 ? userRepos.map((repo) => {
            const daysDiff = calculateDaysDifference(repo.updated_at);
            return (
              <RepositorieCard key={repo.id}>
                <h2>{repo.name}</h2>
                {repo.description && <p>{repo.description}</p>}
                <div>
                  <FiStar size={20} />
                  <span>{repo.stargazers_count} stars</span>
                  <span className="circle"></span>
                  <span>Updated {daysDiff} days ago</span>
                </div>
              </RepositorieCard>
            )
          }) : <h1>Este usuário não tem repositórios ):</h1>
        }
      </Repositories>
    </Container>
  );

}

export default Perfil;