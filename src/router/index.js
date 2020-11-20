import Vue from "vue"
import Router from "vue-router"
import Home from "../views/home.vue"
import login from "../views/login.vue"
import mainPage from "../views/mainPage.vue"
import NProgress from 'nprogress' // progress bar
import 'nprogress/nprogress.css'// progress bar style
Vue.use(Router)
export const constantRouterMap = [
    {
        path: "/",
        name: "login",
        component: login,
        meta: { keepAlive: true }
    },
    {
        path: "/home",
        name: "home",
        component: Home,
        meta: { keepAlive: true }
    },
    {
        path: "/mainPage",
        name: "mainPage",
        component:mainPage,
        meta: { keepAlive: true },
    },
]


export const asyncRouterMap = [
    // =========================== admin 企业管理者 ==============================
    // 企业管理================
    {
        path: '/company',
        component: mainPage,
        redirect: '/company/index',
        meta: {
            keepAlive: true,
            roles: ['admin-admin', 'admin-daili'],
            title: 'company',
            icon: 'conpany'
        },
        children: [{
            path: 'test',
            component: () =>
                import('@/views/company/testCompany'),
            name: 'testCompany',
            meta: {
                keepAlive: true,
                roles: ['admin-admin', 'admin-daili'],
                title: 'testCompany',
                icon: 'test',
                noCache: true
            }
        },
        {
            path: 'vip',
            component: () =>
                import('@/views/company/vipCompany'),
            name: 'vipCompany',
            meta: {
                keepAlive: true,
                roles: ['admin-admin', 'admin-daili'],
                title: 'vipCompany',
                icon: 'vip',
                noCache: true
            }
        }

        ]
    },

    // 代理商============
    {
        path: '/agentEnterprise',
        component: mainPage,
        redirect: '/agentEnterprise/agentEnterprise',
        meta: {
            keepAlive: true,
            roles: ['admin-admin'],
            title: 'agentEnterprise',
            icon: 'agent'
        },
        children: [{
            path: 'agentEnterprise/agentEnterprise',
            component: () =>
                import('@/views/agentEnterprise/agentEnterprise'),
            name: 'agentEnterprise',
            meta: {
                keepAlive: true,
                roles: ['admin-admin'],
                title: 'agentEnterprise',
                icon: 'agent',
                noCache: true
            }
        }]
    },

    // 员工管理
    {
        path: '/employee',
        component: mainPage,
        redirect: '/employee/index',
        meta: {
            keepAlive: true,
            roles: ['admin-admin', 'admin-daili'],
            title: 'employee',
            icon: 'peoples'
        },
        children: [{
            path: 'list',
            component: () =>
                import('@/views/employee/index'),
            name: 'employee',
            meta: {
                keepAlive: true,
                roles: ['admin-admin', 'admin-daili'],
                title: 'employeeList',
                icon: 'peoples',
                noCache: true
            }
        }
        ]
    },
    // 设备管理
    {
        path: '/equipmentManage',
        component: mainPage,
        redirect: '/equipmentManage/equipmentInfo',
        meta: {
            keepAlive: true,
            roles: ['admin-admin', 'admin-daili'],
            title: 'equipmentManage',
            icon: 'peoples'
        },
        children: [{
            path: 'list',
            component: () =>
                import('@/views/equipmentManage/equipmentInfo'),
            name: 'equipmentManage',
            meta: {
                keepAlive: true,
                roles: ['admin-admin', 'admin-daili'],
                title: 'equipmentInfo',
                icon: 'equipment',
                noCache: true
            }
        }
        ]
    },
    // 报修管理
    {
        path: '/adminServiceManagement',
        component: mainPage,
        redirect: '/adminServiceManagement/UnRepairReporl',
        meta: {
            keepAlive: true,
            roles: ['admin-admin', 'admin-daili'],
            title: 'adminServiceManagement',
            icon: 'service'
        },
        children: [{
            // 未处理报修
            path: 'UnRepairReporl',
            component: () =>
                import('@/views/adminServiceManagement/UnRepairReporl'),
            name: 'unRepairReporl',
            meta: {
                keepAlive: true,
                roles: ['admin-admin', 'admin-daili'],
                title: 'UnRepairReporl',
                icon: 'weichuli',
                noCache: true
            }
        },
        {
            // 处理中报修
            path: 'inprocessRepair',
            component: () =>
                import('@/views/adminServiceManagement/inprocessRepair'),
            name: 'inprocessRepair',
            meta: {
                keepAlive: true,
                roles: ['admin-admin', 'admin-daili'],
                title: 'inprocessRepair',
                icon: 'chulizhong',
                noCache: true
            }
        },
        {
            // 处理结束报修
            path: 'completionRepair',
            component: () =>
                import('@/views/adminServiceManagement/completionRepair'),
            name: 'completionRepair',
            meta: {
                keepAlive: true,
                roles: ['admin-admin', 'admin-daili'],
                title: 'completionRepair',
                icon: 'jieshu',
                noCache: true
            }
        },
        {
            // 添加
            path: 'add',
            component: () =>
                import('@/views/adminServiceManagement/add'),
            name: 'addRepair',
            meta: {
                keepAlive: true,
                roles: ['admin-admin', 'admin-daili'],
                title: 'add',
                icon: 'Add',
                noCache: true
            }
        }
        ]
    },

    // 财务管理
    {
        path: '/financial',
        component: mainPage,
        redirect: '/financial/financial',
        meta: {
            keepAlive: true,
            roles: ['admin-admin', 'admin-daili'],
            title: 'financial',
            icon: 'peoples'
        },
        children: [{
            path: 'list',
            component: () =>
                import('@/views/financial/financial'),
            name: 'financial',
            meta: {
                keepAlive: true,
                roles: ['admin-admin', 'admin-daili'],
                title: 'financial',
                icon: 'financial',
                noCache: true
            }
        }
        ]
    },

    // =========================== admin 企业管理者 ==============================

    // =========================== company 企业 =================================
    // 个人信息
    {
        path: '/information',
        component: mainPage,
        redirect: '/information/personalInformation',
        meta: {
            keepAlive: true,
            roles: 'company',
            title: 'information',
            icon: 'user'
        },
        name: 'information',
        children: [{
            path: 'personalInformation',
            component: () =>
                import('@/views/information/personalInformation'),
            name: 'personalInformation',
            meta: {
                keepAlive: true,
                roles: 'company',
                title: 'personalInformation',
                icon: 'people',
                noCache: true
            }
        },
        {
            path: 'changePassword',
            component: () =>
                import('@/views/information/changePassword'),
            name: 'changePassword',
            meta: {
                keepAlive: true,
                roles: 'company',
                title: 'changePassword',
                icon: 'lock',
                noCache: true
            }
        }
        ]
    },

    // 财务管理
    {
        path: '/companyFinancial',
        component: mainPage,
        redirect: '/companyFinancial/financialCom',
        meta: {
            keepAlive: true,
            roles: 'company',
            title: 'companyFinancial',
            icon: 'financial'
        },
        name: 'companyFinancial',
        children: [{
            path: 'list',
            component: () =>
                import('@/views/companyFinancial/financialCom'),
            name: 'companyFinancial',
            meta: {
                keepAlive: true,
                roles: 'company',
                title: 'companyFinancial',
                icon: 'financial',
                noCache: true
            }
        }
        ]
    },

    // 员工管理
    {
        path: '/companyEmployee',
        component: mainPage,
        redirect: '/companyEmployee/employee',
        meta: {
            keepAlive: true,
            roles: 'company',
            title: 'employeeList',
            icon: 'peoples'
        },
        name: 'companyEmployee',
        children: [{
            path: 'list',
            component: () =>
                import('@/views/companyEmployee/employee'),
            name: 'employeeList',
            meta: {
                keepAlive: true,
                roles: 'company',
                title: 'employeeList',
                icon: 'peoples',
                noCache: true
            }
        }
        ]
    },

    // 设备管理
    {
        path: '/equipment',
        component: mainPage,
        redirect: '/equipment/equipmentInfoList',
        meta: {
            keepAlive: true,
            roles: 'company',
            title: 'equipment',
            icon: 'shebei'
        },
        name: 'equipment',
        children: [{
            path: 'equipmentInfoList',
            component: () =>
                import('@/views/equipment/equipmentInfoList'),
            name: 'equipmentInfoList',
            meta: {
                keepAlive: true,
                roles: 'company',
                title: 'equipmentInfoList',
                icon: 'shebeixinxi',
                noCache: true
            }
        },
        {
            path: 'equipmentState',
            component: () =>
                import('@/views/equipment/equipmentState'),
            name: 'equipmentState',
            meta: {
                keepAlive: true,
                roles: 'company',
                title: 'equipmentState',
                icon: 'zhuangtai',
                noCache: true
            }
        },
        {
            path: 'equipmentGroup',
            component: () =>
                import('@/views/equipment/equipmentGroup'),
            name: 'equipmentGroup',
            meta: {
                keepAlive: true,
                roles: 'company',
                title: 'equipmentGroup',
                icon: 'qunzu',
                noCache: true
            }
        }
        ]
    },

    // 计划管理
    {
        path: '/planManagement',
        component: mainPage,
        redirect: '/planManagement/dispatchingPlan',
        meta: {
            keepAlive: true,
            roles: 'company',
            title: 'planManagement',
            icon: 'jihua'
        },
        name: 'planManagement',
        children: [{
            path: 'dispatchingPlan',
            component: () =>
                import('@/views/planManagement/dispatchingPlan'),
            name: 'dispatchingPlan',
            meta: {
                keepAlive: true,
                roles: 'company',
                title: 'dispatchingPlan',
                icon: 'jihua',
                noCache: true
            }
        }]
    },

    // 会议管理
    {
        path: '/meetingManage',
        component: mainPage,
        redirect: '/meetingManage/index',
        meta: {
            keepAlive: true,
            roles: 'company',
            title: 'meetingManage',
            icon: 'huiyiguanli'
        },
        name: 'meetingManage',
        children: [{
            // 会议预约
            path: 'conferenceReservation',
            component: () =>
                import('@/views/meetingManage/subList/conferenceReservation'),
            name: 'conferenceReservation',
            meta: {
                keepAlive: true,
                roles: 'company',
                title: 'conferenceReservation',
                icon: 'huiyiyuyue',
                noCache: true
            }
        },
        {
            // 会议管理
            path: 'meetingManage',
            component: () =>
                import('@/views/meetingManage/subList/meetingManage'),
            name: 'meetingManage',
            meta: {
                keepAlive: true,
                roles: 'company',
                title: 'meetingManage',
                icon: 'huiyiguanli',
                noCache: true
            }
        }, {
            // 会议历史记录
            path: 'conferenceHistory',
            component: () =>
                import('@/views/meetingManage/subList/conferenceHistory'),
            name: 'conferenceHistory',
            meta: {
                keepAlive: true,
                roles: 'company',
                title: 'conferenceHistory',
                icon: 'lishi',
                noCache: true
            }
        }, {
            // 即时会议
            path: 'instantConference',
            component: () =>
                import('@/views/meetingManage/subList/instantConference'),
            name: 'instantConference',
            meta: {
                keepAlive: true,
                roles: 'company',
                title: 'instantConference',
                icon: 'jishi',
                noCache: true
            }
        }
        ]
    },

    // 直播管理
    {
        path: '/mageament',
        component: mainPage,
        redirct: '/magement/index',
        name: 'magement',
        meta: {
            keepAlive: true,
            roles: 'company',
            title: 'mageament',
            icon: 'zhibo'
        },
        children: [{
            path: 'broadcast-first',
            component: () =>
                import('@/views/magement/broadcost/broadcast-first'),
            name: 'appointment',
            meta: {
                keepAlive: true,
                roles: 'company',
                title: 'appointment',
                icon: 'yuyuezhibo',
                noCache: true
            }
        }, {
            path: 'broadcast-search',
            component: () =>
                import('@/views/magement/broadcost/broadcast-search'),
            name: 'searchover',
            meta: {
                keepAlive: true,
                roles: 'company',
                title: 'searchover',
                icon: 'zhibochaxun',
                noCache: true
            }
        }, {
            path: 'broadcastList_show',
            component: () =>
                import('@/views/magement/broadcost/broadcastList_show'),
            name: 'broadcastList',
            meta: {
                keepAlive: true,
                roles: 'company',
                title: 'broadcastList',
                icon: 'people',
                noCache: true
            },
            hidden: true
        }]
    },

    // 企业资源管理
    {
        path: '/companySoucers',
        component: mainPage,
        redirct: '/companySoucers/imgResour',
        name: 'companySoucers',
        meta: {
            keepAlive: true,
            roles: 'company',
            title: 'companySoucers',
            icon: 'chart'
        },
        children: [{
            path: 'imgResour',
            component: () =>
                import('@/views/companySoucers/subset/imgResour'),
            name: 'imgResour',
            meta: {
                keepAlive: true,
                roles: 'company',
                title: 'imgResour',
                icon: 'clipboard',
                noCache: true
            }
        },
        {
            path: 'video',
            component: () =>
                import('@/views/companySoucers/subset/videoResour'),
            name: 'videoResour',
            meta: {
                keepAlive: true,
                roles: 'company',
                title: 'videoResour',
                icon: 'zip',
                noCache: true
            }
        }
        ]
    },

    // 定位与围栏
    {
        path: '/positioning',
        component: mainPage,
        redirect: '/positioning/realLocation',
        meta: {
            keepAlive: true,
            roles: 'company',
            title: 'positioning',
            icon: 'international'
        },
        name: 'positioning',
        children: [{
            path: 'realLocation',
            component: () =>
                import('@/views/positioning/realLocation'),
            name: 'realLocation',
            meta: {
                keepAlive: true,
                roles: 'company',
                title: 'realLocation',
                icon: 'jiankong',
                noCache: true
            }
        },
        {
            path: 'playback',
            component: () =>
                import('@/views/positioning/playback'),
            name: 'playback',
            meta: {
                keepAlive: true,
                roles: 'company',
                title: 'playback',
                icon: 'guiji',
                noCache: true
            }
        },
        {
            path: 'companyMap',
            component: () =>
                import('@/views/positioning/companyMap'),
            name: 'companyMap',
            meta: {
                keepAlive: true,
                roles: 'company',
                title: 'companyMap',
                icon: 'guide',
                noCache: true
            }
        }
        ]
    },

    // 监控
    {
        path: '/monitoring',
        component: mainPage,
        redirect: '/monitoring/monitoring',
        meta: {
            keepAlive: true,
            roles: 'company',
            title: 'monitoring',
            icon: 'jiankong1'
        },
        name: 'monitoring',
        children: [{
            path: 'monitoring',
            component: () =>
                import('@/views/monitoring/monitoring'),
            name: 'monitoring',
            meta: {
                keepAlive: true,
                roles: 'company',
                title: 'monitoring',
                icon: 'jiankong1',
                noCache: true
            }
        }]
    },

    // 监控列表
    {
        path: '/monitoringList',
        component: mainPage,
        redirect: '/monitoringList/monitoringList',
        meta: {
            keepAlive: true,
            roles: 'company',
            title: 'monitoringList',
            icon: 'table'
        },
        name: 'monitoringList',
        hidden: true,
        children: [{
            path: 'monitoringList',
            component: () =>
                import('@/views/monitoringList/monitoringList'),
            name: 'monitoringList',
            meta: {
                keepAlive: true,
                roles: 'company',
                title: 'monitoringList',
                icon: 'drag',
                noCache: true
            },
            hidden: true
        }]
    },

    // 报警
    {
        path: '/alarmMonitoring',
        component: mainPage,
        redirect: '/alarmMonitoring/subList/enterpriseAlarm',
        meta: {
            keepAlive: true,
            roles: 'company',
            title: 'alarmMonitoring',
            icon: 'icon'
        },
        name: 'alarmMonitoring',
        children: [{
            // 企业报警
            path: 'enterpriseAlarm',
            component: () =>
                import('@/views/alarmMonitoring/subList/enterpriseAlarm'),
            name: 'enterpriseAlarm',
            meta: {
                keepAlive: true,
                roles: 'company',
                title: 'enterpriseAlarm',
                icon: 'qiyebiaojing',
                noCache: true
            }
        },
        {
            // 围栏报警配置管理
            path: 'setAlam',
            component: () =>
                import('@/views/alarmMonitoring/subList/setAlam'),
            name: 'setAlam',
            meta: {
                keepAlive: true,
                roles: 'company',
                title: 'setAlam',
                icon: 'weilan',
                noCache: true
            }
        },
        // {
        //   // 报警联系人配置
        //   path: 'alarmContact',
        //   component: () =>
        //       import('@/views/alarmMonitoring/subList/alarmContact'),
        //   name: 'alarmContact',
        //   meta: {
        //     roles: 'company',
        //     title: 'alarmContact',
        //     icon: 'eye',
        //     noCache: true
        //   }
        // },
        {
            // 设备电量报警配置
            path: 'powerEquipment',
            component: () =>
                import('@/views/alarmMonitoring/subList/powerEquipment'),
            name: 'powerEquipment',
            meta: {
                keepAlive: true,
                roles: 'company',
                title: 'powerEquipment',
                icon: 'dianliang',
                noCache: true
            }
        }
        ]
    },

    // //2.0================ nfc
    // {
    //   path: '/nfcEquip',
    //   component: mainPage,
    //   redirct: '/nfcEquip/nfcEquipList',
    //   name: 'nfcEquipList',
    //   meta: {
    //     roles: 'company',
    //     title: 'nfcEquip',
    //     icon: 'nfc'
    //   },
    //   children: [{
    //     path: 'nfcEquipList',
    //     component: () =>
    //       import('@/views/nfcEquip/nfcEquipList'),
    //     name: 'nfcEquipList',
    //     meta: {
    //       roles: 'company',
    //       title: 'nfcEquipList',
    //       icon: 'list',
    //       noCache: true
    //     }
    //   }, {
    //     path: 'recordsWarranty',
    //     component: () =>
    //       import('@/views/nfcEquip/recordsWarranty'),
    //     name: 'recordsWarranty',
    //     meta: {
    //       roles: 'company',
    //       title: 'recordsWarranty',
    //       icon: 'form',
    //       noCache: true
    //     }
    //   }]
    // },

    // 报修管理
    {
        path: '/companyServiceManagement',
        component: mainPage,
        redirect: '/companyServiceManagement/UnRepairReporl',
        meta: {
            keepAlive: true,
            roles: 'company',
            title: 'companyServiceManagement',
            icon: 'service'
        },
        name: 'companyServiceManagement',
        children: [{
            // 未处理报修
            path: 'UnRepairReporl',
            component: () =>
                import('@/views/companyServiceManagement/UnRepairReporl'),
            name: 'UnRepairReporl',
            meta: {
                keepAlive: true,
                roles: 'company',
                title: 'UnRepairReporl',
                icon: 'weichuli',
                noCache: true
            }
        },
        {
            // 处理中报修
            path: 'inprocessRepair',
            component: () =>
                import('@/views/companyServiceManagement/inprocessRepair'),
            name: 'inprocessRepair',
            meta: {
                keepAlive: true,
                roles: 'company',
                title: 'inprocessRepair',
                icon: 'chulizhong',
                noCache: true
            }
        },
        {
            // 处理结束报修
            path: 'completionRepair',
            component: () =>
                import('@/views/companyServiceManagement/completionRepair'),
            name: 'completionRepair',
            meta: {
                keepAlive: true,
                roles: 'company',
                title: 'completionRepair',
                icon: 'jieshu',
                noCache: true
            }
        },
        {
            // 添加
            path: 'add',
            component: () =>
                import('@/views/companyServiceManagement/add'),
            name: 'add',
            meta: {
                keepAlive: true,
                roles: 'company',
                title: 'add',
                icon: 'Add',
                noCache: true
            }
        }
        ]
    },

    // 404 页面一定要最后加载，如果放在constantRouterMap一同声明了404，后面的所以页面都会被拦截到404
    {
        path: '*',
        redirect: '/404',
        hidden: true
    }
]

// 实例化vue的时候只挂载constantRouter
const router = new Router({
    // mode: 'history', // require service support
    //scrollBehavior翻页滚动位置
    scrollBehavior: () => ({
        y: 0
    }),
    routes: constantRouterMap
})
router.beforeEach((to, from, next) => {
    NProgress.start()
    next()
})

router.afterEach(() => {
    NProgress.done()
})



export default router