import styled from "styled-components";

export const Container = styled.section`
    max-width: 192rem;
    margin: 0 auto;
`;

export const Content = styled.div`
    max-width: 117rem;
    margin: 0 auto;
    padding-top: var(--space-100);
    padding-bottom: var(--space-100);

    @media (max-width: 78em) {
        padding-left: var(--space-60);
        padding-right: var(--space-60);
        padding-top: var(--space-80);
        padding-bottom: var(--space-80);
    }

    @media (max-width: 62.5em) {
        padding-left: var(--space-20);
        padding-right: var(--space-20);
    }

    @media (max-width: 52em) {
        padding-top: var(--space-60);
        padding-bottom: var(--space-60);
    }
`;
