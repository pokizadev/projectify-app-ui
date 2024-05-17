import styled from "styled-components";
import { useState } from "react";
import { Icon, Button } from "../../../../design-system";

const MobileNavContainer = styled.section<{ show: boolean }>`
    width: 60vh;
    height: 108vh;
    position: fixed;
    top: 0;
    right: 0;
    background-color: var(--white);
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.8);
    padding: var(--space-130) var(--space-100) var(--space-56) var(--space-56);
    display: block;

    z-index: 10;
    transition: transform ease-in-out 0.3s;
    transform: ${(props) =>
        props.show ? "translateX(0)" : "translateX(120%)"};
`;

const MobileNavTop = styled.div`
    height: 7rem;
    border-bottom: 1px solid var(--primary-100);
    margin-top: 0.4rem;

    padding: var(--space-20);
`;
const CloseIcon = styled(Icon)`
    width: 3rem;
    height: 3rem;
    display: block;
    margin-left: auto;
    fill: var(--primary-500);
`;

const MobileNavLinks = styled.div`
    display: flex;
    flex-direction: column;
    gap: var(--space-20);
    padding-top: var(--space-40);
    padding-left: var(--space-20);
    padding-right: var(--space-20);
`;
const LinkItem = styled.div`
    display: flex;
    justify-content: space-between;
`;
const Link = styled.a`
    color: var(--jaguar-600);
    font-size: var(--font-size-20);
    font-weight: var(--font-weight-500);
    line-height: var(--line-height-22);

    &:hover,
    &:focus {
        color: var(--primary-500);
    }
`;

const MobileNavButtons = styled.div`
    display: flex;
    flex-direction: column;
    gap: var(--space-30);
    padding-top: var(--space-40);
    padding-left: var(--space-20);
    padding-right: var(--space-20);
`
export type LinkItem = {
    linkText: string;
    linkTo: string;
};

type NavigationLinksProps = {
    links: LinkItem[];
    closeNav: () => void;
};

const MobileNavigation: React.FC<NavigationLinksProps> = ({links, closeNav}) => {
    const [showMobileNav, setShowMobileNav] = useState(true);

    return (
        <MobileNavContainer show={showMobileNav}>
            <MobileNavTop>
                <CloseIcon
                    iconName="x"
                    onClick={closeNav}
                />
            </MobileNavTop>
            <MobileNavLinks>
                {links.map((link, idx) => {
                    return (
                        <LinkItem key={idx}>
                            <Icon iconName="chevron-left" />
                            <Link href={link.linkTo}>{link.linkText}</Link>
                        </LinkItem>
                    );
                })}
            </MobileNavLinks>
            <MobileNavButtons>
                <Button color="secondary" size="sm" shape="circle">Create Account</Button>
                <Button color="secondary" size="sm" shape="circle">Log In</Button>
            </MobileNavButtons>
        </MobileNavContainer>
    );
};

export { MobileNavigation };
