import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

const SocialLogin = () => {
    return (
        <div>
            <h1 className="font-bold mb-5">Login With</h1>
            <div className="space-y-3">
                <button className="btn btn-secondary btn-outline w-full"><FcGoogle size={24} /> Login With Google</button>
                <button className="btn btn-primary btn-outline w-full"><FaGithub size={24} /> Login With Github</button>
            </div>
            

        </div>
    );
};

export default SocialLogin;