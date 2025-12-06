import { useFlashify } from '@ajmal_n/flashify-react'
import { useEffect, useMemo, useState } from 'react'
import './App.css'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

const flashifyLogo = '/logo-web.png'

function App() {
  const flash = useFlashify()
  const themes = useMemo(
    () => [
      {
        name: 'Aurora',
        gradient:
          'radial-gradient(120% 120% at 20% 20%, #5f9dff 0%, transparent 35%), radial-gradient(140% 140% at 80% 10%, #9b6bff 0%, transparent 40%), radial-gradient(120% 120% at 50% 60%, #4ad3c9 0%, transparent 45%), #1b2030',
      },
      {
        name: 'Sunset',
        gradient:
          'radial-gradient(120% 120% at 20% 20%, #ff9f7f 0%, transparent 35%), radial-gradient(140% 140% at 80% 10%, #ff5f7f 0%, transparent 40%), radial-gradient(120% 120% at 50% 60%, #ffd27f 0%, transparent 45%), #1f1630',
      },
      {
        name: 'Ocean',
        gradient:
          'radial-gradient(120% 120% at 20% 20%, #4ac1ff 0%, transparent 35%), radial-gradient(140% 140% at 80% 10%, #2f7bff 0%, transparent 40%), radial-gradient(120% 120% at 50% 60%, #18e0b5 0%, transparent 45%), #0f1d2b',
      },
    ],
    [],
  )
  const [themeIndex, setThemeIndex] = useState(0)

  useEffect(() => {
    const theme = themes[themeIndex]
    document.documentElement.style.setProperty('--bg-gradient', theme.gradient)
  }, [themeIndex, themes])

  return (
    <main className="screen">
      <header className="hero-block">
        <div className="brand-row">
          <img src={viteLogo} className="logo" alt="Vite logo" />
          <span className="divider">+</span>
          <img src={reactLogo} className="logo" alt="React logo" />
          <span className="divider">+</span>
          <img src={flashifyLogo} className="logo flashify-logo" alt="Flashify logo" />
        </div>
        <h1 className="hero">React + Flashify</h1>
        <p className="subtitle">Polished, animated notifications with zero setup.</p>
      </header>

      <section className="panel">
        <div className="panel-header">
          <h2>Try it out</h2>
          <p>Click any button to trigger a toast. Change the background to preview themes.</p>
          <label className="theme-picker">
            <span>Background</span>
            <select value={themeIndex} onChange={e => setThemeIndex(Number(e.target.value))}>
              {themes.map((t, idx) => (
                <option key={t.name} value={idx}>
                  {t.name}
                </option>
              ))}
            </select>
          </label>
        </div>

        <div className="ring">
          {[
            {
              label: 'Success toast',
              className: 'btn-success',
              onClick: () =>
                flash.success('SNJNSND!', {
                  description: 'Your changes have been saved successfully.',
                }),
            },
            {
              label: 'Error toast',
              className: 'btn-error',
              onClick: () =>
                flash.error('Error', {
                  description: 'Something went wrong. Please try again.',
                }),
            },
            {
              label: 'Warning toast',
              className: 'btn-warning',
              onClick: () =>
                flash.warning('Warning', {
                  description: 'This action may have unintended consequences.',
                }),
            },
            {
              label: 'Info toast',
              className: 'btn-info',
              onClick: () =>
                flash.info('Information', {
                  description: 'Here is some helpful information for you.',
                }),
            },
            {
              label: 'Custom toast',
              className: 'btn-custom',
              onClick: () =>
                flash.custom('Custom toast', {
                  description: <span><em>Supports rich JSX content.</em></span>,
                  customClassName: 'flashify-custom-glass',
                }),
            },
            {
              label: 'Bottom Right',
              className: 'btn-info',
              onClick: () => flash.custom('Bottom Right', { position: 'bottom-right' }),
            },
            {
              label: 'Sticky toast',
              className: 'btn-info',
              onClick: () => flash.custom('No auto-dismiss', { durationMs: 0 }),
            },
            {
              label: 'Loader toast',
              className: 'btn-warning',
              onClick: () =>
                flash.info('Loading...', {
                  description: 'We are processing your request.',
                  durationMs: 0,
                  customClassName: 'flashify-loading',
                }),
            },
          ].map((btn, idx, arr) => (
            <button
              key={btn.label}
              className={`pill ring-item ${btn.className}`}
              style={{ '--angle': `${(360 / arr.length) * idx}deg` }}
              onClick={btn.onClick}
            >
              {btn.label}
            </button>
          ))}
        </div>
      </section>
    </main>
  )
}

export default App
