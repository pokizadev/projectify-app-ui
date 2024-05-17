import styled from "styled-components";
import { Container, Content } from "../../components/Container";
import { FeatureItem } from "./FeatureItem/FeatureItem";
import { features } from "./FeatureItem/data";
import { Typography, Button } from "../../../../design-system";
import background2 from "../../../../assets/images/bg-effect-2.png";

const FeaturesContainer = styled(Container)`
    background-image: url(${background2});

    background-position: bottom;
    background-size: contain;
    background-repeat: no-repeat;

`;

const FeaturesContent = styled(Content)`
    padding-bottom: 18rem;

    @media (max-width: 52em) {
        padding-bottom: var(--space-120);
    }
`;

const FeaturesDescription = styled(Typography)`
    margin-top: var(--space-4);
    margin-bottom: var(--space-50);
`;

const FeaturesCard = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: var(--space-30);
    margin-bottom: var(--space-50);

    @media (max-width: 52em) {
        grid-template-columns: repeat(2, 1fr);
    }
`;

const FeaturesButton = styled(Button)`
    margin: 0 auto;
`;

const Features = () => {
    return (
        <FeaturesContainer>
            <FeaturesContent>
                <Typography variant="h5" weight="bold" align="center">
                    Get the best for your team
                </Typography>
                <FeaturesDescription
                    variant="paragraphSM"
                    weight="medium"
                    align="center"
                    color="jaguarLight"
                >
                    Our solution provides simple yet effective project
                    management.
                </FeaturesDescription>
                <FeaturesCard>
                    {features.map((feature, idx) => {
                        return (
                            <FeatureItem
                                key={idx}
                                backgroundColor={feature.backgroundColor}
                                iconBackground={feature.iconBackground}
                                iconBackgroundBorder={
                                    feature.iconBackgroundBorder
                                }
                                iconName={feature.iconName}
                                title={feature.title}
                                description={feature.description}
                            />
                        );
                    })}
                </FeaturesCard>
                <FeaturesButton
                    size="md"
                    shape="rounded"
                    color="primary"
                    onClick={() => {}}
                >
                    Try a demo
                </FeaturesButton>
            </FeaturesContent>
        </FeaturesContainer>
    );
};

export { Features };
