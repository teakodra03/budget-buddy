import { neon } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-http';
{ import("drizzle-kit").Config } 

import * as schema from './schema'
const sql = neon('postgresql://budget-buddy_owner:UPc4GBOsWn6E@ep-muddy-block-a29fzb78.eu-central-1.aws.neon.tech/budget-buddy?sslmode=require');
export const db = drizzle(sql,{schema});