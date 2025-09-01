export default function IntegrationExamples() {
  return (
    <section className="mb-24">
      <h2 className="text-4xl font-bold mb-10 text-gray-800">Integration Examples</h2>

      <div className="space-y-8">
        <div className="bg-white border-l-4 border-l-blue-500 border-t border-r border-b border-gray-200 rounded-xl p-10 shadow-lg">
          <h3 className="text-2xl font-semibold mb-6 text-blue-600">JavaScript / Fetch API</h3>
          <pre className="bg-gray-100 border border-gray-200 rounded-lg p-8 text-sm font-mono overflow-x-auto text-gray-600">
            {`// Get all universities
const response = await fetch('/api/universities');
const data = await response.json();

if (data.success) {
  console.log(\`Found \${data.total} universities\`);
  data.data.forEach(university => {
    console.log(\`\${university.name} (\${university.abbreviation})\`);
  });
}

// Search for universities
const searchResponse = await fetch('/api/universities/search?q=Lagos');
const searchData = await searchResponse.json();

// Get federal universities only
const federalResponse = await fetch('/api/universities/federal');
const federalData = await federalResponse.json();`}
          </pre>
        </div>

        <div className="bg-white border-l-4 border-l-green-500 border-t border-r border-b border-gray-200 rounded-xl p-10 shadow-lg">
          <h3 className="text-2xl font-semibold mb-6 text-green-600">React / Next.js</h3>
          <pre className="bg-gray-100 border border-gray-200 rounded-lg p-8 text-sm font-mono overflow-x-auto text-gray-600">
            {`import { useQuery } from '@tanstack/react-query';

function UniversityList() {
  const { data: universities, isLoading, error } = useQuery({
    queryKey: ['universities'],
    queryFn: async () => {
      const response = await fetch('/api/universities?limit=20');
      const data = await response.json();
      
      if (!data.success) {
        throw new Error('Failed to fetch universities');
      }
      
      return data.data;
    }
  });

  if (isLoading) return <div>Loading universities...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      <h2>Nigerian Universities ({universities?.length || 0})</h2>
      <ul>
        {universities?.map(uni => (
          <li key={uni.id}>
            <strong>{uni.name}</strong> ({uni.abbreviation})
            <br />
            <small>{uni.type} • {uni.state} • Est. {uni.established}</small>
            {uni.website && (
              <a href={uni.website} target="_blank" rel="noopener noreferrer">
                Visit Website
              </a>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}`}
          </pre>
        </div>

        <div className="bg-white border-l-4 border-l-purple-500 border-t border-r border-b border-gray-200 rounded-xl p-10 shadow-lg">
          <h3 className="text-2xl font-semibold mb-6 text-purple-600">Python</h3>
          <pre className="bg-gray-100 border border-gray-200 rounded-lg p-8 text-sm font-mono overflow-x-auto text-gray-600">
            {`import requests
import json

# Get all universities
response = requests.get('https://theultimate-ng-university-api.vercel.app/api/universities')
data = response.json()

if data['success']:
    print(f"Found {data['total']} universities")
    
    for university in data['data']:
        print(f"{university['name']} ({university['abbreviation']})")
        print(f"Type: {university['type']}, State: {university['state']}")
        if university['website']:
            print(f"Website: {university['website']}")
        print("-" * 50)

# Search for specific universities
search_response = requests.get(
    'https://theultimate-ng-university-api.vercel.app/api/universities/search',
    params={'q': 'Technology'}
)
search_data = search_response.json()

print(f"Found {len(search_data['data'])} universities with 'Technology' in name")

# Get only federal universities
federal_response = requests.get('https://theultimate-ng-university-api.vercel.app/api/universities/federal')
federal_data = federal_response.json()

print(f"Federal universities: {len(federal_data['data'])}")`}
          </pre>
        </div>

        <div className="bg-white border-l-4 border-l-orange-500 border-t border-r border-b border-gray-200 rounded-xl p-10 shadow-lg">
          <h3 className="text-2xl font-semibold mb-6 text-orange-600">PHP</h3>
          <pre className="bg-gray-100 border border-gray-200 rounded-lg p-8 text-sm font-mono overflow-x-auto text-gray-600">
            {`<?php
// Get all universities
$response = file_get_contents('https://theultimate-ng-university-api.vercel.app/api/universities');
$data = json_decode($response, true);

if ($data['success']) {
    echo "Found " . $data['total'] . " universities\\n";
    
    foreach ($data['data'] as $university) {
        echo $university['name'] . " (" . $university['abbreviation'] . ")\\n";
        echo "Type: " . $university['type'] . ", State: " . $university['state'] . "\\n";
        
        if (!empty($university['website'])) {
            echo "Website: " . $university['website'] . "\\n";
        }
        echo str_repeat("-", 50) . "\\n";
    }
}

// Search with cURL for more control
$ch = curl_init();
curl_setopt($ch, CURLOPT_URL, 'https://theultimate-ng-university-api.vercel.app/api/universities/search?q=Lagos');
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
$searchResponse = curl_exec($ch);
curl_close($ch);

$searchData = json_decode($searchResponse, true);
echo "Found " . count($searchData['data']) . " universities in Lagos\\n";
?>`}
          </pre>
        </div>
      </div>
    </section>
  )
}