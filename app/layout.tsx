import './globals.css';
import React from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

export const metadata = {
  title: 'StoryScapeAI',
  description: 'Multilingual AI-powered roleplay and storytelling'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-bg-900 text-white antialiased">
        <div className="flex min-h-screen flex-col">
          <NavBar />
          <main className="flex-1 container mx-auto px-4 py-8">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
