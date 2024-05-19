import styled from "styled-components";
import background3 from "../../../../assets/images/background3.png";
import { Container, Content } from "../../components/Container";
import { Typography, Icon } from "../../../../design-system";
import { testimonials } from "./data";
import { useState } from "react";

const TestimonialsContainer = styled(Container)`
    background-image: url(${background3});
    background-position: top;
    background-size: contain;
    background-repeat: no-repeat;
`;

const TestimonialsContent = styled(Content)`
    padding-top: var(--space-120);

    @media (max-width: 78em) {
        padding-top: var(--space-80);
    }

    @media (max-width: 52em) {
        padding-top: var(--space-60);
    }
`;

const Title = styled(Typography)`
    margin-bottom: var(--space-50);
`;
const TestimonialsWrapper = styled.div`
    text-align: center;
    position: relative;
`;
const Testimonial = styled.div`
    display: inline-block;
    vertical-align: middle;
`;

const AvatarContainer = styled.div`
    display: flex;
    align-items: center;
    flex-shrink: 0;
`;

const AvatarImage = styled.img<{ $active: boolean; $last: boolean }>`
    width: ${(props) => (props.$active ? "17rem" : "10rem")};
    height: ${(props) => (props.$active ? "17rem" : "10rem")};
    border-radius: 50%;
    object-fit: cover;
    opacity: ${(props) => (props.$active ? "1" : "0.5")};
    margin-right: ${(props) => (props.$last ? "0" : "var(--space-50)")};
    margin-bottom: var(--space-20);

    @media (max-width: 25em) {
        display: ${(props) => (props.$active ? "" : "none")};
        margin: 0 auto;
    }
`;

const InfoWrapper = styled.div<{ $active: boolean }>`
    display: ${(props) => (props.$active ? "flex" : "none")};
    flex-direction: column;
    gap: var(--space-4);
    text-align: center;
    justify-content: center;
`;

const Name = styled(Typography)`
    @media (max-width: 25em) {
        margin-top: var(--space-20);
    }
`;

const Description = styled(Typography)`
    width: 60%;
    margin: 0 auto;
`;
const RatingWrapper = styled.div`
    margin-top: var(--space-30);
    margin-bottom: var(--space-4);
`;

const Star = styled(Icon)`
    width: 5rem;
    height: 5rem;
`;

const ActivePageIdentifiers = styled.div`
    display: flex;
    gap: var(--space-24);
    text-align: center;
    justify-content: center;
    margin-top: var(--space-50);
`;

const ActiveDot = styled.div<{ $active: boolean }>`
    width: 2rem;
    height: 2rem;
    background-color: ${(props) =>
        props.$active ? "var(--primary-500)" : "var(--jaguar-100)"};
    border-radius: var(--border-radius-8);
`;

const PrevButton = styled.button`
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    width: 8.4rem;
    height: 8.4rem;
    border-radius: var(--border-radius-24);
    border: 0.15rem solid var(--jaguar-100);
    background-color: var(--white);
    transition: all 0.3s linear;
    cursor: pointer;
    fill: var(--primary-500);

    &:hover,
    &:focus {
        border: none;
        background-color: var(--primary-500);

        svg {
            fill: var(--white);
        }
    }

    @media (max-width: 30em) {
        width: 6rem;
        height: 6rem;
        border-radius: var(--border-radius-16);
    }
`;

const PrevIcon = styled(Icon)`
    width: 3.6rem;
    height: 3.6rem;

    @media (max-width: 30em) {
        width: 3rem;
        height: 3rem;
    }
`;

const NextButton = styled.button`
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
    width: 8.4rem;
    height: 8.4rem;
    border-radius: var(--border-radius-24);
    border: 0.15rem solid var(--jaguar-100);
    background-color: var(--white);
    transition: all 0.3s linear;
    cursor: pointer;
    fill: var(--primary-500);

    &:hover,
    &:focus {
        border: none;
        background-color: var(--primary-500);

        svg {
            fill: var(--white);
        }
    }

    @media (max-width: 30em) {
        width: 6rem;
        height: 6rem;
        border-radius: var(--border-radius-16);
    }
`;

const NextIcon = styled(Icon)`
    width: 3.6rem;
    height: 3.6rem;

    @media (max-width: 30em) {
        width: 3rem;
        height: 3rem;
    }
`;

const Testimonials = () => {
    const [currentIndex, setCurrentIndex] = useState(1);

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    };

    const handlePrev = () => {
        setCurrentIndex(
            (prevIndex) =>
                (prevIndex - 1 + testimonials.length) % testimonials.length
        );
    };

    return (
        <TestimonialsContainer>
            <TestimonialsContent id="testimonials">
                <Title variant="h5" weight="bold" align="center">
                    Trust Our Clients
                </Title>
                <TestimonialsWrapper>
                    {testimonials.map((testimonial, idx) => {
                        return (
                            <Testimonial key={idx}>
                                <AvatarContainer>
                                    <AvatarImage
                                        $last={idx === testimonials.length - 1}
                                        $active={idx === currentIndex}
                                        src={testimonial.image}
                                    />
                                </AvatarContainer>
                            </Testimonial>
                        );
                    })}
                    {testimonials.map((testimonial, idx) => {
                        return (
                            <InfoWrapper
                                key={idx}
                                $active={idx === currentIndex}
                            >
                                <Name variant="h6" weight="semibold">
                                    {testimonial.name}
                                </Name>
                                <Typography
                                    variant="subtitleLG"
                                    weight="semibold"
                                    color="jaguarLight"
                                >
                                    {testimonial.position}
                                </Typography>
                                <RatingWrapper>
                                    {testimonial.rating.map((_, idx) => {
                                        return (
                                            <Star key={idx} iconName="star" />
                                        );
                                    })}
                                </RatingWrapper>
                                <Description
                                    variant="paragraphMD"
                                    weight="medium"
                                    color="jaguarLight"
                                    align="center"
                                >
                                    {testimonial.description}
                                </Description>
                                <ActivePageIdentifiers>
                                    {testimonials.map((_, idx) => (
                                        <ActiveDot
                                            key={idx}
                                            $active={idx === currentIndex}
                                        />
                                    ))}
                                </ActivePageIdentifiers>
                            </InfoWrapper>
                        );
                    })}
                    <PrevButton onClick={handlePrev}>
                        <PrevIcon iconName="arrow-left" />
                    </PrevButton>
                    <NextButton onClick={handleNext}>
                        <NextIcon iconName="arrow-right" />
                    </NextButton>
                </TestimonialsWrapper>
            </TestimonialsContent>
        </TestimonialsContainer>
    );
};

export { Testimonials };
