import {useRoutes} from 'hookrouter';
import {Mainpage} from "../pages/mainpage/mainpage";
import {About} from "../pages/about/about";
import {NotFoundPage} from "../pages/notFoundPage/NotFoundPage";
import {Sign} from "../pages/sign-in/sign";

const routes = {
    '/': () => <Mainpage/>,
    '/about': () => <About/>,
    '/sign': () => <Sign/>,
}
export const MyApp = () => {
    const routeResult = useRoutes(routes);
    return routeResult || <NotFoundPage/>;
}
