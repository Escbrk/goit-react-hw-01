// import React from 'react';
import {
  Container,
  Avatar,
  StatsContainer,
  StatsItem,
  Description,
  Info,
} from './Profile.styled';

const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <Container classNameName="profile">
      <Description className="description">
        <Avatar src={avatar} alt="User avatar" className="avatar" />
        <Info className="name">{username}</Info>
        <Info className="tag">@{tag}</Info>
        <Info className="location">{location}</Info>
      </Description>

      <StatsContainer className="stats">
        <StatsItem>
          <span className="label">Followers </span>
          <span className="quantity">{stats.followers}</span>
        </StatsItem>
        <StatsItem>
          <span className="label">Views </span>
          <span className="quantity">{stats.views}</span>
        </StatsItem>
        <StatsItem>
          <span className="label">Likes </span>
          <span className="quantity">{stats.likes}</span>
        </StatsItem>
      </StatsContainer>
    </Container>
  );
};

export default Profile;
