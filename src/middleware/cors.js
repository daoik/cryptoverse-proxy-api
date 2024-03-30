import cors from "cors";
const URL = process.env.NEXT_PUBLIC_FRONT_URL;
export const corsMiddleware = cors({
  origin: URL,
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],
});
