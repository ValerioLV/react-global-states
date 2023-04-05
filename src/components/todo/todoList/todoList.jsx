import { useContext } from "react";
import styles from "./index.module.scss";
import TodoCard from "../todoCard";
import { GlContextToDo } from "../../../global_states/context";

const TodoList = () => {
	const { state, dispatch } = useContext(GlContextToDo);

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
