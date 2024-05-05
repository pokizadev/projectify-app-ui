import styled from "styled-components";
import background3 from "../../../../assets/images/bg-effect-3.png";
import { Container, Content } from "../../components/Container";
import { Typography } from "../../../../design-system";
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
`;

const Title = styled(Typography)`
    margin-bottom: var(--space-50);
`;

const AvatarsWrapper = styled.div`
    display: flex;
    text-align: center;
    justify-content: center;
    gap: var(--space-50);
`;

const Testimonial = styled.div``;

const AvatarImage = styled.img<{ $active: boolean }>`
    width: ${(props) => (props.$active ? "20rem" : "12rem")};
    height: ${(props) => (props.$active ? "20rem" : "12rem")};
    border-radius: 50%;
    object-fit: cover;
    opacity: ${(props) => (props.$active ? "1" : "0.5")};
    margin-top: auto;
`;

const InfoWrapper = styled.div`
    display: flex;
    flex-direction: column;
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
        <Container>
            <StyledDiv />
            <TestimonialsContent>
                <Title variant="h5" weight="bold" align="center">
                    Trust Our Clients
                </Title>
                <div>
                    <AvatarsWrapper>
                        {testimonials.map((testimonial, idx) => {
                            return (
                                <Testimonial>
                                    <AvatarImage
                                        key={idx}
                                        $active={idx === currentIndex}
                                        src={testimonial.image}
                                    ></AvatarImage>
                                    <InfoWrapper></InfoWrapper>
                                </Testimonial>
                            );
                        })}
                    </AvatarsWrapper>
                </div>
            </TestimonialsContent>
        </Container>
    );
};

export { Testimonials };
