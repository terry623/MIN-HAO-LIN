export default function ArticlesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <section className="px-8 lg:px-32 pb-8">{children}</section>;
}
