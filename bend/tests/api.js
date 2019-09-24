
import axios from 'axios'

const URL = 'http://localhost:9000/api/all'
export const getAllPlayers = async () => {
    const json = await axios.get(URL).then( resp => { return resp.data })
    // console.log("--->", json) 
    return json
}
