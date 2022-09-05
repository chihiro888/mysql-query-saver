import axios from 'axios'
import { CommonResponse } from '../../common/interface'

const rootUrl = '/api/user/'

// ANCHOR account API
export const accountAPI = () => {
  const url = `${rootUrl}account`
  const response = axios.get<CommonResponse>(url)
  return response
}

// ANCHOR change password API
export const changePasswordAPI = (params: object) => {
  const url = `${rootUrl}changePassword`
  const response = axios.put<CommonResponse>(url, params)
  return response
}

// ANCHOR user list pagination API
export const userListPagination = (params: object) => {
  const url = `${rootUrl}userListPagination`
  const response = axios.get<CommonResponse>(url, { params: params })
  return response
}