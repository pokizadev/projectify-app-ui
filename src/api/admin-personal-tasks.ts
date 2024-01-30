type TaskStatus = "TODO" | "INPROGRESS" | "DONE";

interface Task {
    id: string;
    title: string;
    description: string;
    due: string;
    status: TaskStatus;
}

type TaskCreateInput = Omit<Task, "id" | "status">

class AdminPersonalTasks {
    url: string;
    constructor() {
        this.url = `${
            process.env.NODE_ENV === "development"
                ? process.env.REACT_APP_PROJECTIFY_API_URL_LOCAL
                : process.env.REACT_APP_PROJECTIFY_API_URL
        }/admins/me`;
    }

    async createTask(input: TaskCreateInput) {
        try {
            const response = await fetch(`${this.url}/tasks`, {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(input)
            });
            if (!response.ok) {
                const data = await response.json();
                throw new Error(data.message);
            }
            return response.json();
        } catch (error) {
            throw error;
        }
    }

}

export const adminPersonalTasks = new AdminPersonalTasks();
