import { createRouter } from "next-connect";
import { fetchCryptoData } from "@/services/coinGeckoService";
import { corsMiddleware } from "@/middleware/cors";
const router = createRouter();
router.use(corsMiddleware);
router.get(async (req, res) => {
  try {
    fetchCryptoData(req.query.per_page, req.query.page).then((data) =>
      res.json(data)
    );
  } catch (error) {
    console.error("Error fetching data from CoinGecko API:", error.message);
    res.status(500).json({ error: "Failed to fetch data from CoinGecko API" });
  }
});

export default router.handler({
  onError: (err, req, res) => {
    console.error(err.stack);
    res.status(err.statusCode || 500).end(err.message);
  },
});
