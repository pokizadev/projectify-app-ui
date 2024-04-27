import styled from "styled-components";
import { Container, Content } from "../../components/Container";
import { FeatureItem } from "./FeatureItem/FeatureItem";
import { features } from "./FeatureItem/data";
import { Typography, Button } from "../../../../design-system";
import background2 from "../../../../assets/images/bg-effect-2.png";

const FeaturesContent = styled(Content)`
    padding-top: var(--space-100);
`;
const FeaturesDescription = styled(Typography)`
    margin-top: var(--space-4);
    margin-bottom: var(--space-50);
    color: var(--jaguar-500);
`;

const FeaturesCard = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: var(--space-30);
    margin-bottom: var(--space-50);
`;

const FeaturesButton = styled(Button)`
    margin: 0 auto;
`;
const StyledDiv = styled.div`
    background-image: url(${background2});
    width: 100%;
    height: 45rem;
    margin-top: -30rem;
`;
const Features = () => {
    return (
        <Container>
            <FeaturesContent>
                <Typography variant="h5" weight="bold" align="center">
                    Get the best for your team
                </Typography>
                <FeaturesDescription
                    variant="paragraphSM"
                    weight="medium"
                    align="center"
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
            <StyledDiv />
        </Container>
    );
};

export { Features };
