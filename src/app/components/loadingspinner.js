import { Spinner } from 'react-bootstrap';

export default function LoadingSpinner({ size = 'sm', variant = 'primary', text = 'Loading...' }) {
  return (
    <div className="d-flex align-items-center justify-content-center p-3">
      <Spinner animation="border" size={size} variant={variant} className="me-2" />
      <span className="text-muted">{text}</span>
    </div>
  );
}