import styled from "styled-components";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { Button, Icon, Logo } from "../../../../design-system";
import { Content } from "../../components/Container";
import { NavigationLinks, LinkItem } from "../../components/NavigationLinks";
import { MobileNavigation } from "./MobileNavigation";
import { SelectRoleModal } from "./SelectRoleModal";

export const links: LinkItem[] = [
    {
        linkText: "About",
        linkTo: "#services"
    },
    {
        linkText: "Testimonials",
        linkTo: "#testimonials"
    },
    {
        linkText: "Contact",
        linkTo: "#contact"
    }
];

export const mobileLinks = [
    {
        linkText: "Services",
        linkTo: "#services"
    },
    {
        linkText: "Plans",
        linkTo: "#plans"
    },
    {
        linkText: "Testimonials",
        linkTo: "#testimonials"
    },
    {
        linkText: "Contact",
        linkTo: "#contact"
    },
    {
        linkText: "FAQ",
        linkTo: ""
    },
    {
        linkText: "Sitemap",
        linkTo: ""
    },
    {
        linkText: "Privacy Policy",
        linkTo: ""
    }
];

const TopNavigationContent = styled(Content)`
    display: flex;
    gap: var(--space-50);
    padding-top: var(--space-12);

    @media (max-width: 52em) {
        padding-bottom: var(--space-12);
    }
`;

const ButtonsWrapper = styled.div`
    display: flex;
    gap: var(--space-10);
    margin-left: auto;

    @media (max-width: 50em) {
        display: none;
    }
`;

const BurgerIcon = styled(Icon)`
    display: none;

    @media (max-width: 50em) {
        display: flex;
        width: 3rem;
        height: 3rem;
        margin-left: auto;
        margin-top: 0.6rem;
    }
`;

const TopNavigation = () => {
    const [showSelectRoleModal, setShowSelectRoleModal] = useState(false);
    const [showMobileNav, setShowMobileNav] = useState(false);

    const handleLoginClick = () => {
        setShowSelectRoleModal(true);
        setShowMobileNav(false);
    };

    const navigate = useNavigate();
    
    return (
        <TopNavigationContent>
            <Logo size="sm" layout="horizontal" />
            <NavigationLinks links={links} />
            <ButtonsWrapper>
                <Button
                    variant="outlined"
                    color="primary"
                    size="md"
                    shape="rounded"
                    onClick={() => {
                        navigate("admin/sign-up");
                    }}
                >
                    Sign Up
                </Button>
                <Button
                    color="primary"
                    size="md"
                    shape="rounded"
                    onClick={() => setShowSelectRoleModal(true)}
                >
                    Login
                </Button>
            </ButtonsWrapper>
            <BurgerIcon
                iconName="burger"
                onClick={() => setShowMobileNav(true)}
            />

            <SelectRoleModal
                show={showSelectRoleModal}
                closeModal={() => setShowSelectRoleModal(false)}
            />

            {showMobileNav ? (
                <MobileNavigation
                    links={mobileLinks}
                    closeNav={() => setShowMobileNav(false)}
                    handleLoginClick={handleLoginClick}
                    
                />
            ) : (
                ""
            )}
        </TopNavigationContent>
    );
};

export { TopNavigation };
