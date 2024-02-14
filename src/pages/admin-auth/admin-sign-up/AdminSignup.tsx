import { useState } from "react";
import styled from "styled-components";
import toast from "react-hot-toast";
import { Button, Input } from "../../../design-system";
import { AuthActionLink, AuthWrapper } from "../../components";
import { adminService } from "../../../api";

import peopleDiscussing from "../../../assets/images/frame-1.png";

const SignupForm = styled.form`
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: var(--space-20);
`;

const StyledInput = styled(Input)`
    grid-column: 1 / 3;
`;
const StyledButton = styled(Button)`
    grid-column: 1 / 3;
`;

const AdminSignup = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [preferredName, setPreferredName] = useState("");
    const [email, setEmail] = useState("");
    const [company, setCompany] = useState("");
    const [position, setPosition] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirm, setPasswordConfirm] = useState("");

    const [isFormSubmitting, setIsFormSubmitting] = useState(false);

    const handleOnChangeFirstName = (value: string) => {
        setFirstName(value);
    };

    const handleOnChangeLastName = (value: string) => {
        setLastName(value);
    };

    const handleOnChangeName = (value: string) => {
        setPreferredName(value);
    };

    const handleOnChangeEmail = (value: string) => {
        setEmail(value);
    };

    const handleOnChangeCompany = (value: string) => {
        setCompany(value);
    };

    const handleOnChangePosition = (value: string) => {
        setPosition(value);
    };

    const handleOnChangePassword = (value: string) => {
        setPassword(value);
    };

    const handleOnChangePasswordConfirm = (value: string) => {
        setPasswordConfirm(value);
    };

    const isFormSubmittable =
        firstName && lastName && email && password && passwordConfirm;

    const createAccount = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            setIsFormSubmitting(true);
            const response = await adminService.signUp({
                firstName,
                lastName,
                preferredName,
                email,
                company,
                position,
                password,
                passwordConfirm
            });
            setIsFormSubmitting(false);
            setFirstName("");
            setLastName("");
            setPreferredName("");
            setEmail("");
            setCompany("");
            setPosition("");
            setPassword("");
            setPasswordConfirm("");

            toast.success(response.message);
        } catch (error) {
            if (error instanceof Error) {
                setIsFormSubmitting(false);
                toast.error(error.message);
            }
        }
    };

    return (
        <AuthWrapper
            imageUrl={peopleDiscussing}
            pageTitle="Projectify"
            switchLayout
        >
            <SignupForm onSubmit={createAccount}>
                <Input
                    type="text"
                    placeholder="First Name"
                    value={firstName}
                    onChange={handleOnChangeFirstName}
                    shape="rounded"
                    size="lg"
                    disabled={isFormSubmitting}
                />
                <Input
                    type="text"
                    placeholder="Last Name"
                    value={lastName}
                    onChange={handleOnChangeLastName}
                    shape="rounded"
                    size="lg"
                    disabled={isFormSubmitting}
                />
                <StyledInput
                    type="text"
                    placeholder="Preferred First Name (optional)"
                    value={preferredName}
                    onChange={handleOnChangeName}
                    shape="rounded"
                    size="lg"
                    disabled={isFormSubmitting}
                />
                <StyledInput
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={handleOnChangeEmail}
                    shape="rounded"
                    size="lg"
                    disabled={isFormSubmitting}
                />
                <Input
                    type="text"
                    placeholder="Company Name"
                    value={company}
                    onChange={handleOnChangeCompany}
                    shape="rounded"
                    size="lg"
                    disabled={isFormSubmitting}
                />
                <Input
                    type="text"
                    placeholder="Position"
                    value={position}
                    onChange={handleOnChangePosition}
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
                <Input
                    type="password"
                    placeholder="Password Confirmation"
                    value={passwordConfirm}
                    onChange={handleOnChangePasswordConfirm}
                    shape="rounded"
                    size="lg"
                    disabled={isFormSubmitting}
                />

                <StyledButton
                    color="primary"
                    size="lg"
                    shape="rounded"
                    disabled={isFormSubmitting || !isFormSubmittable}
                >
                    Sign Up
                </StyledButton>
            </SignupForm>

            <AuthActionLink
                linkText="Login"
                hintText="Already have an account"
                linkTo="../admin/login"
            />
        </AuthWrapper>
    );
};

export { AdminSignup };
