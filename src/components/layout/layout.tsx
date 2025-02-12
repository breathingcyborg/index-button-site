import { Footer } from "./footer";
import { Nav } from "./nav";
import { Outlet } from 'react-router';

export function Layout() {
    return <div>
        <Nav/>
            <Outlet />
        <Footer/>
    </div>
}