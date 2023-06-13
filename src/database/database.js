import pg from "pg"
import dotenv from "dotenv"

dotenv.config()

const { Pool } = pg

const configDatabase = {
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false
  }
}

if (process.env.MODE === "prod") {
  configDatabase.ssl = {
    rejectUnauthorized: true // Certificado SSL deve ser válido em produção
  }
}

export const db = new Pool(configDatabase);
