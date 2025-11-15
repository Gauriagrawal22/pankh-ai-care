export default function Home() {
  return (
    <div style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      justifyContent: 'center', 
      minHeight: '100vh',
      fontFamily: 'system-ui, sans-serif'
    }}>
      <h1>🩺 PankhAI Backend</h1>
      <p>Backend server is running on port 4000</p>
      <p>
        <a href="/api" style={{ color: '#0070f3', textDecoration: 'none' }}>
          View API Status →
        </a>
      </p>
    </div>
  );
}
