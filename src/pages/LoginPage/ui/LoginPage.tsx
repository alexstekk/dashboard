import { FC } from 'react';
import { LoginForm } from 'features/AuthByUsername';

interface LoginPageProps {
    className?: string;

}

export const LoginPage :FC<LoginPageProps> = (props) => {
    const { className } = props;

    return <LoginForm />;
};
