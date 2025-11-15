export const metadata = {
  title: 'PankhAI Backend',
  description: 'Backend API for PankhAI - Women\'s Health Companion',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
