import axios from 'axios';

export default async function handler(req, res) {
  const { locationId } = req.query;

  if (!locationId) {
    return res.status(400).json({ error: "Missing locationId" });
  }

  try {
    const response = await axios.post(
      `https://api.bridallive.com/bridallive/items/${locationId}`,
      {},
      {
        headers: {
          Authorization: `Bearer ${process.env.BRIDAL_LIVE_API_KEY}`,
          'Content-Type': 'application/json'
        }
      }
    );

    const items = response.data.items.map(item => ({
      id: item.id,
      name: item.name,
      price: item.price,
      image: item.defaultImageUrl,
      description: item.description
    }));

    res.status(200).json(items);
  } catch (error) {
    console.error("Bridal Live API error:", error?.response?.data || error.message);
    res.status(500).json({ error: "Failed to fetch catalog" });
  }
}
