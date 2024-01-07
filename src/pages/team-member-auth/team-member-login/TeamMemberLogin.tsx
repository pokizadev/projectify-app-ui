import { useState } from "react";
import { AuthWrapper} from "../../components";
import { Button, Input } from "../../../design-system";

import teamWork from "../../../assets/images/teamWork.jpg"
import "./TeamMemberLogin.css"

const TeamMemberLogin = () => {
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    const handleOnChangeEmail = (value: string) => {
        setEmail(value)
    }

    const handleOnChangePassword = (value: string) => {
        setPassword(value)
    }

    const confirmLogin = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(email, password)
    };

    return (
        <AuthWrapper imageUrl={teamWork} pageTitle="Projectify App">
             <form className="team-member-login" onSubmit={confirmLogin} noValidate>
                <Input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={handleOnChangeEmail}
                    shape="rounded"
                    size="lg"
                    className="login__email"
                />
                <Input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={handleOnChangePassword}
                    shape="rounded"
                    size="lg"
                    className="login__password"
                />

                <Button
                    color="primary"
                    size="lg"
                    shape="rounded"
                    className="login__submit-button"
                >
                    Login
                </Button>
            </form>
        </AuthWrapper>
    )

}

export {TeamMemberLogin}