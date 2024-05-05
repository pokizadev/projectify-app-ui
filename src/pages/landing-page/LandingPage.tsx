import { Companies } from "./sections/companies/Companies";
import { Features } from "./sections/features/Features";
import { HeroPage } from "./sections/hero/Hero";
import { Pricing } from "./sections/pricing/Pricing";
import { Testimonials } from "./sections/testimonials/Testimonials";

const LandingPage = () => {
    return (
        <>
            <HeroPage />
            <Companies />
            <Features />
            <Pricing />
            <Testimonials />
        </>
    );
};

export { LandingPage };
