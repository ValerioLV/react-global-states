import { createContext } from "react";

export const initGlStateCounter = {
	num: 0,
};

export const GlContextCounter = createContext({});

export const initGlToDo = {
	tasksListData: [
		{
			id: 1,
			todo: "Nutrirmi",
			completed: true,
			image: "https://picsum.photos/200/",
			username: "Caio",
		},
		{
			id: 2,
			todo: "Riposare",
			completed: false,
			image: "https://picsum.photos/200/",
			username: "Tizio",
		},
	],
	isModalVisibile: false,
	protoTask: {
		username: "",
		image: "https://picsum.photos/200/",
		completed: false,
		todo: "",
		id: null,
	},
};

export const GlContextToDo = createContext({});
