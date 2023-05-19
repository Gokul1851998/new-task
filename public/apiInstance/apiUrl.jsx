import axios from "axios"
import { API_KEY, apiUrlproject } from "../../api/api"

export const getProject = async() => {
    try {
        const response = await axios.get(`${apiUrlproject}${API_KEY}/Ray/GetProjectDescription?iProject=2`)
        return response
    } catch (error) {
        return error.response
    }
}