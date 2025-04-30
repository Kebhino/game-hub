import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        
        key: '2793796808f44ba9942877eeb10dcafc'}})