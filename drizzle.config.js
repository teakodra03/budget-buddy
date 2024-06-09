{ import("drizzle-kit").Config } 
export default {
    schema: "./utils/schema.jsx",
    dialect: 'postgresql',
    out: "./drizzle",
    dbCredentials: {
      url: 'postgresql://budget-buddy_owner:UPc4GBOsWn6E@ep-muddy-block-a29fzb78.eu-central-1.aws.neon.tech/budget-buddy?sslmode=require',
    }
  }