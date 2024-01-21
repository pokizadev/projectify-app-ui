import { Outlet } from "react-router-dom";
import { SideBar, SideBarLinks } from "../../design-system";
import { AppLayout, AppContent, SideBarUser } from "../components";
import teamMember from "../../assets/images/team-member.png"



const links = [
    {
        title: "Menu",
        links: [
            {
                linkText: "Project",
                linkTo: "projects",
                iconName: "projects",
            },
            {
                linkText: "Stories",
                linkTo: "stories",
                iconName: "stories",
            },
            {
                linkText: "Personal Tasks",
                linkTo: "personal-tasks",
                iconName: "tasks",
            },
        ],
    },
    {
        title: "Settings",
        links: [
            {
                linkText: "Settings",
                linkTo: "settings",
                iconName: "settings",
            },
            {
                linkText: "Support",
                linkTo: "support",
                iconName: "support",
            },
        ],
    },
];
const TeamMemberPlatform = () => {
    return (
        <AppLayout>
        <SideBar>
            <SideBarUser details={{firstName: "Lora", lastName: "Jackson", imageUrl: teamMember, email: "123@example.com"}}
            />
            <SideBarLinks links={links} loggedOutLink="/admin/sign-in" />
        </SideBar>
        <AppContent>
            <Outlet />
        </AppContent>
    </AppLayout>
    );
};

export { TeamMemberPlatform };
