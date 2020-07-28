import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

const Header = styled.header`
  text-align: center;
`

const ScoreCard = styled.div`
  display: flex;
  align-items: center
`

const CardDetails = styled.div``

const TotalScore = styled.div``

const ImgContainer = styled.div`
  width: 100px;
  height: 100px;

  img{
    width: 100%
  }
`

const Leaderboard = (props) => {
  const users = useSelector((state) => state.users);
  const sortedUsers = Object.keys(users).sort(
    (a, b) =>
      (users[b].questions.length +
      Object.keys(users[b].answers).length) -
      (users[a].questions.length + Object.keys(users[a].answers).length)
  );
  return (
    <div>
      <Header>Leaderboard</Header>
      {sortedUsers.map((key) => (
        <ScoreCard key={key}>
          <ImgContainer>
            <img src={users[key].avatarURL} alt="" />
          </ImgContainer>
          <CardDetails className="details">
            <h3>{users[key].name}</h3>
            <p>Answered Questions {users[key].questions.length}</p>
            <p>Created Questions {Object.keys(users[key].answers).length}</p>
          </CardDetails>
          <TotalScore>
            Total score: {users[key].questions.length + Object.keys(users[key].answers).length}
          </TotalScore>
        </ScoreCard>
      ))}
    </div>
  );
};

export default Leaderboard;
