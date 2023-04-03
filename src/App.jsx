import { useReducer } from "react";
import { GlReducerCounter } from "./global_states/reducer";
import { GlContextCounter, initGlStateCounter } from "./global_states/context";
import "./App.css";
import Counter from "./components/counter";
import TodoList from "./components/todo/todoList";

function App() {
	const [state, dispatch] = useReducer(GlReducerCounter, initGlStateCounter);
	return (
		<div className="App">
			<GlContextCounter.Provider value={{ state, dispatch }}>
				<Counter />
				{/* <TodoList /> */}
			</GlContextCounter.Provider>
		</div>
	);
}

export default App;
