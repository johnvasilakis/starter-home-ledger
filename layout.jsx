export const metadata = {
  title: "The Starter Home Ledger",
  description: "What it takes to actually build entry-level homes today.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, fontFamily: "Arial, sans-serif", background: "#fafaf9", color: "#1c1917" }}>
        {children}
      </body>
    </html>
  );
}
