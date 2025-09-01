# 🇳🇬 Nigerian Universities API


> A comprehensive REST API providing detailed information about all **275 universities** in Nigeria, including federal, state, and private institutions.

## 🌟 Overview

This API serves as a complete database of Nigerian universities with detailed information including names, types, locations, establishment dates, official websites, and abbreviations. Perfect for educational platforms, research applications, and any system requiring Nigerian university data.

**🔗 Live API:** [https://theultimate-ng-university-api.vercel.app](https://theultimate-ng-university-api.vercel.app)

## ✨ Features

- 🎓 **Complete Data**: All 275 approved Nigerian universities
- 📊 **Detailed Information**: Names, types, states, websites, abbreviations, and establishment dates
- 🔍 **Search Functionality**: Search universities by name, location, or type
- 📈 **Statistics**: Get comprehensive statistics about Nigerian higher education
- 🚀 **RESTful Design**: Clean, predictable API structure
- 📱 **JSON Responses**: All responses in JSON format
- 🆓 **Free to Use**: No authentication required
- ⚡ **Fast & Reliable**: Deployed on Vercel with global CDN

## 🏛️ University Categories

| Type | Count | Description |
|------|-------|-------------|
| 🏛️ **Federal** | 63 | Government-owned federal institutions |
| 🏢 **State** | 63 | State government-owned institutions |
| 🏫 **Private** | 149 | Privately-owned institutions |
| **Total** | **275** | All approved universities in Nigeria |

## 🚀 Quick Start

### Base URL
```bash
https://theultimate-ng-university-api.vercel.app/api
```

### Try it now!
```bash
curl https://theultimate-ng-university-api.vercel.app/api/universities
```

## 📚 API Endpoints

### 📋 Get All Universities
```http
GET /universities
```
**Description:** Returns all 275 universities with complete information.

**Query Parameters:**
- `limit` - Number of results (default: 50, max: 100)
- `offset` - Pagination offset (default: 0)
- `state` - Filter by state name

**Response Example:**
```json
{
  "success": true,
  "total": 275,
  "data": [
    {
      "id": 1,
      "name": "University of Ibadan",
      "abbreviation": "UI",
      "type": "Federal",
      "state": "Oyo",
      "established": 1948,
      "website": "http://www.ui.edu.ng"
    }
  ]
}
```

### 🏛️ Get Universities by Type
```http
GET /universities/federal   # 63 Federal universities
GET /universities/state     # 63 State universities  
GET /universities/private   # 149 Private universities
```

### 🔍 Search Universities
```http
GET /universities/search?q=lagos&type=federal
```

**Query Parameters:**
| Parameter | Type | Description | Example |
|-----------|------|-------------|----------|
| `q` | string | Search term (name/abbreviation) | `q=lagos` |
| `type` | string | Filter by type | `type=federal` |
| `state` | string | Filter by state | `state=Lagos` |
| `limit` | number | Results limit (max: 275) | `limit=10` |
| `offset` | number | Pagination offset | `offset=20` |

### 🎓 Get Single University
```http
GET /universities/{id}
```
**Example:** `GET /universities/1`

### 📊 Get Statistics
```http
GET /universities/stats
```
**Description:** Get summary statistics about Nigerian universities.

**Response Example:**
```json
{
  "success": true,
  "data": {
    "total": 275,
    "federal": 63,
    "state": 63,
    "private": 149,
    "by_state": {
      "Lagos": 15,
      "Ogun": 12,
      "Kano": 8
    }
  }
}
```

## 💻 Integration Examples

### 🟨 JavaScript/Node.js
```javascript
// Get all universities
const response = await fetch('https://theultimate-ng-university-api.vercel.app/api/universities');
const data = await response.json();
console.log(`Found ${data.total} universities`);

// Search for universities
const searchResponse = await fetch('https://theultimate-ng-university-api.vercel.app/api/universities/search?q=Lagos&type=state');
const searchData = await searchResponse.json();
```

### ⚛️ React/Next.js
```jsx
import { useQuery } from '@tanstack/react-query';

function UniversityList() {
  const { data: universities, isLoading } = useQuery({
    queryKey: ['universities'],
    queryFn: async () => {
      const response = await fetch('https://theultimate-ng-university-api.vercel.app/api/universities');
      const data = await response.json();
      return data.data;
    }
  });

  if (isLoading) return <div>Loading universities...</div>;

  return (
    <div>
      {universities?.map(uni => (
        <div key={uni.id}>
          <h3>{uni.name} ({uni.abbreviation})</h3>
          <p>{uni.type} University in {uni.state} State</p>
        </div>
      ))}
    </div>
  );
}
```

### 🐍 Python
```python
import requests

# Get all universities
response = requests.get('https://theultimate-ng-university-api.vercel.app/api/universities')
data = response.json()

print(f"Found {data['total']} universities")

# Search for federal universities
search_response = requests.get(
    'https://theultimate-ng-university-api.vercel.app/api/universities/search',
    params={'type': 'federal', 'state': 'Lagos'}
)
search_data = search_response.json()
```

### 🐘 PHP
```php
<?php
// Get all universities
$response = file_get_contents('https://theultimate-ng-university-api.vercel.app/api/universities');
$data = json_decode($response, true);

echo "Found " . $data['total'] . " universities\n";

// Search universities
$search_url = 'https://theultimate-ng-university-api.vercel.app/api/universities/search?type=private&state=Ogun';
$search_response = file_get_contents($search_url);
$search_data = json_decode($search_response, true);
?>
```

## 📄 Response Format

All API responses follow this structure:

```json
{
  "success": true,
  "total": 275,
  "data": [...],
  "message": "Optional message"
}
```

## ⚠️ Error Handling

Error responses include appropriate HTTP status codes and descriptive messages:

```json
{
  "success": false,
  "error": "University not found",
  "code": 404
}
```

**Common HTTP Status Codes:**
- `200`: Success
- `400`: Bad Request (invalid parameters)
- `404`: Not Found
- `500`: Internal Server Error

## 🚦 Rate Limiting

| Limit | Per | Status Code |
|-------|-----|-------------|
| 100 requests | minute/IP | 429 when exceeded |

**Headers included:**
- `X-RateLimit-Limit`
- `X-RateLimit-Remaining`
- `X-RateLimit-Reset`

## 🤝 Contributing

Contributions are welcome! Here's how you can help:

1. 🍴 Fork the repository
2. 🌿 Create a feature branch (`git checkout -b feature/amazing-feature`)
3. 💾 Commit your changes (`git commit -m 'Add amazing feature'`)
4. 📤 Push to the branch (`git push origin feature/amazing-feature`)
5. 🔄 Open a Pull Request


## 📞 Support

Need help? We're here for you!

- 🐛 **Bug Reports:** [Create an issue](https://github.com/JustMezirim/ng-university-api/issues)
- 💡 **Feature Requests:** [Open a discussion](https://github.com/JustMezirim/ng-university-api/discussions)
- 📖 **Documentation:** [Visit website](https://theultimate-ng-university-api.vercel.app)
- 📧 **Email:** coiregbu@gmail.com

## 🌟 Show Your Support

If this project helped you, please consider giving it a ⭐ on GitHub!

---