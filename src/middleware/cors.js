import cors from "cors";

export const corsMiddleware = cors({
  origin: "http://localhost:5174", // Change '*' to the specific origin you want to allow
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"], // Add any other methods you need
  allowedHeaders: ["Content-Type", "Authorization"], // Add any other headers you want to allow
});
