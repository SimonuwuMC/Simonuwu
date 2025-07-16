import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

// Import components with error boundaries
const App = React.lazy(() => import('./App').catch(() => ({ default: () => <div>Error loading main app</div> })));

// Error Boundary Component
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{ padding: '20px', textAlign: 'center' }}>
          <h1>Something went wrong.</h1>
          <p>Error: {this.state.error?.message}</p>
          <button onClick={() => window.location.reload()}>Reload Page</button>
        </div>
      );
    }

    return this.props.children;
  }
}

// Loading component
const Loading = () => (
  <div style={{ 
    display: 'flex', 
    justifyContent: 'center', 
    alignItems: 'center', 
    height: '100vh',
    fontSize: '18px'
  }}>
    Loading...
  </div>
);

const root = ReactDOM.createRoot(document.getElementById('root'));

// Render with error boundary and suspense
root.render(
  <React.StrictMode>
    <ErrorBoundary>
      <React.Suspense fallback={<Loading />}>
        <App />
      </React.Suspense>
    </ErrorBoundary>
  </React.StrictMode>
);

// Add error logging for debugging
window.addEventListener('error', (event) => {
  console.error('Global error:', event.error);
});

window.addEventListener('unhandledrejection', (event) => {
  console.error('Unhandled promise rejection:', event.reason);
});