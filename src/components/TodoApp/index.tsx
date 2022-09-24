import { useEffect, useState } from "react";
import { Container } from "../../styles/GlobalStyles";
import { Actives, DayOfTheWeek, Wrapper } from "./styled";

import Forecast from "../Forecast";

import { AiOutlinePlus } from "react-icons/ai";
import { RiTodoLine } from "react-icons/ri";
import { useGlobalContext } from "../../context/appContext";
import Tasks from "../Tasks";
import NewTask from "../NewTask";

interface PropsTemp {
  main: { temp: number };
  name: string;
  sys: { country: string };
  weather: [{ description: string }];
}

const TodoApp = () => {
  const { tasks, openModal } = useGlobalContext();

  const [isDayTime, setIsDayTime] = useState(true);

  const currentHour = new Date().getHours();

  useEffect(() => {
    if (currentHour > 18) {
      setIsDayTime(false);
    }
  }, [isDayTime]);

  return (
    <Container>
      <Wrapper isDayTime={isDayTime}>
        <nav>
          <div>
            Bom dia,<span> Gustavo</span>
          </div>
          <button onClick={openModal}>
            <AiOutlinePlus />
          </button>
        </nav>

        <NewTask />

        <Forecast />

        <Actives>
          <RiTodoLine size="26px" />
          tarefas 3/{tasks.length}
        </Actives>
      </Wrapper>

      <Tasks />
    </Container>
  );
};
export default TodoApp;
