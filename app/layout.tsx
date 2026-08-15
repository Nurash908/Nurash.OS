import type {Metadata} from 'next';
import './globals.css'; // Global styles

export const metadata: Metadata = {
  title: "Nurash Weerasinghe — The Builder's Archive",
  description: "I build things I wish existed. AI, Education, Civic Tech, Productivity, and Digital Identity.",
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/icon.svg', type: 'image/svg+xml' },
    ],
    shortcut: ['/favicon.svg'],
    apple: [
      { url: '/apple-icon.svg', type: 'image/svg+xml' },
    ],
  },
  manifest: '/manifest.json',
  openGraph: {
    title: "Nurash Weerasinghe — The Builder's Archive",
    description: "I build things I wish existed. AI, Education, Civic Tech, Productivity, and Digital Identity.",
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Nurash Weerasinghe — The Builder's Archive",
    description: "I build things I wish existed. AI, Education, Civic Tech, Productivity, and Digital Identity.",
  },
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-icon.svg" />
      </head>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
