import React from 'react';
import Link from 'next/link';

export default function GlobalError({ error }: { error: Error & { digest?: string } }) {
  return (
    <html>
      <body style={{ background: '#fff', color: '#3F0F3F', minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
        <h1 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '1rem' }}>Something went wrong</h1>
        <p style={{ fontSize: '1.25rem', marginBottom: '2rem' }}>Sorry, an unexpected error occurred. Please try again or return to the homepage.</p>
        <Link href="/" style={{ color: '#4A164B', fontWeight: 600, textDecoration: 'underline', fontSize: '1.1rem' }}>Go to Homepage</Link>
        {error?.digest && <pre style={{ marginTop: '2rem', color: '#888', fontSize: '0.9rem' }}>{error.digest}</pre>}
      </body>
    </html>
  );
} 