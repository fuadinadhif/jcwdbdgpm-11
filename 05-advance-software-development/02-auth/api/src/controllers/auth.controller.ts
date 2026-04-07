import { type Request, type Response } from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

import { prisma } from "../lib/prisma";

export async function register(req: Request, res: Response) {
  try {
    const { email, name, password } = req.body;

    // 1. Check data email, name, dan password itu tidak kosong dari user
    if (!email || !name || !password)
      return res.status(404).json({ message: "Required fields missing" });

    // 2. Check di database apakah ada user dengan email sama
    const existingUser = await prisma.user.findUnique({ where: { email } });

    if (existingUser)
      return res.status(400).json({ message: "User already exist" });

    // 3. Hash password sebelum password disimpan ke dalam database
    const hashedPassword = await bcrypt.hash(password, 10);

    // 4. Simpan data user ke dalam database
    const newUser = await prisma.user.create({
      data: { email, name, password: hashedPassword },
      omit: { password: true },
    });

    res.status(201).json({ message: "User created", data: newUser });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "General error. Good luck!" });
  }
}

export async function login(req: Request, res: Response) {
  try {
    const { email, password } = req.body;

    // 1. Apakah user ini ada? Kalau ada - lanjut. Kalau tidak, stop
    const existingUser = await prisma.user.findUnique({ where: { email } });

    if (!existingUser)
      return res.status(404).json({ message: "Wrong credentials" });

    // 2. Check apakah password sama atau tidak
    const isValidPassword = await bcrypt.compare(
      password,
      existingUser.password,
    );

    if (!isValidPassword)
      return res.status(400).json({ message: "Wrong credentials" });

    // 3. Membuat bukti login -> Token. JWT (JSON Web Token)
    const payload = { id: existingUser.id, email: existingUser.email };
    const accessToken = jwt.sign(
      payload,
      process.env.JWT_SECRET_KEY as string,
      {
        expiresIn: "5s",
      },
    );

    res.status(200).json({ message: "Login success", accessToken });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "General error. Good luck!" });
  }
}
