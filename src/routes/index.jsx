import { Link } from "react-router-dom";
import { SignedIn, UserButton } from '@clerk/clerk-react'


export default function IndexPage() {
    return (
        <div>
            <div>
                <SignedIn>
                    <UserButton afterSignOutUrl='/sign-in' />
                </SignedIn>
            </div>

            <h2>Home page</h2>
            <div>
                <ul>
                    <li><Link to="/sign-up">Sign Up</Link></li>
                    <li><Link to="/sign-in">Sign In</Link></li>
                    <li><Link to="/contact">Contact : public page</Link></li>
                </ul>
            </div>
        </div>
    )
}