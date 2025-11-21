import { useEffect, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import StatusBadge from '@/components/dashboard/StatusBadge';
import { fetchRequests } from '@/api/mockApi';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';

export default function DonationsAnalytics() {
  const [requests, setRequests] = useState([]);
  const [selectedRequest, setSelectedRequest] = useState(null);

  useEffect(() => {
    const loadData = async () => {
      const data = await fetchRequests();
      setRequests(data);
    };
    loadData();
  }, []);

  const resolvedRequests = requests.filter(r => r.timeTaken);
  const avgTimeToDonation = resolvedRequests.reduce((acc, r) => acc + r.timeTaken, 0) / resolvedRequests.length || 0;
  
  const timeDistribution = [
    { range: '0-30 min', count: resolvedRequests.filter(r => r.timeTaken <= 30).length },
    { range: '30-60 min', count: resolvedRequests.filter(r => r.timeTaken > 30 && r.timeTaken <= 60).length },
    { range: '60-120 min', count: resolvedRequests.filter(r => r.timeTaken > 60 && r.timeTaken <= 120).length },
    { range: '120+ min', count: resolvedRequests.filter(r => r.timeTaken > 120).length }
  ];

  const tierBreakdown = [
    { tier: 'Tier 1', count: requests.filter(r => r.gprsTier === 'Tier 1').length },
    { tier: 'Tier 2', count: requests.filter(r => r.gprsTier === 'Tier 2').length },
    { tier: 'Tier 3', count: requests.filter(r => r.gprsTier === 'Tier 3').length }
  ];

  const formatTimeline = (request) => {
    if (!request) return [];
    
    const timeline = [
      { step: 'Request Logged', time: request.requestTime, completed: true, duration: undefined }
    ];
    
    if (request.donorConfirmTime) {
      const durationMinutes = Math.round((new Date(request.donorConfirmTime).getTime() - new Date(request.requestTime).getTime()) / 60000);
      timeline.push({ 
        step: 'Donor Confirmed', 
        time: request.donorConfirmTime, 
        completed: true,
        duration: `${durationMinutes} min`
      });
    }
    
    if (request.donationCompleteTime) {
      const durationMinutes = Math.round((new Date(request.donationCompleteTime).getTime() - new Date(request.donorConfirmTime).getTime()) / 60000);
      timeline.push({ 
        step: 'Donation Complete', 
        time: request.donationCompleteTime, 
        completed: true,
        duration: `${durationMinutes} min`
      });
    }
    
    return timeline;
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Donations & Time Analytics</h1>
        <p className="text-muted-foreground mt-1">Detailed analysis of request-donation cycles and timing</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Avg Time to Donation</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">{Math.round(avgTimeToDonation)} min</p>
            <p className="text-xs text-muted-foreground mt-1">Across all resolved requests</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Critical SLA Compliance</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold text-success">
              {Math.round((resolvedRequests.filter(r => r.priority === 'Critical' && r.timeTaken <= 60).length / 
                resolvedRequests.filter(r => r.priority === 'Critical').length) * 100) || 0}%
            </p>
            <p className="text-xs text-muted-foreground mt-1">Under 60 minutes</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Total Requests</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">{requests.length}</p>
            <p className="text-xs text-muted-foreground mt-1">{resolvedRequests.length} resolved</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Time-to-Donation Distribution</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={250}>
              <BarChart data={timeDistribution}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="range" tick={{ fontSize: 12 }} />
                <YAxis />
                <Tooltip />
                <Bar dataKey="count" fill="hsl(var(--primary))" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Requests by GPRS Tier</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={250}>
              <BarChart data={tierBreakdown}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="tier" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="count" fill="hsl(var(--secondary))" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Recent Request-Donation Cycles</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Request ID</TableHead>
                <TableHead>Hospital</TableHead>
                <TableHead>Region</TableHead>
                <TableHead>Blood Group</TableHead>
                <TableHead>Priority</TableHead>
                <TableHead>GPRS Tier</TableHead>
                <TableHead>Time Taken</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {requests.map((request) => (
                <TableRow 
                  key={request.id} 
                  className="cursor-pointer hover:bg-accent"
                  onClick={() => setSelectedRequest(request)}
                >
                  <TableCell className="font-mono text-sm">{request.id}</TableCell>
                  <TableCell>{request.hospitalName}</TableCell>
                  <TableCell>{request.region}</TableCell>
                  <TableCell>
                    <Badge variant="outline">{request.bloodGroup}</Badge>
                  </TableCell>
                  <TableCell>
                    <StatusBadge status={request.priority} type="priority" />
                  </TableCell>
                  <TableCell>{request.gprsTier}</TableCell>
                  <TableCell>
                    {request.timeTaken ? `${request.timeTaken} min` : '-'}
                  </TableCell>
                  <TableCell>
                    <StatusBadge status={request.status} type="request" />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <Dialog open={!!selectedRequest} onOpenChange={() => setSelectedRequest(null)}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle>Request Timeline - {selectedRequest?.id}</DialogTitle>
            <DialogDescription>
              Detailed view of request lifecycle and timing
            </DialogDescription>
          </DialogHeader>
          {selectedRequest && (
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4 p-4 bg-accent rounded-lg">
                <div>
                  <p className="text-sm text-muted-foreground">Hospital</p>
                  <p className="font-medium">{selectedRequest.hospitalName}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Blood Group</p>
                  <p className="font-medium">{selectedRequest.bloodGroup}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Priority</p>
                  <StatusBadge status={selectedRequest.priority} type="priority" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">GPRS Tier</p>
                  <p className="font-medium">{selectedRequest.gprsTier}</p>
                </div>
              </div>

              <div className="space-y-3">
                <h4 className="font-semibold">Timeline</h4>
                {formatTimeline(selectedRequest).map((step, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-3 h-3 rounded-full bg-primary mt-1"></div>
                    <div className="flex-1">
                      <p className="font-medium">{step.step}</p>
                      <p className="text-sm text-muted-foreground">
                        {new Date(step.time).toLocaleString()}
                        {step.duration && ` • ${step.duration} elapsed`}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {selectedRequest.timeTaken && (
                <div className="p-4 bg-success/10 border border-success rounded-lg">
                  <p className="text-sm text-muted-foreground">Total Time Taken</p>
                  <p className="text-2xl font-bold text-success">{selectedRequest.timeTaken} minutes</p>
                </div>
              )}
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
