import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export const size = {
  width: 180,
  height: 180,
};
export const contentType = 'image/png';

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(145deg, #1f1f23 0%, #09090b 100%)',
          borderRadius: '40px',
          border: '6px solid #F59E0B',
          boxShadow: '0 0 40px rgba(245, 158, 11, 0.3)',
        }}
      >
        <div
          style={{
            fontSize: '104px',
            fontWeight: 900,
            color: '#FBBF24',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            lineHeight: 1,
          }}
        >
          N
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
