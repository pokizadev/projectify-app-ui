import { Container } from "../../components/Container";
import styled from "styled-components";
import { TopNavigation } from "../top-navigation/TopNavigation";

const StyledContainer = styled(Container)`
    background: linear-gradient(to bottom, #f7f3ff, #fdfcff);
    border: 10px solid transparent;
    border-image: linear-gradient(to bottom, #f7f3ff, #fdfcff) 1;
    border-image-slice: 1;
`;
const HeroPage = () => {
    return (
        <StyledContainer>
            <TopNavigation />
        </StyledContainer>
    );
};

export { HeroPage };
