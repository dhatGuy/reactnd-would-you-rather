import React from "react";
import { useSelector } from "react-redux";
import QuestionTeaser from "./QuestionTeaser";

const Dashboard = (props) => {
  const users = useSelector((state) => state.users);
  const questions = useSelector((state) => state.questions);

  return (
    <div>
      {Object.keys(questions).map((key) => {
        const { author, optionOne, id } = questions[key];
        return (
          <QuestionTeaser
            key={id}
            id={id}
            author={author}
            avatarURL={users[author].avatarURL}
            optionOne={optionOne.text}
          />
        );
      })}
    </div>
  );
};

export default Dashboard;
