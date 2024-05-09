import styled from "styled-components";
import { Container, Content } from "../../components/Container";
import { Icon, Logo, Typography } from "../../../../design-system";

const InfoContent = styled(Content)`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: var(--space-30);
`;

const LogoInfo = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    gap: var(--space-30);
`;

const ContactInfo = styled.div`
    display: flex;
    flex-direction: column;
    gap: var(--space-30);
`;

const Contact = styled.div`
    display: flex;
    gap: var(--space-8);
`;

const SocialMediaIcons = styled.div`
    display: flex;
    gap: var(--space-20);
`;
const SocialIcon = styled(Icon)`
    width: 3.2rem;
    height: 3.2rem;
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
                        <Icon iconName="phone" />
                        <Typography variant="paragraphSM" weight="normal">
                            +1 (555) 555-1234
                        </Typography>
                    </Contact>
                    <Contact>
                        <Icon iconName="email-purple" />
                        <Typography variant="paragraphSM" weight="normal">
                            info@projectify.com
                        </Typography>
                    </Contact>
                    <Contact>
                        <Icon iconName="map" />
                        <Typography variant="paragraphSM" weight="normal">
                            205 Allen St, New York, NY 10002, USA
                        </Typography>
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
