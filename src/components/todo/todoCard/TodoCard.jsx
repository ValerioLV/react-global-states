import { useContext } from "react";
import styles from "./index.module.scss";
import { GlContextToDo } from "../../../global_states/context";

const TodoCard = ({ taskData }) => {
	const { state, dispatch } = useContext(GlContextToDo);

	const onHandleDeleteTask = () => {
		dispatch({ type: "DELETE_TASK", payload: taskData.id });
	};

	return (
		<div className={styles.TodoCard}>
			<div className={styles.info}>
				<img
					src={taskData.image}
					alt={taskData.username}
				/>
				<button
					className={styles.Delete_task}
					onClick={onHandleDeleteTask}>
					🗑️
				</button>
				{taskData.completed && <button className={styles.completed}>V</button>}
			</div>
			<div className={styles.content}>
				<span>{taskData.username}</span>
				<p>{taskData.todo}</p>
			</div>
		</div>
	);
};

export default TodoCard;
