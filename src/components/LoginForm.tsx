import { Button, Form, Input } from 'antd'
import { Dispatch, FC, useState } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useActions } from '../hooks/useActions';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { rules } from '../utils/rules';

const LoginForm: FC = () => {

    const { error, isLoading } = useTypedSelector(state => state.auth);
    const { login } = useActions();

    const [username, setUsername] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const navigate = useNavigate();
    const onFinish = () => {
        login(username, password);
        navigate('/main');
    };

    return (
        <Form
            onFinish={onFinish}
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