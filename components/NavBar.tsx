'use client';
import React from 'react';

export default function NavBar() {
  return (
    <header className="w-full border-b border-surface-800 bg-surface-800">
      <div className="container mx-auto flex items-center justify-between px-4 py-3">
        <div className="flex items-center space-x-3">
          <div className="h-8 w-8 rounded-md bg-accent-blue/20 flex items-center justify-center text-accent-blue font-bold">S</div>
          <span className="font-semibold">StoryScapeAI</span>
        </div>

        <nav className="hidden space-x-4 sm:flex">
          <a className="text-muted-600 hover:text-white" href="#">Home</a>
          <a className="text-muted-600 hover:text-white" href="#">Characters</a>
          <a className="text-muted-600 hover:text-white" href="#">Worlds</a>
          <a className="text-muted-600 hover:text-white" href="#">Favorites</a>
          <a className="text-muted-600 hover:text-white" href="#">Settings</a>
        </nav>

        <div className="flex items-center space-x-3">
          <button className="rounded-md bg-accent-blue px-3 py-1 text-sm font-medium text-black">Sign in</button>
        </div>
      </div>
    </header>
  );
}
