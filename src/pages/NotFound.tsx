export default function NotFound() {
  return (
    <main className="grid min-h-[60vh] place-items-center px-5 text-center">
      <div>
        <h1 className="text-5xl font-extrabold">Page not found</h1>
        <p className="mt-3 text-ink/70">The page you are looking for does not exist.</p>
        <a href="/" className="mt-6 inline-block rounded-full bg-cobalt px-6 py-3 font-semibold text-white hover:brightness-125">Back to home</a>
      </div>
    </main>
  )
}
