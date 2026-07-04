export default function SectionTitle({ children, sub }: { children: React.ReactNode; sub?: string }) {
  return (
    <div className="mb-12">
      <h2 className="text-2xl sm:text-3xl font-bold text-white">{children}</h2>
      {sub && <p className="text-gray-400 text-sm mt-2">{sub}</p>}
    </div>
  );
}
