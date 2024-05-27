import { useState } from "react";
import "./register.css";
import { registerUser } from "../../redux/apiRequest";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const Register = () => {
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleRegister = (e) => {
        e.preventDefault();
        const newUser = {
            email: email,
            password: password,
            username: username
        };
        registerUser(newUser, dispatch, navigate);
    }

    return (
        <section className="register-container">
            <div className="register-title"> Sign up </div>
            <form onSubmit={handleRegister}>
                <label className="label-login">EMAIL</label>
                <input className="input-login" type="text" placeholder="Enter your email"
                    onChange={(e) => setEmail(e.target.value)}
                />

                <label className="label-login">USERNAME</label>
                <input className="input-login" type="text" placeholder="Enter your username"
                    onChange={(e) => setUsername(e.target.value)}
                />

                <label className="label-login">PASSWORD</label>
                <input className="input-login" type="password" placeholder="Enter your password"
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button type="submit"> Create account </button>
            </form>
        </section>

    );
}

export default Register;