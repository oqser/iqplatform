import './App.css'
import { Outlet, Link } from "react-router-dom";

export default function App() {
    return (
        <>
            <div id="sidebar">
                <h1>iQ-platform test zone</h1>
                <div>
                    <form id="search-form" role="search">
                        <input
                            id="q"
                            aria-label="Search contacts"
                            placeholder="Не ищи, не работает"
                            type="search"
                            name="q"
                        />
                        <div
                            id="search-spinner"
                            aria-hidden
                            hidden={true}
                        />
                        <div
                            className="sr-only"
                            aria-live="polite"
                        ></div>
                    </form>
                    <form method="post" >
                        <button type="submit">Новый пользователь</button>
                    </form>
                </div>
                <nav>
                    <ul>
                        <li>
                            <Link to={`home`}>Home page</Link>
                        </li>
                        <li>
                            <Link to={`users`}>Users table</Link>
                        </li>
                    </ul>
                </nav>
            </div>
            <div id="detail">
                <Outlet />
            </div>
        </>
    );
}





