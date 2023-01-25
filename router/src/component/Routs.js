import Home from "./pages/Home/Home"
import About from "./pages/About/About"
const Routs =[
    {
        path:"/",
        exact:"true",
        component:<Home/>,
        fallback:<Home/>,
    },
    {
        path:"/about",
        exact:"true",
        component:<About/>,
        fallback:<About/>,
    }
]
export default Routs