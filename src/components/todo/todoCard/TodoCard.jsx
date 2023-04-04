import { useEffect, useState } from "react";
import { GET } from "../../../utils/get";
import styles from "./index.module.scss";

const TodoCard = ({ taskData }) => {
	const [userData, setUserData] = useState({});

	useEffect(() => {
		GET(`users/${taskData.userId}`).then((data) => setUserData(data));
	}, []);

	return (
		<div className={styles.TodoCard}>
			<div className={styles.info}>
				<img
					src={userData.image}
					alt={userData.username}
				/>
				{taskData.completed && <button>V</button>}
			</div>
			<div className={styles.content}>
				<span>{userData.username}</span>
				<p>{taskData.todo}</p>
			</div>
		</div>
	);
};

export default TodoCard;
