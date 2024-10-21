import { classNames } from 'shared/lib/classNames/classNames';
import { FormEvent, memo, useCallback } from 'react';
import { UiBlock } from 'shared/ui/UiBlock/UiBlock';
import { Logo } from 'shared/ui/Logo/Logo';
import { Input } from 'shared/ui/Input/Input';
import { Button, ButtonVariant } from 'shared/ui/Button/Button';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { selectLoginState } from '../../model/selectors/selectLoginState/selectLoginState';
import { loginByUsername } from '../../model/services/LoginByUsername/LoginByUsername';
import { loginActions } from '../../model/slice/loginSlice';
import styles from './LoginForm.module.scss';

interface LoginFormProps {
    className?: string;
}

export const LoginForm = memo(
    ({ className }: LoginFormProps) => {
        const dispatch = useDispatch();
        const navigate = useNavigate();
        const {
            username,
            password,
            isLoading,
            error,
        } = useSelector(selectLoginState);

        const onChangeUsername = useCallback((username) => {
            dispatch(loginActions.setUsername(username));
        }, [dispatch]);

        const onChangePassword = useCallback((password) => {
            dispatch(loginActions.setPassword(password));
        }, [dispatch]);

        const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
            event.preventDefault();
            if (username && password) {
                console.log('form submit with data:', { username, password });
                dispatch(loginByUsername({ username, password }));
                navigate('/');
            } else {
                console.log('fill inputs');
            }
        };

        const fillInputs = () => {
            dispatch(loginActions.setUsername('emilys'));
            dispatch(loginActions.setPassword('emilyspass'));
        };

        return (
            <div className={styles.pageContent}>
                <UiBlock
                    className={classNames(styles.LoginForm, {}, [className])}
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
                        <p>Please, sign in with following username and password: emilys, emilyspass</p>
                        <p>
                            Or, just click
                            {' '}
                            <span
                                onClick={fillInputs}
                                style={{
                                    textDecoration: 'underline',
                                    textDecorationStyle: 'dashed',
                                    textDecorationThickness: 1,
                                    cursor: 'pointer',
                                }}
                            >
                                here
                            </span>
                        </p>
                    </div>
                    {
                        error && <p className={styles.error}>{error}</p>
                    }
                    <form className={styles.authForm} onSubmit={handleSubmit}>
                        <Input
                            title="Username"
                            value={username}
                            onChange={onChangeUsername}
                            variant={ButtonVariant.OUTLINE}
                            type="text"
                            name="username"
                            autoFocus
                        />
                        <Input
                            title="Password"
                            value={password}
                            onChange={onChangePassword}
                            variant={ButtonVariant.OUTLINE}
                            type="text"
                            name="password"
                        />
                        <Button
                            variant={ButtonVariant.SOLID}
                            type="submit"
                            disabled={isLoading}
                        >
                            Sing in
                        </Button>
                    </form>
                </UiBlock>
            </div>
        );
    },
);
