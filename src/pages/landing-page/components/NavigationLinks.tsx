import React from "react";
import styled from "styled-components";
import { Button } from "../../../design-system";

const LinksWrapper = styled.nav`
    width: 58%;
    display: flex;
    justify-content: center;
    text-align: center;

    @media (max-width: 78em) {
        width: 50%;
    }
    @media (max-width: 56.25em) {
        width: 44%;
    }

    @media (max-width: 50em) {
        display: none;
    }
`;

const StyledLinks = styled.ul`
    display: flex;
    gap: var(--space-44);
    justify-content: center;
    align-items: center;

    li {
        list-style-type: none;
    }
`;

export type LinkItem = {
    linkText: string;
    linkTo: string;
};

type NavigationLinksProps = {
    links: LinkItem[];
};

const Link = styled.a`
    color: var(--jaguar-900);
    font-size: var(--font-size-16);
    font-weight: var(--font-weight-500);
    line-height: var(--line-height-20);

    &:hover,
    &:focus {
        color: var(--primary-500)
    }
`;

const NavigationLinks: React.FC<NavigationLinksProps> = ({ links }) => {
    return (
        <LinksWrapper>
            <StyledLinks>
                {links.map((link, idx) => {
                    return (
                        <li key={idx}>
                            <Link href={link.linkTo}>{link.linkText}</Link>
                        </li>
                    );
                })}
            </StyledLinks>
        </LinksWrapper>
    );
};

export { NavigationLinks };
