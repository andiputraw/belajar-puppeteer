import "dotenv/config"

const CONFIG = {
    username : process.env.USERNAME || null,
    password : process.env.PASSWORD || null
}



export default CONFIG