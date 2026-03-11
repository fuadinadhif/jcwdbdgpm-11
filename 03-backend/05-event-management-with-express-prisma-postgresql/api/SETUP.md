# SETUP

## Initial Setup

1.  `npm init --y`: Membuat file `package.json`
2.  `npm i express @prisma/client @prisma/adapter-pg dotenv cors`: Install reguler dependencies
3.  `npm i -D typescript tsx prisma @types/node @types/express @types/cors`: Install development dependencies
4.  `npx tsc --init`: Membuat file `tsconfig.json`
5.  Edit file `package.json`:
    ```json
    {
      "scripts": {
        "build": "tsc",
        "dev": "tsx --watch src/app.ts",
        "start": "npm run build && node dist/app.js"
      },
      "type": "module",
      "dependencies": {
        "@prisma/adapter-pg": "^7.4.2",
        "@prisma/client": "^7.4.2",
        "express": "^5.2.1"
      },
      "devDependencies": {
        "@types/express": "^5.0.6",
        "@types/node": "^25.4.0",
        "prisma": "^7.4.2",
        "tsx": "^4.21.0",
        "typescript": "^5.9.3"
      }
    }
    ```
6.  Edit file `tsconfig.json`:

    ```json
    {
      "compilerOptions": {
        // File Layout
        "rootDir": "./src",
        "outDir": "./dist",

        // Environment Settings
        "module": "nodenext",
        "target": "esnext",

        // For nodejs:
        "lib": ["esnext"],
        "types": ["node"],

        // Recommended Options
        "strict": true,
        "skipLibCheck": true
      }
    }
    ```

7.  Buat folder `src`
8.  Buat file `app.ts` di dalam folder `src`
9.  `npx prisma init`: Menginisiasi file dan folder yang dibutuhkan oleh Prisma. Di versi 7, Prisma akan membuat folder/file berikut:
    - prisma/schema.prisma
    - prisma.config.ts
    - .env
10. Start coding!

## Detailed Prisma Setup

1. Adjust `schema.prisma` sesuai kebutuhan kita

   ```prisma
      generator client {
      provider = "prisma-client"
      output = "../src/generated/prisma"
      }

    datasource db {
    provider = "postgresql"
    }

    model Event {
    objectId String @id @default(uuid())
    title String @unique @db.VarChar(250)
    description String @db.Text
    price Decimal @db.Decimal(10, 2)

    createdAt DateTime @default(now())
    updatedAt DateTime @updatedAt

    @@map("events")
    }
   ```

2. Hubungkan project dengan database (Via Supabase connection string)
   - Ambil connection string di Supabase (ORMs)
   - Copy/paste connetion string tersebut ke file `.env`
   - Ubah "[YOUR_PASSWORD]" value di `.env` sesuai dengan password project
   - Ubah property `datasource.url` di file `prisma.config.ts` dari yang awalnya "DATABASE_URL" menjadi "DIRECT_URL"
3. `npx prisma migrate dev`: Migrasi perubahan schema di `schema.prisma` ke database
4. `npx prisma generate`: Generate Prisma Client
5. Buat prisma client agar bisa melakukan query data: - Buat folder `src/lib` - Buat file `prisma.ts` - Isi file `prisma.ts` dengan kode berikut:

   ```typescript
   import { PrismaPg } from "@prisma/adapter-pg";
   import { PrismaClient } from "../generated/prisma/client.js";

   const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL });
   export const prisma = new PrismaClient({ adapter });
   ```

6. Start coding!

## Notes

1.  `npx prisma db pull`: Membuat schema prisma berdasarkan database yang sudah ada
2.  `npx prisma db push`: Menyesuaikan struktur database sesuai dengan struktur schema prisma
3.  `npx prisma migrate dev`: Sama dengan `db push` tetapi ada history migrasinya
4.  `npx prisma studio`: Membuka studio prisma
