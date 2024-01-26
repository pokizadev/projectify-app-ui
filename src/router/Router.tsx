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


export const router = createBrowserRouter(
    createRoutesFromElements(
        <>
            <Route path="/" element={<App />} />
            <Route path="/admin/signup" element={<AdminSignup />} />
            <Route path="/admin/login" element={<AdminLogin />} />
            <Route
                path="/admin/forgot-password"
                element={<AdminForgotPassword />}
            />
            <Route
                path="/admin/reset-password"
                element={<AdminResetPassword />}
            />

            <Route
                path="/team-member/create-password"
                element={<TeamMemberCreatePassword />}
            />
            <Route path="/team-member/login" element={<TeamMemberLogin />} />
            <Route
                path="/team-member/forgot-password"
                element={<TeamMemberForgotPassword />}
            />
            <Route
                path="/team-member/reset-password"
                element={<TeamMemberResetPassword />}
            />

            <Route path="/admin/platform" element={<Private component={<AdminPlatform/>} userType="admin" to="../admin/login"/>} >
                <Route path="projects" element={<AdminProjects />} />
                <Route path="stories" element={<h1>Stories</h1>} />
                <Route path="personal-tasks" element={<h1>Tasks</h1>} />
                <Route path="team-members" element={<h1>Members</h1>} />
            </Route>

            <Route path="/team-member/platform" element={<Private component={<TeamMemberPlatform/>} userType="teamMember" to="../team-member/login"/>} >
                <Route path="projects" element={< AdminProjects />} />
                <Route path="stories" element={<h1>Stories</h1>} />
                <Route path="personal-tasks" element={<h1>Tasks</h1>} />
                <Route path="team-members" element={<h1>Members</h1>} />
            </Route>
        </>
    )
);
