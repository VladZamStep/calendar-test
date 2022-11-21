import { Button, Form, Input } from 'antd'
import { Dispatch, FC, useState } from 'react'
import { useDispatch } from 'react-redux';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { AuthActionCreators } from '../store/reducers/auth/action-creators';
import { rules } from '../utils/rules';

const LoginForm: FC = () => {

    const dispatch: Dispatch<any> = useDispatch()
    const { error, isLoading } = useTypedSelector(state => state.auth);

    const [username, setUsername] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const onSubmit = async () => {
        dispatch(AuthActionCreators.login(username, password))
    };

    return (
        <Form
            onFinish={onSubmit}
        >
            {error && <div style={{ color: 'red', marginBottom: '1rem' }}>{error}</div>}
            <Form.Item
                label="Имя пользователя"
                name="username"
                rules={[rules.required('Введите имя пользователя!')]}
            >
                <Input
                    value={username}
                    onChange={e => setUsername(e.target.value)}
                />
            </Form.Item>

            <Form.Item
                label="Пароль"
                name="password"
                rules={[rules.required('Введите пароль!')]}
            >
                <Input
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    type='password'
                />
            </Form.Item>

            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                <Button type="primary" htmlType="submit" loading={isLoading}>
                    Войти
                </Button>
            </Form.Item>
        </Form>
    )
};

export default LoginForm;