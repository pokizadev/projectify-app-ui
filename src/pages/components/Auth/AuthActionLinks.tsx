import { Link } from "react-router-dom";
import { Typography } from "../../../design-system";
import styled from "styled-components";

type PropsType = {
    linkText: string;
    hintText?: string;
    linkTo: string;
};

const ActionLinkWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: var(--space-8);

    @media (max-width: 45em) {
        flex-direction: column;
        gap: var(--space-4);
    }
`;

const HintTextTypography = styled(Typography)`
    color: var(--jaguar-400);
`;

const StyledLink = styled(Link)`
    color: var(--primary-500);
    font-weight: var(--font-weight-600);
`;
const AuthActionLink: React.FC<PropsType> = ({
    hintText,
    linkText,
    linkTo
}) => {
    return (
        <ActionLinkWrapper>
            <HintTextTypography variant="paragraphSM" weight="medium">
                {hintText}
            </HintTextTypography>
            <StyledLink to={linkTo} className="paragraph-sm">
                {linkText}
            </StyledLink>
        </ActionLinkWrapper>
    );
};

export { AuthActionLink };
