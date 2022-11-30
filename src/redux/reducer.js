
const initialState = {
  id: null,
  email: null,
  token: null,
}

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case "SET_USER":
			return {
        ...state,
        id: action.payload.id,
        email: action.payload.email,
        token: action.payload.token,
      };
		case "REMOOVE_USER":
			return { 
        ...state, 
        id: null,
        email: null,
        token: null,
      };
		default:
			return state;
	}
};
export default reducer;