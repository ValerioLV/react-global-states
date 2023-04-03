import { useContext } from "react";
import { GlContextCounter } from "../../global_states/context";
import "./index.css";

const Counter = () => {
	const { state, dispatch } = useContext(GlContextCounter);
	const onHandleClick = (e) => {
		dispatch({ type: e.target.value });
	};

	return (
		<div className="Counter">
			<div className="Counter">
				<button
					className="counter_btn"
					value={"increase"}
					onClick={onHandleClick}>
					Increase
				</button>
				<button
					className="counter_btn"
					value={"decrease"}
					onClick={onHandleClick}>
					Decrease
				</button>
				<h2>{state.num}</h2>
				<button
					className="counter_btn"
					value={"set_to_0"}
					onClick={onHandleClick}>
					Reset
				</button>
			</div>
		</div>
	);
};

export default Counter;
