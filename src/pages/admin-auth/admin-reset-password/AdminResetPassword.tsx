import styled from "styled-components";
import { useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { AuthActionLink, PasswordWrapper } from "../../components";
import { Input, Button } from "../../../design-system";
import updatePassword from "../../../assets/images/updatePassword.svg";
import { adminService } from "../../../api";
import toast from "react-hot-toast";

const ResetPasswordForm = styled.form`
    width: 100%;
    display: grid;
    flex-direction: column;
    gap: var(--space-20);
    margin-bottom: var(--space-20);
`;
const AdminResetPassword = () => {
    const [password, setPassword] = useState("");
    const [passwordConfirm, setPasswordConfirm] = useState("");
    const [searchParams] = useSearchParams();
    const passwordResetToken = searchParams.get("passwordResetToken");

    const navigate = useNavigate();

    const handleOnChangePassword = (value: string) => {
        setPassword(value);
    };

    const handleOnChangePasswordConfirm = (value: string) => {
        setPasswordConfirm(value);
    };

    const resetPassword = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            const response = await adminService.resetPassword(
                password,
                passwordConfirm,
                passwordResetToken as string
            );
            setPassword("");
            setPasswordConfirm("");
            toast.success(response.message);
            setTimeout(() => {
                navigate("/admin/login");
            }, 2000);
        } catch (error) {
            if (error instanceof Error) {
                toast.error(error.message);
            }
        }
    };

    return (
        <PasswordWrapper pageTitle="Reset Password" imageUrl={updatePassword}>
            <ResetPasswordForm onSubmit={resetPassword} noValidate>
                <Input
                    type="password"
                    placeholder="New Password"
                    value={password}
                    onChange={handleOnChangePassword}
                    shape="rounded"
                    size="lg"
                />
                <Input
                    type="password"
                    placeholder="Confirm Password"
                    value={passwordConfirm}
                    onChange={handleOnChangePasswordConfirm}
                    shape="rounded"
                    size="lg"
                />
                <Button
                    color="primary"
                    size="lg"
                    shape="rounded"
                    fullWidth={true}
                >
                    Reset My Password
                </Button>
            </ResetPasswordForm>
            <AuthActionLink
                linkText="Get Instructions"
                hintText="Forgot Password"
                linkTo="../admin/forgot-password"
            />
        </PasswordWrapper>
    );
};

export { AdminResetPassword };
