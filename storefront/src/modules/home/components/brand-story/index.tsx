import LocalizedClientLink from "@modules/common/components/localized-client-link"

export default function BrandStory() {
  return (
    <section className="py-20 bg-white">
      <div className="content-container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image Side */}
          <div className="relative h-[500px] rounded-2xl overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1591561954557-26941169b49e?w=800&q=80"
              alt="Our Story"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
          </div>

          {/* Content Side */}
          <div className="space-y-6">
            <span className="inline-block text-sm font-semibold text-gray-500 uppercase tracking-wider">
              Our Story
            </span>
            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
              Crafted with
              <br />
              <span className="text-gray-600">Passion & Quality</span>
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              Since our founding, we've been dedicated to creating premium accessories that combine timeless elegance with modern functionality. Each piece is carefully crafted to meet the highest standards of quality and design.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Our commitment to sustainability and ethical production ensures that every product not only looks beautiful but also contributes to a better future.
            </p>
            <div className="flex gap-4 pt-4">
              <LocalizedClientLink
                href="/about"
                className="px-8 py-3 bg-gray-900 text-white font-semibold rounded-lg hover:bg-gray-800 transition-colors"
              >
                Learn More
              </LocalizedClientLink>
              <LocalizedClientLink
                href="/store"
                className="px-8 py-3 border-2 border-gray-900 text-gray-900 font-semibold rounded-lg hover:bg-gray-900 hover:text-white transition-all"
              >
                Shop Collection
              </LocalizedClientLink>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-gray-200">
              <div>
                <div className="text-3xl font-bold text-gray-900">10K+</div>
                <div className="text-sm text-gray-600">Happy Customers</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-gray-900">500+</div>
                <div className="text-sm text-gray-600">Products</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-gray-900">50+</div>
                <div className="text-sm text-gray-600">Countries</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
