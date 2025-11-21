import { useEffect, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { fetchAuditLog } from '@/api/mockApi';
import { FileText } from 'lucide-react';

export default function AuditLog() {
  const [auditLog, setAuditLog] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      const data = await fetchAuditLog();
      setAuditLog(data);
    };
    loadData();
  }, []);

  const getActionColor = (actionType) => {
    if (actionType.includes('Approved') || actionType.includes('Active')) {
      return 'bg-success text-success-foreground';
    }
    if (actionType.includes('Suspended')) {
      return 'bg-secondary text-secondary-foreground';
    }
    if (actionType.includes('Revoked')) {
      return 'bg-primary text-primary-foreground';
    }
    return 'bg-muted text-muted-foreground';
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Audit Log</h1>
        <p className="text-muted-foreground mt-1">Complete record of governance actions and system events</p>
      </div>

      <Card>
        <CardHeader>
          <div className="flex items-center gap-2">
            <FileText className="w-5 h-5" />
            <CardTitle>Activity History</CardTitle>
          </div>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Timestamp</TableHead>
                <TableHead>Actor</TableHead>
                <TableHead>Action Type</TableHead>
                <TableHead>Target</TableHead>
                <TableHead>Notes / Reason</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {auditLog.map((entry) => (
                <TableRow key={entry.id}>
                  <TableCell className="text-sm">
                    {new Date(entry.timestamp).toLocaleString()}
                  </TableCell>
                  <TableCell className="font-medium">{entry.actor}</TableCell>
                  <TableCell>
                    <Badge className={getActionColor(entry.actionType)}>
                      {entry.actionType}
                    </Badge>
                  </TableCell>
                  <TableCell>{entry.target}</TableCell>
                  <TableCell className="text-sm text-muted-foreground max-w-md">
                    {entry.notes}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-base">Audit Log Information</CardTitle>
        </CardHeader>
        <CardContent className="text-sm text-muted-foreground space-y-2">
          <p>
            This log maintains a complete, immutable record of all governance actions taken within MARS Prime.
          </p>
          <p>
            All hospital status changes, permission modifications, and critical system events are automatically logged with timestamps, actors, and justifications.
          </p>
          <p className="text-xs pt-2 border-t">
            <strong>Note:</strong> Audit logs are retained for compliance and can be exported for regulatory reporting.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
