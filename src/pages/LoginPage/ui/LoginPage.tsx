import { FC, FormEvent, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { UiBlock } from 'shared/ui/UiBlock/UiBlock';
import { Input } from 'shared/ui/Input/Input';
import { Logo } from 'shared/ui/Logo/Logo';
import { Button, ButtonVariant } from 'shared/ui/Button/Button';
import styles from './LoginPage.module.scss';

interface LoginPageProps {
    className?: string;

}

export const LoginPage :FC<LoginPageProps> = (props) => {
    const { className } = props;

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (username && password) {
            console.log('form submit with data:', { username, password });
        } else {
            console.log('fill inputs');
        }
    };

    return (
        <div className={styles.pageContent}>
            <UiBlock
                className={classNames(styles.LoginPage, {}, [className])}
                isColumn
            >
                <div className={styles.header}>
                    <Logo />
                </div>
                <div className={styles.titles}>
                    <h1>Welcome to dashboard</h1>
                    <h2>Your Admin Space</h2>
                </div>
                <div className={styles.tips}>
                    <p>Please, sign in with following username and password: admin, 123</p>
                </div>
                <form className={styles.authForm} onSubmit={handleSubmit}>
                    <Input title="Username" value={username} onChange={(e) => setUsername(e.target.value)} variant={ButtonVariant.OUTLINE} />
                    <Input title="Password" value={password} onChange={(e) => setPassword(e.target.value)} variant={ButtonVariant.OUTLINE} />
                    <Button variant={ButtonVariant.SOLID} type="submit">
                        Sing in
                    </Button>
                </form>
            </UiBlock>
        </div>
    );
};
