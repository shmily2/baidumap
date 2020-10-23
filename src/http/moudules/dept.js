import axios from '../axios'
// 首页展示查询
//企业围栏
export const paths=()=> {
    return axios({
        url: '/dept/paths',
        method: 'post',
    })
}
// 危化品车道
export const vehicleLane=()=>{
    return axios({
        url:"/dept/vehicleLane",
        method:"post"
    })
}
//球机
export const Cameras=()=>{
    return axios({
        url:"/dept/Cameras",
        method:"post"
    })
}
