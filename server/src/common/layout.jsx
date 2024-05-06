import {Outlet} from "react-router-dom"

const Layout=()=>{
    return (
        <div className="page">
            <haeder>
                <Navigate/>
            </haeder>
            <main>
                <Outlet/>
            </main>
            <footer></footer>
        </div>

    )
}
export default Layout