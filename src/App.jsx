import { useReducer } from "react";
import { GlReducerCounter, GlReducerToDo } from "./global_states/reducer";
import {
	GlContextCounter,
	GlContextToDo,
	initGlStateCounter,
	initGlToDo,
} from "./global_states/context";
import styles from "./App.module.scss";
import Hero from "./components/hero";
import Counter from "./components/counter";
import TodoList from "./components/todo/todoList";
import AddTodoModal from "./components/taskModal";

function App() {
	const [state, dispatch] = useReducer(GlReducerToDo, initGlToDo);

	const onHandleClick = () => {
		if (state.isModalVisibile === false) {
			dispatch({ type: "SHOW_MODAL" });
		} else {
			dispatch({ type: "CLOSE_MODAL" });
		}
	};

	return (
		<div className={styles.App}>
			<GlContextToDo.Provider value={{ state, dispatch }}>
				{/* <Counter /> */}
				<Hero />
				<TodoList />
				<button
					className={styles.addTask}
					onClick={onHandleClick}>
					+
				</button>
				{state.isModalVisibile && <AddTodoModal />}
			</GlContextToDo.Provider>
		</div>
	);
}

export default App;
