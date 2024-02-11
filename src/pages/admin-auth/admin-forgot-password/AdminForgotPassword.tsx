import { useState } from "react";
import styled from "styled-components";
import { PasswordWrapper } from "../../components";
import { Input, Button} from "../../../design-system";
import { adminService } from "../../../api";
import forgotPassword from "../../../assets/images/forgotPassword.svg";
import toast from "react-hot-toast";

const Form = styled.form`
    width: 100%;
    display: grid;
    gap: var(--space-20);
`;

const AdminForgotPassword = () => {
    const [email, setEmail] = useState<string>("");

    const handleOnChangeEmail = (value: string) => {
        setEmail(value);
    };

    const getInstructions = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            const response = await adminService.forgotPassword(email)
            setEmail("")
            toast.success(response.message)
        } catch (error) {
            if(error instanceof Error) {
                toast.error(error.message)
            }
        }
    };

    return (
         <PasswordWrapper pageTitle="Forgot Password?" imageUrl={forgotPassword}>
            <Form onSubmit={getInstructions} noValidate>
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
            </Form>
        </PasswordWrapper>
    );
};

export { AdminForgotPassword };
