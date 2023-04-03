export const GlReducerCounter = (state, action) => {
	// switch (action.type) {
	// 	case "increase":
	// 		console.log(state);

	// }
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
	return { ...state, todo: action.type };
};
