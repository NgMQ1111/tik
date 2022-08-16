import routesConfig from '~/config/routes';

//* Layouts
import { HeaderOnly } from '~/components/Layout';

//* Pages
import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Profile from '~/pages/Profile';
import Upload from '~/pages/Upload';
import Sreach from '~/pages/Sreach';

//* Public routes
const publicRouters = [
    { path: routesConfig.home, component: Home },
    { path: routesConfig.profile, component: Profile },
    { path: routesConfig.following, component: Following },
    { path: routesConfig.upload, component: Upload, layout: HeaderOnly },
    { path: routesConfig.search, component: Sreach, layout: null }
]

const privateRouters = [

]

export { publicRouters, privateRouters }