import { useState, useReducer, useContext } from "react";
import styles from "./index.module.scss";
import { GlContextToDo } from "../../global_states/context";

const AddTodoModal = () => {
	const { state, dispatch } = useContext(GlContextToDo);
	const [textInput, setTextInput] = useState("");
	const [isDone, setIsDone] = useState(false);

	const onHandleChange = (e) => setTextInput(() => e.target.value);
	const onHandleDone = (e) => setIsDone(() => e.target.value);
	const onHandleSubmit = (e) => {
		e.preventDefault();
		dispatch({
			type: "CREATE_NEW_TASK",
			payload: {
				id: 31,
				todo: textInput,
				completed: isDone,
				userId: 26,
			},
		});
		dispatch({ type: "CLOSE_MODAL" });
	};

	return (
		<div className={styles.AddTaskModal}>
			<div className={styles.Overlay} />
			<div className={styles.content}>
				<h3>Aggiungi una nuova task</h3>
				<form onSubmit={onHandleSubmit}>
					<label htmlFor="todo">Aggiungi una task</label>
					<input
						type="text"
						name="todo"
						className={styles.Input}
						value={textInput}
						onChange={onHandleChange}
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
