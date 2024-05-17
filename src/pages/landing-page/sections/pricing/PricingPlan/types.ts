import { IconName } from "../../../../../design-system";

export type PlanProps = {
    backgroundColor: string;
    fontColor: string;
    subtitle: string;
    iconBackground: string;
    iconBackgroundBorder: string
    iconName: IconName;
    title: string;
    price: string;

    checkMark: IconName;
    projects: string;
    users: string;
    storage: string;
    others: string[];

    buttonColor: string;
    buttonTextColor: string;
    hover: string
};