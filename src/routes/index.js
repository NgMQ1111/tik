import config from '~/config';

//* ~/layouts
import { HeaderOnly } from '~/layouts';

//* Pages
import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Profile from '~/pages/Profile';
import Upload from '~/pages/Upload';
import Sreach from '~/pages/Sreach';
import Live from '~/pages/Live';
import About from '~/pages/About';

//* Public routes
const publicRouters = [
    { path: config.routes.home, component: Home },
    { path: config.routes.profile, component: Profile },
    { path: config.routes.following, component: Following },
    { path: config.routes.live, component: Live },
    { path: config.routes.upload, component: Upload, layout: HeaderOnly },
    { path: config.routes.search, component: Sreach, layout: null },
    { path: config.routes.about, component: About },
]

const privateRouters = [

]

export { publicRouters, privateRouters }