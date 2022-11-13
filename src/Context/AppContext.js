import { createContext, useReducer } from "react";
export const AppReducer = (state, action) => {
	switch (action.type) {
		case 'ADD_EXPENSE':
			return {
				...state,
				expenses: [...state.expenses, action.payload],
			};
		case 'DELETE_EXPENSE':
			return {
				...state,
				expenses: state.expenses.filter(
					(expense) => expense.id !== action.payload
				),
			};
		case 'SET_BUDGET':
			return {
				...state,
				budget: action.payload,
			};

		default:
			return state;
	}
};

const InitialState = {
  budget: 2000,
  expenses: [
    { id: 1, name: "shopping", cost: 300 },
    { id: 2, name: "food", cost: 500 },
  ],
};
 export const AppContext = createContext();
 export const Appprovider = (props) => {
  const [state, dispatch] = useReducer(AppReducer, InitialState);
 
  return (
    <AppContext.Provider
      value={{ budget: state.budget, expenses: state.expenses, dispatch }}
    >
        {props.children}
    </AppContext.Provider>
  );
};
