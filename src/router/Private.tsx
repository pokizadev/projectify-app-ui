import React, { useEffect } from "react";
import { Navigate } from "react-router-dom";
import { useLocalStorage, useStore } from "../hooks";
import { admin } from "../api";
import { UserRole } from "../types/types";
import { Actions, InitUserAction } from "../store";
import toast from "react-hot-toast";

type ProtectedRouteProps = {
    component: React.ReactElement;
    userType: UserRole;
    to: string;
};

const Private: React.FC<ProtectedRouteProps> = ({
    component,
    userType,
    to
}) => {
    const { getItem, setItem } = useLocalStorage();
    const { state, dispatch } = useStore();
    
    let isAuthTokenExists = getItem("authToken");

    useEffect(() => {
        if (userType === "admin") {
            admin
                .getMe()
                .then((data): void => {
                    const action: InitUserAction = {
                        type: Actions.INIT_USER,
                        payload: data.data
                    };
                    dispatch(action);
                    setItem("userRole", data.data.role)
                })
                .catch((error: Error) => {
                    toast.error(error.message);
                });
        } else if(userType === "teamMember") {
            
        }
    }, [dispatch]);

    const isAuthorized = getItem("userRole") === userType;

    if (isAuthTokenExists && isAuthorized) {
        return component;
    } else {
        return <Navigate to={to} />;
    }
};

export { Private };
