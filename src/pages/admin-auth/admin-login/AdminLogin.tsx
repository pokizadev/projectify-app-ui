import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import toast from "react-hot-toast";
import { useLocalStorage } from "../../../hooks";
import { AuthWrapper } from "../../components";
import { Button, Input } from "../../../design-system";

import { admin } from "../../../api";
import { AuthActionLink } from "../../components/AuthActionLinks";

import meeting from "../../../assets/images/meeting.jpg";

const LoginForm = styled.form`
    width: 100%;
    display: grid;
    gap: var(--space-20);
`;

const ActionLinks = styled.div`
    display: flex;
    flex-direction: column;
    gap: var(--space-12);
`;

const AdminLogin = () => {
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    const [isFormSubmitting, setIsFormSubmitting] = useState<boolean>(false);
    const navigate = useNavigate();

    const {setItem, getItem} = useLocalStorage()

    const handleOnChangeEmail = (value: string) => {
        setEmail(value);
    };

    const handleOnChangePassword = (value: string) => {
        setPassword(value);
    };

    const saveAuthToken = (token: string) => {
        setItem("authToken", token)
    }

    const login = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            setIsFormSubmitting(true);
            const { token } = await admin.login({
                email,
                password
            });
            saveAuthToken(token)
            navigate("/admin/platform");

            setIsFormSubmitting(false);
            setEmail("");
            setPassword("");
        } catch (error) {
            if (error instanceof Error) {
                toast.error(error.message);
            }
            setIsFormSubmitting(false);
        }
    };

    return (
        <AuthWrapper imageUrl={meeting} pageTitle="Projectify">
            <LoginForm onSubmit={login} noValidate>
                <Input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={handleOnChangeEmail}
                    shape="rounded"
                    size="lg"
                    disabled={isFormSubmitting}
                />
                <Input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={handleOnChangePassword}
                    shape="rounded"
                    size="lg"
                    disabled={isFormSubmitting}
                />

                <Button
                    color="primary"
                    size="lg"
                    shape="rounded"
                    disabled={isFormSubmitting}
                >
                    Login
                </Button>
            </LoginForm>
            <ActionLinks>
                <AuthActionLink
                    linkText="Sign Up"
                    hintText="Don't have an account"
                    linkTo="../admin/sign-up"
                />
                <AuthActionLink
                    linkText="Get Help"
                    hintText="Forgot password"
                    linkTo="../admin/forgot-password"
                />
            </ActionLinks>
        </AuthWrapper>
    );
};

export { AdminLogin };
