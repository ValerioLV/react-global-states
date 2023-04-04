import { createContext } from "react";

export const initGlStateCounter = {
	num: 0,
};

export const GlContextCounter = createContext({});

export const initGlToDo = {
	tasksListData: [],
	isModalVisibile: false,
};

export const GlContextToDo = createContext({});
