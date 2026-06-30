import { Router } from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { z } from "zod";
import { AppointmentSchema, CartItemSchema, SupportTicketSchema } from "@skyline/shared";
import { env } from "../config/env";
import { requireAuth } from "../middleware/auth";
import { validateBody } from "../middleware/validate";
import { products } from "./mockData";

export const apiRouter = Router();

apiRouter.get("/health", (_req, res) => {
  res.json({ status: "ok", service: "skyline-api" });
});

apiRouter.post(
  "/auth/register",
  validateBody(z.object({ name: z.string().min(2), email: z.string().email(), password: z.string().min(8) })),
  async (req, res) => {
    const passwordHash = await bcrypt.hash(req.body.password, 12);
    res.status(201).json({ id: "usr_demo", name: req.body.name, email: req.body.email, passwordHashCreated: Boolean(passwordHash) });
  }
);

apiRouter.post(
  "/auth/login",
  validateBody(z.object({ email: z.string().email(), password: z.string().min(8) })),
  (req, res) => {
    const token = jwt.sign({ sub: "usr_demo", role: "admin", email: req.body.email }, env.JWT_SECRET, { expiresIn: "1h" });
    res.json({ token, user: { id: "usr_demo", email: req.body.email, role: "admin" } });
  }
);

apiRouter.get("/products", (req, res) => {
  const query = String(req.query.q ?? "").toLowerCase();
  const results = query
    ? products.filter((product) => JSON.stringify(product).toLowerCase().includes(query))
    : products;
  res.json({ data: results, pagination: { page: 1, pageSize: 24, total: results.length } });
});

apiRouter.get("/products/:slug", (req, res) => {
  const product = products.find((item) => item.slug === req.params.slug);
  if (!product) {
    return res.status(404).json({ message: "Product not found" });
  }
  res.json(product);
});

apiRouter.get("/categories", (_req, res) => {
  res.json(["Laptops", "Gaming PCs", "Monitors", "Networking Equipment", "Servers", "Storage Devices"]);
});

apiRouter.post("/cart/items", validateBody(CartItemSchema), (req, res) => {
  res.status(201).json({ message: "Cart item accepted", item: req.body });
});

apiRouter.post("/orders", requireAuth(["customer", "admin"]), (req, res) => {
  res.status(201).json({ id: "ord_demo", status: "pending_payment", checkout: req.body });
});

apiRouter.post("/payments/intent", requireAuth(["customer", "admin"]), (req, res) => {
  res.status(201).json({ provider: "stripe", status: "requires_confirmation", amount: req.body.amount });
});

apiRouter.post("/appointments", validateBody(AppointmentSchema), (req, res) => {
  res.status(201).json({ id: "apt_demo", status: "requested", appointment: req.body });
});

apiRouter.post("/support/tickets", validateBody(SupportTicketSchema), (req, res) => {
  res.status(201).json({ id: "tic_demo", status: "open", ticket: req.body });
});

apiRouter.get("/analytics/overview", requireAuth(["admin"]), (_req, res) => {
  res.json({ revenue: 482000, orders: 1284, customers: 18600, inventoryAlerts: 27 });
});
