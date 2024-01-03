/*
 * @Description: 栏圈管理后台接口api
 * @Author: Ronda
 * @Date: 2022-03-25 10:30:18
 * @LastEditors: Ronda
 * @LastEditTime: 2023-12-21 11:41:28
 */
import { get, postJSON, put, putJSON } from '@/utils/request'


export function findByPage(data) {
    return get("/hurdle", data);
}

export function saveOrUpdate(data) {
    return postJSON("/hurdle/saveOrUpdate", data);
}

//改变状态
export function changeStatus(hEnable, hId) {
    return put(`/hurdle/${hId}/${hEnable}`);
}

////要修改的ID组成的数组
export function changeStatusBatch(data) {
    // console.log(data.hIds, data.hEnable);
    return putJSON("/hurdle", data);
}