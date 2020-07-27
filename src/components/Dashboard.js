import React from "react";
import { useSelector } from "react-redux";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import QuestionTeaser from "./QuestionTeaser";

const Dashboard = (props) => {
  const authedUser = useSelector((state) => state.authedUser);
  const questions = useSelector((state) => state.questions);
  const allQuestions = Object.keys(questions).sort((a, b) => {
    return questions[b].timestamp - questions[a].timestamp;
  });
  const answered = allQuestions.filter((que) =>
    [
      ...questions[que].optionOne.votes,
      ...questions[que].optionTwo.votes,
    ].includes(authedUser)
      ? questions[que]
      : null
  );
  const unAnswered = allQuestions.filter((que) =>
    [
      ...questions[que].optionOne.votes,
      ...questions[que].optionTwo.votes,
    ].includes(authedUser)
      ? null
      : questions[que]
  );

  return (
    <div>
      <Tabs>
        <TabList>
          <Tab>Unanswered Question</Tab>
          <Tab>Answered Questions</Tab>
        </TabList>

        <TabPanel>
          <div>
            {unAnswered.map((key) => {
              const { id } = questions[key];
              return <QuestionTeaser key={id} id={key} />;
            })}
          </div>
        </TabPanel>
        <TabPanel>
          <div>
            {answered.map((key) => {
              const { id } = questions[key];
              return <QuestionTeaser key={id} id={key} />;
            })}
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Dashboard;
