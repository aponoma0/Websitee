/*
This file defines the Next.js root layout and shared metadata.
Edit it when the site-wide shell, metadata, or global styles change.
Copy it when you add another Next.js app shell in this project.
*/

import "./globals.css";

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
