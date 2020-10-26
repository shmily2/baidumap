// 首页展示
//危化品车辆
export function Cameras() {
  return {
    url: 'dept/Cameras',
    type: 'post',
    data: {
      "code": 200,
      "msg": null,
      "data": [
        {
          lat: 40.03276594016099,
          lng: 116.32391530738964
        },
        {
          lat: 39.85964952909172,
          lng: 116.48462755733868
        },
        {
          lat: 39.78230872925777,
          lng: 116.41652027610418
        },
      ],
    }
  }
}
//危化品卡口
export function dangBayonet() {
  return {
    url: 'dept/dangBayonet',
    type: 'post',
    data: {
      "code": 200,
      "msg": null,
      "data": [
        {
          lat: 39.772680000814205,
          lng: 116.474053690024
        },

        {
          lat: 40.016190473084436,
          lng: 116.46292515784255
        },
      ]
    }
  }
}
//应急卡口
export function emergency() {
  return {
    url: "dept/emergency",
    type: "post",
    data: {
      "code": 200,
      "msg": null,
      "data": [
        {
          lat: 39.87111109044183,
          lng: 116.43002252530395
        },
        {
          lat: 39.9440377812521,
          lng: 116.41056739311784
        },
      ]
    }
  }
}
//普通卡口
export function ordinary() {
  return {
    url: "dept/ordinary",
    type: "post",
    data: {
      "code": 200,
      "msg": "网络问题",
      "data": [
        {
          lat: 39.878188800540165,
          lng: 116.45104541537201
        },
        {
          lat: 39.845591185764675,
          lng: 116.39243637630638
        },
      ]
    }
  }
}
//办卡中心
export function cardProcessingCenter() {
  return {
    url: "dept/cardProcessingCenter",
    tupe: "post",
    data: {
      "code": 200,
      "msg": "网络开小差了!",
      "data": [
        {
          lat: 39.792025111336336,
          lng: 116.38312817419734
        },
      ]
    }
  }
}
// 企业围栏
export function paths() {
  return {
    url: 'dept/paths',
    type: 'post',
    data: {
      "code": 200,
      "msg": null,
      "data": [[
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
      ]
    },
  }
}
//枪机
export function gunMachine() {
  return {
    url: "dept/gunMachine",
    type: "post",
    data: {
      "code": 200,
      "msg": "您的网络开小差了!",
      "data": [{
        lat: 39.95607802857136,
        lng: 116.45364792540668
      },
      {
        lat: 40.05065632803135,
        lng: 116.45679765255176
      },
      {
        lat: 39.80008492254851,
        lng: 116.34239647735801
      }
      ]
    }
  }
}
//区域
export function region() {
  return {
    url: "dept/region",
    type: "post",
    data: {
      "code": 200,
      "msg": "您的网络开小差了!",
      "data": [
        [{
          lat: 31.532335,
          lng: 120.333027
        },
        {
          lat: 31.550431,
          lng: 120.311899
        },
        {
          lat: 31.557324,
          lng: 120.355018
        },
        {
          lat: 31.537013,
          lng: 120.354586
        },
        {
          lat: 31.5652,
          lng: 120.326991
        }
        ],
        [
          {
            lat: 39.920977,
            lng: 116.387112
          },
          {
            lat: 39.913063,
            lng: 116.385243
          },
          {
            lat: 39.917988,
            lng: 116.394226
          },
          {
            lat: 39.921364,
            lng: 116.401772
          },
          {
            lat: 39.927893,
            lng:116.41248
          }
        ],
      ]
    }
  }
}
//球机
export function domeCameras() {
  return {
    url: "dept/domeCameras",
    type: "post",
    data: {
      "code": 200,
      "msg": "您的网络开小差了!",
      "data": [
        {
          lat: 39.8840124225526,
          lng: 116.38061726332299
        },
        {
          lat: 39.994191675303576,
          lng: 116.47757806942542
        },
      ],

    }
  }
}
//危化品车道
export function vehicleLane() {
  return {
    url: 'dept/vehicleLane',
    type: 'post',
    data: {
      "code": 200,
      "msg": null,
      "data": [
        {
          ID: 2745,
          NAME: "纬一路",
          PIXEL: [
            { lng: 116.350658, lat: 39.938285 },
            { lng: 116.386446, lat: 39.939281 },
            { lng: 116.389034, lat: 39.913828 },
            { lng: 116.442501, lat: 39.914603 },
          ],
          TYPE: 1650,
          TYPENAME: "危化品车道",
          WIDTH: 0
        },
        {
          ID: 2745,
          NAME: "纬一路",
          PIXEL: [
            { lng: 116.314782, lat: 39.913508 },
            { lng: 116.315391, lat: 39.964429 },
            { lng: 116.381476, lat: 39.964429 },
          ],
          TYPE: 1650,
          TYPENAME: "危化品车道",
          WIDTH: 0
        }
      ]
    },
  }
}
//分级管理
//园区边界
//停车场
export function parkingLot() {
  return {
    url: "dept/parkingLot",
    type: "post",
    data: {
      "code": 200,
      "msg": "您的网络开小差了!",
      "data": [
        {
          lat: 39.85156713647105,
          lng: 116.49346701190096
        },
        {
          lat: 39.970481144505015,
          lng: 116.38857915818355
        },
      ],
    }
  }
}

