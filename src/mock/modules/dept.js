// 首页展示
//危化品车辆
export function Cameras() {
  return {
    url: "dept/Cameras",
    type: "post",
    data: {
      code: 200,
      msg: null,
      data: [
        {
          lat: 40.03276594016099,
          lng: 116.32391530738964,
        },
        {
          lat: 39.85964952909172,
          lng: 116.48462755733868,
        },
        {
          lat: 39.78230872925777,
          lng: 116.41652027610418,
        },
      ],
    },
  };
}
//危化品卡口
export function dangBayonet() {
  return {
    url: "dept/dangBayonet",
    type: "post",
    data: {
      code: 200,
      msg: null,
      data: [
        {
          lat: 39.772680000814205,
          lng: 116.474053690024,
        },

        {
          lat: 40.016190473084436,
          lng: 116.46292515784255,
        },
      ],
    },
  };
}
//应急卡口
export function emergency() {
  return {
    url: "dept/emergency",
    type: "post",
    data: {
      code: 200,
      msg: null,
      data: [
        {
          lat: 39.87111109044183,
          lng: 116.43002252530395,
        },
        {
          lat: 39.9440377812521,
          lng: 116.41056739311784,
        },
      ],
    },
  };
}
//普通卡口
export function ordinary() {
  return {
    url: "dept/ordinary",
    type: "post",
    data: {
      code: 200,
      msg: "网络问题",
      data: [
        {
          lat: 39.878188800540165,
          lng: 116.45104541537201,
        },
        {
          lat: 39.845591185764675,
          lng: 116.39243637630638,
        },
      ],
    },
  };
}
//办卡中心
export function cardProcessingCenter() {
  return {
    url: "dept/cardProcessingCenter",
    tupe: "post",
    data: {
      code: 200,
      msg: "网络开小差了!",
      data: [
        {
          lat: 39.792025111336336,
          lng: 116.38312817419734,
        },
      ],
    },
  };
}
// 企业围栏
export function paths() {
  return {
    url: "dept/paths",
    type: "post",
    data: {
      code: 200,
      msg: null,
      data: [
        [
          { lat: 39.920672, lng: 116.392466 },
          { lat: 39.920451, lng: 116.417978 },
          { lat: 39.899032, lng: 116.400586 },
          { lat: 39.917407, lng: 116.395915 },
        ],
        [
          { lat: 39.910766, lng: 116.323763 },
          { lat: 39.91619, lng: 116.359552 },
          { lat: 39.887186, lng: 116.340436 },
          { lat: 39.910932, lng: 116.323404 },
        ],
      ],
    },
  };
}
//枪机
export function gunMachine() {
  return {
    url: "dept/gunMachine",
    type: "post",
    data: {
      code: 200,
      msg: "您的网络开小差了!",
      data: [
        {
          lat: 39.95607802857136,
          lng: 116.45364792540668,
        },
        {
          lat: 40.05065632803135,
          lng: 116.45679765255176,
        },
        {
          lat: 39.80008492254851,
          lng: 116.34239647735801,
        },
      ],
    },
  };
}
//区域
export function region() {
  return {
    url: "dept/region",
    type: "post",
    data: {
      code: 200,
      msg: "您的网络开小差了!",
      data: [
        [
          { lng: 116.439833, lat: 39.95076 },
          { lng: 116.442133, lat: 39.906496 },
          { lng: 116.467429, lat: 39.909153 },
          { lng: 116.467429, lat: 39.946335 },
          { lng: 116.440983, lat: 39.95076 },
          { lng: 116.440983, lat: 39.95076 },
        ],
        [
          { lng: 116.271958, lat: 39.876381 },
          { lng: 116.262759, lat: 39.874609 },
          { lng: 116.3237, lat: 39.873723 },
          { lng: 116.290355, lat: 39.844479 },
          { lng: 116.262759, lat: 39.871065 },
          { lng: 116.262759, lat: 39.871065 },
          { lng: 116.262759, lat: 39.871065 },
        ],
      ],
    },
  };
}
//球机
export function domeCameras() {
  return {
    url: "dept/domeCameras",
    type: "post",
    data: {
      code: 200,
      msg: "您的网络开小差了!",
      data: [
        {
          lat: 39.8840124225526,
          lng: 116.38061726332299,
        },
        {
          lat: 39.994191675303576,
          lng: 116.47757806942542,
        },
      ],
    },
  };
}
//危化品车道
export function vehicleLane() {
  return {
    url: "dept/vehicleLane",
    type: "post",
    data: {
      code: 200,
      msg: null,
      data: [
        {
          ID: 2745,
          NAME: "纬一路",
          PIXEL: [
            { lng: 116.363944, lat: 39.90384 },
            { lng: 116.362794, lat: 39.94368 },
            { lng: 116.362794, lat: 39.948105 },
            { lng: 116.382342, lat: 39.95253 },
            { lng: 116.438683, lat: 39.951645 },
            { lng: 116.439833, lat: 39.933943 },
            { lng: 116.442133, lat: 39.906496 },
            { lng: 116.450182, lat: 39.899412 },
            { lng: 116.449032, lat: 39.874609 },
            { lng: 116.405338, lat: 39.874609 },
            { lng: 116.360495, lat: 39.871951 },
          ],
          TYPE: 1650,
          TYPENAME: "危化品车道",
          WIDTH: 0,
        },
        {
          ID: 2745,
          NAME: "纬一路",
          PIXEL: [
            { lng: 116.282306, lat: 39.902068 },
            { lng: 116.315651, lat: 39.901183 },
            { lng: 116.315651, lat: 39.953415 },
            { lng: 116.311052, lat: 39.974651 },
            { lng: 116.308752, lat: 39.978189 },
            { lng: 116.306453, lat: 39.987919 },
            { lng: 116.281156, lat: 39.972881 },
          ],
          TYPE: 1650,
          TYPENAME: "危化品车道",
          WIDTH: 0,
        },
      ],
    },
  };
}
//分级管理
//园区边界
export function boundary() {
  return {
    url: "dept/boundary",
    type: "post",
    data: {
      code: 200,
      msg: null,
      data: [
        [
          { lng: 116.404188, lat: 39.953415 },
          { lng: 116.496175, lat: 39.956955 },
          { lng: 116.495025, lat: 39.876381 },
          { lng: 116.404188, lat: 39.874609 },
          { lng: 116.401889, lat: 39.95076 },
          { lng: 116.401889, lat: 39.95076 },
          { lng: 116.401889, lat: 39.95076 },
          { lng: 116.401889, lat: 39.95076 },
        ],
        [
          { lng: 116.236313, lat: 39.899412 },
          { lng: 116.355895, lat: 39.900297 },
          { lng: 116.352446, lat: 39.833841 },
          { lng: 116.235163, lat: 39.844479 },
          { lng: 116.234013, lat: 39.896754 },
          { lng: 116.25471, lat: 39.852456 },
          { lng: 116.25471, lat: 39.852456 },
        ],
      ],
    },
  };
}

