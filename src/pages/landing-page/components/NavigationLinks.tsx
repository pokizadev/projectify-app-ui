import React from "react";
import styled from "styled-components";
import { Button } from "../../../design-system";

const LinksWrapper = styled.nav`
    display: flex;
`;

const StyledLinks = styled.ul`
    display: flex;
    gap: var(--space-12);
    justify-content: space-between;
    align-items: center;
`;

export type LinkItem = {
    linkText: string;
    linkTo: string;
};

type NavigationLinksProps = {
    links: LinkItem[];
};

const NavigationLinks: React.FC<NavigationLinksProps> = ({ links }) => {
    return (
        <LinksWrapper>
            <StyledLinks>
                {links.map((link, idx) => {
                    return (
                        <li key={idx}>
                            <Button
                                variant="text"
                                size="md"
                            >
                                {link.linkText}
                            </Button>
                        </li>
                    );
                })}
            </StyledLinks>
        </LinksWrapper>
    );
};

export { NavigationLinks };
