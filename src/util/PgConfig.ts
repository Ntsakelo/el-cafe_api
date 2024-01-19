import 'dotenv/config'
import pgPromise from 'pg-promise'
import env from '../util/EnvValidation'

const pgp = pgPromise();

export const db = pgp(process.env.DB_CONNECTION_STRING);