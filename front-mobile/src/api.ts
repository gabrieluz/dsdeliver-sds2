import axios from "axios"

const API_URL = 'https://gabriel-luz-sds2.herokuapp.com'
const APP_URL = 'https://sds2poc.herokuapp.com'

export function fetchOrders(){
    return axios(`${APP_URL}/orders`)
}

export function confirmDelivery(orderId : number){
    return axios.put(`${APP_URL}/orders/${orderId}/delivered`)
}