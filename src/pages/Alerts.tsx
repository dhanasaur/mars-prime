import { useEffect, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import StatusBadge from '@/components/dashboard/StatusBadge';
import { fetchAlerts } from '@/api/mockApi';
import { AlertTriangle, Activity, Info, Zap } from 'lucide-react';

export default function Alerts() {
  const [alerts, setAlerts] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      const data = await fetchAlerts();
      setAlerts(data);
    };
    loadData();
  }, []);

  const alertTypeCounts = {
    shortage: alerts.filter(a => a.type === 'shortage').length,
    'non-compliance': alerts.filter(a => a.type === 'non-compliance').length,
    system: alerts.filter(a => a.type === 'system').length,
    GDRA: alerts.filter(a => a.type === 'GDRA').length
  };

  const statusCounts = {
    open: alerts.filter(a => a.status === 'Open').length,
    acknowledged: alerts.filter(a => a.status === 'Acknowledged').length,
    resolved: alerts.filter(a => a.status === 'Resolved').length
  };

  const getIcon = (type) => {
    switch (type) {
      case 'shortage':
        return AlertTriangle;
      case 'GDRA':
        return Zap;
      case 'system':
        return Info;
      default:
        return Activity;
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Alerts, Compliance & Notifications</h1>
        <p className="text-muted-foreground mt-1">Monitor system alerts and compliance issues</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-3xl font-bold">{alertTypeCounts.shortage}</p>
                <p className="text-sm text-muted-foreground mt-1">Shortage Alerts</p>
              </div>
              <AlertTriangle className="w-8 h-8 text-primary" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-3xl font-bold">{alertTypeCounts['non-compliance']}</p>
                <p className="text-sm text-muted-foreground mt-1">Non-Compliance</p>
              </div>
              <Activity className="w-8 h-8 text-secondary" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-3xl font-bold">{alertTypeCounts.GDRA}</p>
                <p className="text-sm text-muted-foreground mt-1">GDRA (Disaster)</p>
              </div>
              <Zap className="w-8 h-8 text-primary" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-3xl font-bold">{statusCounts.open}</p>
                <p className="text-sm text-muted-foreground mt-1">Open Alerts</p>
              </div>
              <Info className="w-8 h-8 text-muted-foreground" />
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardContent className="pt-6">
            <p className="text-2xl font-bold text-primary">{statusCounts.open}</p>
            <p className="text-sm text-muted-foreground mt-1">Open</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <p className="text-2xl font-bold text-secondary">{statusCounts.acknowledged}</p>
            <p className="text-sm text-muted-foreground mt-1">Acknowledged</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <p className="text-2xl font-bold text-success">{statusCounts.resolved}</p>
            <p className="text-sm text-muted-foreground mt-1">Resolved</p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle>Alert Log</CardTitle>
            <Button variant="outline" className="gap-2">
              <Zap className="w-4 h-4" />
              Activate GDRA Mode
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Alert ID</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>Region</TableHead>
                <TableHead>Hospital</TableHead>
                <TableHead>Severity</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Created</TableHead>
                <TableHead>Description</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {alerts.map((alert) => {
                const Icon = getIcon(alert.type);
                return (
                  <TableRow key={alert.id}>
                    <TableCell className="font-mono text-sm">{alert.id}</TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <Icon className="w-4 h-4" />
                        <span className="capitalize">{alert.type}</span>
                      </div>
                    </TableCell>
                    <TableCell>{alert.region}</TableCell>
                    <TableCell>{alert.hospital || '-'}</TableCell>
                    <TableCell>
                      <StatusBadge status={alert.severity} type="severity" />
                    </TableCell>
                    <TableCell>
                      <StatusBadge status={alert.status} />
                    </TableCell>
                    <TableCell className="text-sm">
                      {new Date(alert.timeCreated).toLocaleString()}
                    </TableCell>
                    <TableCell className="text-sm max-w-xs truncate">
                      {alert.description}
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
