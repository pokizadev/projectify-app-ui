import styled from "styled-components";
import background3 from "../../../../assets/images/bg-effect-3.png";
import { Container, Content } from "../../components/Container";
import { Typography, Icon } from "../../../../design-system";
import { testimonials } from "./data";
import { useState } from "react";

const StyledDiv = styled.div`
    background-image: url(${background3});
    width: 100%;
    height: 45rem;
    margin-bottom: -17%;
`;

const TestimonialsContent = styled(Content)`
    padding-top: var(--space-100);
    padding-bottom: var(--space-100);
`;

const Title = styled(Typography)`
    margin-bottom: var(--space-50);
`;
const TestimonialsWrapper = styled.div`
    text-align: center;
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
`;

const InfoWrapper = styled.div<{ $active: boolean }>`
    display: ${(props) => (props.$active ? "flex" : "none")};
    flex-direction: column;
    gap: var(--space-4);
    text-align: center;
    justify-content: center;
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

const Page = styled.div<{ $active: boolean }>`
    width: 2rem;
    height: 2rem;
    background-color: ${(props) => (props.$active ? "var(--primary-500)" : "var(--jaguar-100)")};
    border-radius: var(--border-radius-8);
`

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
        <Container>
            <StyledDiv />
            <TestimonialsContent>
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
                            <InfoWrapper $active={idx === currentIndex}>
                                <Typography variant="h6" weight="semibold">
                                    {testimonial.name}
                                </Typography>
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
                                        <Page
                                            key={idx}
                                            $active={idx === currentIndex}

                                        />
                                    ))}
                                </ActivePageIdentifiers>
                            </InfoWrapper>
                        );
                    })}
                </TestimonialsWrapper>
            </TestimonialsContent>
        </Container>
    );
};

export { Testimonials };
