import axios from "axios"

const TOKEN = "cd2o812ad3iebknp8880cd2o812ad3iebknp888g"

export default axios.create(
    {
        baseURL: "https://finnhub.io/api/v1",
        params: {
            token: TOKEN
        }
    }
)