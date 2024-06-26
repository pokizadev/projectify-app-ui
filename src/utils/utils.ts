import { formatISO, parseISO, differenceInCalendarDays, format } from "date-fns";
import pluralize from "pluralize";
import { Task } from "../types";

export interface GroupedTasks {
    [status: string]: Task[];
}

export const groupTasksByStatus = (data: Task[]): GroupedTasks => {
    const grouped: GroupedTasks = {
        TODO: [],
        INPROGRESS: [],
        DONE: []
    };

    data.forEach((task) => {
        const { status } = task;
        grouped[status].push(task);
    });

    return grouped;
};

export const toIso8601 = (date: Date) => {
    return formatISO(date);
};

export const toDateObj = (iso8601: string) => {
    return parseISO(iso8601);
};

export const formatAsMMMMd = (isoDate: string) => {
    return format(toDateObj(isoDate), "MMM d");
};

export const formatAsMMMddYYYY = (isoDate: string) => {
    return format(toDateObj(isoDate), "MMM dd, yyyy");
};

export const formatDeadline = (targetDate: string) => {
    const today = new Date();
    const targetDateObj = toDateObj(targetDate);

    const diff = differenceInCalendarDays(targetDateObj, today);
    if (diff <= 13) {
        return `${diff} ${pluralize("day", diff)} left`;
    }
    return formatAsMMMddYYYY(targetDate);
};