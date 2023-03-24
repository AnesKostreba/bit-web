import { Link, Outlet } from "react-router-dom"

export const Header = () =>{

    return(
        <>
        <nav>
            <div className="container-fluid bg-danger">
                <div className="navigation-container d-flex justify-content-between">
                        <Link to='/'>Bit-People</Link>
                    <ul className="d-flex ">
                        <li className="list-group-item p-2 ">
                            <Link to='about'>About</Link>
                        </li>
                        <li className="list-group-item p-2">
                            <Link to='/'>Refresh</Link>
                        </li>
                        <li className="list-group-item p-2">
                            
                        </li>
                    </ul>
                    
                </div>
                
            </div>
            
        </nav>
        <Outlet/>
        </>


    )
}