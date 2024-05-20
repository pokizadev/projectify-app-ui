import { FC, ReactNode } from "react";
import styled from "styled-components";
import { Logo } from "../../../design-system/Logo";
import { Toaster } from "../../../design-system";

type AuthWrapperProps = {
    imageUrl: string;
    children: ReactNode;
    pageTitle: string;
    switchLayout?: boolean;
};

const Wrapper = styled.main`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 100vh;

    @media (max-width: 62.5em) {
        display: flex;
        flex-direction: column;
    }
`;

const AuthForm = styled.section<{ $switchLayout?: boolean }>`
    grid-row: 1 / 2;
    grid-column: ${(props) => (props.$switchLayout ? "2 / 3" : "1 / 2")};

    padding: var(--space-50);
    display: flex;
    align-items: center;
    justify-content: center;

    @media (max-width: 45em) {
        padding-top: var(--space-20);
    }
`;

const AuthContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: var(--space-50);
    flex-basis: 47rem;

    @media (max-width: 45em) {
        gap: var(--space-40);
    }
`;

const AuthImageWrapper = styled.section<{ $switchLayout?: boolean }>`
    grid-row: 1 / 2;
    grid-column: ${(props) => (props.$switchLayout ? "1 / 2" : "2 / 3")};
    padding: var(--space-50);

    @media (max-width: 62.5em) {
        padding: 0 var(--space-100) var(--space-80) var(--space-100);
    }

    @media (max-width: 45em) {
        padding: 0 var(--space-50) var(--space-50) var(--space-50);
    }
`;

const AuthImage = styled.img.attrs({
    alt: "Projectify App | People discussing"
})`
    height: 100%;
    width: 100%;
    border-radius: var(--space-50);
    object-fit: cover;
    transition: all 1s;

    &:hover {
        transform: scale(1.1);
    }
`;

const AuthWrapper: FC<AuthWrapperProps> = ({
    imageUrl,
    pageTitle,
    switchLayout,
    children
}) => {
    return (
        <Wrapper>
            <AuthForm $switchLayout={switchLayout}>
                <AuthContent>
                    <Logo layout="vertical" size="lg" customText={pageTitle} />
                    {children}
                </AuthContent>
            </AuthForm>
            <AuthImageWrapper $switchLayout={switchLayout}>
                <AuthImage src={imageUrl} />
            </AuthImageWrapper>
            <Toaster />
        </Wrapper>
    );
};

export { AuthWrapper };
