import { Companies } from "./sections/companies/Companies";
import { Features } from "./sections/features/Features";
import { HeroPage } from "./sections/hero/Hero";
import { Pricing } from "./sections/pricing/Pricing";

const LandingPage = () => {
    return (
        <>
            <HeroPage />
            <Companies />
            <Features />
            <Pricing />
        </>
    );
};

export { LandingPage };
