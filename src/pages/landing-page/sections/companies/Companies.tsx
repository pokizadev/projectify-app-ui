import { Container, Content } from "../../components/Container";
import { Company } from "./types";

import google from "../../../../assets/images/GoogleLogo.png";
import airbnb from "../../../../assets/images/airbnbLogo.png";
import creative from "../../../../assets/images/CreativeLogo.png";
import shopify from "../../../../assets/images/ShopifyLogo.png";
import amazon from "../../../../assets/images/AmazonLogo.png";
import styled from "styled-components";

export const companies: Company[] = [
    {
        imgUrl: google,
        text: "google"
    },
    {
        imgUrl: airbnb,
        text: "airbnb"
    },
    {
        imgUrl: creative,
        text: "creative"
    },
    {
        imgUrl: shopify,
        text: "shopify"
    },
    {
        imgUrl: amazon,
        text: "amazon"
    }
];

const CompaniesContent = styled(Content)`
    display: flex;
    gap: var(--space-30);
    justify-content: space-between;
    text-align: center;
    padding: var(--space-36) var(--space-32);

`

const LogoWrapper = styled.div`
    max-width: 11.6rem;
    height: max-content;
`; 

const CompanyLogo = styled.img`
    width: 100%;
    height: auto;


`;

const Companies = () => {
    return (
        <Container>
            <CompaniesContent>
                {companies.map((company, idx) => (
                    <LogoWrapper key={idx}>
                        <CompanyLogo src={company.imgUrl} alt={company.text} />
                    </LogoWrapper>
                ))}
            </CompaniesContent>
        </Container>
    );
};

export { Companies };
