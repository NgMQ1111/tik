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
    { path: '/', component: Home },
    { path: '/profile', component: Profile },
    { path: '/following', component: Following },
    { path: '/upload', component: Upload, layout: HeaderOnly },
    { path: '/sreach', component: Sreach, layout: null }
]

const privateRouters = [

]

export { publicRouters, privateRouters }