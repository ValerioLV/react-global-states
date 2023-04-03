import "./index.css";

const TodoCard = ({ task }) => {
	return (
		<div className="TodoCard">
			<p>{task}</p>
		</div>
	);
};

export default TodoCard;
