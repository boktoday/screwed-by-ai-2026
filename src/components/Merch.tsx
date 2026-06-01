import { ShoppingBag, Shirt, Coffee, Sticker, Sparkles, BrainCircuit, ShieldAlert, MessageCircle } from 'lucide-react';

const products = [
  {
    name: "I Got Screwed By AI",
    type: "Classic T-Shirt",
    price: "$24.99",
    icon: Shirt,
    description: "Wear your unemployment with pride. 100% cotton, 0% job security.",
    gradient: "from-red-600 to-orange-600",
  },
  {
    name: "My Job Was Automated",
    type: "Coffee Mug",
    price: "$16.99",
    icon: Coffee,
    description: "Perfect for crying into while browsing LinkedIn at 3 AM.",
    gradient: "from-blue-600 to-purple-600",
  },
  {
    name: "ChatGPT Took My Job",
    type: "Laptop Sticker",
    price: "$4.99",
    icon: Sticker,
    description: "Ironically place it on the device that replaced you. Poetic.",
    gradient: "from-green-600 to-teal-600",
  },
  {
    name: "Prompt Engineer Survivor",
    type: "Premium Hoodie",
    price: "$49.99",
    icon: Shirt,
    description: "For those who adapted. The ultimate sellout merch.",
    gradient: "from-yellow-600 to-red-600",
  },
  {
    name: "AI Made This Design",
    type: "Ironic T-Shirt",
    price: "$24.99",
    icon: Shirt,
    description: "Meta-commentary on your existential crisis. Very 2024.",
    gradient: "from-pink-600 to-purple-600",
  },
  {
    name: "Still Human (For Now)",
    type: "Trucker Hat",
    price: "$19.99",
    icon: Shirt,
    description: "Technically accurate until the robots learn sarcasm.",
    gradient: "from-gray-600 to-gray-800",
  },
  {
    name: "Actual Intelligence",
    type: "Premium T-Shirt",
    price: "$29.99",
    icon: BrainCircuit,
    description: "Real human brain power. No hallucinations. No training data. Just good old-fashioned grey matter.",
    gradient: "from-cyan-600 to-blue-600",
  },
  {
    name: "Scammed by Deepfake",
    type: "Classic T-Shirt",
    price: "$24.99",
    icon: ShieldAlert,
    description: "I got fooled by a video that wasn't real. My bank account cried. The AI laughed.",
    gradient: "from-rose-600 to-pink-600",
  },
  {
    name: "Chatbot Stole My Child",
    type: "Coffee Mug",
    price: "$16.99",
    icon: MessageCircle,
    description: "My kid talks to a bot more than me. At least the bot doesn't ask them to clean their room.",
    gradient: "from-violet-600 to-purple-600",
  },
];

export default function Merch() {
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-gray-900/30 to-[#0a0a0a]" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[1px] bg-gradient-to-r from-transparent via-red-500/20 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 glass text-sm text-gray-400 rounded-full mb-6">
            <Sparkles className="w-4 h-4 text-gold-400" />
            <span>Merch Store</span>
          </div>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-black text-white font-heading mb-4">
            Monetize Your <span className="text-gradient-gold">Misery</span>
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            Because nothing says "I'm over it" like buying a t-shirt about it.
          </p>
          <p className="text-sm text-gray-600 mt-2 font-mono">
            * All designs probably AI-generated. We're part of the problem.
          </p>
        </div>

        {/* Products grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product, index) => {
            const Icon = product.icon;
            return (
              <div
                key={index}
                className="group relative rounded-2xl border border-white/5 hover:border-white/20 bg-white/[0.02] transition-all duration-500 hover:scale-[1.02] hover:-translate-y-1 overflow-hidden"
              >
                {/* Product image area */}
                <div className={`relative h-48 bg-gradient-to-br ${product.gradient} flex items-center justify-center overflow-hidden`}>
                  <Icon className="w-24 h-24 text-white/20 group-hover:scale-110 group-hover:text-white/30 transition-all duration-500" />

                  {/* Shine effect */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />

                  {/* Price tag */}
                  <div className="absolute top-4 right-4 px-3 py-1.5 bg-black/60 backdrop-blur-sm border border-white/10 rounded-lg text-sm font-bold text-white">
                    {product.price}
                  </div>
                </div>

                {/* Product info */}
                <div className="p-5 space-y-3">
                  <div>
                    <h3 className="text-lg font-bold text-white font-heading group-hover:text-gold-400 transition-colors">
                      {product.name}
                    </h3>
                    <p className="text-sm text-gray-500">{product.type}</p>
                  </div>
                  <p className="text-sm text-gray-400 leading-relaxed">
                    {product.description}
                  </p>
                  <button className="w-full py-3 bg-white/5 border border-white/10 rounded-xl text-sm font-semibold text-gray-300 hover:bg-white/10 hover:border-gold-500/30 hover:text-white transition-all duration-300">
                    Coming Soon
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
