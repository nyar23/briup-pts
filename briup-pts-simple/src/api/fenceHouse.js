/*
 * @Description: 栏舍管理后台接口api
 * @Author: Ronda
 * @Date: 2022-03-24 09:54:47
 * @LastEditors: Ronda
 * @LastEditTime: 2023-12-21 11:42:51
 */
import { get, postJSON, del, delJSON } from "@/utils/request";
// 分页查询
export function findFence(data) {
    return get("/fenceHouse", data);
}
export function saveOrUpdate(data) {
    return postJSON("/fenceHouse/saveOrUpdate", data);
}
export function deleteById(id) {
    return del(`/fenceHouse/${id}`);
}
export function batchDelete(ids) {
    return delJSON("/fenceHouse/deleteByIds", ids);
}

export function findHurdles(id) {
    return get(`/fenceHouse/${id}`);
}