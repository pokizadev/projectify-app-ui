import { Companies } from "./sections/companies/Companies";
import { Features } from "./sections/features/Features";
import { HeroPage } from "./sections/hero/Hero";

const LandingPage = () => {
    return (
        <>
            <HeroPage />
            <Companies />
            <Features />
        </>
    );
};

export { LandingPage };
