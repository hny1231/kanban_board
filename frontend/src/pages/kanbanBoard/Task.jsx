// COMPONENT
import Card from "./Card";

// STYLE
import styled from "styled-components";

function Task({ taskData }) {
    const TASK_NAME = taskData.map((taskArr) => {
        return taskArr.t_name;
    });

    const colorArr = ["#3cb371", "#FBAD54", "#FB7754", "#3a7e9f"];

    return (
        <TaskWrapper>
            {TASK_NAME.map((task, index) => {
                return (
                    <TaskContents key={index}>
                        <TaskTitle index={index} colorArr={colorArr}>
                            {task}
                        </TaskTitle>
                        <Card taskData={taskData[index]} />
                    </TaskContents>
                );
            })}
        </TaskWrapper>
    );
}

export default Task;

const TaskWrapper = styled.section`
    display: flex;
`;

const TaskContents = styled.div`
    margin-right: 34px;
`;

const TaskTitle = styled.h1`
    display: flex;
    align-items: center;
    width: 18vw;
    min-width: 300px;
    max-width: 300px;
    height: 60px;
    font-size: 2.2rem;
    text-transform: uppercase;
    letter-spacing: -1px;
    word-spacing: 4px;
    color: #fff;
    padding: 8px;
    border-radius: ${({ theme }) => theme.borderRadius.basic};
    background-color: ${({ index, colorArr }) => colorArr[index]};
    -webkit-text-stroke: 0.5px ${({ index, colorArr }) => colorArr[index]};
`;
