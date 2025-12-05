import { useNavigate } from 'react-router-dom';
import { SignUpPage } from '../components/ui/SignUpPage';

const sampleTestimonials = [
    {
        avatarSrc: "https://randomuser.me/api/portraits/women/44.jpg",
        name: "Emily Roberts",
        handle: "@emilydev",
        text: "Signing up was a breeze. Love the platform!"
    },
    {
        avatarSrc: "https://randomuser.me/api/portraits/men/22.jpg",
        name: "Alex Thompson",
        handle: "@alexbuilds",
        text: "The best decision I made for my workflow."
    },
    {
        avatarSrc: "https://randomuser.me/api/portraits/women/68.jpg",
        name: "Jessica Kim",
        handle: "@jessicadesigns",
        text: "Intuitive interface, powerful features."
    },
];

export const Signup = () => {
    const navigate = useNavigate();

    const handleSignUp = (event) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const data = Object.fromEntries(formData.entries());

        // Validate passwords match
        if (data.password !== data.confirmPassword) {
            alert("Passwords don't match!");
            return;
        }

        console.log("Sign Up submitted:", data);
        // Navigate to chat after sign up
        navigate('/chat');
    };

    const handleGoogleSignUp = () => {
        console.log("Continue with Google clicked");
        // Navigate to chat after Google sign up
        navigate('/chat');
    };

    const handleSignIn = () => {
        navigate('/login');
    };

    return (
        <SignUpPage
            heroImageSrc="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=2160&q=80"
            testimonials={sampleTestimonials}
            onSignUp={handleSignUp}
            onGoogleSignUp={handleGoogleSignUp}
            onSignIn={handleSignIn}
        />
    );
};
