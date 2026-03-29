let audioCtx = null

function getCtx() {
  if (!audioCtx) audioCtx = new (window.AudioContext || window.webkitAudioContext)()
  return audioCtx
}

export function playEarrape() {
  const ctx = getCtx()
  const freqs = [80, 150, 333, 666, 999, 1337, 2000]
  const types = ['sawtooth', 'square', 'triangle', 'sawtooth']
  freqs.forEach((freq, i) => {
    const osc = ctx.createOscillator()
    const gain = ctx.createGain()
    osc.type = types[i % types.length]
    osc.frequency.setValueAtTime(freq, ctx.currentTime)
    osc.frequency.exponentialRampToValueAtTime(freq * (Math.random() * 3 + 0.5), ctx.currentTime + 0.8)
    gain.gain.setValueAtTime(0.07, ctx.currentTime)
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.8)
    osc.connect(gain).connect(ctx.destination)
    osc.start()
    osc.stop(ctx.currentTime + 0.8)
  })
}

export function playClick() {
  const ctx = getCtx()
  const osc = ctx.createOscillator()
  const gain = ctx.createGain()
  osc.type = 'square'
  osc.frequency.setValueAtTime(800, ctx.currentTime)
  osc.frequency.exponentialRampToValueAtTime(200, ctx.currentTime + 0.15)
  gain.gain.setValueAtTime(0.1, ctx.currentTime)
  gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.15)
  osc.connect(gain).connect(ctx.destination)
  osc.start()
  osc.stop(ctx.currentTime + 0.15)
}

export function playHover() {
  const ctx = getCtx()
  const osc = ctx.createOscillator()
  const gain = ctx.createGain()
  osc.type = 'sine'
  osc.frequency.setValueAtTime(1200 + Math.random() * 800, ctx.currentTime)
  gain.gain.setValueAtTime(0.04, ctx.currentTime)
  gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.08)
  osc.connect(gain).connect(ctx.destination)
  osc.start()
  osc.stop(ctx.currentTime + 0.08)
}

export function playSuccess() {
  const ctx = getCtx()
  const notes = [523, 659, 784, 1047]
  notes.forEach((freq, i) => {
    const osc = ctx.createOscillator()
    const gain = ctx.createGain()
    osc.type = 'square'
    osc.frequency.setValueAtTime(freq, ctx.currentTime + i * 0.12)
    gain.gain.setValueAtTime(0.06, ctx.currentTime + i * 0.12)
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + i * 0.12 + 0.2)
    osc.connect(gain).connect(ctx.destination)
    osc.start(ctx.currentTime + i * 0.12)
    osc.stop(ctx.currentTime + i * 0.12 + 0.25)
  })
}

export function playError() {
  const ctx = getCtx()
  const osc = ctx.createOscillator()
  const gain = ctx.createGain()
  osc.type = 'sawtooth'
  osc.frequency.setValueAtTime(200, ctx.currentTime)
  osc.frequency.exponentialRampToValueAtTime(50, ctx.currentTime + 0.5)
  gain.gain.setValueAtTime(0.12, ctx.currentTime)
  gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.5)
  osc.connect(gain).connect(ctx.destination)
  osc.start()
  osc.stop(ctx.currentTime + 0.5)
}

let musicPlaying = false
let musicInterval = null

export function startCursedMusic() {
  if (musicPlaying) return
  musicPlaying = true
  const ctx = getCtx()

  const bpm = 140
  const step = 60 / bpm

  const melody = [392, 0, 440, 0, 523, 0, 440, 392, 349, 0, 330, 0, 294, 0, 330, 349, 392, 0, 523, 0, 659, 0, 523, 392, 880, 0, 784, 0, 659, 0, 440, 0]
  const bass = [98, 98, 131, 131, 110, 110, 147, 147, 98, 98, 131, 131, 110, 110, 147, 147, 98, 98, 131, 131, 110, 110, 147, 147, 98, 98, 131, 131, 110, 110, 147, 147]

  function playLoop() {
    const now = ctx.currentTime
    melody.forEach((freq, i) => {
      if (freq === 0) return
      const osc = ctx.createOscillator()
      const gain = ctx.createGain()
      osc.type = 'square'
      osc.frequency.setValueAtTime(freq, now + i * step)
      gain.gain.setValueAtTime(0.05, now + i * step)
      gain.gain.exponentialRampToValueAtTime(0.001, now + i * step + step * 0.8)
      osc.connect(gain).connect(ctx.destination)
      osc.start(now + i * step)
      osc.stop(now + i * step + step * 0.9)
    })
    bass.forEach((freq, i) => {
      const osc = ctx.createOscillator()
      const gain = ctx.createGain()
      osc.type = 'sawtooth'
      osc.frequency.setValueAtTime(freq, now + i * step)
      gain.gain.setValueAtTime(0.04, now + i * step)
      gain.gain.exponentialRampToValueAtTime(0.001, now + i * step + step * 0.9)
      osc.connect(gain).connect(ctx.destination)
      osc.start(now + i * step)
      osc.stop(now + i * step + step)
    })
    for (let i = 0; i < melody.length; i += 2) {
      const osc = ctx.createOscillator()
      const gain = ctx.createGain()
      osc.type = 'sine'
      osc.frequency.setValueAtTime(150, now + i * step)
      osc.frequency.exponentialRampToValueAtTime(30, now + i * step + 0.1)
      gain.gain.setValueAtTime(0.12, now + i * step)
      gain.gain.exponentialRampToValueAtTime(0.001, now + i * step + 0.15)
      osc.connect(gain).connect(ctx.destination)
      osc.start(now + i * step)
      osc.stop(now + i * step + 0.2)
    }
    musicInterval = setTimeout(playLoop, melody.length * step * 1000)
  }

  playLoop()
}

export function stopCursedMusic() {
  musicPlaying = false
  if (musicInterval) clearTimeout(musicInterval)
}
