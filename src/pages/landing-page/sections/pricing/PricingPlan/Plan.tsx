import React from "react";
import styled from "styled-components";
import { PlanProps } from "./types";

const PlanCard = styled.div`
    display: flex;
    flex-direction: column;
    border-radius: var(--space-40);
    padding: var(--space-30);

`;

const PlanItem: React.FC<PlanProps> = ( {
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
    buttonTextColor,
}) => {
    return (
        <PlanCard>

        </PlanCard>
    )
};

export { PlanItem };
