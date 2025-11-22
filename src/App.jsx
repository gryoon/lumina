import { useState } from 'react'
import './App.css'

function App() {
  const [activeFeature, setActiveFeature] = useState(0)

  const features = [
    {
      title: "Glassmorphism",
      description: "Modern, frosted glass effects that add depth and elegance to your interface.",
      icon: "✨"
    },
    {
      title: "Smooth Gradients",
      description: "Vibrant, flowing colors that create a dynamic and immersive atmosphere.",
      icon: "🎨"
    },
    {
      title: "Micro-Animations",
      description: "Subtle motions that delight users and provide intuitive feedback.",
      icon: "🚀"
    }
  ]

  return (
    <div className="app">
      <nav className="glass" style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100, padding: '1rem 2rem' }}>
        <div className="container flex-center" style={{ justifyContent: 'space-between' }}>
          <h2 className="text-gradient" style={{ fontSize: '1.5rem', margin: 0 }}>Lumina</h2>
          <div style={{ display: 'flex', gap: '2rem' }}>
            <a href="#features" style={{ fontWeight: 500 }}>Features</a>
            <a href="#about" style={{ fontWeight: 500 }}>About</a>
            <button className="glass" style={{ padding: '0.5rem 1.5rem', borderRadius: 'var(--radius-full)', fontWeight: 600 }}>
              Get Started
            </button>
          </div>
        </div>
      </nav>

      <header style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', position: 'relative', overflow: 'hidden', paddingTop: '80px' }}>
        <div className="background-blobs" style={{ position: 'absolute', inset: 0, zIndex: -1 }}>
          <div style={{
            position: 'absolute', top: '20%', left: '10%', width: '300px', height: '300px',
            background: 'var(--color-primary)', borderRadius: '50%', filter: 'blur(100px)', opacity: 0.5
          }} className="animate-float" />
          <div style={{
            position: 'absolute', bottom: '20%', right: '10%', width: '400px', height: '400px',
            background: 'var(--color-secondary)', borderRadius: '50%', filter: 'blur(100px)', opacity: 0.4,
            animationDelay: '-3s'
          }} className="animate-float" />
        </div>

        <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>
          <div>
            <h1 style={{ fontSize: '4rem', marginBottom: '1.5rem' }}>
              Experience the <br />
              <span className="text-gradient">Future of Design</span>
            </h1>
            <p style={{ fontSize: '1.25rem', color: 'var(--color-text-muted)', marginBottom: '2.5rem', maxWidth: '500px' }}>
              Craft stunning digital experiences with our premium React template.
              Built for those who demand excellence.
            </p>
            <div style={{ display: 'flex', gap: '1rem' }}>
              <button className="animate-pulse-glow" style={{
                background: 'var(--gradient-main)', color: 'white', padding: '1rem 2.5rem',
                borderRadius: 'var(--radius-full)', fontSize: '1.1rem', fontWeight: 600,
                boxShadow: 'var(--shadow-glow)'
              }}>
                Start Building
              </button>
              <button className="glass" style={{
                padding: '1rem 2.5rem', borderRadius: 'var(--radius-full)',
                fontSize: '1.1rem', fontWeight: 600
              }}>
                Learn More
              </button>
            </div>
          </div>

          <div className="glass animate-float" style={{
            padding: '2rem', borderRadius: 'var(--radius-lg)',
            transform: 'perspective(1000px) rotateY(-10deg)',
            animationDelay: '-2s'
          }}>
            <div style={{ background: 'rgba(255,255,255,0.05)', borderRadius: 'var(--radius-md)', padding: '1.5rem', marginBottom: '1rem' }}>
              <div style={{ display: 'flex', gap: '1rem', marginBottom: '1rem' }}>
                <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#ff5f56' }} />
                <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#ffbd2e' }} />
                <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#27c93f' }} />
              </div>
              <div style={{ height: '8px', width: '60%', background: 'rgba(255,255,255,0.1)', borderRadius: '4px', marginBottom: '0.5rem' }} />
              <div style={{ height: '8px', width: '80%', background: 'rgba(255,255,255,0.1)', borderRadius: '4px' }} />
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
              <div style={{ height: '100px', background: 'rgba(255,255,255,0.05)', borderRadius: 'var(--radius-md)' }} />
              <div style={{ height: '100px', background: 'rgba(255,255,255,0.05)', borderRadius: 'var(--radius-md)' }} />
            </div>
          </div>
        </div>
      </header>

      <section id="features" style={{ padding: '8rem 0' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
            <h2 style={{ fontSize: '3rem' }}>Crafted to Perfection</h2>
            <p style={{ color: 'var(--color-text-muted)', fontSize: '1.2rem' }}>Every detail meticulously designed for impact.</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
            {features.map((feature, index) => (
              <div
                key={index}
                className="glass"
                onMouseEnter={() => setActiveFeature(index)}
                style={{
                  padding: '2.5rem',
                  borderRadius: 'var(--radius-lg)',
                  transition: 'transform 0.3s ease, border-color 0.3s ease',
                  transform: activeFeature === index ? 'translateY(-10px)' : 'none',
                  borderColor: activeFeature === index ? 'var(--color-primary)' : 'rgba(255,255,255,0.1)',
                  cursor: 'default'
                }}
              >
                <div style={{ fontSize: '3rem', marginBottom: '1.5rem' }}>{feature.icon}</div>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>{feature.title}</h3>
                <p style={{ color: 'var(--color-text-muted)' }}>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default App
