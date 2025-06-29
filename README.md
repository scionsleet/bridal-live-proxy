# Bridal Live API Proxy (Vercel)

A simple proxy to fetch catalog items from Bridal Live and expose them for use in a frontend widget (e.g., Duda).

## 🔧 How It Works

This Vercel serverless function calls:

```
POST https://api.bridallive.com/bridallive/items/{location_id}
```

It returns simplified JSON to use in your site widget.

## 🚀 Deploy to Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/import/project?template=https://github.com/your-org-or-username/bridal-live-proxy)

## 🛠 Environment Variables

Set this in your Vercel project:

| Name | Value |
|------|-------|
| `BRIDAL_LIVE_API_KEY` | Your API token from Bridal Live |

## 📦 Usage

Once deployed, call:
```
GET https://your-vercel-app.vercel.app/api/items?locationId=YOUR_LOCATION_ID
```

## 🧱 Response

```json
[
  {
    "id": "123",
    "name": "Elegant Gown",
    "price": 1299.99,
    "image": "https://...",
    "description": "Beautiful satin..."
  },
  ...
]
```
