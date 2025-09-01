export default function ErrorHandling() {
  return (
    <section className="mb-24">
      <h2 className="text-4xl font-bold mb-10 text-gray-800">Error Handling</h2>
      <div className="bg-white border-l-4 border-l-red-500 border-t border-r border-b border-gray-200 rounded-xl p-10 shadow-lg">
        <p className="text-gray-700 mb-8 text-lg">
          The API uses standard HTTP status codes and returns consistent error responses:
        </p>

        <div className="space-y-8">
          <div>
            <h3 className="font-semibold mb-4 text-gray-800 text-lg">HTTP Status Codes</h3>
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 space-y-3">
              <div className="flex items-center gap-4">
                <code className="bg-gray-100 text-gray-700 px-3 py-2 rounded-md font-mono">200</code>
                <span className="text-gray-700">Success</span>
              </div>
              <div className="flex items-center gap-4">
                <code className="bg-gray-100 text-gray-700 px-3 py-2 rounded-md font-mono">400</code>
                <span className="text-gray-700">Bad Request (invalid parameters)</span>
              </div>
              <div className="flex items-center gap-4">
                <code className="bg-gray-100 text-gray-700 px-3 py-2 rounded-md font-mono">404</code>
                <span className="text-gray-700">Not Found</span>
              </div>
              <div className="flex items-center gap-4">
                <code className="bg-gray-100 text-gray-700 px-3 py-2 rounded-md font-mono">500</code>
                <span className="text-gray-700">Internal Server Error</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-gray-800 text-lg">Error Response Format</h3>
            <pre className="bg-gray-100 border border-gray-200 rounded-lg p-6 text-sm font-mono overflow-x-auto text-gray-600">
              {`{
  "success": false,
  "error": "Invalid search query",
  "message": "Search query must be at least 2 characters long"
}`}
            </pre>
          </div>
        </div>
      </div>
    </section>
  )
}