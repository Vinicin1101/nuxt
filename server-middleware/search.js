import axios from "axios";

export default {
    async get(id) {
        const { data } = await axios.get(`/search?q=${id}`);
        return data;
    }
}