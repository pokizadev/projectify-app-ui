import styled from "styled-components";
import { Typography } from "../../../../design-system";
import { Container, Content } from "../../components/Container";
import { FooterLinks, LinkItem } from "./FooterLinks";

export const links: LinkItem[] = [
    {
        linkText: "Careers",
        linkTo: ""
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

const FooterContainer = styled(Container)`
    border-top: 1px solid var(--jaguar-100);
`

const FooterContent = styled(Content)`
    display: flex;
    padding-top: var(--space-20);
    padding-bottom: var(--space-20);
    justify-content: space-between;
`

const Footer = () => {
    return (
        <FooterContainer>
            <FooterContent>
                <Typography variant="paragraphSM" weight="normal">©Projectify 2024 - All Rights Reserved</Typography>
               <FooterLinks links={links}/>
            </FooterContent>
        </FooterContainer>
    );
};

export { Footer };
