import React, { useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { useLocalStorage, useStore } from "../hooks";
import { admin } from "../api";
import { UserRole } from "../types/types";
import { Actions, InitUserAction } from "../store";
import toast from "react-hot-toast";

type ProtectedRouteProps = {
    component: React.ReactElement;
    userType: UserRole;
};

const Private: React.FC<ProtectedRouteProps> = ({
    component,
    userType,
}) => {
    const { getItem, setItem } = useLocalStorage();
    const { dispatch } = useStore();
    const navigate = useNavigate()

    let isAuthTokenExists = getItem("authToken");

    useEffect(() => {
        if(isAuthTokenExists) {
            if (userType === UserRole.admin) {
                admin
                    .getMe()
                    .then((data): void => {
                        const action: InitUserAction = {
                            type: Actions.INIT_USER,
                            payload: data.data
                        };
                        dispatch(action);
                        setItem("userRole", data.data.role);
                    })
                    .catch((error: Error) => {
                        toast.error(error.message);
                        navigate("../")

                    });
            } else if (userType === UserRole.teamMember) {
            }
        }
       
    }, [userType]);

    const userRole = getItem("userRole");
    const isAuthorized = userType === userRole;

    if (!isAuthTokenExists) {
        const navigateTo =
            userType === UserRole.admin
                ? "../admin/login"
                : "../team-member/login";
        return <Navigate to={navigateTo} />;
    } else if (isAuthorized) {
        return component;
    } else if (!isAuthorized) {
        const navigateTo =
            userType === UserRole.admin
                ? "../admin/platform"
                : "../team-member/platform";
        return <Navigate to={navigateTo} />;
    }
        return <Navigate to="../" />;
    
};

export { Private };
