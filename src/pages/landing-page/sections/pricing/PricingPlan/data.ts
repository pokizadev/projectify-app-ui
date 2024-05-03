import { PlanProps } from "./types";

export const plans: PlanProps[] = [
    {
        backgroundColor: "var(--white)",
        fontColor: "jaguarDark",
        subtitle: "For Individuals",
        iconBackground: "var(--primary-50)",
        iconBackgroundBorder: "var(--primary-100)",
        iconName: "starter-plan",
        title: "Starter",
        price: "$9.99",

        checkMark: "green-checkmark",
        projects: "10",
        users: "10",
        storage: "10GB",
        others: ["Email Support"],
        buttonColor: "var(--primary-500)",
        buttonTextColor: "var(--white)"
    },
    {
        backgroundColor: "var(--primary-500)",
        fontColor: "var(--white)",
        subtitle: "For Small Teams",
        iconBackground: "var(--sunglow-400)",
        iconBackgroundBorder: "var(--sunglow-400)",
        iconName: "professional-plan",
        title: "Professional",
        price: "$29.99",

        checkMark: "yellow-checkmark",
        projects: "Unlimited",
        users: "25",
        storage: "50GB",
        others: ["Priority Email Support", "Advanced Analytics"],

        buttonColor: "var(--white)",
        buttonTextColor: "var(--primary-500)"
    },
    {
        backgroundColor: "var(--white)",
        fontColor: "var(--jaguar-900)",
        subtitle: "For Large Teams",
        iconBackground: "var(--primary-50)",
        iconBackgroundBorder: "var(--primary-100)",
        iconName: "enterprice-plan",
        title: "Enterprise",
        price: "$99.99",

        checkMark: "green-checkmark",
        projects: "Unlimited",
        users: "Scalable",
        storage: "Scalable",
        others: [
            "24/7 Priority Support",
            "Dedicated Account Manager",
            "Single Sign-On (SSO)",
            "Custom Integrations"
        ],
        buttonColor: "var(--primary-500)",
        buttonTextColor: "var(--white)"
    }
];
