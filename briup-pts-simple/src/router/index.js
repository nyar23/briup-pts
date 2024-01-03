/*
 * @Description: 主路由
 * @Author: Ronda
 * @Date: 2021-07-23 17:32:04
 * @LastEditors: Ronda
 * @LastEditTime: 2023-12-20 16:23:54
 */
import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

/* Layout */
import Layout from "@/layout";

export const constantRoutes = [
    {
        path: "/redirect",
        component: Layout,
        hidden: true,
        children: [
            {
                path: "/redirect/:path*",
                component: () => import("@/pages/base/redirect/Index")
            }
        ]
    },
    {
        path: "/404",
        component: () => import("@/pages/base/error-page/404"),
        hidden: true
    },
    {
        path: "/401",
        component: () => import("@/pages/base/error-page/401"),
        hidden: true
    },
    {
        path: "/login",
        component: () => import("@/pages/login/index"),
        hidden: true
    },
    {
        path: "/",
        component: Layout,
        redirect: "/dashboard",
        children: [
            {
                path: "/dashboard",
                component: () => import("@/pages/dashboard/Index"),
                name: "dashboard",
                meta: {
                    title: "数据大屏",
                    icon: "icon_20",
                    affix: true
                }
            }
        ]
    },
    {
        path: "/fenceHouse",
        component: Layout,
        redirect: "/fenceHouse/Index",
        children: [
            {
                path: "Index",
                component: () => import("@/pages/fenceHouse/Index"),
                name: "fenceHouseIndex",
                meta: {
                    title: "栏舍管理",
                    icon: "icon_1",
                    affix: true
                }
            }
        ]
    },
    {
        path: "/hurdles",
        component: Layout,
        redirect: "/hurdles/Index",
        children: [
            {
                path: "Index",
                component: () => import("@/pages/hurdles/Index"),
                name: "hurdlesIndex",
                meta: {
                    title: "栏圈管理",
                    icon: "icon_11",
                    affix: true
                }
            }
        ]
    },
    {
        path: "/animalManage",
        component: Layout,
        redirect: "/animalManage/Index",
        children: [
            {
                path: "Index",
                component: () => import("@/pages/animalManage/Index"),
                name: "animalManageIndex",
                meta: {
                    title: "动物管理",
                    icon: "icon_3",
                    affix: true
                }
            }
        ]
    },
    {
        path: "/diseaseRecord",
        component: Layout,
        redirect: "/diseaseRecord/Index",
        children: [
            {
                path: "Index",
                component: () => import("@/pages/diseaseRecord/Index"),
                name: "diseaseRecordIndex",
                meta: {
                    title: "病症记录",
                    icon: "icon_14",
                    affix: true
                }
            }
        ]
    },
    {
        path: "/quarantineRegistration",
        component: Layout,
        redirect: "/quarantineRegistration/Index",
        children: [
            {
                path: "Index",
                component: () => import("@/pages/quarantineRegistration/Index"),
                name: "quarantineRegistrationIndex",
                meta: {
                    title: "检疫登记",
                    icon: "icon_16",
                    affix: true
                }
            }
        ]
    },
    {
        path: "/static-pages",
        component: Layout,
        redirect: "/static-pages/dataAnalysis",
        meta: {
            title: "特色农产品销售管理平台",
            icon: "icon_17",
            affix: true
        },
        children: [
            {
                path: "ProductShow",
                component: () => import("@/pages/static-pages/ProductShow"),
                name: "ProductShow",
                meta: {
                    title: "产品展示",
                    icon: "icon_18",
                    affix: true
                }
            },
            {
                path: "OrderManagement",
                component: () => import("@/pages/static-pages/OrderManagement"),
                name: "OrderManagement",
                meta: {
                    title: "订单管理",
                    icon: "icon_19",
                    affix: true
                }
            },
            {
                path: "InventoryManagement",
                component: () => import("@/pages/static-pages/InventoryManagement"),
                name: "InventoryManagement",
                meta: {
                    title: "库存管理",
                    icon: "icon_20",
                    affix: true
                }
            },
            {
                path: "LogisticsManagement",
                component: () => import("@/pages/static-pages/LogisticsManagement"),
                name: "LogisticsManagement",
                meta: {
                    title: "物流管理",
                    icon: "icon_15",
                    affix: true
                }
            },
            {
                path: "UserManagement",
                component: () => import("@/pages/static-pages/UserManagement"),
                name: "UserManagement",
                meta: {
                    title: "用户管理",
                    icon: "icon_14",
                    affix: true
                }
            },
            {
                path: "DataAnalysis",
                component: () => import("@/pages/static-pages/DataAnalysis"),
                name: "DataAnalysis",
                meta: {
                    title: "数据分析",
                    icon: "icon_13",
                    affix: true
                }
            },
        ]
    },
];

const createRouter = () =>
    new Router({
        // mode: 'history', // require service support
        scrollBehavior: () => ({ y: 0 }),
        routes: constantRoutes
    });

const router = createRouter();

export function resetRouter() {
    const newRouter = createRouter();
    router.matcher = newRouter.matcher; // reset router
}

export default router;
