import React from "react";
import styled from "styled-components";
import { Button, Typography } from "../../design-system";

type NoDatePlaceholderProps = {
    illustrationUrl: string;
    text: string;
    buttonText?: string;
    buttonAction?: () => void;
};

const NoDataPlaceholderBase = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
`;

const Illustration = styled.img.attrs({ alt: "There is no data" })`
    display: block;
    margin: 0 auto var(--space-24) auto;
`;
const Text = styled(Typography)`
    margin-bottom: var(--space-50);
    text-align: center;
`;


const NoDataPlaceholder: React.FC<NoDatePlaceholderProps> = ({
    illustrationUrl,
    text,
    buttonText,
    buttonAction
}) => {
    return (
        <NoDataPlaceholderBase>
            <Illustration src={illustrationUrl} />
            <Text variant="paragraphLG" weight="medium">
                {text}
            </Text>
            {buttonText ? (
                <Button
                    color="primary"
                    size="lg"
                    shape="rounded"
                    onClick={buttonAction}
                >
                    {buttonText}
                </Button>
            ) : null}
        </NoDataPlaceholderBase>
    );
};

export { NoDataPlaceholder };
