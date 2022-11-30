import { Login } from "components/Login";
import { Link } from "react-router-dom";

const LoginPage = () => {
	return (
		<div>
			<h1>Войти</h1>
			<Login />
			<p>
				или <Link to='/registere'>Зарегистрироваться</Link>
			</p>
		</div>
	);
};

export default LoginPage;
