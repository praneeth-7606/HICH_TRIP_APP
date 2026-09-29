import React from 'react';
import { Alert, Button } from 'react-bootstrap';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('ErrorBoundary caught an error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="container mt-5">
          <Alert variant="danger">
            <Alert.Heading>Oops! Something went wrong</Alert.Heading>
            <p>We're sorry for the inconvenience. Please try refreshing the page.</p>
            <hr />
            <div className="d-flex justify-content-end">
              <Button variant="outline-danger" onClick={() => window.location.reload()}>
                Refresh Page
              </Button>
            </div>
          </Alert>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;