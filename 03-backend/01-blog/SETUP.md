# SETUP

## Initial Setup

1. `npm init --y`: Init file `package.json`
2. Buat folder `src`
3. Di dalam folder `src` buat file `app.ts` | `index.ts` | `server.ts`
4. `npm install express`
5. `npm install -D typescript @types/node @types/express`
6. `npx tsc --init`: Init file `tsconfig.json`
7. Enable `rootDir`, `outDir`, `lib`, dan `types` di file `tsconfig.json`

## Additional Package

1. `npm i pg` & `npm i -D @types/pg`: Untuk menghubungkan server express dengan database

## Prisma Setup

1. `npx prisma init`
   - `/prisma/schema.prisma`
   - `/.env`
   - `/prisma.config.ts`
2. `npm i dotenv`
3. `npm install @prisma/client @prisma/adapter-pg`
4. `npm i -D prisma`
5. Selesaikan error di file `prisma.config.ts` dan `tsconfig.ts`
6. Ubah `DATABASE_URL` ke `DIRECT_URL` di `prisma.config.ts`
7. Sesuaikan environment variable di file `.env` agar sama dengan `.env` Supabase project
8. `npx prisma db pull`
9. `npx prisma db push`
10. `npx prisma generate`
