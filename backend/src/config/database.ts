import dotenv from 'dotenv';
import pgPromise from 'pg-promise';

dotenv.config();

const conn = pgPromise()("postgres://postgres:root@localhost:5432/demo_frame_editor");


export default conn;
