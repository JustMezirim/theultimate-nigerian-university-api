export default function ResponseFormat() {
  return (
    <section className="mb-24">
      <h2 className="text-4xl font-bold mb-10 text-gray-800">Response Format</h2>
      <div className="bg-white border-l-4 border-l-purple-500 border-t border-r border-b border-gray-200 rounded-xl p-10 shadow-lg">
        <p className="text-gray-700 mb-8 text-lg">All API responses follow a consistent JSON format:</p>
        <pre className="bg-gray-100 border border-gray-200 rounded-lg p-8 text-sm font-mono overflow-x-auto text-gray-600">
          {`{
  "success": true,
  "total": 275,
  "count": 10,
  "data": [
    {
      "id": 1,
      "name": "University of Ibadan",
      "abbreviation": "UI",
      "type": "federal",
      "state": "Oyo",
      "established": 1948,
      "website": "https://ui.edu.ng"
    },
    {
      "id": 2,
      "name": "University of Lagos",
      "abbreviation": "UNILAG",
      "type": "federal",
      "state": "Lagos",
      "established": 1962,
      "website": "https://unilag.edu.ng"
    }
  ]
}`}
        </pre>
      </div>
    </section>
  )
}