import React from "react";
import styled from "styled-components";
import { PlanProps } from "./types";
import { Button, Icon, Typography } from "../../../../../design-system";

const PlanCard = styled.div<{ $backgroundColor: string }>`
    width: 37rem;
    display: flex;
    flex-direction: column;
    background-color: ${(props) => props.$backgroundColor};
    border-radius: var(--space-40);
    padding: var(--space-30);
`;

const Header = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: var(--space-30);
`;

const Subtitle = styled(Typography)<{ $color: string }>`
    text-transform: uppercase;
    margin-bottom: var(--space-24);
    color: ${(props) => props.$color};
`;

const IconWrapper = styled.div<{ $background: string; $border: string }>`
    padding: var(--space-28);
    border-radius: var(--space-32);
    margin-bottom: var(--space-24);

    background-color: ${(props) => props.$background};
    border: ${(props) => props.$border};
`;

const PlanIcon = styled(Icon)`
    width: 6rem;
    height: 6rem;
`;

const Title = styled(Typography)<{ $color: string }>`
    margin-bottom: var(--space-4);
    color: ${(props) => props.$color};
`;

const PriceWrapper = styled.div`
    display: flex;
    gap: var(--space-8);
`;

const Price = styled(Typography)<{ $color: string }>`
    color: ${(props) => props.$color};
`;

const FeaturesWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: var(--space-12);
    margin-bottom: var(--space-30);
`;

const Feature = styled.div`
    display: flex;
    gap: var(--space-8);
`;

const FeatureText = styled(Typography)<{ $color: string }>`
    color: ${(props) => props.$color};
`;

const Value = styled(Typography)<{ $color: string }>`
    color: ${(props) => props.$color};
`;

const PlanButton = styled(Button)<{ $background: string; $color: string }>`
    margin-top: auto;
    background-color: ${(props) => props.$background};
    color: ${(props) => props.$color};
`;

const PlanItem: React.FC<PlanProps> = ({
    backgroundColor,
    fontColor,
    subtitle,
    iconBackground,
    iconBackgroundBorder,
    iconName,
    title,
    price,
    checkMark,
    projects,
    users,
    storage,
    others,
    buttonColor,
    buttonTextColor
}) => {
    return (
        <PlanCard $backgroundColor={backgroundColor}>
            <Header>
                <Subtitle
                    $color={fontColor}
                    variant="subtitleLG"
                    weight="semibold"
                >
                    {subtitle}
                </Subtitle>
                <IconWrapper
                    $background={iconBackground}
                    $border={iconBackgroundBorder}
                >
                    <PlanIcon iconName={iconName} />
                </IconWrapper>
                <Title $color={fontColor} variant="h4" weight="semibold">
                    {title}
                </Title>
                <PriceWrapper>
                    <Price
                        $color={fontColor}
                        variant="paragraphLG"
                        weight="bold"
                    >
                        {price}
                    </Price>
                    <Typography
                        variant="paragraphSM"
                        weight="medium"
                        color="jaguarLight"
                    >
                        /month
                    </Typography>
                </PriceWrapper>
            </Header>
            <FeaturesWrapper>
                <Feature>
                    <Icon iconName={checkMark} />
                    <FeatureText
                        $color={fontColor}
                        variant="paragraphSM"
                        weight="medium"
                    >
                        Projects:
                    </FeatureText>
                    <Value
                        $color={fontColor}
                        variant="paragraphSM"
                        weight="bold"
                    >
                        {projects}
                    </Value>
                </Feature>
                <Feature>
                    <Icon iconName={checkMark} />
                    <FeatureText
                        $color={fontColor}
                        variant="paragraphSM"
                        weight="medium"
                    >
                        Users:
                    </FeatureText>
                    <Value
                        $color={fontColor}
                        variant="paragraphSM"
                        weight="bold"
                    >
                        {users}
                    </Value>
                </Feature>
                <Feature>
                    <Icon iconName={checkMark} />
                    <FeatureText
                        $color={fontColor}
                        variant="paragraphSM"
                        weight="medium"
                    >
                        Storage:
                    </FeatureText>
                    <Value
                        $color={fontColor}
                        variant="paragraphSM"
                        weight="bold"
                    >
                        {storage}
                    </Value>
                </Feature>
                {others.map((feature, idx) => (
                    <Feature key={idx}>
                        <Icon iconName={checkMark} />
                        <FeatureText
                            $color={fontColor}
                            variant="paragraphSM"
                            weight="medium"
                        >
                            {feature}
                        </FeatureText>
                    </Feature>
                ))}
            </FeaturesWrapper>
            <PlanButton
                $background={buttonColor}
                $color={buttonTextColor}
                fullWidth={true}
                size="lg"
                shape="circle"
                color="primary"
            >
                Try free for 15 days
            </PlanButton>
        </PlanCard>
    );
};

export { PlanItem };
