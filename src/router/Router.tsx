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
} from "../pages";

import {
    TeamMemberCreatePassword,
    TeamMemberLogin,
    TeamMemberForgotPassword,
    TeamMemberResetPassword
} from "../pages";


import { AdminPlatform, AdminProjects} from "../pages";

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

            <Route path="/platform" element={<AdminPlatform/>}>
                <Route path="projects" element={<AdminProjects/>} />
                <Route path="stories" element={<h1>Stories</h1>} />
                <Route path="personal-tasks" element={<h1>Tasks</h1>}/>
                <Route path="team-members" element={<h1>Members</h1>}/>
            </Route>
        </>
    )
);
