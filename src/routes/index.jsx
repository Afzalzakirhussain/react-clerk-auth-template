import { Link } from "react-router-dom";

export default function IndexPage() {
    return (
        <div>
            <h2>Index page</h2>
            <div>
                <ul>
                    <li><Link to="/sign-up">Sign Up</Link></li>
                    <li><Link to="/sign-in">Sign In</Link></li>
                    <li><Link to="/contact">Contact : public page</Link></li>
                    <li><Link to="/dashboard">Dashboard</Link></li>
                </ul>
            </div>
        </div>
    )
}