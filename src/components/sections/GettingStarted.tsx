export default function GettingStarted() {
  return (
    <section className="mb-24">
      <h2 className="text-4xl font-bold mb-10 text-gray-800">Getting Started</h2>
      <div className="bg-white border-l-4 border-l-blue-500 border-t border-r border-b border-gray-200 rounded-xl p-10 shadow-lg hover:shadow-xl transition-shadow">
        <p className="text-gray-700 mb-8 text-lg leading-relaxed">
          The Nigerian Universities API is completely free and requires no authentication. Simply make HTTP GET
          requests to our endpoints to access comprehensive university data.
        </p>
        <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
          <h3 className="font-semibold mb-4 text-blue-600 text-lg">Quick Example</h3>
          <pre className="text-sm font-mono text-gray-600 overflow-x-auto bg-gray-100 p-4 rounded-lg">
            {`curl https://theultimate-ng-university-api.vercel.app/api/universities
              # Returns all 275 universities

              curl "https://theultimate-ng-university-api.vercel.app/api/universities/search?q=Lagos"
              # Search for universities in Lagos`
            }
          </pre>
        </div>
      </div>
    </section>
  )
}