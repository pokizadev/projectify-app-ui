import {
    createBrowserRouter,
    createRoutesFromElements,
    Route
} from "react-router-dom";
import { App } from "../App";
import {
    AdminSignup,
    AdminLogin,
    AdminForgotPassword,
    AdminResetPassword,
    TeamMemberCreatePassword,
    TeamMemberLogin,
    TeamMemberForgotPassword,
    TeamMemberResetPassword,
    AdminPlatform,
    AdminProjects,
    TeamMemberPlatform
} from "../pages";
import { Private } from "./Private";
import { Auth } from "./Auth";


export const router = createBrowserRouter(
    createRoutesFromElements(
        <>
            <Route path="/" element={<App />} />
            <Route path="/admin/sign-up" element={<Auth component={<AdminSignup/>} userType="admin"/>} />
            <Route path="/admin/login"  element={<Auth component={<AdminLogin/>} userType="admin"/>}/>
            <Route
                path="/admin/forgot-password"
                element={<Auth component={<AdminForgotPassword/>} userType="admin"/>}
            />
            <Route
                path="/admin/reset-password"
                element={<Auth component={<AdminResetPassword/>} userType="admin"/>}
            />

            <Route
                path="/team-member/create-password"
                element={<Auth component={<TeamMemberCreatePassword/>} userType="teamMember"/>}
            />
            <Route path="/team-member/login" element={<Auth component={<TeamMemberLogin/>} userType="teamMember"/>} />
            <Route
                path="/team-member/forgot-password"
                element={<Auth component={<TeamMemberForgotPassword/>} userType="teamMember"/>}
            />
            <Route
                path="/team-member/reset-password"
                element={<Auth component={<TeamMemberResetPassword/>} userType="teamMember"/>}
            />

            <Route path="/admin/platform" element={<Private component={<AdminPlatform/>} userType="admin" />} >
                <Route path="projects" element={<AdminProjects />} />
                <Route path="stories" element={<h1>Stories</h1>} />
                <Route path="personal-tasks" element={<h1>Tasks</h1>} />
                <Route path="team-members" element={<h1>Members</h1>} />
            </Route>

            <Route path="/team-member/platform" element={<Private component={<TeamMemberPlatform/>} userType="teamMember"/>} >
                <Route path="projects" element={< AdminProjects />} />
                <Route path="stories" element={<h1>Stories</h1>} />
                <Route path="personal-tasks" element={<h1>Tasks</h1>} />
                <Route path="team-members" element={<h1>Members</h1>} />
            </Route>
        </>
    )
);
