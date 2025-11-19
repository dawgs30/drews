import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="flex min-h-[calc(100vh-100px)] items-center justify-center px-6 py-20">
      <div className="mx-auto max-w-[1100px] w-full">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Portrait Image */}
          <div className="flex-shrink-0 animate-fade-in">
            <div className="relative w-64 h-64 lg:w-80 lg:h-80 rounded-2xl overflow-hidden border border-[rgba(0,0,0,0.08)] shadow-lg bg-[#F3F4F6]">
              <Image
                src="/FF9A9723-CD91-433D-80E9-65CBCBC3438F_1_105_c.jpeg"
                alt="Portrait of Drew Blackwell"
                width={320}
                height={320}
                priority
                className="object-cover w-full h-full"
              />
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 text-center lg:text-left animate-fade-in" style={{ animationDelay: '0.1s' }}>
            <h1 className="text-5xl lg:text-6xl font-semibold text-black mb-4 leading-tight">
              Drew Blackwell
            </h1>
            <h2 className="text-2xl lg:text-3xl font-normal text-gray-700 mb-6 leading-relaxed">
              Cofounder • Product Manager • Sports Enthusiast • Disciple of Christ
            </h2>
            <blockquote className="text-lg lg:text-xl text-gray-600 italic mb-8 border-l-4 border-[#9BCBFF] pl-6">
              &ldquo;Always remember who you are, and never forget who you can become&rdquo;
            </blockquote>
            <p className="text-lg text-gray-600 mb-10 max-w-2xl">
              Building products that make people&apos;s lives better.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/resume"
                className="inline-flex items-center justify-center h-12 px-8 rounded-lg bg-[#9BCBFF] text-black font-medium shadow-sm hover:shadow-md transition-all duration-200 hover:bg-[#8BB5E8] focus:outline-none focus:ring-2 focus:ring-[#9BCBFF] focus:ring-offset-2"
              >
                View Resume
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center justify-center h-12 px-8 rounded-lg border border-[rgba(0,0,0,0.08)] text-black font-medium hover:bg-[#F3F4F6] transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#9BCBFF] focus:ring-offset-2"
              >
                About
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

