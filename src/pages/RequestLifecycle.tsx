import { useEffect, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import StatusBadge from '@/components/dashboard/StatusBadge';
import { fetchRequests } from '@/api/mockApi';
import { Clock } from 'lucide-react';

export default function RequestLifecycle() {
  const [requests, setRequests] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      const data = await fetchRequests();
      setRequests(data);
    };
    loadData();
  }, []);

  const statusGroups = {
    'Pending': requests.filter(r => r.status === 'Pending'),
    'In-Progress': requests.filter(r => r.status === 'In-Progress'),
    'Escalated': requests.filter(r => r.status === 'Escalated'),
    'Resolved': requests.filter(r => r.status === 'Resolved'),
    'Rejected': requests.filter(r => r.status === 'Rejected')
  };

  const getTimeSince = (timeString) => {
    const minutes = Math.floor((new Date().getTime() - new Date(timeString).getTime()) / 60000);
    if (minutes < 60) return `${minutes}m ago`;
    const hours = Math.floor(minutes / 60);
    if (hours < 24) return `${hours}h ago`;
    return `${Math.floor(hours / 24)}d ago`;
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Request Lifecycle Tracker</h1>
        <p className="text-muted-foreground mt-1">Visual tracking of all blood requests and their current status</p>
      </div>

      <div className="grid grid-cols-5 gap-4 mb-6">
        {Object.entries(statusGroups).map(([status, items]) => (
          <Card key={status} className="text-center">
            <CardContent className="pt-6">
              <p className="text-3xl font-bold">{items.length}</p>
              <p className="text-sm text-muted-foreground mt-1">{status}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {Object.entries(statusGroups).map(([status, items]) => (
          <div key={status} className="space-y-3">
            <div className="flex items-center justify-between">
              <h3 className="font-semibold text-sm">{status}</h3>
              <StatusBadge status={status} type="request" />
            </div>
            <div className="space-y-2 max-h-[calc(3*180px)] overflow-y-auto pr-1">
              {items.map((request) => (
                <Card key={request.id} className="p-4 hover:shadow-md transition-shadow cursor-pointer">
                  <div className="space-y-2">
                    <div className="flex items-start justify-between">
                      <p className="font-mono text-xs text-muted-foreground">{request.id}</p>
                      <StatusBadge status={request.priority} type="priority" />
                    </div>
                    
                    <div>
                      <p className="font-medium text-sm">{request.hospitalName}</p>
                      <p className="text-xs text-muted-foreground">{request.region}</p>
                    </div>

                    <div className="flex items-center justify-between">
                      <Badge variant="outline" className="text-xs">
                        {request.bloodGroup}
                      </Badge>
                      <span className="text-xs text-muted-foreground">{request.gprsTier}</span>
                    </div>

                    <div className="flex items-center gap-1 text-xs text-muted-foreground pt-2 border-t">
                      <Clock className="w-3 h-3" />
                      <span>{getTimeSince(request.requestTime)}</span>
                    </div>
                  </div>
                </Card>
              ))}
              {items.length === 0 && (
                <p className="text-sm text-muted-foreground text-center py-8">No requests</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
