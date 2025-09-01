import { Badge } from "@/components/ui/badge"

export default function ApiEndpoints() {
  return (
    <section className="mb-24">
      <h2 className="text-4xl font-bold mb-10 text-gray-800">API Endpoints</h2>

      <div className="space-y-8">
        <div className="bg-white border-l-4 border-l-blue-500 border-t border-r border-b border-gray-200 rounded-xl p-10 shadow-lg hover:shadow-xl hover:border-l-blue-400 transition-all duration-300">
          <div className="flex items-center gap-4 mb-6">
            <Badge className="bg-green-500 text-white hover:bg-green-600 text-sm px-3 py-1">
              GET
            </Badge>
            <code className="text-xl font-mono text-gray-800">/api/universities</code>
          </div>
          <h3 className="text-2xl font-semibold mb-4 text-gray-800">Get All Universities</h3>
          <p className="text-gray-700 mb-8 text-lg">
            Retrieve all universities with optional filtering and pagination.
          </p>

          <div className="space-y-6">
            <div>
              <h4 className="font-semibold mb-4 text-gray-800 text-lg">Query Parameters</h4>
              <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 space-y-4">
                <div className="flex gap-6 items-start">
                  <code className="text-sm bg-gray-100 text-gray-700 px-3 py-2 rounded-md font-mono">
                    limit
                  </code>
                  <span className="text-sm text-gray-700">
                    Number of results to return (default: 50, max: 100)
                  </span>
                </div>
                <div className="flex gap-6 items-start">
                  <code className="text-sm bg-gray-100 text-gray-700 px-3 py-2 rounded-md font-mono">
                    offset
                  </code>
                  <span className="text-sm text-gray-700">Number of results to skip for pagination</span>
                </div>
                <div className="flex gap-6 items-start">
                  <code className="text-sm bg-gray-100 text-gray-700 px-3 py-2 rounded-md font-mono">
                    state
                  </code>
                  <span className="text-sm text-gray-700">Filter by state (e.g., &quot;Lagos&quot;, &quot;Oyo&quot;)</span>
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-gray-800 text-lg">Example Request</h4>
              <pre className="bg-gray-100 border border-gray-200 rounded-lg p-6 text-sm font-mono overflow-x-auto text-gray-600">
                {`GET /api/universities?limit=10&state=Lagos`}
              </pre>
            </div>
          </div>
        </div>

        <div className="bg-white border-l-4 border-l-purple-500 border-t border-r border-b border-gray-200 rounded-xl p-10 shadow-lg hover:shadow-xl hover:border-l-purple-400 transition-all duration-300">
          <div className="flex items-center gap-4 mb-6">
            <Badge className="bg-green-500 text-white hover:bg-green-600 text-sm px-3 py-1">
              GET
            </Badge>
            <code className="text-xl font-mono text-gray-800">/api/universities/search</code>
          </div>
          <h3 className="text-2xl font-semibold mb-4 text-gray-800">Search Universities</h3>
          <p className="text-gray-700 mb-8 text-lg">
            Search universities by name, abbreviation, or location.
          </p>

          <div className="space-y-6">
            <div>
              <h4 className="font-semibold mb-4 text-gray-800 text-lg">Query Parameters</h4>
              <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                <div className="flex gap-6 items-start">
                  <code className="text-sm bg-gray-100 text-gray-700 px-3 py-2 rounded-md font-mono">q</code>
                  <span className="text-sm text-gray-700">
                    Search query (required) - searches name, abbreviation, and state
                  </span>
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-gray-800 text-lg">Example Requests</h4>
              <pre className="bg-gray-100 border border-gray-200 rounded-lg p-6 text-sm font-mono overflow-x-auto text-gray-600">
                {`GET /api/universities/search?q=University of Lagos
GET /api/universities/search?q=UNILAG
GET /api/universities/search?q=Ibadan`}
              </pre>
            </div>
          </div>
        </div>

        <div className="bg-white border-l-4 border-l-green-500 border-t border-r border-b border-gray-200 rounded-xl p-10 shadow-lg hover:shadow-xl hover:border-l-green-400 transition-all duration-300">
          <div className="flex items-center gap-4 mb-6">
            <Badge className="bg-orange-500 text-white hover:bg-orange-600 text-sm px-3 py-1">GET</Badge>
            <code className="text-xl font-mono text-gray-800">/api/universities/{"{type}"}</code>
          </div>
          <h3 className="text-2xl font-semibold mb-4 text-gray-800">Get Universities by Type</h3>
          <p className="text-gray-700 mb-8 text-lg">Filter universities by ownership type.</p>

          <div className="space-y-6">
            <div>
              <h4 className="font-semibold mb-4 text-gray-800 text-lg">Available Types</h4>
              <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 space-y-3">
                <div className="flex items-center gap-4">
                  <code className="text-sm bg-gray-100 text-gray-700 px-3 py-2 rounded-md font-mono">
                    federal
                  </code>
                  <span className="text-gray-700">63 Federal Universities</span>
                </div>
                <div className="flex items-center gap-4">
                  <code className="text-sm bg-gray-100 text-gray-700 px-3 py-2 rounded-md font-mono">
                    state
                  </code>
                  <span className="text-gray-700">63 State Universities</span>
                </div>
                <div className="flex items-center gap-4">
                  <code className="text-sm bg-gray-100 text-gray-700 px-3 py-2 rounded-md font-mono">
                    private
                  </code>
                  <span className="text-gray-700">149 Private Universities</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white border-l-4 border-l-blue-500 border-t border-r border-b border-gray-200 rounded-xl p-10 shadow-lg hover:shadow-xl hover:border-l-blue-400 transition-all duration-300">
          <div className="flex items-center gap-4 mb-6">
            <Badge className="bg-green-500 text-white hover:bg-green-600 text-sm px-3 py-1">
              GET
            </Badge>
            <code className="text-xl font-mono text-gray-800">/api/universities/stats</code>
          </div>
          <h3 className="text-2xl font-semibold mb-4 text-gray-800">Get Statistics</h3>
          <p className="text-gray-700 text-lg">Get summary statistics about Nigerian universities.</p>
        </div>

        <div className="bg-white border-l-4 border-l-purple-500 border-t border-r border-b border-gray-200 rounded-xl p-10 shadow-lg hover:shadow-xl hover:border-l-purple-400 transition-all duration-300">
          <div className="flex items-center gap-4 mb-6">
            <Badge className="bg-green-500 text-white hover:bg-green-600 text-sm px-3 py-1">
              GET
            </Badge>
            <code className="text-xl font-mono text-gray-800">/api/universities/{"{id}"}</code>
          </div>
          <h3 className="text-2xl font-semibold mb-4 text-gray-800">Get University by ID</h3>
          <p className="text-gray-700 text-lg">Get detailed information about a specific university.</p>
        </div>
      </div>
    </section>
  )
}