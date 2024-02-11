import { useState } from "react";
import styled from "styled-components";
import { AuthWrapper } from "../../components";
import { Button, Input } from "../../../design-system";

import teamWork from "../../../assets/images/teamWork.jpg";

const TeamMemberLoginForm = styled.form`
    width: 100%;
    display: grid;
    gap: var(--space-20);
`;

const TeamMemberLogin = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleOnChangeEmail = (value: string) => {
        setEmail(value);
    };

    const handleOnChangePassword = (value: string) => {
        setPassword(value);
    };

    const confirmLogin = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(email, password);
    };

    return (
        <AuthWrapper imageUrl={teamWork} pageTitle="Projectify App">
            <TeamMemberLoginForm onSubmit={confirmLogin} noValidate>
                <Input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={handleOnChangeEmail}
                    shape="rounded"
                    size="lg"
                />
                <Input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={handleOnChangePassword}
                    shape="rounded"
                    size="lg"
                />

                <Button color="primary" size="lg" shape="rounded">
                    Login
                </Button>
            </TeamMemberLoginForm>
        </AuthWrapper>
    );
};

export { TeamMemberLogin };
