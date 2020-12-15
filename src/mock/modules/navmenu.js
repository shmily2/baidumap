// 获取导航菜单树
export function findNavTree() {
    const navTreeData = {
      "code": 200,
      "msg": null,
      "data": [
        {
        "id": 1,
        "tabshow":true,
        "createBy": null,
        "createTime": null,
        "lastUpdateBy": null,
        "lastUpdateTime": null,
        "parentId": 0,
        "name": "系统管理",
        "title": "系统管理",
        "url": null,
        "perms": null,
        "type": 0,
        "icon": "el-icon-setting",
        "orderNum": 0,
        "delFlag": 0,
        "level": 0,
        "children": [{
          "id": 2,
          "tabshow":true,
          "createBy": null,
          "createTime": null,
          "lastUpdateBy": null,
          "lastUpdateTime": null,
          "parentId": 1,
          "name": "用户管理",
          "title": "用户管理",
          "url": "https://www.cnblogs.com/xifengxiaoma",
          "perms": null,
          "type": 1,
          "icon": "el-icon-service",
          "orderNum": 1,
          "delFlag": 0,
          "level": 1,
          "children": []
        }, {
          "id": 3,
          "createBy": null,
          "tabshow":true,
          "createTime": null,
          "lastUpdateBy": null,
          "lastUpdateTime": null,
          "parentId": 1,
          "name": "机构管理",
          "title": "机构管理",
          "url": "https://gitee.com/liuge1988/kitty-ui",
          "perms": null,
          "type": 1,
          "icon": "el-icon-news",
          "orderNum": 2,
          "delFlag": 0,
          "level": 1,
          "children": []
        }, {
          "id": 4,
          "createBy": null,
          "tabshow":true,
          "createTime": null,
          "lastUpdateBy": null,
          "lastUpdateTime": null,
          "parentId": 1,
          "name": "角色管理",
          "title": "角色管理",
          "url": "https://gitee.com/liuge1988/kitty",
          "perms": null,
          "type": 1,
          "icon": "el-icon-view",
          "orderNum": 4,
          "delFlag": 0,
          "level": 1,
          "children": []
        }, {
          "id": 5,
          "tabshow":true,
          "createBy": null,
          "createTime": null,
          "lastUpdateBy": null,
          "lastUpdateTime": null,
          "parentId": 1,
          "name": "菜单管理",
          "title": "菜单管理",
          "url": "/sys/menu",
          "perms": null,
          "type": 1,
          "icon": "el-icon-menu",
          "orderNum": 5,
          "delFlag": 0,
          "level": 1,
          "children": []
        }, {
          "id": 7,
          "tabshow":true,
          "createBy": null,
          "createTime": null,
          "lastUpdateBy": null,
          "lastUpdateTime": null,
          "parentId": 1,
          "name": "字典管理",
          "title": "字典管理",
          "url": "/sys/dict",
          "perms": null,
          "type": 1,
          "icon": "el-icon-edit-outline",
          "orderNum": 7,
          "delFlag": 0,
          "level": 1,
          "children": []
        }, {
          "id": 8,
          "tabshow":true,
          "createBy": null,
          "createTime": null,
          "lastUpdateBy": "admin",
          "lastUpdateTime": "2018-09-23T11:32:28.000+0000",
          "parentId": 1,
          "name": "系统日志",
          "title": "系统日志",
          "url": "/sys/log",
          "perms": "sys:log:view",
          "type": 1,
          "icon": "el-icon-info",
          "orderNum": 8,
          "delFlag": 0,
          "level": 1,
          "children": []
        }]
      }, {
        "id": 43,
        "tabshow":true,
        "createBy": "admin",
        "createTime": "2018-12-27T02:57:29.000+0000",
        "lastUpdateBy": "admin",
        "lastUpdateTime": "2018-12-27T03:02:26.000+0000",
        "parentId": 0,
        "name": "系统监控",
        "title": "系统监控",
        "url": "",
        "perms": "",
        "type": 0,
        "icon": "el-icon-menu",
        "orderNum": 1,
        "delFlag": 0,
        "level": 0,
        "children": [{
          "id": 6,
          "tabshow":true,
          "createBy": null,
          "createTime": null,
          "lastUpdateBy": "admin",
          "lastUpdateTime": "2018-12-27T03:03:45.000+0000",
          "parentId": 43,
          "name": "数据监控",
          "title": "数据监控",
          "url": "http://139.196.87.48:8001/druid/login.html",
          "perms": null,
          "type": 1,
          "icon": "el-icon-warning",
          "orderNum": 0,
          "delFlag": 0,
          "level": 1,
          "children": []
        }, {
          "id": 38,
          "tabshow":true,
          "createBy": "admin",
          "createTime": "2018-11-02T12:02:15.000+0000",
          "lastUpdateBy": "admin",
          "lastUpdateTime": "2018-12-27T03:03:53.000+0000",
          "parentId": 43,
          "name": "服务监控",
          "title": "服务监控",
          "url": "http://139.196.87.48:8000/",
          "perms": "",
          "type": 1,
          "icon": "el-icon-edit-outline",
          "orderNum": 1,
          "delFlag": 0,
          "level": 1,
          "children": []
        }]
      }, {
        "id": 44,
        "tabshow":true,
        "createBy": "admin",
        "createTime": "2018-12-27T03:05:48.000+0000",
        "lastUpdateBy": "admin",
        "lastUpdateTime": "2018-12-27T03:06:39.000+0000",
        "parentId": 0,
        "name": "服务治理",
        "title": "服务治理",
        "url": "",
        "perms": "",
        "type": 0,
        "icon": "el-icon-service",
        "orderNum": 2,
        "delFlag": 0,
        "level": 0,
        "children": [{
          "tabshow":true,
          "id": 41,
          "createBy": "admin",
          "createTime": "2018-11-03T03:06:48.000+0000",
          "lastUpdateBy": "admin",
          "lastUpdateTime": "2018-12-27T03:08:11.000+0000",
          "parentId": 44,
          "name": "注册中心",
          "title": "注册中心",
          "url": "http://139.196.87.48:8500",
          "perms": "",
          "type": 1,
          "icon": " el-icon-view",
          "orderNum": 0,
          "delFlag": 0,
          "level": 1,
          "children": []
        }]
      }, {
        "id": 35,
        "tabshow":true,
        "createBy": null,
        "createTime": null,
        "lastUpdateBy": "admin",
        "lastUpdateTime": "2018-12-27T03:04:18.000+0000",
        "parentId": 0,
        "name": "接口文档",
        "title": "接口文档",
        "url": "https://gitee.com/liuge1988/kitty-generator",
        "perms": null,
        "type": 1,
        "icon": "el-icon-document",
        "orderNum": 3,
        "delFlag": 0,
        "level": 0,
        "children": []
      },
      {
          "id": 42,
          "tabshow":true,
          "createBy": "admin",
          "createTime": "2018-11-15T06:39:30.000+0000",
          "lastUpdateBy": "admin",
          "lastUpdateTime": "2018-11-15T06:56:18.000+0000",
          "parentId": 0,
          "name": "代码生成",
          "title": "代码生成",
          "url": "/generator/generator",
          "perms": "",
          "type": 1,
          "icon": "el-icon-star-on",
          "orderNum": 5,
          "delFlag": 0,
          "level": 0,
          "children": []
        },
       {
        "id": 28,
        "tabshow":true,
        "createBy": null,
        "createTime": null,
        "lastUpdateBy": "admin",
        "lastUpdateTime": "2018-11-15T06:39:43.000+0000",
        "parentId": 0,
        "name": "使用案例",
        "title": "使用案例",
        "url": null,
        "perms": null,
        "type": 0,
        "icon": "el-icon-picture-outline",
        "orderNum": 6,
        "delFlag": 0,
        "level": 0,
        "children": [{
          "id": 29,
          "createBy": null,
          "createTime": null,
          "lastUpdateBy": null,
          "lastUpdateTime": null,
          "parentId": 28,
          "name": "国际化",
          "title": "国际化",
          "url": "/demo/i18n",
          "tabshow":true,
          "perms": null,
          "type": 1,
          "icon": "el-icon-edit",
          "orderNum": 1,
          "delFlag": 0,
          "level": 1,
          "children": []
        }, {
          "id": 30,
          "tabshow":true,
          "createBy": null,
          "createTime": null,
          "lastUpdateBy": null,
          "lastUpdateTime": null,
          "parentId": 28,
          "name": "换皮肤",
          "title": "换皮肤",
          "url": "/demo/theme",
          "perms": null,
          "type": 1,
          "icon": "el-icon-picture",
          "orderNum": 2,
          "delFlag": 0,
          "level": 1,
          "children": [
            {
              "id": 30,
              "tabshow":false,
              "parentId": 30,
              "name": "详情",
              "title": "详情",
              "url": "/demo/details",
              "perms": null,
              "type": 1,
              "icon": "el-icon-picture",
              "orderNum": 2,
              "delFlag": 0,
              "parentTitle":"换皮肤"
            },
            {
              "id": 30,
              "tabshow":false,
              "parentId": 30,
              "name": "编辑",
              "title": "编辑",
              "url": "/demo/edit",
              "perms": null,
              "type": 1,
              "icon": "el-icon-picture",
              "orderNum": 2,
              "delFlag": 0,
              "parentTitle":"换皮肤"
            }
          ]
        }]
      }]
    }
    return {
      url: 'menu/findNavTree',
      type: 'get',
      data: navTreeData
    }
  }

// 查找用户的菜单权限标识集合
export function findPermissions() {
    let permsData = {
        "code": 200,
        "msg": null,
        "data": [
            null,
            "sys:user:view",
            "sys:menu:delete",
            "sys:dept:edit",
            "sys:dict:edit",
            "sys:dict:delete",
            "sys:menu:add",
            "sys:user:add",
            "sys:log:view",
            "sys:dept:delete",
            "sys:role:edit",
            "sys:role:view",
            "sys:dict:view",
            "sys:user:edit",
            "sys:user:delete",
            "sys:dept:view",
            "sys:dept:add",
            "sys:role:delete",
            "sys:menu:view",
            "sys:menu:edit",
            "sys:dict:add",
            "sys:role:add"
        ]
    }
    return {
        url: 'menu/findPermissions',
        type: 'get',
        data: permsData
    }
}