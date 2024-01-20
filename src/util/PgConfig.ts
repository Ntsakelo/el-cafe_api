import 'dotenv/config'
import pgPromise from 'pg-promise'


const pgp = pgPromise();

export const db = pgp({connectionString: process.env.DATABASE_URL});