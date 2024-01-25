import React from "react";
import { Navigate, Route, RouteProps } from "react-router-dom";
import { useLocalStorage } from "../hooks";

type ProtectedRouteProps = {
    component: React.ReactElement;
    userType: "admin" | "teamMember";
    to: string;
};

const Private: React.FC<ProtectedRouteProps> = ({
    component,
    userType,
    to
}) => {
    const {getItem} = useLocalStorage()
    let isAuthTokenExists = getItem("authToken")
    
    if (isAuthTokenExists) {
        return component;
    } else {
        return <Navigate to={to} />;
    }
};

export { Private };
