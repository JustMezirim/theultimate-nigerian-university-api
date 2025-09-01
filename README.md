# Nigerian Universities API

A comprehensive REST API providing detailed information about all 275 universities in Nigeria, including federal, state, and private institutions.

## Overview

This API serves as a complete database of Nigerian universities with detailed information including names, types, locations, establishment dates, official websites, and abbreviations. Perfect for educational platforms, research applications, and any system requiring Nigerian university data.

## Features

- **Complete Database**: All 275 approved Nigerian universities
- **Detailed Information**: Names, types, states, websites, abbreviations, and establishment dates
- **Multiple Endpoints**: Various ways to query and filter university data
- **Search Functionality**: Search universities by name, location, or type
- **Statistics**: Get comprehensive statistics about Nigerian higher education
- **RESTful Design**: Clean, predictable API structure
- **JSON Responses**: All responses in JSON format

## University Categories

- **Federal Universities**: 63 institutions
- **State Universities**: 63 institutions  
- **Private Universities**: 149 institutions

## API Endpoints

### Base URL
\`\`\`
https://theultimate-ng-university-api.vercel.app/api
\`\`\`

### Get All Universities
\`\`\`http
GET /universities
\`\`\`
Returns all 275 universities with complete information.

**Response Example:**
\`\`\`json
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
\`\`\`

### Get Universities by Type
\`\`\`http
GET /universities/federal
GET /universities/state  
GET /universities/private
\`\`\`

### Search Universities
\`\`\`http
GET /universities/search?q=university&type=federal&state=lagos
\`\`\`

**Query Parameters:**
- `q`: Search term (searches name and abbreviation)
- `type`: Filter by type (federal, state, private)
- `state`: Filter by state
- `limit`: Number of results (default: 50, max: 275)
- `offset`: Pagination offset (default: 0)

### Get Single University
\`\`\`http
GET /universities/{id}
\`\`\`

### Get Statistics
\`\`\`http
GET /universities/stats
\`\`\`

**Response Example:**
\`\`\`json
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
\`\`\`

## Integration Examples

### JavaScript/Node.js
\`\`\`javascript
// Get all universities
const response = await fetch('/api/universities');
const data = await response.json();
console.log(`Found ${data.total} universities`);

// Search for universities
const searchResponse = await fetch('/api/universities/search?q=Lagos&type=state');
const searchData = await searchResponse.json();
\`\`\`

### React/Next.js with React Query
\`\`\`jsx
import { useQuery } from '@tanstack/react-query';

function UniversityList() {
  const { data: universities, isLoading } = useQuery({
    queryKey: ['universities'],
    queryFn: async () => {
      const response = await fetch('/api/universities');
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
\`\`\`

### Python
\`\`\`python
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
\`\`\`

### PHP
\`\`\`php
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
\`\`\`

## Response Format

All API responses follow this structure:

\`\`\`json
{
  "success": true,
  "total": 275,
  "data": [...],
  "message": "Optional message"
}
\`\`\`

## Error Handling

Error responses include appropriate HTTP status codes and descriptive messages:

\`\`\`json
{
  "success": false,
  "error": "University not found",
  "code": 404
}
\`\`\`

**Common HTTP Status Codes:**
- `200`: Success
- `400`: Bad Request (invalid parameters)
- `404`: Not Found
- `500`: Internal Server Error

## Rate Limiting

- **Limit**: 100 requests per minute per IP
- **Headers**: Rate limit info included in response headers
- **Exceeded**: Returns 429 status code when limit exceeded

## Data Sources

University data is compiled from official sources including:
- National Universities Commission (NUC)
- Federal Ministry of Education
- Individual university websites
- State government education departments

## Contributing

contributions are welcomed to improve the API:

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Support

For support, questions, or feature requests:
- Create an issue on GitHub
- Email: support@nigerian-universities-api.com
- Documentation: Visit the API homepage for interactive examples

---
