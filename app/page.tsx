'use client'

import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Pizza, Utensils, DollarSign, Zap, Users, BarChart, Clock, Leaf, Coffee, Store, FuelIcon as GasPump, Banknote, UserPlus, ClockIcon as Clock24, Recycle, Rocket, Menu, Mail, Phone, MapPin } from 'lucide-react'
import type { ColorTheme } from './types'


const colorThemes = {
  boldRed: { header: 'bg-gradient-to-r from-red-700 to-red-500', hero: 'from-red-700 via-red-600 to-red-500' },
  boldOrange: { header: 'bg-gradient-to-r from-orange-600 to-orange-400', hero: 'from-orange-600 via-orange-500 to-orange-400' },
  modernNavy: { header: 'bg-gradient-to-r from-navy-900 to-navy-700', hero: 'from-navy-900 via-navy-800 to-navy-700' },
  modernTeal: { header: 'bg-gradient-to-r from-teal-700 to-teal-500', hero: 'from-teal-700 via-teal-600 to-teal-500' },
  lightWhite: { header: 'bg-gradient-to-r from-gray-100 to-white text-gray-900', hero: 'from-gray-100 via-white to-gray-100' },
  lightPastel: { header: 'bg-gradient-to-r from-blue-200 to-green-200', hero: 'from-blue-200 via-blue-100 to-green-100' },
  neutralBeige: { header: 'bg-gradient-to-r from-beige-200 to-beige-50', hero: 'from-beige-200 via-beige-100 to-beige-50' },
  neutralBrown: { header: 'bg-gradient-to-r from-brown-300 to-brown-100', hero: 'from-brown-300 via-brown-200 to-brown-100' },
};

