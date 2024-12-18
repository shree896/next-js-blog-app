import Link from 'next/link';
import '../styles/globals.css';

export default function Layout({ children }) {
  return (
    <div>
      <header>
        <nav>
          <Link href="/">Home</Link>
        </nav>
      </header>
      <main style={{ padding: '2rem 1rem', minHeight: '80vh' }}>{children}</main>
      <footer>© 2024 Blog App | All Rights Reserved</footer>
    </div>
  );
}
