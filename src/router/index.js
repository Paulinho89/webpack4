/*
 * @Author: caoyp
 * @Date: 2020-03-17 20:52:54
 * @Last Modified by: caoyp
 * @Last Modified time: 2020-05-30 19:07:18
 * @Description: Description
 * @Route: Route
 */
const Template = () => import(/* webpackChunkName: "index" */ '@/pages/index');
const Detail = () => import(/* webpackChunkName: "detail" */ '@/pages/test');

const routes = [
    {
        path: '/',
        component: Template,
        meta: {
            title: '首页'
        }
    },
    {
        path: '/detail',
        component: Detail,
        meta: {
            title: '详情'
        }
    },
    
];

export default routes;