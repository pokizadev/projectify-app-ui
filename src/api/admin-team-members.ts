interface CreateTeamMemberInput {
    firstName: string
    lastName: string
    position: string
    email: string
}

class AdminTeamMembers {
    url:string;
    constructor() {
        this.url = `${
            process.env.NODE_ENV === "development" ? process.env.REACT_APP_PROJECTIFY_API_URL_LOCAL : process.env.REACT_APP_PROJECTIFY_API_URL
        }/team-members`
    }

    async addTeamMember(input: CreateTeamMemberInput) {
        try {
            const rawAuthToken = localStorage.getItem("authToken")
            const authToken = rawAuthToken ? JSON.parse(rawAuthToken) : ""

            const response = await fetch(`${this.url}`, {
                method: "POST",
                headers: {
                    "Contrent-type": "application/json"
                },
                body: JSON.stringify(input)

            })
            if(!response.ok) {
                const data = await response.json()
                throw new Error(data.message)
            }
            return response.json()
        } catch (error) {
            throw error;
        }
    }
}

export const adminTeamMembers = new AdminTeamMembers()