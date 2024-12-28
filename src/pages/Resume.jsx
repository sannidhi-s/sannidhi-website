function Resume() {
    return (
      <section className="min-h-screen bg-white flex items-center justify-center">
        <div className="max-w-4xl mx-auto p-8 text-center">
          <h2 className="text-3xl font-light text-gray-800 mb-6">Resume</h2>
          <p className="text-gray-600 mb-8">
            View or download my full resume to learn more about my skills and qualifications.
          </p>
          <a 
            href="/path-to-your-resume.pdf" 
            className="inline-block bg-pink-600 text-white px-8 py-3 rounded-lg hover:bg-pink-700 transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            Download Resume
          </a>
        </div>
      </section>
    );
  }

  export default Resume;