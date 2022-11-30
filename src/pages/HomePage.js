import { Navigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useLogin } from "hooks/useLogin";
import { removeUser } from "../redux/actions";

const HomePage = () => {
	const dispatch = useDispatch();

	const { isLogin } = useLogin();

	return isLogin ? (
		<div>
			<h1>Здрасьте</h1>

			<button onClick={() => dispatch(removeUser())}>Выйти</button>
		</div>
	) : (
		<Navigate to='/login' />
	);
};

export default HomePage;
