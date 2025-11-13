import React from 'react'
import Spline from '@splinetool/react-spline'

function App() {
  const projects = [
    {
      title: 'Medical Image Segmentation',
      tagline: 'U-Net variants for organ delineation',
      stack: ['PyTorch', 'Monai', 'CUDA'],
      link: '#',
    },
    {
      title: 'Vision-Language Retrieval',
      tagline: 'CLIP fine-tuning for cross-modal search',
      stack: ['PyTorch', 'Transformers'],
      link: '#',
    },
    {
      title: 'RL for Robotics',
      tagline: 'Soft Actor-Critic for continuous control',
      stack: ['Gymnasium', 'PyTorch', 'JAX'],
      link: '#',
    },
  ]

  const publications = [
    {
      title: 'Self-Supervised Representations for Low-Data Vision Tasks',
      venue: 'Preprint',
      year: '2024',
      link: '#',
    },
    {
      title: 'Efficient Prompt Tuning for LLM-based QA Systems',
      venue: 'Workshop',
      year: '2023',
      link: '#',
    },
  ]

  return (
    <div className="min-h-screen bg-white text-gray-900" id="home">
      {/* Navbar */}
      <header className="fixed top-0 inset-x-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/70 border-b border-black/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <a href="#home" className="font-semibold tracking-tight">CS + AI Portfolio</a>
          <nav className="hidden md:flex items-center gap-6 text-sm text-gray-600">
            <a href="#about" className="hover:text-gray-900">About</a>
            <a href="#research" className="hover:text-gray-900">Research</a>
            <a href="#projects" className="hover:text-gray-900">Projects</a>
            <a href="#skills" className="hover:text-gray-900">Skills</a>
            <a href="#contact" className="hover:text-gray-900">Contact</a>
          </nav>
        </div>
      </header>

      {/* Hero with Spline cover */}
      <section className="relative h-[90vh] w-full overflow-hidden">
        <div className="absolute inset-0">
          <Spline scene="https://prod.spline.design/xzUirwcZB9SOxUWt/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-white via-white/40 to-transparent pointer-events-none" />
        <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-end pb-20">
          <div>
            <p className="text-sm uppercase tracking-widest text-gray-700/80">Computer Science & Engineering • AI Focus</p>
            <h1 className="mt-3 text-4xl sm:text-6xl font-semibold tracking-tight text-gray-900">
              Building Intelligent Systems
            </h1>
            <p className="mt-4 max-w-2xl text-gray-700">
              Interests: Computer Vision, Machine Learning, Natural Language Processing, Human-Computer Interaction, Reinforcement Learning, and Large Language Models.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="#projects" className="inline-flex items-center gap-2 rounded-md bg-gray-900 text-white px-4 py-2 text-sm hover:bg-black transition-colors">View Projects</a>
              <a href="#research" className="inline-flex items-center gap-2 rounded-md bg-white border border-gray-200 px-4 py-2 text-sm hover:bg-gray-50 transition-colors">Research</a>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-10 items-start">
            <div className="md:col-span-2">
              <h2 className="text-2xl font-semibold tracking-tight">About</h2>
              <p className="mt-4 text-gray-700 leading-relaxed">
                I am a Computer Science and Engineering graduate passionate about advancing AI research and building practical systems. My work spans perception, language, and decision making — with a focus on reliable, human-centered, and efficient models.
              </p>
            </div>
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-4">
              <h3 className="font-medium">Highlights</h3>
              <ul className="mt-3 space-y-2 text-sm text-gray-700">
                <li>• Research interests: CV, ML, NLP, HCI, RL, LLMs</li>
                <li>• Looking for roles in AI Research / ML Engineering</li>
                <li>• Open to collaborations and publications</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Research */}
      <section id="research" className="py-20 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold tracking-tight">Research</h2>
          <p className="mt-4 text-gray-700 max-w-3xl">
            I explore learning with limited supervision, alignment between modalities, and interactive systems that enable humans to guide AI behavior. I am particularly interested in representation learning, vision-language models, and reinforcement learning with human feedback.
          </p>
          <div className="mt-8 grid sm:grid-cols-2 gap-6">
            {publications.map((p, i) => (
              <a key={i} href={p.link} className="block rounded-xl border border-gray-200 hover:border-gray-300 hover:shadow-sm transition-all p-5">
                <div className="text-sm text-gray-500">{p.venue} • {p.year}</div>
                <div className="mt-1 font-medium text-gray-900">{p.title}</div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="py-20 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between gap-4">
            <h2 className="text-2xl font-semibold tracking-tight">Projects</h2>
            <a href="#contact" className="text-sm text-gray-600 hover:text-gray-900">Get in touch</a>
          </div>
          <div className="mt-8 grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
            {projects.map((p, i) => (
              <a key={i} href={p.link} className="group rounded-2xl border border-gray-200 hover:border-gray-300 transition-all p-5 hover:shadow-sm">
                <div className="flex items-center justify-between">
                  <h3 className="font-medium text-gray-900 group-hover:translate-x-0.5 transition-transform">{p.title}</h3>
                </div>
                <p className="mt-2 text-sm text-gray-600">{p.tagline}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {p.stack.map((s, idx) => (
                    <span key={idx} className="text-xs text-gray-700 bg-gray-100 rounded-full px-2 py-1">{s}</span>
                  ))}
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="py-20 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold tracking-tight">Skills</h2>
          <div className="mt-6 grid sm:grid-cols-3 gap-6 text-sm">
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-5">
              <div className="font-medium">AI & ML</div>
              <p className="mt-2 text-gray-700">PyTorch, TensorFlow, Transformers, Diffusers, RLlib</p>
            </div>
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-5">
              <div className="font-medium">Vision & NLP</div>
              <p className="mt-2 text-gray-700">OpenCV, Albumentations, Hugging Face, spaCy</p>
            </div>
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-5">
              <div className="font-medium">Engineering</div>
              <p className="mt-2 text-gray-700">Python, FastAPI, Docker, Git, Linux</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold tracking-tight">Contact</h2>
          <p className="mt-4 text-gray-700">Open to roles in AI research and ML engineering, collaborations, and mentorship.</p>
          <div className="mt-6 grid sm:grid-cols-2 gap-6">
            <a href="mailto:you@example.com" className="rounded-xl border border-gray-200 p-5 hover:shadow-sm hover:border-gray-300 transition-all">
              <div className="text-sm text-gray-500">Email</div>
              <div className="mt-1 font-medium text-gray-900">you@example.com</div>
            </a>
            <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" className="rounded-xl border border-gray-200 p-5 hover:shadow-sm hover:border-gray-300 transition-all">
              <div className="text-sm text-gray-500">LinkedIn</div>
              <div className="mt-1 font-medium text-gray-900">linkedin.com/in/your-profile</div>
            </a>
          </div>
          <div className="mt-10 text-xs text-gray-500">© {new Date().getFullYear()} Your Name. All rights reserved.</div>
        </div>
      </section>
    </div>
  )
}

export default App
