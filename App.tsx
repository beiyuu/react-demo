import React from "react";
import ReactDOM from "react-dom/client";
import { AppStorage } from "./src/AppContext";
import * as C from "./src/globalStyles";
import styled from "styled-components";
import CreateNewTask from "./src/components/create-new";
import TodayTasks from "./src/components/today-task";
import Progress from "./src/components/progress";
import CompletedTasks from "./src/components/complete-task";

export const AllMessage = {
  newTask: "创建新任务",
  taskName: "Nome da tarefa",
  todayTask: "Tarefas de hoje",
  congra: "Parabéns! Você concluiu todas as tarefas de hoje!", 
  complete: "Tarefas concluídas",
  progress: "进度",
  noMore: "Você não tem tarefas disponíveis",
}

const Headerdiv = styled.header`
  border-bottom: 1px solid #151a37;
`;

const HeaderContainer = styled.div`
  max-width: 1248px;
  padding: 20px 16px;
  margin: 0 auto;

  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;

  @media (max-width: 400px) {
    flex-direction: column;
  }
`;

const HeaderTitle = styled.h1`
  font-family: "Montserrat";
  font-size: 2rem;
  line-height: 1;
  font-weight: 400;
  color: #fff;
`;

const Header = () => {
  return (
    <Headerdiv>
      <HeaderContainer>
        <HeaderTitle>To-Do List</HeaderTitle>
      </HeaderContainer>
    </Headerdiv>
  );
};


const App = () => {
  return (
    <>
      <C.GlobalStyle/>
      <C.Container>
        <Header />
        <C.Content>
          <CreateNewTask />
          <TodayTasks />
          <C.Divider />
          <Progress />
          <CompletedTasks />
        </C.Content>
      </C.Container>
    </>
  );
};

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <AppStorage>
      <App />
    </AppStorage>
  </React.StrictMode>
);