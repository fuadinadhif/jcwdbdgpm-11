# PRISMA COMMANDS

1. `npx prisma init`: Inisiasi prisma setup
2. `npx prisma db pull`: Menerapkan schema database ke dalam schema prisma local
3. `npx prisma db push`: Menerapkan schema prisma local ke dalam schema database. TIDAK ADA history
4. `npx prisma migrate dev --name [MIGRATION_NAME]`: Menerapkan schema prisma local ke dalam schema database. ADA history
5. `npx prisma generate`: Generate prisma client
