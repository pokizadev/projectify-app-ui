import { useState } from "react";
import styled from "styled-components";
import { Container, Content } from "../../components/Container";
import { Typography, Switch } from "../../../../design-system";
import { plans } from "./PricingPlan/data";
import { PlanItem } from "./PricingPlan/Plan";
import background2 from "../../../../assets/images/bg-effect-2.png"
import background3 from "../../../../assets/images/bg-effect-3.png"

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

const PricePlansWrapper = styled.div`
    display: flex;
    overflow-x: auto;
    justify-content: space-between;
    gap: var(--space-20);
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
                <PricePlansWrapper>
                    {plans.map((plan, idx) => {
                        return(
                            <PlanItem
                                key={idx}
                                backgroundColor={plan.backgroundColor}
                                fontColor={plan.fontColor}
                                subtitle={plan.subtitle}
                                iconBackground={plan.iconBackground}
                                iconBackgroundBorder={plan.iconBackgroundBorder}
                                iconName={plan.iconName}
                                title={plan.title}
                                price={plan.price}

                                checkMark={plan.checkMark}
                                projects={plan.projects}
                                users={plan.users}
                                storage={plan.storage}
                                others={plan.others}
                                buttonColor={plan.buttonColor}
                                buttonTextColor={plan.buttonTextColor}
                            />
                        )
                    })}
                </PricePlansWrapper>
            </Content>
        </PricingContainer>
    );
};

export { Pricing };
