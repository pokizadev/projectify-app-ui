import { Link, Outlet } from "react-router-dom";
import { SideBar } from "../../design-system";
import { AppContent, AppLayout } from "../components/AppLayout";

const Platform = () => {
    return (
        <AppLayout>
            <SideBar>
                <Link to="projects" >Project</Link>
                <Link to="stories" >Stories</Link>
                <Link to="personal-tasks">Personal Tasks</Link>
                <Link to="team-members" >Team Members</Link>
            </SideBar>
            <AppContent>
                <Outlet />
            </AppContent>
        </AppLayout>
    );
};

export { Platform as AdminPlatform};
