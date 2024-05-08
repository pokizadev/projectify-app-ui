import styled from "styled-components";
import { Button, Logo } from "../../../../design-system";
import { Content } from "../../components/Container";
import { NavigationLinks, LinkItem } from "../../components/NavigationLinks";

export const links: LinkItem[] = [
    {
        linkText: "About",
        linkTo: ""
    },
    {
        linkText: "Testimonials",
        linkTo: ""
    },
    {
        linkText: "Contact",
        linkTo: ""
    }
];

const TopNavigationContent = styled(Content)`
    display: flex;
    gap: var(--space-50);
    padding-top: var(--space-20);
`;

const ButtonsWrapper = styled.div`
    display: flex;
    gap: var(--space-10);
    margin-left: auto;
`

const TopNavigation = () => {
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
                >
                    Sign Up
                </Button>
                <Button 
                    color="primary" 
                    size="md" 
                    shape="rounded"
                >
                    Login
                </Button>
            </ButtonsWrapper>
        </TopNavigationContent>
    );
};

export { TopNavigation };
