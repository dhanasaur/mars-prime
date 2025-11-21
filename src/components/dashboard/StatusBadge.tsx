import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

export default function StatusBadge({ status, type = 'status' }: any) {
  const getVariant = () => {
    if (type === 'priority') {
      switch (status) {
        case 'Critical':
          return 'bg-primary text-primary-foreground';
        case 'High':
          return 'bg-secondary text-secondary-foreground';
        case 'Normal':
          return 'bg-muted text-muted-foreground';
        default:
          return 'bg-muted text-muted-foreground';
      }
    }

    if (type === 'request') {
      switch (status) {
        case 'Resolved':
          return 'bg-success text-success-foreground';
        case 'In-Progress':
          return 'bg-blue-500 text-white';
        case 'Escalated':
          return 'bg-secondary text-secondary-foreground';
        case 'Pending':
          return 'bg-yellow-500 text-white';
        case 'Rejected':
          return 'bg-muted text-muted-foreground';
        default:
          return 'bg-muted text-muted-foreground';
      }
    }

    if (type === 'hospital') {
      switch (status) {
        case 'Active':
          return 'bg-success text-success-foreground';
        case 'Suspended':
          return 'bg-secondary text-secondary-foreground';
        case 'Revoked':
          return 'bg-primary text-primary-foreground';
        case 'Pending':
          return 'bg-yellow-500 text-white';
        default:
          return 'bg-muted text-muted-foreground';
      }
    }

    if (type === 'severity') {
      switch (status) {
        case 'critical':
          return 'bg-primary text-primary-foreground';
        case 'warning':
          return 'bg-secondary text-secondary-foreground';
        case 'info':
          return 'bg-blue-500 text-white';
        default:
          return 'bg-muted text-muted-foreground';
      }
    }

    return 'bg-muted text-muted-foreground';
  };

  return (
    <Badge className={cn('font-medium', getVariant())}>
      {status}
    </Badge>
  );
}
