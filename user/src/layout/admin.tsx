import { Outlet } from "react-router-dom"
import Header from "../components/header"

const LayoutAdmin = () => {
    return <>
    <div className="main">
        <Header/>
        <Outlet/>
    </div>
    </>
}
export default LayoutAdmin