export const GlReducerCounter = (state, action) => {
	if (action.type == "increase") {
		console.log(state);
		return {
			...state,
			num: state.num + 1,
		};
	} else if (action.type == "decrease") {
		return {
			...state,
			num: state.num - 1,
		};
	} else if (action.type == "set_to_0") {
		return {
			...state,
			num: 0,
		};
	}
};

export const GlReducerToDo = (state, action) => {
	switch (action.type) {
		case "SET_TASKS_LIST":
			return {
				...state,
				tasksListData: action.payload,
			};
		case "SET_TASK_ID":
			return {
				...state,
				protoTask: {
					...state.protoTask,
					id: state.tasksListData.lenght + 1,
				},
			};
		case "CREATE_NEW_TASK":
			return {
				...state,
				tasksListData: [...state.tasksListData, action.payload],
			};

		case "DELETE_TASK":
			return {
				...state,
				tasksListData: state.tasksListData.filter(
					(task) => task.id !== action.payload,
				),
			};

		case "SHOW_MODAL":
			return {
				...state,
				isModalVisibile: true,
			};

		case "CLOSE_MODAL":
			return {
				...state,
				isModalVisibile: false,
			};
	}
};
