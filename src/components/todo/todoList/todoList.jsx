import { useContext, useEffect } from "react";
import styles from "./index.module.scss";
import TodoCard from "../todoCard";
import { GlContextToDo } from "../../../global_states/context";
import { GET } from "../../../utils/get";

const TodoList = () => {
	const { state, dispatch } = useContext(GlContextToDo);

	useEffect(() => {
		GET("todos").then((res) => {
			dispatch({ type: "SET_TASKS_LIST", payload: res.todos });
		});
	}, []);

	return (
		<div className={styles.TodoList}>
			{state.tasksListData.map((task) => (
				<TodoCard
					taskData={task}
					key={task.id}
				/>
			))}
		</div>
	);
};

export default TodoList;
