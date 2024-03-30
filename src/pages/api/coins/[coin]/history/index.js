// src/pages/api/coins.js

import { fetchHistoricalData } from "@/services/coinGeckoService";
import axios from "axios";
import { createRouter } from "next-connect";

const router = createRouter();

router.get(async (req, res) => {
  try {
    const { coin } = req.query;
    fetchHistoricalData(coin, req.query.days).then((data) => res.json(data));
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
