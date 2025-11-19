import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function About() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        <div className="mx-auto max-w-[1100px] px-6 py-20">
          <div className="max-w-3xl mx-auto space-y-16">
            {/* Intro Section */}
            <section className="animate-fade-in">
              <h1 className="text-5xl font-semibold text-black mb-8">About</h1>
              <p className="text-lg leading-8 text-gray-700">
                I&apos;m Drew Blackwell — a cofounder and product manager who likes to have fun but also gets stuff done. I love sports, my friends, and my family. I listen first, lead second, and aim to build products and teams that meaningfully improve people&apos;s lives.
              </p>
            </section>

            {/* Highlights Section */}
            <section className="animate-fade-in" style={{ animationDelay: '0.1s' }}>
              <h2 className="text-3xl font-semibold text-black mb-6">Highlights</h2>
              <ul className="space-y-4 text-lg text-gray-700">
                <li className="flex items-start gap-3">
                  <span className="text-[#9BCBFF] mt-2">•</span>
                  <span>Served an LDS mission in the Dominican Republic</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#9BCBFF] mt-2">•</span>
                  <span>Student at BYU</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#9BCBFF] mt-2">•</span>
                  <span>Founder & Product Manager</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#9BCBFF] mt-2">•</span>
                  <span>Riverton High School graduate</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#9BCBFF] mt-2">•</span>
                  <span>Won &quot;most accurate thrower in Utah&quot; (baseball, age 12)</span>
                </li>
              </ul>
            </section>

            {/* Values Section */}
            <section className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <h2 className="text-3xl font-semibold text-black mb-8">Values</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="p-6 border border-[rgba(0,0,0,0.04)] rounded-lg bg-white hover:border-[rgba(0,0,0,0.08)] transition-all">
                  <h3 className="text-xl font-semibold text-black mb-2">Listen &gt; Respect</h3>
                  <p className="text-gray-600">
                    Understanding comes before action. I prioritize listening to understand perspectives and needs.
                  </p>
                </div>
                <div className="p-6 border border-[rgba(0,0,0,0.04)] rounded-lg bg-white hover:border-[rgba(0,0,0,0.08)] transition-all">
                  <h3 className="text-xl font-semibold text-black mb-2">Make things people love</h3>
                  <p className="text-gray-600">
                    Building products that genuinely improve lives and create meaningful experiences.
                  </p>
                </div>
                <div className="p-6 border border-[rgba(0,0,0,0.04)] rounded-lg bg-white hover:border-[rgba(0,0,0,0.08)] transition-all">
                  <h3 className="text-xl font-semibold text-black mb-2">Impact + Serve</h3>
                  <p className="text-gray-600">
                    Combining meaningful impact with a heart for service in everything I do.
                  </p>
                </div>
              </div>
            </section>

            {/* Timeline Section */}
            <section className="animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <h2 className="text-3xl font-semibold text-black mb-8">Timeline</h2>
              <div className="relative">
                <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-[#F3F4F6]"></div>
                <div className="space-y-8">
                  <div className="relative pl-12">
                    <div className="absolute left-2 top-2 w-4 h-4 rounded-full bg-[#9BCBFF] border-2 border-white"></div>
                    <div className="text-sm text-gray-500 mb-1">Age 12</div>
                    <div className="text-lg font-medium text-black">Won &quot;most accurate thrower in Utah&quot; (baseball)</div>
                  </div>
                  <div className="relative pl-12">
                    <div className="absolute left-2 top-2 w-4 h-4 rounded-full bg-[#9BCBFF] border-2 border-white"></div>
                    <div className="text-sm text-gray-500 mb-1">High School</div>
                    <div className="text-lg font-medium text-black">Graduated from Riverton High School</div>
                  </div>
                  <div className="relative pl-12">
                    <div className="absolute left-2 top-2 w-4 h-4 rounded-full bg-[#9BCBFF] border-2 border-white"></div>
                    <div className="text-sm text-gray-500 mb-1">Mission</div>
                    <div className="text-lg font-medium text-black">Served LDS mission in the Dominican Republic</div>
                  </div>
                  <div className="relative pl-12">
                    <div className="absolute left-2 top-2 w-4 h-4 rounded-full bg-[#9BCBFF] border-2 border-white"></div>
                    <div className="text-sm text-gray-500 mb-1">Present</div>
                    <div className="text-lg font-medium text-black">Student at BYU • Founder & Product Manager</div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

