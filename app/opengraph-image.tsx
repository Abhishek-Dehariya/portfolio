import { ImageResponse } from 'next/og'

export const alt = 'Abhishek Dehariya — 59 MW solar asset management and energy software'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '64px 72px',
          color: '#f8fafc',
          background: 'linear-gradient(135deg, #08111e 0%, #101b2d 58%, #19202d 100%)',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
          <div style={{ width: 18, height: 18, borderRadius: 99, background: '#fb7185' }} />
          <div style={{ fontSize: 22, color: '#cbd5e1', letterSpacing: 3 }}>SOLAR OPERATIONS · ENERGY SOFTWARE</div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
          <div style={{ fontSize: 70, fontWeight: 700, letterSpacing: -2 }}>Abhishek Dehariya</div>
          <div style={{ fontSize: 32, color: '#fda4af' }}>59 MW solar asset management</div>
          <div style={{ fontSize: 28, color: '#cbd5e1' }}>Building with Next.js &amp; TypeScript</div>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', color: '#94a3b8', fontSize: 22 }}>
          <span>MP · Rajasthan · Gujarat</span>
          <span>abhishekdehariya.com</span>
        </div>
      </div>
    ),
    { ...size }
  )
}
