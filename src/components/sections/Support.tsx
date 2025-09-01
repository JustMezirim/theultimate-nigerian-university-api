export default function Support() {
  return (
    <section>
      <h2 className="text-4xl font-bold mb-10 text-gray-800">Support & Contact</h2>
      <div className="bg-white border-l-4 border-l-green-500 border-t border-r border-b border-gray-200 rounded-xl p-10 shadow-lg text-center">
        <p className="text-gray-700 mb-10 text-lg">
          Need help integrating the API or have questions about the data? Feel free to reach out!
        </p>
        <div className="grid gap-8 md:grid-cols-3">
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 hover:border-blue-500 hover:shadow-md transition-all duration-300">
            <h3 className="font-semibold mb-3 text-blue-600">Documentation Issues</h3>
            <p className="text-sm text-gray-600">
              Found something unclear in our docs? Reach out to improve them.
            </p>
          </div>
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 hover:border-green-500 hover:shadow-md transition-all duration-300">
            <h3 className="font-semibold mb-3 text-green-600">Data Corrections</h3>
            <p className="text-sm text-gray-600">
              Help to maintain accurate data by reporting any errors you find.
            </p>
          </div>
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 hover:border-purple-500 hover:shadow-md transition-all duration-300">
            <h3 className="font-semibold mb-3 text-purple-600">Feature Requests</h3>
            <p className="text-sm text-gray-600">
              Have ideas for new endpoints or features? Love to hear them.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}