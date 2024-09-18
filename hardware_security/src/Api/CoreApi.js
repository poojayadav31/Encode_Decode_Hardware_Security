import { message } from 'antd'
import API from './Api'


export const EmpLogin = async (values) => {
    console.log("Login",values)
    const response = await API.post('api/LoginPage', values,
        { headers: { 'Content-Type': 'application/json' } }).catch(
            err => message.error('Login Failed')
        )
    return response ? response.data : {}
}

export const Empregister = async (values) => {
    console.log("Registration",values)
    const response = await API.post('api/Signup', values,
        { headers: { 'Content-Type': 'application/json' } }).catch(
            err => message.error('Registration Failed')
        )
    return response ? response.data : {}
}
export const send_otp = async (values) => {
    console.log("Registration",values)
    const response = await API.post('api/send-otp', values,
        { headers: { 'Content-Type': 'application/json' } }).catch(
            err => message.error('Registration Failed')
        )
    return response ? response.data : {}
}

export const AESencryption = async (values) => {
    console.log("AESencrypt",values)
    const response = await API.post('api/encrypt', values,
        { headers: { 'Content-Type': 'application/json' } }).catch(
            err => message.error('Encryption Failed')
        )
    return response ? response.data : {}
}

export const AESGetencrypt = async (values) => {
    const response = await API.post('api/AESencrypt-get',values,
        { headers: { 'Content-Type': 'application/json' } }).catch(
            err => message.error('Encode Failed')
        )
    return response ? response.data : {}
}

export const AESdecryption = async (values) => {
    console.log("AESdecrypt",values)
    const response = await API.post('api/decrypt', values,
        { headers: { 'Content-Type': 'application/json' } }).catch(
            err => message.error('Decryption Failed')
        )
    return response ? response.data : {}
}

export const Base64encode = async (values) => {
    console.log("Base64encode",values)
    const response = await API.post('api/base64encode', values,
        { headers: { 'Content-Type': 'application/json' } }).catch(
            err => message.error('Encode Failed')
        )
    return response ? response.data : {}
}

export const Base64Getencode = async (values) => {
    const response = await API.post('api/base64encode-get',values,
        { headers: { 'Content-Type': 'application/json' } }).catch(
            err => message.error('Encode Failed')
        )
    return response ? response.data : {}
}

export const Base64decode = async (values) => {
    console.log("Base64decode",values)
    const response = await API.post('api/base64decode', values,
        { headers: { 'Content-Type': 'application/json' } }).catch(
            err => message.error('Decode Failed')
        )
    return response ? response.data : {}
}

export const ContactMessage = async (values) => {
    console.log("ContactMessage",values)
    const response = await API.post('api/contact', values,
        { headers: { 'Content-Type': 'application/json' } }).catch(
            err => message.error('Failed to send your message')
        )
    console.log(response, "response post")
    return response ? response.data : {}
}


  export const verifyOtp = async (formData) => {
    console.log("verifyOtp",formData)
    const response = await API.post('api/verify-otp', formData,
        { headers: { 'Content-Type': 'application/json' } }).catch(
            err => message.error('Login Failed')
        )
    return response ? response.data : {}
}

export const deleteEncode = async (id) => {
    const response = await API.delete(`api/delete/encode/${id}`,
        { headers: { 'Content-Type': 'application/json' } }).catch(
            err => message.error('Login Failed')
        )
    return response ? response.data : {}
}

export const deleteAesEncrypt = async (id) => {
    const response = await API.delete(`api/delete/Encrypt/${id}`,
        { headers: { 'Content-Type': 'application/json' } }).catch(
            err => message.error('Login Failed')
        )
    return response ? response.data : {}
}
