import Registre from 'components/Registre';
import { Link } from 'react-router-dom';

const RegisterePage = () => {
    return (
        <div>
            <h1>Зарегистрироваться</h1>
            <Registre />
            <p>
                У вас уже есть аккаунт? <Link to="/login">Войти</Link>   
            </p>            
        </div>
    )
}

export default RegisterePage;
