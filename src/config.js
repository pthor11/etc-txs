import dotenv from 'dotenv'

dotenv.config()

const mongo = {
    user: process.env.MONGO_USER,
    password: process.env.MONGO_PASSWORD,
    url: process.env.MONGO_URL,
    port: process.env.MONGO_PORT,
    db_auth: process.env.MONGO_DB_AUTH,
    db_name: process.env.MONGO_DB_NAME
}

const etc = {
    url: process.env.ETC_NODE_URL
}

export  {
    mongo,
    etc
}
