import styled from "styled-components";
import { FeatureItemProps } from "./types";
import { Icon, Typography } from "../../../../../design-system";

const FeatureCard = styled.div<{ $backgroundColor: string }>`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: ${(props) => props.$backgroundColor};
    padding: var(--space-40) var(--space-8) var(--space-8);
    border-radius: var(--border-radius-24);
    box-shadow: var(--shadow-xs);
    border: none;
    border-radius: var(--space-40);
`;
const IconWrapper = styled.div<{
    $iconBackground: string;
    $iconBackgroundBorder: string;
}>`
    background-color: ${(props) => props.$iconBackground};
    padding: var(--space-24);
    margin-bottom: var(--space-40);
    border: 1px solid ${(props) => props.$iconBackgroundBorder};
    border-radius: var(--border-radius-32);
`;

const FeatureIcon = styled(Icon)`
    width: 6rem;
    height: 6rem;

    @media (max-width: 78em) {
        width: 7rem;
        height: 7rem;
    }
`;

const TextWrapper = styled.div`
    padding: var(--space-24);
    border-radius: var(--border-radius-32);
    background-color: var(--white);
    height: 100%;
`;
const FeatureTitle = styled(Typography)`
    margin-bottom: var(--space-8);
`;

const FeatureItem: React.FC<FeatureItemProps> = ({
    backgroundColor,
    iconBackground,
    iconBackgroundBorder,
    iconName,
    title,
    description
}) => {
    return (
        <FeatureCard $backgroundColor={backgroundColor}>
            <IconWrapper
                $iconBackground={iconBackground}
                $iconBackgroundBorder={iconBackgroundBorder}
            >
                <FeatureIcon iconName={iconName} />
            </IconWrapper>
            <TextWrapper>
                <FeatureTitle variant="paragraphLG" weight="semibold">
                    {title}
                </FeatureTitle>
                <Typography
                    variant="paragraphSM"
                    weight="medium"
                    color="jaguarLight"
                >
                    {description}
                </Typography>
            </TextWrapper>
        </FeatureCard>
    );
};

export { FeatureItem };
