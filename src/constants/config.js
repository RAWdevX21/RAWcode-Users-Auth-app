   import { config } from "dotenv";

   config();
   
   //export constant 1-by-1 from .env
   //gives access to the variables inside of process object
   export const DB = process.env.APP_DB;
   export const SECRET = process.env.APP_SECRET;
   export const DOMAIN = process.env.APP_DOMAIN;
   export const SENDGRID_API = process.env.APP_SENDGRID_API;
   export const PORT = process.env.PORT || process.env.APP_PORT;