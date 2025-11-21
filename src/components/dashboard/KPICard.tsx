import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { cn } from '@/lib/utils';

export default function KPICard({ title, value, subtitle, icon: Icon, trend, variant = 'default' }: any) {
  const variantStyles = {
    default: 'border-border',
    success: 'border-success bg-success/5',
    warning: 'border-secondary bg-secondary/5',
    critical: 'border-primary bg-primary/5'
  };

  return (
    <Card className={cn('border-2', variantStyles[variant])}>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium text-muted-foreground">
          {title}
        </CardTitle>
        {Icon && <Icon className="h-5 w-5 text-muted-foreground" />}
      </CardHeader>
      <CardContent>
        <div className="text-3xl font-bold">{value}</div>
        {subtitle && (
          <p className="text-xs text-muted-foreground mt-1">{subtitle}</p>
        )}
        {trend && (
          <p className={cn(
            "text-xs mt-2 font-medium",
            trend.direction === 'up' ? 'text-success' : 'text-primary'
          )}>
            {trend.direction === 'up' ? '↑' : '↓'} {trend.value}
          </p>
        )}
      </CardContent>
    </Card>
  );
}
