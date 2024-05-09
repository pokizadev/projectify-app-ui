import testimonial1 from "../../../../assets/images/testimonial1.png"
import testimonial2 from "../../../../assets/images/testimonial2.png"
import testimonial3 from "../../../../assets/images/testimonial3.png"

export const testimonials = [
    {
        id: 1,
        image: testimonial1,
        name: "Peter Parker",
        position: "Senior Software Engineer at Microsoft",
        rating: Array(5).fill(null),
        description:
            "Projectify App is a game-changer for project management. Its user-friendly interface and intuitive features make handling multiple projects a breeze. Highly Recommended to try it!"
    },
    {
        id: 2,
        image: testimonial2,
        name: "Jason Mammoa",
        position: "Project Manager at Google",
        rating: Array(5).fill(null),
        description:
            "I rely on Projectify App to streamline our development process. Its robust tools and seamless integration with our existing systems have significantly increased our team's productivity."
    },
    {
        id: 3,
        image: testimonial3,
        name: "Emily Carter",
        position: "Marketing Director at Amazon",
        rating: Array(5).fill(null),
        description:
            "Projectify App has become my go-to tool for orchestrating complex campaigns with ease. Its comprehensive features and real-time collaboration capabilities have revolutionized how our team operates."
    }
];