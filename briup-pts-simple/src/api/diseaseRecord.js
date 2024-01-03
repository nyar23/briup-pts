/*
 * @Description: 病症记录api
 * @Author: Ronda
 * @Date: 2022-04-12 11:34:44
 * @LastEditors: Ronda
 * @LastEditTime: 2023-12-21 11:42:36
 */
import { get, postJSON, del, delJSON } from '@/utils/request';

//分页查询
export function findByPage(data) {
    return get('/diseaseRecord', data);
}
//新增或修改
export function saveOrUpdate(data) {
    return postJSON('/diseaseRecord/saveOrUpdate', data);
}

//单个删除
export function deleteById(id) {
    return del(`/diseaseRecord/deleteById/${id}`)
}

//批量删除
export function batchDelete(ids) {
    return delJSON('/diseaseRecord/deleteByIdAll', ids)
}