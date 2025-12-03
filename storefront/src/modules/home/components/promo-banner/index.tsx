export default function PromoBanner() {
  return (
    <section className="py-20 bg-gradient-to-r from-gray-900 to-gray-800 text-white">
      <div className="content-container">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="flex-1 text-center lg:text-left">
            <span className="inline-block px-4 py-1 bg-white/10 rounded-full text-sm font-medium mb-4">
              Limited Time Offer
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Get 20% Off
              <br />
              <span className="text-gray-300">Your First Order</span>
            </h2>
            <p className="text-gray-300 text-lg mb-6 max-w-md mx-auto lg:mx-0">
              Subscribe to our newsletter and receive exclusive offers and updates on new arrivals
            </p>
          </div>

          <div className="flex-1 max-w-md w-full">
            <form className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-4 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
              />
              <button
                type="submit"
                className="px-8 py-4 bg-white text-gray-900 font-semibold rounded-lg hover:bg-gray-100 transition-colors whitespace-nowrap"
              >
                Subscribe
              </button>
            </form>
            <p className="text-gray-400 text-xs mt-3 text-center sm:text-left">
              By subscribing, you agree to our Privacy Policy and consent to receive updates
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
