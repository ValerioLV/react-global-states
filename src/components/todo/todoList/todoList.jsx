import { useContext, useState } from "react";
import "./index.css";
import TodoCard from "../todoCard";
import { GlContextToDo } from "../../../global_states/context";

const TodoList = () => {
	const [todo, setTodo] = useState("");
	const [state, dispatch] = useContext(GlContextToDo);

	const onHandleInput = (e) => {
		setTodo(() => e.target.value);
	};
	const onHandleSubmit = () => {
		dispatch({ type: todo });
	};
	console.log(state);

	return (
		<div className="TodoList">
			{state.map((task) => (
				<TodoCard task={task} />
			))}
			<form
				action=""
				onSubmit={onHandleSubmit}>
				<input
					type="text"
					placeholder="ToDo"
					value={todo}
					onChange={onHandleInput}
				/>
			</form>
		</div>
	);
};

export default TodoList;
