import { useState } from "react";
import styled from "styled-components";
import { Container, Content } from "../../components/Container";
import { Typography, Switch } from "../../../../design-system";

const PricingContainer = styled(Container)`
    background-color: var(--jaguar-25);
`;
const PricingHeader = styled.div`
    display: flex;
    flex-direction: column;
    gap: var(--space-10);
    margin-bottom: var(--space-50);
`;

const Span = styled.span`
    color: var(--primary-500);
`
const ToggleWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: var(--space-24);
`;

const Pricing = () => {
    const [monthly, setMonthly] = useState(true)

    return (
        <PricingContainer>
            <Content>
                <PricingHeader>
                    <Typography
                        variant="subtitleLG"
                        weight="semibold"
                        align="center"
                    >
                        Join the Projectify
                    </Typography>
                    <Typography variant="h5" weight="bold" align="center">
                        Find the 
                         <Span> Right Plan</Span>
                    </Typography>
                    <Typography variant="paragraphMD" weight="medium" align="center" color="jaguarLight" >Flexible pricing options for startups and big teams</Typography>
                    <ToggleWrapper>
                        <Typography variant="paragraphSM" weight="medium" color="jaguarLight" >
                            Billed yearly
                        </Typography>
                        <Switch
                            id=""
                            checked={monthly}
                            shape="circle"
                            onSwitch={() => {
                                setMonthly(!monthly);
                            }}
                        />
                        <Typography variant="paragraphSM" weight="medium"
                        color="jaguarDark">
                            Billed Monthly
                        </Typography>
                    </ToggleWrapper>
                </PricingHeader>
            </Content>
        </PricingContainer>
    );
};

export { Pricing };
