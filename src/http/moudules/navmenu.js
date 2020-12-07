import axios from '../axios'
//菜单
export const findNavTree = (params) => {
    return axios({
        url: 'menu/findNavTree',
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