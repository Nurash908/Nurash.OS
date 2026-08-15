import type {Metadata} from 'next';
import './globals.css'; // Global styles

export const metadata: Metadata = {
  title: "Nurash Weerasinghe — The Builder's Archive",
  description: "I build things I wish existed. AI, Education, Civic Tech, Productivity, and Digital Identity.",
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
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
