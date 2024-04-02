import { Link } from "react-router-dom";
import { SignedIn, UserButton } from '@clerk/clerk-react'


export default function DashboardPage() {
    return (
        <>
            <header className="header">
                <div>
                    <SignedIn>
                        <UserButton afterSignOutUrl='/sign-in' />
                    </SignedIn>

                </div>
            </header >
            <h1>Dashboard page</h1>
            <ul>
                <li><Link to="/dashboard/invoices">Invoices</Link></li>
                <li><Link to="/">Return to index</Link></li>
            </ul>
        </>
    );
}
