export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-900 text-white">
      
      {/* Navbar */}
      <header className="flex justify-between items-center px-8 py-5 border-b border-gray-800">
        <h1 className="text-xl font-bold text-blue-400">Skyline</h1>

        <nav className="space-x-6 text-gray-300">
          <a href="#" className="hover:text-white">Home</a>
          <a href="#" className="hover:text-white">About</a>
          <a href="#" className="hover:text-white">Services</a>
          <a href="#" className="hover:text-white">Contact</a>
        </nav>
      </header>

      {/* Hero Section */}
      <main className="flex-1 flex flex-col items-center justify-center text-center px-6">
        <h2 className="text-5xl font-bold text-blue-400 mb-4">
          INITIAL RELEASE OF SKYLINE COMPUTER WORLD
        </h2>

        <p className="text-gray-400 max-w-xl mb-6">
          Build modern, responsive user interfaces faster using utility-first CSS.
          This is a simple demo layout using React + Tailwind CSS.
        </p>

        <div className="flex gap-4">
          <button className="bg-blue-500 hover:bg-blue-600 px-6 py-3 rounded-lg font-semibold">
            Get Started
          </button>
          <button className="border border-gray-600 hover:border-white px-6 py-3 rounded-lg">
            Learn More
          </button>
        </div>
      </main>

      {/* Features Section */}
      <section className="px-8 py-16 bg-gray-950">
        <h3 className="text-3xl font-bold text-center mb-10">Features</h3>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="p-6 bg-gray-900 rounded-xl border border-gray-800">
            <h4 className="text-xl font-semibold mb-2">Fast Setup</h4>
            <p className="text-gray-400">
              Quickly build projects using Vite + React + Tailwind.
            </p>
          </div>

          <div className="p-6 bg-gray-900 rounded-xl border border-gray-800">
            <h4 className="text-xl font-semibold mb-2">Responsive</h4>
            <p className="text-gray-400">
              Works perfectly on mobile, tablet, and desktop screens.
            </p>
          </div>

          <div className="p-6 bg-gray-900 rounded-xl border border-gray-800">
            <h4 className="text-xl font-semibold mb-2">Modern UI</h4>
            <p className="text-gray-400">
              Clean, minimal and professional design system.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center py-6 border-t border-gray-800 text-gray-500">
        © {new Date().getFullYear()} Skyline. All rights reserved.
      </footer>
    </div>
  )
}