//停车场
export function parkingLot() {
  return {
    url: "dept/parkingLot",
    type: "post",
    data: {
      code: 200,
      msg: "您的网络开小差了!",
      data: [
        {
          lat: 39.85156713647105,
          lng: 116.49346701190096,
        },
        {
          lat: 39.970481144505015,
          lng: 116.38857915818355,
        },
      ],
    },
  };
}

//运维管理系统
export function maintenance() {
  return {
    url: "dept/maintenance",
    type: "post",
    data: {
      code: 200,
      msg: "您的网络开小差了",
      data: [
        { ip: "192.168.0.122", name: "赵威皓", time: "2018-12-08 19:50" },
        { ip: "192.168.0.45", name: "赵冬梅", time: "2018-11-20 19:50" },
        { ip: "192.168.0.02", name: "赵吾行", time: "2018-10-15 19:50" },
        { ip: "192.168.0.82", name: "彭京", time: "2019-02-08 19:50" },
        { ip: "192.168.0.81", name: "赵吾光", time: "2019-02-08 19:50" },
        { ip: "192.168.0.132", name: "彭致睿", time: "2018-12-08 19:50" },
        { ip: "192.168.0.40", name: "陶炳宇", time: "2018-11-20 19:50" },
        { ip: "192.168.0.08", name: "陶媛", time: "2018-10-15 19:50" },
      ],
    },
  };
}
//视频
export function voided() {
  let val = [
    {
      name: "南门出入口",
      address: "http://vjs.zencdn.net/v/oceans.mp4",
      type: "video/mp4",
    },
    {
      name: "北门出入口",
      address: "http://img.yopoo.cn/banner_video.mp4",
      type: "video/mp4",
    },
    {
      name: "边界点A",
      address: "http://vjs.zencdn.net/v/oceans.mp4",
      type: "video/mp4",
    },
    {
      name: "边界点B",
      address: "http://img.yopoo.cn/banner_video.mp4",
      type: "video/mp4",
    },
    {
      name: "重要机房点A",
      src: "http://vjs.zencdn.net/v/oceans.mp4",
      type: "video/mp4",
    },
    {
      name: "重要机房点B",
      address: "http://img.yopoo.cn/banner_video.mp4",
      type: "video/mp4",
    },
  ];
  let num = parseInt(6*Math.random());
  // Math.floor(Math.random()*6+1) 1-6
  return {
    url: "dept/voided",
    type: "post",
    data: {
      code: 200,
      msg: "您的网络开小差了",
      data:val[num]
    },
  };
}
