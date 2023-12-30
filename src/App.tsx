import { useState, useId } from "react";

import { Button, Typography, Input, Label, Avatar, Modal } from "./design-system";

import { Signup } from "./pages/admin-auth/Signup";

const App = () => {
    const [show, setShow] = useState(false);
    const emailId = useId();

    return (
        <div style={{ padding: "100px" }}>
            <Signup />;
        </div>
    );
};
<button type="submit"></button>;

export { App };
