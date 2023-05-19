import { demo } from "../../api/api";
import axios from "axios";

export const demoData = async(payload)=>{
    try {
        const response = await axios.post(`${demo}post-demoData`,(payload))
        return response.data
    } catch (error) {
        return error.response
    }
}

export const getData = async()=>{
    try {
        const response = await axios.get(`${demo}get-demoData`)
        return response.data
    } catch (error) {
        return [error.response]
    }
}