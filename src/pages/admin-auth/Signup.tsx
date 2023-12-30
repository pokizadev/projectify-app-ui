import { Button, Typography } from "../../design-system";
import { AuthWrapper } from "../components/";

import peopleDicussing from "../../assets/images/frame-1.png";

const Signup = () => {
    return (
        <AuthWrapper imageUrl={peopleDicussing}>
            <Typography variant="h1">Hello</Typography>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Officiis maiores, ipsa nemo rem nesciunt doloribus in, magnam
                sequi tempora aliquam, sapiente tenetur accusamus veniam
                assumenda fugit incidunt esse eos. Est.
            </p>
        </AuthWrapper>
    );
};

export { Signup };