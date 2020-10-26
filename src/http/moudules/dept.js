import axios from '../axios'
// 首页展示查询
//危化品车辆
export const Cameras = () => {
    return axios({
        url: '/dept/Cameras',
        method: "post"
    })
}
//危化品卡接口
export const dangBayonet = () => {
    return axios({
        url: '/dept/dangBayonet',
        method: 'post',
    })
}
//应急卡口
export const emergency = () => {
    return axios({
        url: "/dept/emergency",
        method: 'post',
    })
}
//普通卡口
export const ordinary = () => {
    return axios({
        url: "/dept/ordinary",
        method: 'post',
    })
}
//办卡中心
export const cardProcessingCenter = () => {
    return axios({
        url: "/dept/cardProcessingCenter",
        method: 'post',
    })
}
//企业围栏
export const paths = () => {
    return axios({
        url: '/dept/paths',
        method: 'post',
    })
}
//枪机
export const gunMachine = () => {
    return axios({
        url: '/dept/gunMachine',
        method: 'post',
    })
}
//区域
export const region = () => {
    return axios({
        url: '/dept/region',
        method: 'post',
    })
}
//球机
export const domeCameras = () => {
    return axios({
        url: "/dept/domeCameras",
        method: 'post',
    })
}
// 危化品车道
export const vehicleLane = () => {
    return axios({
        url: '/dept/vehicleLane',
        method: "post"
    })
}
//分级管理
//园区边界
//停车场
export const parkingLot = () => {
    return axios({
        url: "/dept/parkingLot",
        method: "post"
    })
}