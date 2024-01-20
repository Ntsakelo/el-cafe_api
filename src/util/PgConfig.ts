import 'dotenv/config'
import pgPromise from 'pg-promise'


const pgp = pgPromise();

export const db = pgp('postgres://el_cafe_user:71K6YOAjtjPhLxDgyYcBSYwdCADpgsLX@dpg-cmlf40v109ks7391qpag-a.oregon-postgres.render.com/el_cafe?ssl=true');