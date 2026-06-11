export default function Section({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="mx-auto w-full max-w-4xl px-6 py-14">
      <h2 className="mb-8 text-2xl font-bold tracking-tight text-white">
        <span className="text-accent">#</span> {title}
      </h2>
      {children}
    </section>
  );
}
