import 'dotenv/config';
import { defineConfig } from 'drizzle-kit';
export default defineConfig({
  out: './drizzle',
  schema: './src/db/schema.ts',
  dialect: 'postgresql',
  dbCredentials: {
    url: "postgresql://neondb_owner:8YOnh9QiCsSL@ep-odd-wave-a2oe9way.eu-central-1.aws.neon.tech/neondb?sslmode=require",
  },
});