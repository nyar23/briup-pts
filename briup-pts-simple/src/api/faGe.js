/*
 * @Description: 栏舍管理后台接口api
 * @Author: Ronda
 * @Date: 2022-03-24 09:54:47
 * @LastEditors: Ronda
 * @LastEditTime: 2023-12-21 11:42:51
 */

import {get, del, postJSON, delJSON } from '@/utils/request';

/** 
 * 分页多条件查询栏舍信息接口
 * @param {string} fhName 栏舍名称
  * @param {string} pageNum 当前页码
  * @param {string} pageSize 每页大小
  * @returns
 */
export function findByPage(data) {
    return get('/fenceHouse',data);
  }

/** 
 * 批量删除栏舍接口
 * @param {array} params ids
 * @returns
 */
export function batchDelete(ids) {
    return delJSON("/fenceHouse/deleteByIds", ids);
  }

/** 
 * 查询所有的栏舍信息
 * @returns
 */
// export function queryAll() {
//     return getall(`/fenceHouse/queryAll`);
//   }

/** 
 * 新增或修改栏舍接口
 * @param {object} params managerFenceHouse
 * @param {string} params.fhDesc 
 * @param {string} params.fhId 
 * @param {string} params.fhName 
 * @param {object} params.fhTime 
 * @returns
 */
export function saveOrUpdate(params) {
    return postJSON(`/fenceHouse/saveOrUpdate`, params);
  }


/** 
 * 根据栏舍编号查询栏舍信息以及栏圈信息接口
 * @param {string} fhId fhId
  * @returns
 */
export function findHurdles(id) {
    return get(`/fenceHouse/${id}`);
}

  /** 
 * 根据栏舍编号删除栏舍信息接口
 * @param {string} fhId 栏舍编号
  * @returns
 */
export function deletById(fhId) {
    return del(`/fenceHouse/${fhId}`);
  }