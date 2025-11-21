import { useEffect, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import StatusBadge from '@/components/dashboard/StatusBadge';
import { fetchHospitals, updateHospitalStatus } from '@/api/mockApi';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Textarea } from '@/components/ui/textarea';
import { toast } from 'sonner';
import { MoreHorizontal } from 'lucide-react';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';

export default function HospitalGovernance() {
  const [hospitals, setHospitals] = useState([]);
  const [selectedHospital, setSelectedHospital] = useState(null);
  const [action, setAction] = useState(null);
  const [reason, setReason] = useState('');

  useEffect(() => {
    loadHospitals();
  }, []);

  const loadHospitals = async () => {
    const data = await fetchHospitals();
    setHospitals(data);
  };

  const handleAction = async () => {
    if (!reason.trim()) {
      toast.error('Please provide a reason');
      return;
    }

    await updateHospitalStatus(selectedHospital.id, action, reason);
    toast.success(`Hospital ${action.toLowerCase()} successfully`);
    
    setSelectedHospital(null);
    setAction(null);
    setReason('');
    loadHospitals();
  };

  const openActionDialog = (hospital, actionType) => {
    setSelectedHospital(hospital);
    setAction(actionType);
  };

  const statusCounts = {
    active: hospitals.filter(h => h.status === 'Active').length,
    suspended: hospitals.filter(h => h.status === 'Suspended').length,
    revoked: hospitals.filter(h => h.status === 'Revoked').length,
    pending: hospitals.filter(h => h.status === 'Pending').length
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Hospital Governance & Permissions</h1>
        <p className="text-muted-foreground mt-1">Manage hospital access and monitor compliance</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="pt-6">
            <p className="text-3xl font-bold text-success">{statusCounts.active}</p>
            <p className="text-sm text-muted-foreground mt-1">Active</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <p className="text-3xl font-bold text-secondary">{statusCounts.suspended}</p>
            <p className="text-sm text-muted-foreground mt-1">Suspended</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <p className="text-3xl font-bold text-primary">{statusCounts.revoked}</p>
            <p className="text-sm text-muted-foreground mt-1">Revoked</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <p className="text-3xl font-bold">{statusCounts.pending}</p>
            <p className="text-sm text-muted-foreground mt-1">Pending</p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Hospital Directory</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Hospital ID</TableHead>
                <TableHead>Name</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>Region</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Compliance</TableHead>
                <TableHead>Last Update</TableHead>
                <TableHead>Requests (30d)</TableHead>
                <TableHead>Alerts</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {hospitals.map((hospital) => (
                <TableRow key={hospital.id}>
                  <TableCell className="font-mono text-sm">{hospital.id}</TableCell>
                  <TableCell className="font-medium">{hospital.name}</TableCell>
                  <TableCell>
                    <Badge variant={hospital.type === 'Government' ? 'default' : 'outline'}>
                      {hospital.type}
                    </Badge>
                  </TableCell>
                  <TableCell>{hospital.region}</TableCell>
                  <TableCell>
                    <StatusBadge status={hospital.status} type="hospital" />
                  </TableCell>
                  <TableCell>
                    <Badge 
                      className={
                        hospital.complianceRating === 'A' ? 'bg-success text-success-foreground' :
                        hospital.complianceRating === 'B' ? 'bg-secondary text-secondary-foreground' :
                        'bg-primary text-primary-foreground'
                      }
                    >
                      {hospital.complianceRating}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-sm">
                    {new Date(hospital.lastInventoryUpdate).toLocaleDateString()}
                  </TableCell>
                  <TableCell>{hospital.stats.requestsLast30Days}</TableCell>
                  <TableCell>
                    <Badge variant={hospital.stats.alerts > 0 ? 'destructive' : 'outline'}>
                      {hospital.stats.alerts}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon">
                          <MoreHorizontal className="w-4 h-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end" className="bg-card">
                        {hospital.status === 'Pending' && (
                          <DropdownMenuItem onClick={() => openActionDialog(hospital, 'Approved')}>
                            Approve
                          </DropdownMenuItem>
                        )}
                        {hospital.status === 'Active' && (
                          <DropdownMenuItem onClick={() => openActionDialog(hospital, 'Suspended')}>
                            Suspend
                          </DropdownMenuItem>
                        )}
                        {hospital.status === 'Suspended' && (
                          <>
                            <DropdownMenuItem onClick={() => openActionDialog(hospital, 'Active')}>
                              Reinstate
                            </DropdownMenuItem>
                            <DropdownMenuItem onClick={() => openActionDialog(hospital, 'Revoked')}>
                              Revoke
                            </DropdownMenuItem>
                          </>
                        )}
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <Dialog open={!!action} onOpenChange={() => { setAction(null); setReason(''); }}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{action} Hospital</DialogTitle>
            <DialogDescription>
              You are about to {action?.toLowerCase()} {selectedHospital?.name}. Please provide a reason.
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4">
            <div className="p-4 bg-accent rounded-lg">
              <p className="text-sm text-muted-foreground">Hospital</p>
              <p className="font-medium">{selectedHospital?.name}</p>
              <p className="text-sm text-muted-foreground mt-2">Current Status</p>
              <StatusBadge status={selectedHospital?.status} type="hospital" />
            </div>
            <div>
              <label className="text-sm font-medium">Reason / Justification</label>
              <Textarea
                placeholder="Enter detailed reason for this action..."
                value={reason}
                onChange={(e) => setReason(e.target.value)}
                rows={4}
                className="mt-2"
              />
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => { setAction(null); setReason(''); }}>
              Cancel
            </Button>
            <Button onClick={handleAction}>
              Confirm {action}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
