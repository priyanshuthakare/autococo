import { Link } from 'react-router-dom';

export const Login = () => {
 return (
 <div className="min-h-screen flex items-center justify-center bg-zinc-50 text-zinc-900 ">
 <div className="text-center">
 <h1 className="text-3xl font-bold mb-4">Sign In</h1>
 <p className="mb-8 text-zinc-600 ">This is a placeholder for the Sign In page.</p>
 <Link to="/" className="text-blue-500 hover:underline">Go back home</Link>
 </div>
 </div>
 );
};
