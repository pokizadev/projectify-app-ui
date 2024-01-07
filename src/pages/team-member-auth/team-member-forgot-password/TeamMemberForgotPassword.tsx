import { useState } from "react";
import { PasswordWrapper } from "../../components";
import { Input, Button } from "../../../design-system";
import forgotPassword from "../../../assets/images/forgotPassword.svg";
import "./TeamMemberForgotPassword.css";

const TeamMemberForgotPassword = () => {
    const [email, setEmail] = useState<string>("");

    const handleOnChangeEmail = (value: string) => {
        setEmail(value);
    };

    const getInstructions = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(email);
    };

    return (
        <PasswordWrapper pageTitle="Forgot Password?" imageUrl={forgotPassword}>
            <form
                className="forgot-password"
                onSubmit={getInstructions}
                noValidate
            >
                <Input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={handleOnChangeEmail}
                    shape="rounded"
                    size="lg"
                />
                <Button
                    color="primary"
                    size="lg"
                    shape="rounded"
                    fullWidth={true}
                >
                    Get Instructions
                </Button>
            </form>
        </PasswordWrapper>
    );
};

export { TeamMemberForgotPassword };