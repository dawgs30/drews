import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ResumeViewer from '../components/ResumeViewer';

export default function Resume() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        <div className="mx-auto max-w-[1100px] px-6 py-20">
          <div className="mb-8 animate-fade-in">
            <h1 className="text-5xl font-semibold text-black mb-4">Resume</h1>
            <p className="text-lg text-gray-600">
              View or download my resume below.
            </p>
          </div>
          <div className="animate-fade-in" style={{ animationDelay: '0.1s' }}>
            <ResumeViewer />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

