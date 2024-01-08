import {
    createBrowserRouter,
    createRoutesFromElements,
    Route
} from "react-router-dom";
import { App } from "../App";
import { AdminSignup, AdminLogin, AdminForgotPassword,AdminResetPassword } from "../pages";

import { TeamMemberCreatePassword, TeamMemberLogin, TeamMemberForgotPassword, TeamMemberResetPassword} from "../pages";

export const router = createBrowserRouter(
    createRoutesFromElements(
        <>
            <Route
                path="/"
                element={
                    <App/>
                }
            />
            <Route path="/admin/signup" element={<AdminSignup/>} />
            <Route path="/admin/login" element={<AdminLogin/>} />
            <Route path="/admin/forgot-password" element={<AdminForgotPassword/>} />
            <Route path="/admin/reset-password" element={<AdminResetPassword/>} />
            <Route path="/team-member/create-password" element={<TeamMemberCreatePassword/>} />
            <Route path="/team-member/login" element={<TeamMemberLogin/>} />
            <Route path="/team-member/forgot-password" element={<TeamMemberForgotPassword/>} />
            <Route path="/team-member/reset-password" element={<TeamMemberResetPassword/>} />

        </>
    )
);
