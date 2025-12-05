import { useNavigate } from 'react-router-dom';
import { SignInPage } from '../components/ui/SignInPage';

const sampleTestimonials = [
    {
        avatarSrc: "https://randomuser.me/api/portraits/women/57.jpg",
        name: "Sarah Chen",
        handle: "@sarahdigital",
        text: "Amazing platform! The user experience is seamless."
    },
    {
        avatarSrc: "https://randomuser.me/api/portraits/men/64.jpg",
        name: "Marcus Johnson",
        handle: "@marcustech",
        text: "This service has transformed how I work."
    },
    {
        avatarSrc: "https://randomuser.me/api/portraits/men/32.jpg",
        name: "David Martinez",
        handle: "@davidcreates",
        text: "Clean design, powerful features, excellent support."
    },
];

export const Login = () => {
    const navigate = useNavigate();

    const handleSignIn = (event) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const data = Object.fromEntries(formData.entries());
        console.log("Sign In submitted:", data);
        // Navigate to chat after sign in
        navigate('/chat');
    };

    const handleGoogleSignIn = () => {
        console.log("Continue with Google clicked");
        // Navigate to chat after Google sign in
        navigate('/chat');
    };

    const handleResetPassword = () => {
        alert("Password reset link sent to your email!");
    };

    const handleCreateAccount = () => {
        navigate('/signup');
    };

    return (
        <SignInPage
            heroImageSrc="https://images.unsplash.com/photo-1642615135477-d303d7dc9ee9?w=2160&q=80"
            testimonials={sampleTestimonials}
            onSignIn={handleSignIn}
            onGoogleSignIn={handleGoogleSignIn}
            onResetPassword={handleResetPassword}
            onCreateAccount={handleCreateAccount}
        />
    );
};
