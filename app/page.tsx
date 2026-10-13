export default function Home() {
  return (
    <section>
      <h1 className="text-3xl font-semibold text-white">Welcome to StoryScapeAI</h1>
      <p className="mt-4 text-muted-600">
        Phase 1 scaffold: minimal Next.js + TypeScript + Tailwind app shell. Start implementing features
        (characters, worlds, chat) in Phase 2.
      </p>

      <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div className="rounded-md bg-surface-800 p-6">
          <h3 className="font-medium">Get started</h3>
          <ol className="mt-2 list-decimal list-inside text-muted-600">
            <li>Set up .env with DATABASE_URL and any provider keys.</li>
            <li>Install dependencies and run <code>npm run dev</code>.</li>
            <li>Implement authentication and database migrations.</li>
          </ol>
        </div>

        <div className="rounded-md bg-surface-800 p-6">
          <h3 className="font-medium">Status</h3>
          <p className="mt-2 text-muted-600">Scaffold created. No production features implemented yet.</p>
        </div>
      </div>
    </section>
  );
}
