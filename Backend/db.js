import mysql from "mysql2"
import dotenv from 'dotenv';
dotenv.config();
const urlDb=`mysql://${process.env.MYSQLUSER}:${process.env.MYSQLPASSWORD}@${process.env.MYSQLHOST}:${process.env.MYSQLPORT}/${process.env.MYSQLDATABASE}`
export const db=mysql.createConnection(urlDb)
// 	{

// 	// host:process.env.DB_HOST,
// 	// user:process.env.DB_USER,
// 	// password:process.env.DB_PASSWORD,
// 	// database:process.env.DB_DATABASE,
// }
