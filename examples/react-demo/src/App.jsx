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
  const installCommand = 'npm install @ajmal_n/flashify-react @ajmal_n/flashify-core'

  const handleCopyInstall = () => {
    navigator.clipboard?.writeText(installCommand)
    flash.info('Install command copied', { ...defaultToastOptions })
  }

  const IconCopy = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M9 9.5C9 8.672 9.672 8 10.5 8h7c.828 0 1.5.672 1.5 1.5v7c0 .828-.672 1.5-1.5 1.5h-7C9.672 18 9 17.328 9 16.5v-7Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6 14V6.5C6 5.672 6.672 5 7.5 5h7"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )

  const IconGithub = () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 2a10 10 0 0 0-3.162 19.493c.5.09.684-.216.684-.482 0-.237-.009-.866-.014-1.699-2.782.604-3.369-1.341-3.369-1.341-.454-1.155-1.11-1.463-1.11-1.463-.908-.62.069-.607.069-.607 1.003.07 1.53 1.03 1.53 1.03.893 1.53 2.343 1.088 2.914.833.09-.647.35-1.089.636-1.34-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.682-.103-.253-.446-1.272.098-2.65 0 0 .84-.269 2.75 1.025A9.566 9.566 0 0 1 12 6.844a9.56 9.56 0 0 1 2.5.337c1.91-1.294 2.748-1.025 2.748-1.025.545 1.378.202 2.397.1 2.65.64.698 1.027 1.59 1.027 2.682 0 3.842-2.339 4.687-4.566 4.935.36.31.68.923.68 1.861 0 1.343-.012 2.426-.012 2.756 0 .268.18.577.69.48A10 10 0 0 0 12 2Z"
        fill="currentColor"
      />
    </svg>
  )

  const IconNpm = () => (
    <svg width="20" height="20" viewBox="0 0 50 50" fill="none" aria-hidden="true">
      <path d="M2 14h46v22H26v4H14v-4H2V14Z" fill="#C12127" />
      <path d="M6 18h38v14H26v4h-8v-4H6V18Z" fill="#fff" />
      <path d="M10 22h6v10h-4v-6h-2v-4Zm8 0h6v14h-4V24h-2v-2Zm8 0h10v10h-6v6h-4V22Zm6 4v2h2v-2h-2Z" fill="#C12127" />
    </svg>
  )

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
            clean and animated alerts (success, error, warning, info, custom) in React web app. See{' '}
            <a
              className="link"
              href="https://www.npmjs.com/package/@ajmal_n/flashify-react"
              target="_blank"
              rel="noreferrer"
            >
              @ajmal_n/flashify-react on npm
            </a>
            . Open source and open for contributions.
          </p>
          <div className="meta-row">
            <div className="code-block">
              <code>{installCommand}</code>
            </div>
            <button className="copy-btn" type="button" onClick={handleCopyInstall}>
              <IconCopy /> Copy
            </button>
            <a
              className="ghost-btn"
              href="https://github.com/stormdotcom?tab=repositories"
              target="_blank"
              rel="noreferrer"
            >
              <IconGithub /> GitHub
            </a>
            <a
              className="ghost-btn"
              href="https://www.npmjs.com/package/@ajmal_n/flashify-react"
              target="_blank"
              rel="noreferrer"
            >
              <IconNpm /> npm
            </a>
          </div>
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
        <span>Made with ❤️</span>
        <a href="https://ajmalnasumudeen.in/" target="_blank" rel="noreferrer">
          Ajmal Nasumudeen
        </a>
      </footer>
    </main>
  )
}

export default App
