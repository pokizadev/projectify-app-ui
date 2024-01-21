type SignUpInput = {
    password: string;
    passwordConfirm: string;
    email: string
}

type loginInput = {
    email: string;
    password: string
}

class TeamMember {
    url: string;
    constructor() {
        this.url = `${process.env.NODE_ENV === "development" ? process.env.REACT_APP_PROJECTIFY_API_URL : process.env.REACT_APP_PROJECTIFY_API_URL_LOCAL}/team-members`
    }

    async createPassword(input: SignUpInput) {
        try {
            const response = await fetch(`${this.url}/create-password`, {
                method: "POST",
                headers: {
                    "Content-Type": 
                    "application/json"
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

export const teamMember = new TeamMember();