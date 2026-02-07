import Link from 'next/link';

export default function Navbar() {
  return (
    <nav style={{ 
      display: 'flex', 
      justifyContent: 'space-between', 
      padding: '1.5rem 10%', 
      alignItems: 'center', 
      backgroundColor: '#ffffff'
    }}>
      <div style={{ fontSize: '1.2rem', fontWeight: '700', letterSpacing: '2px' }}>
        PORTFOLIO
      </div>
      <div style={{ display: 'flex', gap: '40px' }}>
        <Link href="/" style={{ textDecoration: 'none', color: '#666', fontSize: '0.9rem' }}>HOME</Link>
        <Link href="/about" style={{ textDecoration: 'none', color: '#666', fontSize: '0.9rem' }}>ABOUT</Link>
        <Link href="/projects" style={{ textDecoration: 'none', color: '#666', fontSize: '0.9rem' }}>PROJECTS</Link>
      </div>
      <Link href="/contact" style={{ 
        border: '1px solid #000', 
        color: '#000', 
        padding: '8px 20px', 
        textDecoration: 'none',
        fontSize: '0.8rem',
        fontWeight: '600'
      }}>
        GET IN TOUCH
      </Link>
    </nav>
  );
}