import { Outlet, useNavigate } from "react-router-dom";
import { SideBar, SideBarLinks, SideBarLinksGroup, Toaster } from "../../design-system";
import { AppLayout, AppContent, SideBarUser } from "../components";
import teamMember from "../../assets/images/team-member.png"
import { useLocalStorage, useStore } from "../../hooks";
import { Actions } from "../../store";



const links: SideBarLinksGroup[] = [
    {
        title: "Menu",
        links: [
            {
                linkText: "Projects",
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
const Platform = () => {
    const {
        state: { user }, dispatch
    } = useStore();

    const navigate = useNavigate()
    const {removeItem } = useLocalStorage()
    const logOut = () => {
        removeItem("authToken")
        dispatch({type: Actions.RESET_STATE })
        navigate("/admin/login")
    }
    return (
        <AppLayout>
        <SideBar>
            <SideBarUser details={{
                firstName: user?.firstName || "", lastName: user?.lastName || "", imageUrl: teamMember, 
                email: user?.email || ""}}
            />
            <SideBarLinks links={links} logOut={logOut} />
        </SideBar>
        <AppContent>
            <Outlet />
        </AppContent>
    </AppLayout>
    );
};

export { Platform as TeamMemberPlatform };
