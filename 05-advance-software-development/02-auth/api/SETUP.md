# SETUP

## GENERAL SETUP (Express, package.json, dan tsconfig.json)

1. npm init --y
2. npm i express @prisma/client @prisma/adapter-pg
3. npm i -D typescript tsx prisma @types/express @types/node
4. npx tsc --init
5. mkdir src
6. touch src/app.ts
7. Edit package.json:

   ```json
   {
     "scripts": {
       "build": "tsc",
       "dev": "tsx --watch src/app.ts",
       "start": "npm run build && node dist/app.js"
     },
     "type": "commonjs",
     "dependencies": {
       "@prisma/adapter-pg": "^7.6.0",
       "@prisma/client": "^7.6.0",
       "express": "^5.2.1"
     },
     "devDependencies": {
       "@types/express": "^5.0.6",
       "@types/node": "^25.5.2",
       "prisma": "^7.6.0",
       "tsx": "^4.21.0",
       "typescript": "^6.0.2"
     }
   }
   ```

8. Edit tsconfig.json:

   ```json
   {
     // Visit https://aka.ms/tsconfig to read more about this file
     "compilerOptions": {
       // File Layout
       "rootDir": "./src",
       "outDir": "./dist",

       // Environment Settings
       "module": "nodenext",
       "target": "esnext",
       "lib": ["esnext"],
       "types": ["node"],

       // Stricter Typechecking Options
       "noUncheckedIndexedAccess": true,
       "exactOptionalPropertyTypes": true,

       // Recommended Options
       "strict": true,
       "skipLibCheck": true
     }
   }
   ```

## PRISMA SETUP

1. `npm i @prisma/client @prisma/adapter-pg dotenv`
2. `npm i -D prisma`
3. `npx prisma init`
4. Edit `tsconfig.json`:
   ```diff
   {
   -  "rootDir": "./src"
   +  "rootDir": "."
   }
   ```
5. Edit `.env` (for Supabase):

   ```.env
   # Connect to Supabase via connection pooling
   DATABASE_URL="postgresql://postgres.fwyapiziuevubcwxvbta:[YOUR-PASSWORD]@aws-1-ap-northeast-2.pooler.supabase.com:6543/postgres?pgbouncer=true"

   # Direct connection to the database. Used for migrations
   DIRECT_URL="postgresql://postgres.fwyapiziuevubcwxvbta:[YOUR-PASSWORD]@aws-1-ap-northeast-2.pooler.supabase.com:5432/postgres"
   ```

6. Edit `prisma.config.ts`:

   ```diff
     export default defineConfig({
     schema: "prisma/schema.prisma",
     migrations: {
       path: "prisma/migrations",
     },
     datasource: {
   -    url: process.env["DATABASE_URL"],
   +    url: process.env["DIRECT_URL"]!,
     },
   });

   ```

7. `npx prisma db push`
