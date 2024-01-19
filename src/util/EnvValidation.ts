import { cleanEnv } from 'envalid';
import {port, str} from 'envalid';

export default cleanEnv(process.env,{
    DB_CONNECTION_STRING: str(),
    PORT: port(),
})