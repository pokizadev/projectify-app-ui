import { Outlet, useNavigate } from "react-router-dom";
import { SideBar, SideBarLinks, SideBarLinksGroup, Toaster } from "../../design-system";
import { AppPage, AppLayout, SideBarUser } from "../components";
import avatar from "../../assets/images/user1.png";

import { useLocalStorage, useStore } from "../../hooks";
import { Actions } from "../../store";

const links: SideBarLinksGroup[] = [
    {
        title: "Menu",
        links: [
            {
                linkText: "Projects",
                linkTo: "projects",
                iconName: "projects"
            },
            {
                linkText: "Stories",
                linkTo: "stories",
                iconName: "stories"
            },
            {
                linkText: "Personal Tasks",
                linkTo: "personal-tasks",
                iconName: "tasks"
            },
            {
                linkText: "Team Members",
                linkTo: "team-members",
                iconName: "members"
            }
        ]
    },
    {
        title: "Settings",
        links: [
            {
                linkText: "Settings",
                linkTo: "settings",
                iconName: "settings"
            },
            {
                linkText: "Support",
                linkTo: "support",
                iconName: "support"
            }
        ]
    }
];

const Platform = () => {
    const {
        state: { user }, dispatch
    } = useStore();

    const navigate = useNavigate()
    const {removeItem } = useLocalStorage()
    const logOut = () => {
        removeItem("authToken")
        removeItem("userRole")
        dispatch({type: Actions.RESET_STATE })
        navigate("/admin/login")
    }
    return (
        <>
            <AppLayout>
                <SideBar>
                    <SideBarUser
                        details={{
                            firstName: user?.firstName || "",
                            lastName: user?.lastName || "",
                            imageUrl: avatar,
                            email: user?.email || ""
                        }}
                    />
                    <SideBarLinks
                        links={links}
                        logOut = {logOut}
                    />
                </SideBar>
                <AppPage>
                    <Outlet />
                </AppPage>
            </AppLayout>
            <Toaster />
        </>
    );
};

export { Platform as AdminPlatform };
