import { Container, Content } from "../../components/Container";
import { Typography, Button } from "../../../../design-system";
import styled from "styled-components";
import background from "../../../../assets/images/background1.png";
import heroImg from "../../../../assets/images/hero.png";
import date from "../../../../assets/images/date.png";
import members from "../../../../assets/images/members.png";
import status from "../../../../assets/images/status.png";
import google from "../../../../assets/images/google.png";
import { TopNavigation } from "../top-navigation/TopNavigation";

const HeroContainer = styled(Container)`
    background-color: linear-gradient(
        to right,
        var(--primary-25),
        var(--primary-12)
    );
    background-image: url(${background});
    background-position: top;
    background-size: contain;
    background-repeat: no-repeat;
    background-color: var(--primary-12);

    @media (max-width: 52em) {
        background: none;
    }
`;

const HeroContent = styled(Content)`
    display: flex;
    flex-direction: column;
    text-align: center;
    padding-top: 0;
    padding-bottom: 0;

    @media (max-width: 52em) {
        background-color: linear-gradient(
            to right,
            var(--primary-25),
            var(--primary-12)
        );
        background-image: url(${background});
        background-position: top;
        background-size: contain;
        background-repeat: no-repeat;
        background-color: var(--primary-12);
    }
`;

const HeadingText = styled(Typography)`
    margin-bottom: var(--space-16);

    @media screen and (max-width: 60em) {
        font-size: var(--font-size-48);
        line-height: var(--line-height-56);
    }

    @media screen and (max-width: 52em) {
        font-size: var(--font-size-40);
        line-height: var(--line-height-48);
        margin-top: var(--space-60);
    }

    @media screen and (max-width: 40em) {
        font-size: var(--font-size-32);
        line-height: var(--line-height-40);
    }
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

    @media (max-width: 82em) {
        top: 33%;
        left: 23%;
    }
`;
const MembersImage = styled.img`
    position: absolute;
    bottom: 12%;
    left: -12%;
    width: 25%;
    height: auto;

    @media (max-width: 93.75em) {
        left: -8%;
    }

    @media (max-width: 85em) {
        left: -4%;
    }

    @media (max-width: 82em) {
        bottom: 13%;
        left: 2%;
    }
`;

const StatusBadge = styled.img`
    position: absolute;
    top: 40%;
    right: -4%;
    width: 15%;

    @media (max-width: 85em) {
        top: 85%;
        right: 17%;
    }
`;
const GoogleImage = styled.img`
    position: absolute;
    bottom: 2%;
    right: -8%;
    width: 27%;
    max-width: 100%;
    height: auto;

    @media (max-width: 85em) {
        bottom: 70%;
        right: 25%;
    }
`;

const HeroPage = () => {
    return (
        <HeroContainer>
            <TopNavigation />
            <HeroContent>
                <HeadingText variant="h1" align="center" weight="semibold">
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
