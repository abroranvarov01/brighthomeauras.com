import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Leaf, Lightbulb, Droplet, ThermometerSun, Smartphone, TrendingUp, Shield, Clock, Star, Check, ArrowRight } from 'lucide-react'
import Image from 'next/image'

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-2">
              <Leaf className="h-8 w-8 text-primary" />
              <span className="text-xl font-semibold">BrightHomeAuras</span>
            </div>
            <div className="hidden md:flex items-center gap-8">
              <a href="#products" className="text-sm hover:text-primary transition-colors">Products</a>
              <a href="#features" className="text-sm hover:text-primary transition-colors">Features</a>
              <a href="#how-it-works" className="text-sm hover:text-primary transition-colors">How It Works</a>
              <a href="#testimonials" className="text-sm hover:text-primary transition-colors">Reviews</a>
              <Button size="sm">Shop Now</Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Section 1: Hero */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-secondary">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 rounded-full text-sm text-primary mb-6">
                <Leaf className="h-4 w-4" />
                <span>Smart Growing Technology</span>
              </div>
              <h1 className="text-5xl lg:text-6xl font-bold mb-6 text-balance">
                Cultivate Your Indoor Garden with Intelligence
              </h1>
              <p className="text-lg text-muted-foreground mb-8 text-pretty">
                Transform any space into a thriving garden with our smart devices and accessories. Automated care, optimal growth, and beautiful results.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="gap-2">
                  Explore Products <ArrowRight className="h-4 w-4" />
                </Button>
                <Button size="lg" variant="outline">Learn More</Button>
              </div>
              <div className="flex items-center gap-8 mt-8 pt-8 border-t border-border">
                <div>
                  <div className="text-3xl font-bold text-primary">50K+</div>
                  <div className="text-sm text-muted-foreground">Happy Gardeners</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary">98%</div>
                  <div className="text-sm text-muted-foreground">Success Rate</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary">24/7</div>
                  <div className="text-sm text-muted-foreground">Smart Monitoring</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden bg-muted">
                <Image
                  src="/modern-smart-indoor-garden-with-led-grow-lights-an.jpg"
                  alt="Smart Indoor Garden"
                  width={600}
                  height={600}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-card border border-border rounded-lg p-4 shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <TrendingUp className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold">Growth Rate</div>
                    <div className="text-2xl font-bold text-primary">+240%</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Product Categories */}
      <section id="products" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Smart Growing Solutions</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Everything you need to create the perfect environment for your plants
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Lightbulb,
                title: 'Grow Lights',
                description: 'Full-spectrum LED systems optimized for every growth stage',
                color: 'text-amber-500',
                bgColor: 'bg-amber-500/10'
              },
              {
                icon: Droplet,
                title: 'Watering Systems',
                description: 'Automated irrigation with precision moisture control',
                color: 'text-blue-500',
                bgColor: 'bg-blue-500/10'
              },
              {
                icon: ThermometerSun,
                title: 'Climate Control',
                description: 'Temperature and humidity regulation systems',
                color: 'text-red-500',
                bgColor: 'bg-red-500/10'
              },
              {
                icon: Smartphone,
                title: 'Smart Sensors',
                description: 'Real-time monitoring of soil, light, and environment',
                color: 'text-primary',
                bgColor: 'bg-primary/10'
              }
            ].map((category, i) => (
              <Card key={i} className="p-6 hover:shadow-lg transition-all cursor-pointer group">
                <div className={`w-14 h-14 ${category.bgColor} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <category.icon className={`h-7 w-7 ${category.color}`} />
                </div>
                <h3 className="text-xl font-semibold mb-2">{category.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">{category.description}</p>
                <Button variant="ghost" size="sm" className="gap-2 group-hover:gap-3 transition-all">
                  Explore <ArrowRight className="h-4 w-4" />
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3: Featured Products */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Bestselling Products</h2>
            <p className="text-lg text-muted-foreground">
              Trusted by thousands of indoor gardeners worldwide
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: 'AuraGrow Pro LED',
                category: 'Grow Light',
                price: '$149.99',
                rating: 4.9,
                reviews: 1243,
                image: '/products/auragrow-pro-led.jpg'
              },
              {
                name: 'SmartDrop Auto',
                category: 'Watering System',
                price: '$89.99',
                rating: 4.8,
                reviews: 892,
                image: '/products/smartdrop-auto.jpg'
              },
              {
                name: 'PlantSense Monitor',
                category: 'Smart Sensor',
                price: '$59.99',
                rating: 4.9,
                reviews: 2156,
                image: '/products/plantsense-monitor.jpg'
              }
            ].map((product, i) => (
              <Card key={i} className="overflow-hidden group cursor-pointer">
                <div className="aspect-square bg-muted overflow-hidden">
                  <Image
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    width={400}
                    height={400}
                    className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <div className="text-sm text-primary font-medium mb-2">{product.category}</div>
                  <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                  <div className="flex items-center gap-2 mb-4">
                    <div className="flex items-center gap-1">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                    <span className="text-sm text-muted-foreground">
                      {product.rating} ({product.reviews} reviews)
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    
                    <Button>Add to Cart</Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4: Technology Showcase */}
      <section id="features" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">
                Smart Technology, Effortless Growing
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Our integrated app ecosystem connects all your devices, giving you complete control and insights into your garden's health.
              </p>
              <div className="space-y-6">
                {[
                  {
                    icon: Smartphone,
                    title: 'Mobile Control',
                    description: 'Manage your garden from anywhere with our intuitive iOS and Android apps'
                  },
                  {
                    icon: TrendingUp,
                    title: 'Growth Analytics',
                    description: 'Track progress with detailed charts and AI-powered recommendations'
                  },
                  {
                    icon: Shield,
                    title: 'Smart Alerts',
                    description: 'Get notified instantly when your plants need attention'
                  },
                  {
                    icon: Clock,
                    title: 'Automation',
                    description: 'Set schedules and let the system handle watering and lighting'
                  }
                ].map((feature, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <feature.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">{feature.title}</h3>
                      <p className="text-sm text-muted-foreground">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/5] rounded-2xl overflow-hidden bg-muted">
                <Image
                  src="/smartphone-app-interface-showing-plant-monitoring-.jpg"
                  alt="BrightHomeAuras App"
                  width={560}
                  height={700}
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: Benefits */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Why Choose BrightHomeAuras</h2>
            <p className="text-lg opacity-90 max-w-2xl mx-auto">
              Join thousands of successful indoor gardeners growing healthier plants
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Save Time & Water',
                description: 'Automated systems reduce maintenance time by 80% and water usage by 40%',
                stat: '80%'
              },
              {
                title: 'Healthier Plants',
                description: 'Optimal growing conditions lead to 3x faster growth and stronger plants',
                stat: '3x'
              },
              {
                title: 'Expert Support',
                description: 'Free lifetime access to our plant care specialists and community',
                stat: '24/7'
              }
            ].map((benefit, i) => (
              <div key={i} className="text-center">
                <div className="text-5xl font-bold mb-4 opacity-90">{benefit.stat}</div>
                <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
                <p className="opacity-90">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 6: How It Works */}
      <section id="how-it-works" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Getting Started Is Easy</h2>
            <p className="text-lg text-muted-foreground">
              From unboxing to thriving garden in just three simple steps
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: '01',
                title: 'Setup Your Devices',
                description: 'Install your smart devices and connect them to the BrightHomeAuras app in minutes',
                image: '/how-it-works/setup-devices.jpg'
              },
              {
                step: '02',
                title: 'Configure Settings',
                description: 'Choose your plant types and let our AI create the perfect care schedule',
                image: '/how-it-works/configure-settings.jpg'
              },
              {
                step: '03',
                title: 'Watch Them Grow',
                description: 'Monitor growth, receive alerts, and enjoy healthy thriving plants',
                image: '/how-it-works/watch-them-grow.jpg'
              }
            ].map((step, i) => (
              <div key={i} className="relative">
                <div className="aspect-[4/3] rounded-xl overflow-hidden bg-muted mb-6">
                  <Image
                    src={step.image || "/placeholder.svg"}
                    alt={step.title}
                    width={400}
                    height={300}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="text-6xl font-bold text-primary/20 mb-4">{step.step}</div>
                <h3 className="text-2xl font-semibold mb-3">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 7: Success Stories */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Real Results from Real Gardeners</h2>
            <p className="text-lg text-muted-foreground">
              See the transformation when you use our smart growing systems
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                beforeImage: '/success-stories/before-tomatoes.jpg',
                afterImage: '/success-stories/after-tomatoes.jpg',
                name: 'Sarah M.',
                plant: 'Tomato Garden',
                time: '8 weeks'
              },
              {
                beforeImage: '/success-stories/before-herbs.jpg',
                afterImage: '/success-stories/after-herbs.jpg',
                name: 'James P.',
                plant: 'Herb Collection',
                time: '6 weeks'
              }
            ].map((story, i) => (
              <Card key={i} className="overflow-hidden">
                <div className="grid grid-cols-2">
                  <div className="aspect-square bg-muted relative">
                    <Image
                      src={story.beforeImage || "/placeholder.svg"}
                      alt="Before"
                      width={300}
                      height={300}
                      className="object-cover w-full h-full"
                    />
                    <div className="absolute top-4 left-4 bg-background/90 px-3 py-1 rounded-full text-sm font-medium">
                      Before
                    </div>
                  </div>
                  <div className="aspect-square bg-muted relative">
                    <Image
                      src={story.afterImage || "/placeholder.svg"}
                      alt="After"
                      width={300}
                      height={300}
                      className="object-cover w-full h-full"
                    />
                    <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                      After
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-semibold text-lg mb-1">{story.name} - {story.plant}</h3>
                  <p className="text-sm text-muted-foreground">Transformation in {story.time}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Section 8: Testimonials */}
      <section id="testimonials" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Loved by Plant Enthusiasts</h2>
            <p className="text-lg text-muted-foreground">
              Over 50,000 happy customers growing better with BrightHomeAuras
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: 'Emily Rodriguez',
                role: 'Urban Gardener',
                content: 'The AuraGrow LED system completely transformed my apartment garden. My plants have never been healthier, and the automation saves me hours every week.',
                rating: 5
              },
              {
                name: 'Michael Chen',
                role: 'Home Chef',
                content: 'I grow all my own herbs now thanks to BrightHomeAuras. The smart sensors take all the guesswork out of watering. Highly recommend!',
                rating: 5
              },
              {
                name: 'Lisa Thompson',
                role: 'Plant Parent',
                content: 'As a beginner, I was intimidated by indoor growing. These smart devices made it so easy. My succulents and tropicals are thriving side by side!',
                rating: 5
              }
            ].map((testimonial, i) => (
              <Card key={i} className="p-6">
                <div className="flex items-center gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-6">&ldquo;{testimonial.content}&rdquo;</p>
                <div>
                  <div className="font-semibold">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Section 9: Newsletter & Footer */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary">
        <div className="max-w-7xl mx-auto">
          <div className="bg-primary text-primary-foreground rounded-2xl p-12 mb-16 text-center">
            <h2 className="text-3xl font-bold mb-4">Get Growing Tips & Exclusive Offers</h2>
            <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
              Join our community of 50,000+ indoor gardeners. Get expert tips, product updates, and special discounts.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg bg-primary-foreground text-foreground"
              />
              <Button size="lg" variant="secondary">Subscribe</Button>
            </div>
          </div>

          <footer className="grid md:grid-cols-4 gap-8 pb-8 mb-8 border-b border-border">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Leaf className="h-8 w-8 text-primary" />
                <span className="text-xl font-semibold">BrightHomeAuras</span>
              </div>
              <p className="text-sm text-muted-foreground mb-4">
                Smart devices and accessories for indoor plant growing. Cultivate with intelligence.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Products</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">Grow Lights</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Watering Systems</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Smart Sensors</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Climate Control</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Setup Guides</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Plant Care Tips</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Contact Us</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Sustainability</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Blog</a></li>
              </ul>
            </div>
          </footer>

          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
            <div>© 2025 BrightHomeAuras. All rights reserved.</div>
            <div className="flex gap-6">
              <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-primary transition-colors">Cookie Settings</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
