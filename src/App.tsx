import { useState, useEffect, useCallback } from 'react'
import { AnimatePresence } from 'framer-motion'
import { img } from './utils/paths'
import './App.css'

import LoadingScreen from './components/LoadingScreen'
import ErrorScreen from './components/ErrorScreen'
import GateScreen from './components/GateScreen'
import GuideScreen from './components/GuideScreen'
import HeroSection from './components/HeroSection'
import AboutSection from './components/AboutSection'
import KeywordSection from './components/KeywordSection'
import ShootSection from './components/ShootSection'
import TimelineSection from './components/TimelineSection'
import RhythmSection from './components/RhythmSection'
import InfoTable from './components/InfoTable'
import NpcGrid from './components/NpcGrid'
import PhotoBreak from './components/PhotoBreak'
import ReviewSection from './components/ReviewSection'
import AudienceSection from './components/AudienceSection'
import FooterSection from './components/FooterSection'
import FloatingCTA from './components/FloatingCTA'

type AppState = 'loading' | 'ready' | 'error'
type EntryPhase = 'gate' | 'guide' | 'main'

function App() {
  const [appState, setAppState] = useState<AppState>('loading')
  const [entryPhase, setEntryPhase] = useState<EntryPhase>('gate')

  useEffect(() => {
    const timer = setTimeout(() => {
      setAppState('ready')
    }, 600)
    return () => clearTimeout(timer)
  }, [])

  const handleRetry = useCallback(() => {
    setAppState('loading')
    setTimeout(() => setAppState('ready'), 600)
  }, [])

  const handleGateEnter = useCallback(() => {
    setEntryPhase('guide')
  }, [])

  const handleGuideEnter = useCallback(() => {
    setEntryPhase('main')
    document.body.style.overflow = ''
  }, [])

  if (appState === 'error') {
    return <ErrorScreen onRetry={handleRetry} />
  }

  const showMain = entryPhase === 'main'

  return (
    <div className="opcamp relative min-h-screen bg-[#071522] overflow-x-hidden">
      {/* Animated background */}
      <div className="global-backdrop fixed inset-0 z-0 pointer-events-none">
        <div
          className="global-bg global-bg-city absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `url(${img('images/bg-city-bubbles.png')})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
      </div>

      <AnimatePresence>
        {appState === 'loading' && <LoadingScreen />}
      </AnimatePresence>

      <AnimatePresence>
        {entryPhase === 'gate' && <GateScreen onEnter={handleGateEnter} />}
      </AnimatePresence>

      <AnimatePresence>
        {entryPhase === 'guide' && <GuideScreen onEnter={handleGuideEnter} />}
      </AnimatePresence>

      <div className={`relative z-10 transition-opacity duration-500 ${showMain ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
        <HeroSection />
        <AboutSection />
        <KeywordSection />
        <ShootSection />
        <TimelineSection />
        <RhythmSection />
        <InfoTable />
        <NpcGrid />
        <PhotoBreak />
        <ReviewSection />
        <AudienceSection />
        <FooterSection />
      </div>

      {showMain && <FloatingCTA />}
    </div>
  )
}

export default App
