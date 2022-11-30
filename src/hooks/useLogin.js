import {useSelector} from 'react-redux';

export function useLogin() {
    const {email, token, id} = useSelector(state => state.user);

    return {
        isLogin: !!email,
        email,
        token,
        id,
    };
}