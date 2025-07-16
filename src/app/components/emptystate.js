import { Button } from 'react-bootstrap';
import { PlusOutlined } from '@ant-design/icons';

export default function EmptyState({ 
  title = 'No items found', 
  description = 'Get started by adding your first item',
  actionText = 'Add Item',
  onAction = () => {},
  icon = '📋'
}) {
  return (
    <div className="text-center py-5">
      <div className="mb-3" style={{ fontSize: '4rem' }}>
        {icon}
      </div>
      <h4 className="text-muted mb-2">{title}</h4>
      <p className="text-muted mb-4">{description}</p>
      <Button variant="primary" onClick={onAction}>
        <PlusOutlined className="me-2" />
        {actionText}
      </Button>
    </div>
  );
}
