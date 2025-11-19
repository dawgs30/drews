'use client';

import { useState, useEffect } from 'react';

export default function ResumeViewer() {
  const [resumeExists, setResumeExists] = useState(false);

  useEffect(() => {
    // Check if resume PDF exists
    fetch('/resume.pdf', { method: 'HEAD' })
      .then((res) => setResumeExists(res.ok))
      .catch(() => setResumeExists(false));
  }, []);

  return (
    <div className="w-full">
      {resumeExists ? (
        <div className="space-y-6">
          <div className="border border-[rgba(0,0,0,0.08)] rounded-lg overflow-hidden shadow-sm bg-white">
            <iframe
              src="/resume.pdf"
              className="w-full h-[800px]"
              title="Drew Blackwell Resume"
            />
          </div>
          <div className="flex justify-center">
            <a
              href="/resume.pdf"
              download
              className="inline-flex items-center justify-center h-12 px-8 rounded-lg bg-[#9BCBFF] text-black font-medium shadow-sm hover:shadow-md transition-all duration-200 hover:bg-[#8BB5E8] focus:outline-none focus:ring-2 focus:ring-[#9BCBFF] focus:ring-offset-2"
            >
              Download Resume
            </a>
          </div>
        </div>
      ) : (
        <div className="space-y-6">
          <div className="border border-[rgba(0,0,0,0.08)] rounded-lg p-16 bg-[#F3F4F6] text-center">
            <p className="text-lg text-gray-600 mb-4">
              Resume PDF will appear here once added.
            </p>
            <p className="text-sm text-gray-500">
              To add your resume, place a PDF file named &quot;resume.pdf&quot; in the{' '}
              <code className="bg-white px-2 py-1 rounded text-xs">/public</code> directory.
            </p>
          </div>
          <div className="flex justify-center">
            <button
              disabled
              className="inline-flex items-center justify-center h-12 px-8 rounded-lg bg-gray-300 text-gray-500 font-medium cursor-not-allowed"
            >
              Download Resume
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

