/*
 * @Description: 动物管理api
 * @Author: Ronda
 * @Date: 2022-03-28 17:24:23
 * @LastEditors: WangChuDongDong 126376386+WangChuDongDong@users.noreply.github.com
 * @LastEditTime: 2024-01-02 23:16:57
 */
import { get, delJSON, del, postJSON } from '@/utils/request';
export function TfindByPage(data) {
    return get('/animal', data);
}
//保存或更新
export function AsaveOrUpdate(data) {
    return postJSON('/animal/saveOrUpdate', data);
}
// 单个删除
export function AdeleteById(id) {
    // return del("/quarantineRegistration/deleteById/" + id); 与下行代码效果一样
    return del(`/animal/deleteById/${id}`);
}
// 批量删除 ids要删除的id组成的数组
export function AbatchDelete(ids) {
    return delJSON("/animal/deleteByIdAll", ids);
}
// 根据编号查询动物溯源信息
export function AFindById(data) {
    return get('/animal/findByAnimalId', data);
}