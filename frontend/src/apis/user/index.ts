import axios from 'axios'
import { CommonResponse } from 'src/common/interface'

const rootUrl = '/api/admin/'


// ANCHOR update password
export const updatePassword = (params: object) => {
  const url = `${rootUrl}updatePassword`
  const response = axios.put<CommonResponse>(url, params)

  return response
}

// ANCHOR get admin list
export const getAdminList = (params: object) => {
  const url = `${rootUrl}getAdminList`
  const response = axios.get<CommonResponse>(url, { params })

  return response
}

// ANCHOR get admin detail
export const getAdminDetail = (params: object) => {
  const url = `${rootUrl}getAdminDetail`
  const response = axios.get<CommonResponse>(url, { params })

  return response
}

// ANCHOR create admin
export const createAdmin = (params: object) => {
  const url = `${rootUrl}createAdmin`
  const response = axios.post<CommonResponse>(url, params)

  return response
}

// ANCHOR delete admin
export const deleteAdmin = (params: object) => {
  const url = `${rootUrl}deleteAdmin`
  const response = axios.delete<CommonResponse>(url, { params })

  return response
}

// ANCHOR update admin password
export const updateAdminPassword = (params: object) => {
  const url = `${rootUrl}updateAdminPassword`
  const response = axios.put<CommonResponse>(url, params)

  return response
}

// ANCHOR update admin username
export const updateAdminUsername = (params: object) => {
  const url = `${rootUrl}updateAdminUsername`
  const response = axios.put<CommonResponse>(url, params)

  return response
}

// ANCHOR update admin profile
export const updateAdminProfile = (params: object) => {
  const url = `${rootUrl}updateAdminProfile`
  const response = axios.put<CommonResponse>(url, params)

  return response
}

// ANCHOR update admin intro
export const updateAdminIntro = (params: object) => {
  const url = `${rootUrl}updateAdminIntro`
  const response = axios.put<CommonResponse>(url, params)

  return response
}

// ANCHOR update admin level
export const updateAdminLevel = (params: object) => {
  const url = `${rootUrl}updateAdminLevel`
  const response = axios.put<CommonResponse>(url, params)

  return response
}

// ANCHOR get login history list
export const getLoginHistoryList = (params: object) => {
  const url = `${rootUrl}getLoginHistoryList`
  const response = axios.get<CommonResponse>(url, { params })

  return response
}

// ANCHOR get login history detail
export const getLoginHistoryDetail = (params: object) => {
  const url = `${rootUrl}getLoginHistoryDetail`
  const response = axios.get<CommonResponse>(url, { params })

  return response
}