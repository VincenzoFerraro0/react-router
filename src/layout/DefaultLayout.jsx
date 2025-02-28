import Footer from "../section/Footer";
import Header from "../section/Header";
import { Outlet } from "react-router-dom"


 
export default function DefaultLayout() {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    )
};