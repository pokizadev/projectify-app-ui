import { useState } from "react";
import { Toggle } from "./design-system";
 
const App = () => {

    const [value, setValue] = useState<boolean>(false)

    const handleOnToggle = (value: boolean) => {
        setValue(value)
    }
    return (
            <div style={{padding: "150px"}}>
                <Toggle className="rounded" value={value}  onToggle={handleOnToggle}></Toggle>
            </div>
    );
};

export { App };
