import { useFlashify } from '@ajmal_n/flashify-react'
import { useEffect, useMemo, useState } from 'react'
import './App.css'
import reactLogo from './assets/react.svg'

const flashifyLogo = '/logo-web.png'

function App() {
  const flash = useFlashify()
  const defaultToastOptions = useMemo(
    () => ({
      durationMs: 4500,
    }),
    [],
  )
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
      {
        name: 'Midnight',
        gradient:
          'radial-gradient(120% 120% at 20% 20%, #1f2937 0%, transparent 35%), radial-gradient(140% 140% at 80% 10%, #0b1220 0%, transparent 40%), radial-gradient(120% 120% at 50% 60%, #111827 0%, transparent 45%), #05070d',
      },
      {
        name: 'Monochrome',
        gradient:
          'radial-gradient(120% 120% at 20% 20%, #3f3f46 0%, transparent 35%), radial-gradient(140% 140% at 80% 10%, #18181b 0%, transparent 40%), radial-gradient(120% 120% at 50% 60%, #0f172a 0%, transparent 45%), #0b0b0f',
      },
      {
        name: 'Warm Glow',
        gradient:
          'radial-gradient(120% 120% at 20% 20%, #ffe8d6 0%, transparent 32%), radial-gradient(140% 140% at 80% 10%, #ffb4a2 0%, transparent 36%), radial-gradient(120% 120% at 50% 60%, #ffc8dd 0%, transparent 42%), #2b193d',
      },
      {
        name: 'Glass Light',
        gradient:
          'radial-gradient(120% 120% at 20% 20%, rgba(255, 255, 255, 0.9) 0%, transparent 38%), radial-gradient(140% 140% at 80% 10%, rgba(210, 225, 255, 0.85) 0%, transparent 42%), radial-gradient(120% 120% at 50% 60%, rgba(233, 248, 255, 0.95) 0%, transparent 48%), #f6f8fb',
        textColor: '#0f172a',
        mutedColor: 'rgba(15, 23, 42, 0.7)',
        panelBg: 'rgba(255, 255, 255, 0.82)',
        panelBorder: 'rgba(15, 23, 42, 0.08)',
        chipBg: 'rgba(15, 23, 42, 0.05)',
        selectBg: '#e7ecf3',
        selectBorder: '#cfd8e3',
        panelShadow: '0 16px 40px rgba(15, 23, 42, 0.12)',
      },
      {
        name: 'Ink',
        gradient:
          'radial-gradient(120% 120% at 20% 20%, #1f1f2e 0%, transparent 35%), radial-gradient(140% 140% at 80% 10%, #0a0a0f 0%, transparent 40%), radial-gradient(120% 120% at 50% 60%, #11111a 0%, transparent 45%), #010104',
      },
    ],
    [],
  )
  const [themeIndex, setThemeIndex] = useState(0)

  useEffect(() => {
    const theme = themes[themeIndex]
    const defaults = {
      textColor: '#f8fbff',
      mutedColor: 'rgba(248, 251, 255, 0.82)',
      panelBg: 'rgba(255, 255, 255, 0.06)',
      panelBorder: 'rgba(255, 255, 255, 0.12)',
      chipBg: 'rgba(255, 255, 255, 0.07)',
      selectBg: 'rgba(255, 255, 255, 0.12)',
      selectBorder: 'rgba(255, 255, 255, 0.18)',
      panelShadow: '0 18px 50px rgba(0, 0, 0, 0.2)',
    }

    document.documentElement.style.setProperty('--bg-gradient', theme.gradient)
    document.documentElement.style.setProperty('--text-color', theme.textColor ?? defaults.textColor)
    document.documentElement.style.setProperty('--muted-color', theme.mutedColor ?? defaults.mutedColor)
    document.documentElement.style.setProperty('--panel-bg', theme.panelBg ?? defaults.panelBg)
    document.documentElement.style.setProperty('--panel-border', theme.panelBorder ?? defaults.panelBorder)
    document.documentElement.style.setProperty('--chip-bg', theme.chipBg ?? defaults.chipBg)
    document.documentElement.style.setProperty('--select-bg', theme.selectBg ?? defaults.selectBg)
    document.documentElement.style.setProperty('--select-border', theme.selectBorder ?? defaults.selectBorder)
    document.documentElement.style.setProperty('--panel-shadow', theme.panelShadow ?? defaults.panelShadow)
  }, [themeIndex, themes])

  return (
    <main className="screen">
      <header className="hero-block">
        <div className="brand-row">
          <img src={flashifyLogo} className="logo flashify-logo" alt="Flashify logo" />
          <span className="divider">×</span>
          <img src={reactLogo} className="logo" alt="React logo" />
        </div>
        <h1 className="hero">Flashify React Demo</h1>
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

        <div className="controls-grid">
          {[
            {
              label: 'Success toast',
              className: 'btn-success',
              onClick: () =>
                flash.success('SNJNSND!', {
                  description: 'Your changes have been saved successfully.',
                  ...defaultToastOptions,
                }),
            },
            {
              label: 'Error toast',
              className: 'btn-error',
              onClick: () =>
                flash.error('Error', {
                  description: 'Something went wrong. Please try again.',
                  ...defaultToastOptions,
                }),
            },
            {
              label: 'Warning toast',
              className: 'btn-warning',
              onClick: () =>
                flash.warning('Warning', {
                  description: 'This action may have unintended consequences.',
                  ...defaultToastOptions,
                }),
            },
            {
              label: 'Info toast',
              className: 'btn-info',
              onClick: () =>
                flash.info('Information', {
                  description: 'Here is some helpful information for you.',
                  ...defaultToastOptions,
                }),
            },
            {
              label: 'Custom toast',
              className: 'btn-custom',
              onClick: () =>
                flash.custom('Custom toast', {
                  description: <span><em>Supports rich JSX content.</em></span>,
                  customClassName: 'flashify-custom-glass',
                  ...defaultToastOptions,
                }),
            },
            {
              label: 'Bottom Right',
              className: 'btn-info',
              onClick: () =>
                flash.custom('Bottom Right', {
                  position: 'bottom-right',
                  ...defaultToastOptions,
                }),
            },
            {
              label: 'Auto-close toast',
              className: 'btn-info',
              onClick: () =>
                flash.custom('Auto-dismiss toast', {
                  ...defaultToastOptions,
                }),
            },
            {
              label: 'Loader toast',
              className: 'btn-warning',
              onClick: () =>
                flash.info('Loading...', {
                  description: 'We are processing your request.',
                  ...defaultToastOptions,
                  customClassName: 'flashify-loading',
                }),
            },
          ].map(btn => (
            <button
              key={btn.label}
              className={`pill control-btn ${btn.className}`}
              onClick={btn.onClick}
            >
              {btn.label}
            </button>
          ))}
        </div>

        <div className="stack">
          <p className="body">
            Flashify is a lightweight and framework-agnostic notification library. It lets you show
            clean and animated alerts (success, error, warning, info, custom) in React web app.
          </p>
          <div className="feature-list">
            <div className="feature">Works with any framework (core + simple wrappers)</div>
            <div className="feature">Success, Error, Warning, Info, Default, Custom notifications</div>
            <div className="feature">Smooth animations and modern UI</div>
            <div className="feature">Fully themeable using CSS variables or Tailwind</div>
            <div className="feature">Small bundle size and no external dependencies</div>
            <div className="feature">Comes with a React wrapper out of the box</div>
          </div>
        </div>
      </section>

      <footer className="footer">
        <span>Made with Love</span>
        <a href="https://ajmalnasumudeen.in/" target="_blank" rel="noreferrer">
          Ajmal Nasumudeen
        </a>
      </footer>
    </main>
  )
}

export default App
