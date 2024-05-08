import { Container, Content } from "../../components/Container";
import { Typography, Button } from "../../../../design-system";
import styled from "styled-components";
import background from "../../../../assets/images/bg-effect.jpg";
import heroImg from "../../../../assets/images/hero.png";
import date from "../../../../assets/images/date.png";
import members from "../../../../assets/images/members.png";
import status from "../../../../assets/images/status.png";
import google from "../../../../assets/images/google.png";
import { TopNavigation } from "../top-navigation/TopNavigation";

const HeroContainer = styled(Container)`
    background: url(${background}) center/cover,
        linear-gradient(to right, #f7f3ff 0%, #fdfcff 100%);
        
    background-position: center;
    background-size: cover;
`;

const HeroContent = styled(Content)`
    display: flex;
    flex-direction: column;
    text-align: center;
`;

const HeadingText = styled(Typography)`
    margin-bottom: var(--space-16);
`;

const Description = styled(Typography)`
    max-width: calc(var(--font-size-64) * 12);
    margin: var(--space-8) auto var(--space-30) auto;
`;

const DemoButton = styled(Button)`
    margin: 0 auto;
    max-width: 17rem;
    margin-bottom: var(--space-40);
`;

const HeroImgWrapper = styled.div`
    position: relative;
`;

const HeroImg = styled.img`
    width: 100%;
    height: auto;
`;

const DateBadge = styled.img`
    position: absolute;
    top: 18%;
    left: -3%;
    width: 11%;
`;
const MembersImage = styled.img`
    position: absolute;
    bottom: 12%;
    left: -12%;
    width: 25%;
    height: auto;
`;

const StatusBadge = styled.img`
    position: absolute;
    top: 40%;
    right: -4%;
    width: 12.5%;
`;
const GoogleImage = styled.img`
    position: absolute;
    bottom: 2%;
    right: -8%;
    width: 27%;
    max-width: 100%;
    height: auto;
`;

const HeroPage = () => {
    return (
        <HeroContainer>
            <TopNavigation />
            <HeroContent>
                <HeadingText variant="h1" align="center">
                    Unleash the Power of Projectify
                </HeadingText>
                <Description
                    variant="paragraphMD"
                    align="center"
                    color="jaguarLight"
                >
                    Projectify is your all-in-one solution, crafted to simplify
                    your project management journey and supercharge your
                    success.
                </Description>
                <DemoButton
                    size="md"
                    shape="rounded"
                    color="primary"
                    fullWidth
                    onClick={() => {}}
                >
                    Try a Demo
                </DemoButton>

                <HeroImgWrapper>
                    <HeroImg src={heroImg} alt="Projectify Kanban Board" />
                    <DateBadge src={date} alt="" />
                    <MembersImage src={members} alt="" />
                    <StatusBadge src={status} alt="" />
                    <GoogleImage src={google} alt="" />
                </HeroImgWrapper>
            </HeroContent>
        </HeroContainer>
    );
};

export { HeroPage };
