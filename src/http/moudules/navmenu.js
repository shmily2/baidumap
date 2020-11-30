import axios from '../axios'
//菜单
export const findMenuTree = (params) => {
    return axios({
        url: 'menu/findMenuTree',
        method:"get",
        params
    })
}
export const findPermissions=(params)=>{
    return axios({
        url:"menu/findPermissions",
        method:"get",
        params
    })
}