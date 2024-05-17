import styled from "styled-components";
import { Container, Content } from "../../components/Container";
import { Icon, Logo, Typography } from "../../../../design-system";

const InfoContent = styled(Content)`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: var(--space-30);

    @media (max-width: 52em) {
        grid-template-columns: repeat(2, 1fr);
    }
`;

const LogoInfo = styled.div`
    width: 60%;
    display: flex;
    flex-direction: column;
    gap: var(--space-30);

    @media (max-width: 52em) {
        width: 100%;
        display: grid;
        grid-row: 1;
        grid-column: 1 / 3;
        grid-template-columns: 1fr 1fr;
        text-align: end;
    }
`;

const ContactInfo = styled.div`
    display: flex;
    flex-direction: column;
    gap: var(--space-16);
`;

const Contact = styled.div`
    display: flex;
    gap: var(--space-8);
`;

const ContactIcon = styled(Icon)`
    @media (max-width: 78em) {
        width: 3.2rem;
        height: 3.2rem;
    }
`;

const Link = styled.a`
    color: var(--jaguar-900);
    font-size: var(--space-16);
    line-height: var(--space-20);

    &:hover,
    &:focus {
        color: var(--primary-500);
    }
`;

const SocialMediaIcons = styled.div`
    display: flex;
    gap: var(--space-20);
`;
const SocialIcon = styled(Icon)`
    width: 3.2rem;
    height: 3.2rem;

    @media (max-width: 78em) {
        width: 4rem;
        height: 4rem;
    }
`;
const Map = styled.div`
    width: 37rem;
    height: 20rem;
    border-radius: var(--border-radius-40);

    iframe {
        width: 37rem;
        height: 20rem;
        border: 0;
        border-radius: 4rem;
    }

    @media (max-width: 52em) {
        margin-left: auto;
    }
`;
const Info = () => {
    return (
        <Container>
            <InfoContent>
                <LogoInfo>
                    <Logo layout="horizontal" size="sm" />
                    <Typography variant="paragraphSM" weight="bold">
                        Unleashing Success One Project at a Time!
                    </Typography>
                </LogoInfo>
                <ContactInfo>
                    <Contact>
                        <ContactIcon iconName="phone" />
                        <Link href="tel:++1 (555) 555-11234" target="_blank">
                            +1 (555) 555-11234
                        </Link>
                    </Contact>
                    <Contact>
                        <ContactIcon iconName="email-purple" />
                        <Link href="mailto:info@projectify.com" target="_blank">
                            info@projectify.com
                        </Link>
                    </Contact>
                    <Contact>
                        <ContactIcon iconName="map" />
                        <Link
                            href="https://www.google.com/maps/place/205+Allen+St,+New+York,+NY+10002/@40.7227487,-73.9916556,17z/data=!3m1!4b1!4m6!3m5!1s0x89c2598474c10bcf:0xd62d514f22a03f04!8m2!3d40.7227487!4d-73.9890753!16s%2Fg%2F11c5fx1fvm?entry=ttu"
                            target="_blank"
                        >
                            205 Allen St, New York, NY 10002, USA
                        </Link>
                    </Contact>
                    <SocialMediaIcons>
                        <SocialIcon iconName="facebook" />
                        <SocialIcon iconName="twitter" />
                        <SocialIcon iconName="instagram" />
                    </SocialMediaIcons>
                </ContactInfo>
                <Map>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3023.7850270269037!2d-73.99165558890786!3d40.72274867127266!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2598474c10bcf%3A0xd62d514f22a03f04!2s205%20Allen%20St%2C%20New%20York%2C%20NY%2010002!5e0!3m2!1sen!2sus!4v1715295994758!5m2!1sen!2sus"
                        loading="lazy"
                    ></iframe>
                </Map>
            </InfoContent>
        </Container>
    );
};

export { Info };
