import { classNames } from 'shared/lib/classNames/classNames';
import { memo, useCallback } from 'react';
import { UiBlock } from 'shared/ui/UiBlock/UiBlock';
import { Logo } from 'shared/ui/Logo/Logo';
import { Input } from 'shared/ui/Input/Input';
import { Button, ButtonVariant } from 'shared/ui/Button/Button';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useForm } from 'react-hook-form';
import { loginByUsername } from 'features/AuthByUsername/model/services/LoginByUsername/LoginByUsername';
import { selectLoginState } from '../../model/selectors/selectLoginState/selectLoginState';
import { loginActions } from '../../model/slice/loginSlice';
import styles from './LoginForm.module.scss';

interface LoginFormProps {
    className?: string;
}

interface AuthFormSchema {
    username: string;
    password: string;
}

export const LoginForm = memo(
    ({ className }: LoginFormProps) => {
        const dispatch = useAppDispatch();
        const navigate = useNavigate();
        const {
            username,
            password,
            isLoading,
            error,
        } = useSelector(selectLoginState);

        const {
            register,
            formState: {
                errors,
            },
            handleSubmit,
        } = useForm({
            mode: 'onSubmit',
        });

        const onChangeUsername = useCallback((username) => {
            dispatch(loginActions.setUsername(username));
        }, [dispatch]);

        const onChangePassword = useCallback((password) => {
            dispatch(loginActions.setPassword(password));
        }, [dispatch]);

        const handleFormSubmit = (data: AuthFormSchema) => {
            dispatch(loginByUsername({ username, password }));
            dispatch(loginActions.clearFormData());
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
                        <p>
                            Please, sign in.
                        </p>
                    </div>
                    {
                        error && <p className={styles.error}>{error}</p>
                    }
                    <form className={styles.authForm} onSubmit={handleSubmit(handleFormSubmit)}>
                        <Input
                            title="Username"
                            value={username}
                            onChange={onChangeUsername}
                            variant={ButtonVariant.OUTLINE}
                            type="text"
                            // name="username"
                            register={register('username', { required: 'Username required' })}
                        />
                        {errors?.username ? <p className={styles.error}>{errors?.username?.message}</p> : null}
                        <Input
                            title="Password"
                            value={password}
                            onChange={onChangePassword}
                            variant={ButtonVariant.OUTLINE}
                            type="text"
                            // name="password"
                            register={register('password', {
                                required: 'Password required',
                                minLength: { value: 5, message: 'Password min length is 5 letters' },
                            })}
                        />
                        {errors?.password ? <p className={styles.error}>{errors?.password?.message}</p> : null}
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
