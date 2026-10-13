'use client';
import React from 'react';

export default function Footer() {
  return (
    <footer className="w-full border-t border-surface-800 bg-surface-800">
      <div className="container mx-auto px-4 py-6 text-sm text-muted-600">© {new Date().getFullYear()} StoryScapeAI — Phase 1 scaffold</div>
    </footer>
  );
}
