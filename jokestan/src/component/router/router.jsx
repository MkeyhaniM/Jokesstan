import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate
} from "react-router-dom";

import {Home} from "../pages/mainpage/home";
import {About} from "../pages/about/about";
import {NotFoundPage} from "../pages/notFoundPage/NotFoundPage";
import {Sign} from "../pages/sign-in/sign";
import {Layout} from "../pages/layout/layout";

export function RouterJokestan() {
    return (
        <Router>
            <Routes>
                <Route path='/home' element={<Navigate to='/'/>} />
                <Route path='/sign' element={<Sign/>}/>
                <Route path='/not-found' element={<NotFoundPage/>}/>
                <Route path='/about' element={<About/>}/>
                <Route path='/start' element={<Layout/>}/>
                <Route path='/' element={<Home/>}/>
            </Routes>
        </Router>
    );
}