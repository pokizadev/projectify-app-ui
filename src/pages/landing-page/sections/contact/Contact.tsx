import { useState } from "react";

import styled from "styled-components";
import { Container, Content } from "../../components/Container";
import background4 from "../../../../assets/images/background4.png";
import contactPageImg from "../../../../assets/images/request-demo-img.png";
import { Button, Input, Typography } from "../../../../design-system";
import userIcon from "../../../../assets/icons/user.png";
import emailIcon from "../../../../assets/icons/email.svg";
import buildingIcon from "../../../../assets/icons/building.svg";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    icon?: string;
}

const ContactContainer = styled(Container)`
    background: linear-gradient(
        to right,
        var(--primary-500),
        var(--primary-200)
    );
`;
const StyledDiv = styled.div`
    background: url(${background4});
    background-size: cover;
    background-position: center;
`;

const ContactTitle = styled(Typography)`
    margin-bottom: var(--space-50);
`;
const ContactWrapper = styled.div`
    display: flex;
`;
const ImageWrapper = styled.div`
    width: 50%;
    padding: var(--space-32) var(--space-36) var(--space-32) 0;

    img {
        width: 100%;
        height: auto;
    }
`;

const Form = styled.form`
    width: 50%;
    display: flex;
    flex-direction: column;
    gap: var(--space-24);
`;

const StyledInput = styled(Input)<InputProps>`
    background-color: transparent;
    width: 83%;

    .input {
        width: 100%;
        height: var(--space-50);
        background-image: url(${(props) => props.icon});
        background-size: 2.4rem;
        background-position: 1.2rem center;
        background-repeat: no-repeat;
        padding: var(--space-20) var(--space-48);
        border-radius: var(--border-radius-16);
    }

    .input::placeholder {
        font-size: 2rem;
        color: var(--jaguar-200);
    }
`;

const RequestButton = styled(Button)`
    width: 83%;
    background-color: var(--sunglow-300);
    border-radius: var(--space-16);
    margin-top: var(--space-10);
`;

const Contact = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [company, setCompany] = useState("");
    return (
        <ContactContainer>
            <StyledDiv>
                <Content>
                    <ContactTitle
                        variant="h5"
                        weight="bold"
                        color="white"
                        align="center"
                    >
                        Ready to get your hands on Projectify!
                    </ContactTitle>
                    <ContactWrapper>
                        <ImageWrapper>
                            <img src={contactPageImg} />
                        </ImageWrapper>
                        <Form>
                            <StyledInput
                                icon={userIcon}
                                type="text"
                                placeholder="Name"
                                onChange={() => {}}
                                value={name}
                            />

                            <StyledInput
                                icon={emailIcon}
                                type="email"
                                placeholder="Email"
                                onChange={() => {}}
                                value={email}
                            />
                            <StyledInput
                                icon={buildingIcon}
                                type="text"
                                placeholder="Company"
                                onChange={() => {}}
                                value={company}
                            />
                            <RequestButton size="lg">
                                {" "}
                                Request a Demo
                            </RequestButton>
                        </Form>
                    </ContactWrapper>
                </Content>
            </StyledDiv>
        </ContactContainer>
    );
};

export { Contact };
