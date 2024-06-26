export type IconName =
    | "tasks"
    | "support"
    | "stories"
    | "settings"
    | "projects"
    | "members"
    | "log-out"
    | "chevron-right"
    | "flag"
    | "check"
    | "three-dots"
    | "edit"
    | "delete"
    | "chevron-down"
    | "calendar"
    | "check-sharp"
    | "minus-sharp"
    | "minus"
    | "archive"
    | "x"
    | "info-in-circle-filled"
    | "check-in-circle-filled"
    | "info-in-circle-sharp-filled"
    | "check-in-circle-sharp-filled"
    | "check-in-circle"
    | "x-in-circle"
    | "pause-in-circle"
    | "play-in-circle"
    | "clipboard"
    | "users"
    | "user-friendly"
    | "time"
    | "document"
    | "clock"
    | "starter-plan"
    | "professional-plan"
    | "enterprice-plan"
    | "green-checkmark"
    | "yellow-checkmark"
    | "star"
    | "arrow-left"
    | "arrow-right"
    | "user"
    | "email"
    | "building"
    | "phone"
    | "email-purple"
    | "map"
    | "facebook"
    | "twitter"
    | "instagram"
    | "burger"
    | "chevron-left"

export type IconProps = {
    iconName: IconName;
    className?: string;
    onClick?: () => void;
};