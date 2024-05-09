import React from "react";
import styled from "styled-components";

const LinksWrapper = styled.div`
    width: 58%;
    display: flex;
    justify-content: flex-end;
    text-align: center;
`;

const StyledLinks = styled.ul`
    display: flex;
    gap: var(--space-48);
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

type FooterLinksProps = {
    links: LinkItem[];
};

const Link = styled.a`
    color: var(--primary-500);
    font-size: var(--font-size-16);
    font-weight: var(--font-weight-500);
    line-height: var(--line-height-24);
`;

const FooterLinks: React.FC<FooterLinksProps> = ({ links }) => {
    return (
        <LinksWrapper>
            <StyledLinks>
                {links.map((link, idx) => {
                    return (
                        <li key={idx}>
                            <Link>{link.linkText}</Link>
                        </li>
                    );
                })}
            </StyledLinks>
        </LinksWrapper>
    );
};

export { FooterLinks };
