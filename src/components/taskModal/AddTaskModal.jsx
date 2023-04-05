import { useState, useReducer, useContext } from "react";
import styles from "./index.module.scss";
import { GlContextToDo } from "../../global_states/context";

const AddTodoModal = () => {
	const { state, dispatch } = useContext(GlContextToDo);

	const onHandleUserChange = (e) => {
		state.protoTask.username = e.target.value;
	};
	const onHandleTaskChange = (e) => {
		state.protoTask.todo = e.target.value;
	};

	const onHandleDone = (e) => {
		state.protoTask.completed = e.target.value;
	};
	const onHandleSubmit = (e) => {
		e.preventDefault();
		dispatch({ type: "SET_TASK_ID" });
		dispatch({
			type: "CREATE_NEW_TASK",
			payload: state.protoTask,
		});
		dispatch({ type: "CLOSE_MODAL" });
	};

	return (
		<div className={styles.AddTaskModal}>
			<div className={styles.Overlay} />
			<div className={styles.content}>
				<h3>Aggiungi una nuova task</h3>
				<form onSubmit={onHandleSubmit}>
					<label htmlFor="username">Inserisci lo username </label>
					<input
						type="text"
						name="username"
						className={styles.Input}
						onChange={onHandleUserChange}
					/>
					<label htmlFor="todo">Aggiungi una task</label>
					<input
						type="text"
						name="todo"
						className={styles.Input}
						onChange={onHandleTaskChange}
					/>
					<input
						type="checkbox"
						onClick={onHandleDone}
					/>
					<input
						type="submit"
						value={"Aggiungi"}
						className={styles.Submit}
					/>
				</form>
			</div>
		</div>
	);
};

export default AddTodoModal;