export default function Home() {
  // const [colorTheme, setColorTheme] = useState<ColorTheme>('boldRed');

  // const handleThemeChange = (value: ColorTheme) => {
  //   setColorTheme(value);
  // };

  const productCategories = [
    { 
      name: "Cheese Pizza", 
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Pizza%20&%20Naan%20Robotics%20-%20Cheese%20Pizza-hMUXL2SK3XD0A7IKK25la7bR5ow5xm.png",
      description: "Classic pizza with our signature sauce and melted mozzarella cheese"
    },
    { 
      name: "Pepperoni Pizza", 
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Pizza%20&%20Naan%20Robotics%20-%20Pepperoni%20Pizza-RHlt4QGRmhODTnuViyISjpYfTvTaiL.png",
      description: "Our cheese pizza topped with premium pepperoni slices"
    },
    { 
      name: "Supreme Pizza", 
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Pizza%20&%20Naan%20Robotics%20-%20Margarita%20Pizza-udtOjLtSJQ00kwnPa3BQXrg0D0hgku.png",
      description: "Loaded with pepperoni, mushrooms, olives, and bell peppers"
    },
    { 
      name: "Turkish Pizza", 
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Pizza%20&%20Naan%20Robotics%20-%20Turkish%20Pizza-Lxbpe1Tu5BZGULAzngXAvONUu6f4Dy.png",
      description: "Spiced meat topped flatbread with fresh herbs"
    },
    { 
      name: "Fresh Garlic Naan", 
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Pizza%20&%20Naan%20Robotics%20-%20Fresh%20Garlic%20Naan-hVwgqBuQDTh2fgZixogJoQ6cuwnD2A.png",
      description: "Traditional naan bread topped with garlic and herbs"
    },
    { 
      name: "Butter Naan", 
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Pizza%20&%20Naan%20Robotics%20-%20Fresh%20Butter%20Naan-CLpCs7UDfafbx6q9iMf0MEDsUVXVuT.png",
      description: "Classic naan bread brushed with melted butter"
    },
    { 
      name: "Plain Naan", 
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Pizza%20&%20Naan%20Robotics%20-%20Middle%20Eastern%20Bread-kzm6Spt8jH1LcPDg3vUGyBLsoF3hdT.png",
      description: "Traditional plain naan bread, perfect for any meal"
    },
    { 
      name: "Garlic Herb Naan", 
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Pizza%20&%20Naan%20Robotics%20-%20Fresh%20Garlic%20Naan%20(2)-ULSbjZ7Wq2B5l7ceoCzonphrefUgUW.png",
      description: "Naan bread with an extra helping of garlic and fresh herbs"
    }
  ]

  const galleryImages = [
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Pizza%20&%20Naan%20Robotics%20-%20V2%20Machine-iWzW6JwF54dt6pHMwYrlOP7VUjTjiJ.png",
      alt: "Pizza & Naan Robotics Vending Machine - Professional showcase of our state-of-the-art machine"
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Pizza%20and%20Naan%20Robotic%20Machine%20-%20Valley%20Stream,%20NY-nQZ814a3JRr8NKoowqmwkdjGdAMSQx.png",
      alt: "Valley Stream, NY Location - Our team celebrating a successful installation"
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Pizza%20and%20Naan%20Robotic%20Machine%20-%20Puzzant-xIiUi5Z7c8WhIwHWtOOojfYL7w7faD.png",
      alt: "Customer enjoying fresh naan from our machine"
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Pizza%20&%20Naan%20Robotics%20-%20Young%20Operator-AEZwlIkcyiIBIxi6K04E9y183U86k0.png",
      alt: "Machine demonstration with our team"
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Pizza%20and%20Naan%20Robotic%20Machine%20-%20Faisal%20&%20kevin%20Harrington-aD0FLk7QkT4vDgzRNezHVYEu44QtBR.png",
      alt: "Business partnership meeting"
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Pizza%20and%20Naan%20Robotic%20Machine%20-%20China%20with%20Bob-j1apRRkcwc66WbJKfNhFx9BNhfb5zO.png",
      alt: "International business expansion meeting"
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Pizza%20and%20Naan%20Robotic%20Machine%20-%20New%20York-TWKynhM8p7Jo99waPB7Ao2eXJoEDQh.png",
      alt: "New York location showcase"
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Pizza%20&%20Naan%20Robotics%20-%20Bangalore-GHbGnrzyZKz0BbjuUQoMUFpnbjxu8Q.png",
      alt: "Bangalore team with installed machine"
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Pizza%20and%20Naan%20Robotic%20Machine%20-%20Team-NmShYXmR8yzGvI9WX8VbHNl1IVOobf.png",
      alt: "Pizza & Naan Robotics team members with vending machine installation"
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Pizza%20and%20Naan%20Store-AJ8qH4IuDSGQtVtLXfxs2HZlqxYRpe.webp",
      alt: "Modern Pizza & Naan kiosk design with illuminated signage and professional equipment setup"
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Pizza%20and%20Naan%20Robotic%20Machine%20-%20Supermarket-xX5DKSy11G29NZUfiJQkbu4Cba2Flh.png",
      alt: "Pizza & Naan Robotics vending machine installed in a supermarket setting"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-100 to-white">
      <header className="bg-red-600 text-white shadow sticky top-0 z-50 border-b-2 border-yellow-400">
        <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-4">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Pizza%20%20&%20Naan%20%20Robotics%20Logo-LtyaPBgKCGQRjDfaOG5GyrJiIM1f2i.png"
                alt="Pizza & Naan Robotics Logo"
                width={40}
                height={40}
                className="rounded-full"
              />
              <h1 className="text-xl font-bold">Pizza & Naan Robotics Inc.</h1>
            </div>
            <nav className="hidden md:flex items-center space-x-6">
              <a href="#features" className="hover:text-yellow-400 transition-colors">Features</a>
              <a href="#benefits" className="hover:text-yellow-400 transition-colors">Benefits</a>
              <a href="#gallery" className="hover:text-yellow-400 transition-colors">Gallery</a>
              <a href="#pre-order" className="hover:text-yellow-400 transition-colors">Pre-order</a>
              {/* <ThemeSelector currentTheme={colorTheme} onThemeChange={handleThemeChange} /> */}
            </nav>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </header>

      <main>
        <section className={`relative bg-gradient-to-br from-red-600 via-red-500 to-yellow-500 text-white`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="text-center md:text-left">
                <h2 className="text-4xl font-extrabold text-white sm:text-5xl mb-4">Start Your "Pizza & Naan Business" With Our Robotic Machine</h2>
                <p className="text-xl md:text-2xl text-yellow-300 mb-8">
                  Fresh baked pizza & naan, made with fresh ingredients. Not a Frozen Pizza Vending Machine.
                </p>
                <Button 
                  size="lg" 
                  className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 text-lg px-8 py-6"
                >
                  Pre-Order Now
                </Button>
              </div>
              <div className="relative h-[400px] md:h-[500px] rounded-lg overflow-hidden">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Pizza%20and%20Naan%20Robotic%20Machine%20-%20New%20York-XpGe5BH4NAsFQSR3e8i4qxh2CBC13q.png"
                  alt="Pizza & Naan Robotics Machine Interface"
                  fill
                  style={{objectFit: "cover"}}
                  priority
                  className="rounded-lg"
                />
              </div>
            </div>
          </div>
        </section>

        <section id="benefits" className="bg-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-4xl font-extrabold text-red-600 sm:text-5xl mb-4">Boost Sales & Foot Traffic</h2>
              <p className="text-xl text-gray-600">Start Selling Freshly Baked Pizza & Naan Today!</p>
            </div>
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
              <Card className="bg-gradient-to-br from-red-100 to-pink-100 border-0">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Store className="w-6 h-6 mr-2 text-red-500" />
                    Delis & Supermarkets
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Transform unused space into a profitable food service area. Potential to add $100K-$150K in annual revenue with minimal operational changes.</p>
                </CardContent>
              </Card>
              <Card className="bg-gradient-to-br from-green-100 to-teal-100 border-0">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Coffee className="w-6 h-6 mr-2 text-green-500" />
                    Coffee Shops
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Expand your menu without kitchen renovations. Increase average ticket size by $5-$10 per customer, potentially adding $50K-$80K yearly.</p>
                </CardContent>
              </Card>
              <Card className="bg-gradient-to-br from-blue-100 to-indigo-100 border-0">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Utensils className="w-6 h-6 mr-2 text-blue-500" />
                    Restaurants
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Offer popular menu items without additional staff or kitchen space. Potential to increase revenue by $80K-$120K annually during peak hours and off-times.</p>
                </CardContent>
              </Card>
              <Card className="bg-gradient-to-br from-purple-100 to-pink-100 border-0">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <GasPump className="w-6 h-6 mr-2 text-purple-500" />
                    Gas Stations & Convenience Stores
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Attract more customers and increase dwell time. Add a new profit center with potential earnings of $120K-$180K per year from food sales.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section id="product-categories" className="bg-gray-100 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-12">List of Types of Pizza & Naan Made by Pizza & Naan Robotics</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {productCategories.map((category, index) => (
                <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                  <div className="relative h-48">
                    <Image
                      src={category.image || "/placeholder.svg"}
                      alt={category.name}
                      fill
                      style={{objectFit: "contain"}}
                      className="p-4"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{category.name}</h3>
                    <p className="text-sm text-gray-600">{category.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="features" className="bg-gradient-to-br from-blue-500 to-purple-500 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-extrabold sm:text-4xl">Key Benefits of Pizza & Naan Robotic Machine</h2>
              <p className="mt-4 text-lg text-gray-100">
                This revolutionary robotic machine combines advanced robotics with culinary expertise to deliver freshly prepared pizzas and naans in minutes, NOT FROZEN PIZZA HEATUP
              </p>
            </div>
            <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {[
                { 
                  name: 'Affordable Meals', 
                  description: 'Cost reduction through advanced robotics, consistent quality, and wider reach for freshly prepared food.', 
                  icon: <Banknote className="h-8 w-8" aria-hidden="true" /> 
                },
                { 
                  name: 'Empowering Women', 
                  description: 'Job creation, entrepreneurship opportunities, and community impact through women-led businesses.', 
                  icon: <UserPlus className="h-8 w-8" aria-hidden="true" /> 
                },
                { 
                  name: '24/7 Accessibility', 
                  description: 'Strategic partnerships for high-traffic venues, convenience for customers, and seamless integration into public spaces.', 
                  icon: <Clock24 className="h-8 w-8" aria-hidden="true" /> 
                },
                { 
                  name: 'Sustainability', 
                  description: 'Eco-friendly solutions, waste minimization, and local sourcing to support regional economies.', 
                  icon: <Recycle className="h-8 w-8" aria-hidden="true" /> 
                },
                { 
                  name: 'Hassle-Free Setup', 
                  description: 'No kitchen hood needed, quick installation, and seamless integration into your business.', 
                  icon: <Rocket className="h-8 w-8" aria-hidden="true" /> 
                },
                { 
                  name: 'Efficient Labor Solutions', 
                  description: 'Automation advantages reducing the need for additional staff and streamlined operations.', 
                  icon: <Users className="h-8 w-8" aria-hidden="true" /> 
                },
              ].map((benefit) => (
                <div key={benefit.name} className="flex flex-col items-center text-center">
                  <div className="flex items-center justify-center w-16 h-16 rounded-full bg-yellow-400 text-blue-600 mb-4">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{benefit.name}</h3>
                  <p className="text-gray-200">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="about-and-gallery" className="bg-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-extrabold text-gray-900 mb-6">About Us</h2>
                <p className="text-lg text-gray-600 mb-4">
                  Pizza & Naan Robotics Inc. is revolutionizing the food industry by combining the art of culinary tradition with state-of-the-art robotics. With a focus on delivering fresh, customizable pizza and naan, we blend automation with a human touch to ensure the perfect balance of innovation and authenticity.
                </p>
                <p className="text-lg text-gray-600 mb-4">
                  Founded to overcome challenges like concerns over food freshness and consistency in earlier vending solutions, we've enhanced Pizzametry's patented technology to create fully automated systems. Our machines not only produce pizza and naan but also cater to diverse consumer preferences with larger sizes, multiple toppings, and regional flavor adaptations.
                </p>
                <p className="text-lg text-gray-600 mb-6">
                  Our mission is to transform the global food industry by delivering high-quality, fresh, and customizable pizza and naan through robotic automation, while empowering entrepreneurs and driving social impact.
                </p>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">Business Divisions</h3>
                    <div className="space-y-4">
                      <div>
                        <h4 className="text-lg font-semibold text-gray-700">B2B Solutions</h4>
                        <p className="text-gray-600">
                          We specialize in designing, manufacturing, and selling fully automated machines for commercial use in restaurants, delis, hotels, and more. Our compact, scalable systems are perfect for high-traffic locations and come with customizable software to cater to regional preferences.
                        </p>
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-gray-700">D2C Marketplace</h4>
                        <p className="text-gray-600">
                          Through partnerships with cafes, restaurants, and retail stores, we deliver fresh, delicious pizza and naan directly to consumers via robotic kiosks and vending corners, while offering franchise opportunities focused on empowering women entrepreneurs.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">Global Impact</h3>
                    <p className="text-gray-600">
                      With our assembly center in Bangladesh and strategic partnerships, including Grameen Bank USA, we're committed to cost-effective production while creating opportunities for women entrepreneurs through training, financing, and ongoing support in the food tech industry.
                    </p>
                  </div>
                </div>
              </div>
              <div id="gallery">
                <h2 className="text-3xl font-extrabold text-gray-900 mb-6">Photo Gallery</h2>
                <div className="grid grid-cols-2 gap-4">
                  {galleryImages.map((image, index) => (
                    <div key={index} className="relative h-48 group overflow-hidden rounded-lg">
                      <Image
                        src={image.src || "/placeholder.svg"}
                        alt={image.alt}
                        fill
                        style={{objectFit: "cover"}}
                        className="rounded-lg transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="pre-order" className="bg-gradient-to-br from-purple-100 to-pink-100 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-extrabold text-red-600 sm:text-4xl mb-4">Sign Up as an Operator or Distributor</h2>
              <p className="text-xl text-gray-600">Join the Revolution in Food Automation with Pizza & Naan Robotics!</p>
            </div>
            <div className="prose prose-lg mx-auto text-gray-600 mb-12">
              <p>We are looking for passionate operators and distributors to bring the future of food tech to communities nationwide. Be part of a groundbreaking movement that combines cutting-edge robotics with unparalleled business opportunities.</p>
              
              <h3 className="text-3xl font-bold text-red-600 mt-12 mb-6">Why Partner with Pizza & Naan Robotics?</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white rounded-lg shadow-md p-6">
                  <h4 className="text-xl font-semibold text-gray-800 mb-3">Empowering Entrepreneurs</h4>
                  <p className="text-gray-600">We provide exclusive opportunities for women and minority business owners to lead and grow.</p>
                </div>
                <div className="bg-white rounded-lg shadow-md p-6">
                  <h4 className="text-xl font-semibold text-gray-800 mb-3">Flexible Financing</h4>
                  <p className="text-gray-600">Accessible funding options tailored to help you succeed.</p>
                </div>
                <div className="bg-white rounded-lg shadow-md p-6">
                  <h4 className="text-xl font-semibold text-gray-800 mb-3">Comprehensive Support</h4>
                  <p className="text-gray-600">From training to marketing, we offer end-to-end resources to ensure your success.</p>
                </div>
                <div className="bg-white rounded-lg shadow-md p-6">
                  <h4 className="text-xl font-semibold text-gray-800 mb-3">Turnkey Business Model</h4>
                  <p className="text-gray-600">Quick installation with no kitchen hood required, enabling seamless integration into any location.</p>
                </div>
              </div>

              <h3 className="text-3xl font-bold text-red-600 mt-12 mb-6">Your Opportunity to Grow</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white rounded-lg shadow-md p-6">
                  <h4 className="text-xl font-semibold text-gray-800 mb-3">Secure Exclusive Territories</h4>
                  <p className="text-gray-600">Operate or distribute machines in high-demand locations like supermarkets, coffee shops, gas stations, and universities.</p>
                </div>
                <div className="bg-white rounded-lg shadow-md p-6">
                  <h4 className="text-xl font-semibold text-gray-800 mb-3">Drive Community Impact</h4>
                  <p className="text-gray-600">Deliver freshly prepared meals to underserved areas while building a sustainable business.</p>
                </div>
                <div className="bg-white rounded-lg shadow-md p-6">
                  <h4 className="text-xl font-semibold text-gray-800 mb-3">Maximize Revenue</h4>
                  <p className="text-gray-600">Take advantage of a scalable model designed to generate consistent returns.</p>
                </div>
              </div>


              {/* Removed "Who Should Apply?" section */}

            </div>
            <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-2">
              <Card className="bg-white shadow-lg">
                <CardHeader>
                  <CardTitle>Contact Us</CardTitle>
                </CardHeader>
                <CardContent>
                  <form className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="first-name">First Name</Label>
                        <Input id="first-name" placeholder="John" />
                      </div>
                      <div>
                        <Label htmlFor="last-name">Last Name</Label>
                        <Input id="last-name" placeholder="Doe" />
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" placeholder="john@example.com" />
                    </div>
                    <div>
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input id="phone" type="tel" placeholder="(123) 456-7890" />
                    </div>
                    <div>
                      <Label htmlFor="message">Message</Label>
                      <Textarea id="message" placeholder="Tell us about your interest in Pizza & Naan Robotics..." />
                    </div>
                    <Button type="submit" className="w-full">Send Message</Button>
                  </form>
                </CardContent>
              </Card>
              <Card className="bg-white shadow-lg">
                <CardHeader>
                  <CardTitle>Contact Information</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <Mail className="mr-2 h-5 w-5 text-gray-500" />
                      <p>pizzanaanrobotics@gmail.com</p>
                    </div>
                    <div className="flex items-center">
                      <Phone className="mr-2 h-5 w-5 text-gray-500" />
                      <p>+1-212-347-3330</p>
                    </div>
                    <div className="flex items-center">
                      <MapPin className="mr-2 h-5 w-5 text-gray-500" />
                      <p>New York, NY</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            
          </div>
        </section>

      </main>

      <footer className="bg-gradient-to-r from-purple-500 to-blue-500 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center gap-4 mb-4">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Pizza%20%20&%20Naan%20%20Robotics%20Logo-LtyaPBgKCGQRjDfaOG5GyrJiIM1f2i.png"
              alt="Pizza & Naan Robotics Logo"
              width={40}
              height={40}
              className="rounded-full"
            />
            <p className="text-lg font-semibold">Pizza & Naan Robotics Inc.</p>
          </div>
          <p className="text-center text-base">
            &copy; 2025 Pizza & Naan Robotics Inc. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}

