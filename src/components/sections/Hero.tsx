export default function Hero() {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 text-white">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-16">
          <h1 className="text-6xl font-bold mb-8 tracking-tight text-white">Nigerian Universities API</h1>
          <p className="text-xl text-blue-100 mb-10 max-w-4xl mx-auto leading-relaxed">
            Complete REST API providing access to all 275 universities in Nigeria. Get detailed information about
            Federal, State, and Private institutions with comprehensive data including websites, abbreviations, and
            establishment dates.
          </p>
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-8 max-w-2xl mx-auto">
            <div className="text-sm text-blue-200 mb-3">Base URL</div>
            <code className="text-xl font-mono text-white font-semibold">
              https://theultimate-ng-university-api.vercel.app/api
            </code>
          </div>
        </div>

        <div className="grid gap-8 md:grid-cols-3 text-center">
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-8 hover:bg-purple-500/20 hover:border-purple-400/30 transition-all duration-300">
            <div className="text-5xl font-bold text-white mb-3">63</div>
            <div className="text-blue-100 text-lg">Federal Universities</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-8 hover:bg-indigo-500/20 hover:border-indigo-400/30 transition-all duration-300">
            <div className="text-5xl font-bold text-white mb-3">63</div>
            <div className="text-blue-100 text-lg">State Universities</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-8 hover:bg-blue-500/20 hover:border-blue-400/30 transition-all duration-300">
            <div className="text-5xl font-bold text-white mb-3">149</div>
            <div className="text-blue-100 text-lg">Private Universities</div>
          </div>
        </div>
      </div>
    </section>
  )
}