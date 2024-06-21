export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      {/* TODO: add nav here */}
      <div>nav</div>
      {children}
    </>
  );
}
