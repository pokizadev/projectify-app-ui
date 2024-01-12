import { useState } from "react";
import { NoDataPlaceholder } from "../../components";
import noProject from "../../../assets/illustrations/no-projects.svg";



const Projects = () => {
    const [projects, setProject] = useState<string[]>([]);

    if(!projects.length)
        return (
            <NoDataPlaceholder
            illustrationUrl={noProject}
            text="You don't have any Projects yet!"
            buttonText="Add a Project"
            />
            );
        return <h1>Projects</h1>
};

export { Projects as AdminProjects };