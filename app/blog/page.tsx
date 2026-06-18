export default function Blog() {
  return (
    <main className="pt-24 max-w-3xl mx-auto px-6 pb-20">
      <p className="text-xs font-semibold uppercase tracking-widest text-[#9898B8] mb-2">Writing</p>
      <h1 className="text-4xl font-bold text-[#1A1A2E] mb-2">Blog</h1>
      <p className="text-[#5A5A7A] mb-12">Thoughts on SRE, reliability engineering, and building Burnless.</p>
      <div className="bg-white border border-[#EDE5D8] rounded-xl p-12 text-center">
        <p className="text-4xl mb-4">✍️</p>
        <p className="font-semibold text-[#1A1A2E] mb-2">First post coming soon</p>
        <p className="text-sm text-[#9898B8]">Follow on GitHub or LinkedIn to get notified.</p>
      </div>
    </main>
  );
}
