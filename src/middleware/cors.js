import cors from "cors";
const URL = process.env.NEXT_PUBLIC_NEXT_PUBLIC_FRONT_URL;
export const corsMiddleware = cors({
  origin: { URL }, // Change '*' to the specific origin you want to allow
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"], // Add any other methods you need
  allowedHeaders: ["Content-Type", "Authorization"], // Add any other headers you want to allow
});
