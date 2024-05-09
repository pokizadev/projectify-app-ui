import { Companies } from "./sections/companies/Companies";
import { Contact } from "./sections/contact/Contact";
import { Features } from "./sections/features/Features";
import { Footer } from "./sections/footer/Footer";
import { HeroPage } from "./sections/hero/Hero";
import { Info } from "./sections/info/Info";
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
            <Contact/>
            <Info/>
            <Footer/>
        </>
    );
};

export { LandingPage };
