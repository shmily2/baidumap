// 获取导航菜单树
export function findNavTree() {
  const navTreeData = {
    "code": 200,
    "msg": null,
    "data": [
      {
        "id": 101,
        "tabshow": true,
        "createBy": null,
        "createTime": null,
        "lastUpdateBy": null,
        "lastUpdateTime": null,
        "parentId": null,
        "name": "kakou",
        "title": "卡口管理",
        "url": null,
        "perms": null,
        "type": 0,
        "icon": "el-icon-guide",
        "orderNum": 0,
        "delFlag": 0,
        "level": 0,
        "children": [{
          "id": 102,
          "tabshow": true,
          "createBy": null,
          "createTime": null,
          "lastUpdateBy": null,
          "lastUpdateTime": null,
          "parentId": 101,
          "name": "ptkk",
          "title": "普通卡口",
          "url": "/Bayonet/commonBayonet",
          "perms": null,
          "type": 1,
          "icon": "el-icon-s-operation",
          "orderNum": 1,
          "delFlag": 0,
          "level": 1,
          "children": []
        }, {
          "id": 103,
          "createBy": null,
          "tabshow": true,
          "createTime": null,
          "lastUpdateBy": null,
          "lastUpdateTime": null,
          "parentId": 101,
          "name": "whpkk",
          "title": "危化品卡口",
          "url": "/Bayonet/DangerousBayonet",
          "perms": null,
          "type": 1,
          "icon": "el-icon-no-smoking",
          "orderNum": 2,
          "delFlag": 0,
          "level": 1,
          "children": []
        }, {
          "id": 104,
          "createBy": null,
          "tabshow": true,
          "createTime": null,
          "lastUpdateBy": null,
          "lastUpdateTime": null,
          "parentId": 101,
          "name": "yjkk",
          "title": "应急卡口",
          "url": "/Bayonet/emergencyBayonet",
          "perms": null,
          "type": 1,
          "icon": "el-icon-smoking",
          "orderNum": 4,
          "delFlag": 0,
          "level": 1,
          "children": []
        }]
      },
      {
        "id": 201,
        "tabshow": true,
        "createBy": null,
        "createTime": null,
        "lastUpdateBy": null,
        "lastUpdateTime": null,
        "parentId": 0,
        "name": "clgl",
        "title": "车辆管理",
        "url": null,
        "perms": null,
        "type": 0,
        "icon": "el-icon-truck",
        "orderNum": 0,
        "delFlag": 0,
        "level": 0,
        "children": [{
          "id": 202,
          "tabshow": true,
          "createBy": null,
          "createTime": null,
          "lastUpdateBy": null,
          "lastUpdateTime": null,
          "parentId": 201,
          "name": "whpcl",
          "title": "危化品车辆",
          "url": "/Car/dangerousVehicles",
          "perms": null,
          "type": 1,
          "icon": "el-icon-service",
          "orderNum": 1,
          "delFlag": 0,
          "level": 1,
          "children": []
        }, {
          "id": 203,
          "createBy": null,
          "tabshow": true,
          "createTime": null,
          "lastUpdateBy": null,
          "lastUpdateTime": null,
          "parentId": 201,
          "name": "xcgj",
          "title": "行车轨迹",
          "url": "/Car/drivingTrack",
          "perms": null,
          "type": 1,
          "icon": "el-icon-news",
          "orderNum": 2,
          "delFlag": 0,
          "level": 1,
          "children": []
        }, {
          "id": 204,
          "createBy": null,
          "tabshow": true,
          "createTime": null,
          "lastUpdateBy": null,
          "lastUpdateTime": null,
          "parentId": 201,
          "name": "parkingLot",
          "title": "停车场",
          "url": "/Car/parkingLot",
          "perms": null,
          "type": 1,
          "icon": "el-icon-view",
          "orderNum": 4,
          "delFlag": 0,
          "level": 1,
          "children": []
        }, {
          "id": 205,
          "tabshow": true,
          "createBy": null,
          "createTime": null,
          "lastUpdateBy": null,
          "lastUpdateTime": null,
          "parentId": 201,
          "name": "vehicleLane",
          "title": "危化品车道",
          "url": "/Car/vehicleLane",
          "perms": null,
          "type": 1,
          "icon": "el-icon-menu",
          "orderNum": 5,
          "delFlag": 0,
          "level": 1,
          "children": []
        }, 
        {
          "id": 206,
          "tabshow": true,
          "createBy": null,
          "createTime": null,
          "lastUpdateBy": null,
          "lastUpdateTime": null,
          "parentId": 201,
          "name": "vehicleLocation",
          "title": "车辆位置",
          "url": "/Car/vehicleLocat",
          "perms": null,
          "type": 1,
          "icon": "el-icon-map-location",
          "orderNum": 5,
          "delFlag": 0,
          "level": 1,
          "children": []
        },    
      ]
      },
      {
        "id": 1,
        "tabshow": true,
        "createBy": null,
        "createTime": null,
        "lastUpdateBy": null,
        "lastUpdateTime": null,
        "parentId": 0,
        "name": "xtgl",
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
          "tabshow": true,
          "createBy": null,
          "createTime": null,
          "lastUpdateBy": null,
          "lastUpdateTime": null,
          "parentId": 1,
          "name": "yhgl",
          "title": "用户管理",
          "url": "https://www.cnblogs.com/xifengxiaoma",
          "perms": null,
          "type": 1,
          "icon": "el-icon-service",
          "orderNum": 1,
          "delFlag": 0,
          "level": 1,
          "children": [
            {
            "id": 55,
            "tabshow": true,
            "createBy": null,
            "createTime": null,
            "lastUpdateBy": null,
            "lastUpdateTime": null,
            "parentId": 2,
            "name": "yhqxgl",
            "title": "用户权限管理",
            "url": "https://news.xuetian.cn/topic/yizao/jianzhang",
            "perms": null,
            "type": 1,
            "icon": "el-icon-thumb",
            "orderNum": 1,
            "delFlag": 0,
            "level": 1,
            }
          ]
        }, {
          "id": 3,
          "createBy": null,
          "tabshow": true,
          "createTime": null,
          "lastUpdateBy": null,
          "lastUpdateTime": null,
          "parentId": 1,
          "name": "jggl",
          "title": "机构管理",
          "url": "https://www.biquge0.cc/book/37429/23510353_2.html",
          "perms": null,
          "type": 1,
          "icon": "el-icon-news",
          "orderNum": 2,
          "delFlag": 0,
          "level": 1,
          "children": []
        }]
      },
      {
        "id": 42,
        "tabshow": true,
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
        "tabshow": true,
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
          "tabshow": true,
          "perms": null,
          "type": 1,
          "icon": "el-icon-edit",
          "orderNum": 1,
          "delFlag": 0,
          "level": 1,
          "children": []
        }, {
          "id": 30,
          "tabshow": true,
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
              "id": 52,
              "tabshow": false,
              "parentId": 30,
              "name": "详情",
              "title": "详情",
              "url": "/demo/details",
              "perms": null,
              "type": 1,
              "icon": "el-icon-picture",
              "orderNum": 2,
              "delFlag": 0,
              "parentTitle": "换皮肤",
              "parentName": "换皮肤",
              "parentId":30
            },
            {
              "id": 53,
              "tabshow": false,
              "parentId": 30,
              "name": "编辑",
              "title": "编辑",
              "url": "/demo/edit",
              "perms": null,
              "type": 1,
              "icon": "el-icon-picture",
              "orderNum": 2,
              "delFlag": 0,
              "parentTitle": "换皮肤",
              "parentName": "换皮肤",
              "parentId":30
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