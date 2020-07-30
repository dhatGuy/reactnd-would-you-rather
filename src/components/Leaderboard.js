import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

const Header = styled.h1`
  text-align: center;
`

const ScoreCard = styled.div`
  display: flex;
  align-items: center;
  border: 3px solid #d4eae6;
  margin-bottom: 10px;
`

const CardDetails = styled.div`
  border-left: 2px solid #d4eae6;
  padding-left: 10px;
`

const TotalScore = styled.div`
  /* border-left:2px solid #d4eae6 */
`

const ImgContainer = styled.div`
  width: 100px;
  height: 100px;
  margin-right: 5px;

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
            <p>Answered Que: {users[key].questions.length}</p>
            <p>Created Que: {Object.keys(users[key].answers).length}</p>
          <TotalScore>
            Total: {users[key].questions.length + Object.keys(users[key].answers).length}
          </TotalScore>
          </CardDetails>
        </ScoreCard>
      ))}
    </div>
  );
};

export default Leaderboard;
