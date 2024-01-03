/*
 * @Description: 检疫登记api
 * @Author: Ronda
 * @Date: 2022-04-07 15:42:46
 * @LastEditors: Ronda
 * @LastEditTime: 2023-12-21 11:42:16
 */
//封装发请求的函数
// import axios from 'axios';
import { get, postJSON, del, delJSON } from '@/utils/request';
//分页查询
export function findByPage(data) {
    return get('/quarantineRegistration', data);
}

export function saveOrUpdate(data) {
    return postJSON('/quarantineRegistration/saveOrUpdate', data);
}

//单个删除
export function deleteById(id) {
    // return del('/quarantineRegistration/deleteById/'+id);
    return del(`/quarantineRegistration/deleteById/${id}`)
}

//批量删除
export function batchDelete(ids) {
    return delJSON('/quarantineRegistration/deleteByIdAll', ids)
}
//axios???
//axios get