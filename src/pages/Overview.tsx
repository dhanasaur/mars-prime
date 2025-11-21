import { useEffect, useState } from 'react';
import { Activity, Building2, Users, Clock, Download } from 'lucide-react';
import KPICard from '@/components/dashboard/KPICard';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { BarChart, Bar, LineChart, Line, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { fetchHospitals, fetchDonorStats, fetchInventoryStats, fetchRequests, fetchDailyDonations } from '@/api/mockApi';
import { toast } from 'sonner';

const COLORS = ['hsl(var(--primary))', 'hsl(var(--secondary))', 'hsl(var(--success))', 'hsl(var(--accent))'];

export default function Overview() {
  const [hospitals, setHospitals] = useState([]);
  const [donorStats, setDonorStats] = useState(null);
  const [inventoryStats, setInventoryStats] = useState(null);
  const [requests, setRequests] = useState([]);
  const [dailyDonations, setDailyDonations] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      const [hospitalData, donorData, inventoryData, requestData, donationData] = await Promise.all([
        fetchHospitals(),
        fetchDonorStats(),
        fetchInventoryStats(),
        fetchRequests(),
        fetchDailyDonations()
      ]);
      
      setHospitals(hospitalData);
      setDonorStats(donorData);
      setInventoryStats(inventoryData);
      setRequests(requestData);
      setDailyDonations(donationData);
    };
    
    loadData();
  }, []);

  const activeHospitals = hospitals.filter(h => h.status === 'Active').length;
  const criticalRequests = requests.filter(r => r.priority === 'Critical' && r.status !== 'Resolved').length;
  const avgTimeToDonation = requests
    .filter(r => r.timeTaken)
    .reduce((acc, r) => acc + r.timeTaken, 0) / requests.filter(r => r.timeTaken).length || 0;

  const bloodGroupData = inventoryStats?.byBloodGroup.map(item => ({
    name: item.group,
    Available: item.available,
    Required: item.required
  })) || [];

  const downloadReport = (period: string) => {
    const reportData = {
      period,
      generatedAt: new Date().toISOString(),
      summary: {
        activeHospitals,
        totalDonors: donorStats?.totalRegistered,
        criticalRequests,
        avgTimeToDonation: Math.round(avgTimeToDonation),
      },
      inventory: inventoryStats,
      donorMetrics: donorStats,
      dailyDonations,
    };

    const blob = new Blob([JSON.stringify(reportData, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `MARS-Prime-Report-${period}-${new Date().toISOString().split('T')[0]}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    toast.success(`${period} report downloaded successfully`);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-start justify-between">
        <div>
          <h1 className="text-3xl font-bold">Overview Dashboard</h1>
          <p className="text-muted-foreground mt-1">Real-time monitoring of the blood management ecosystem</p>
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button className="gap-2 shadow-lg hover:shadow-xl transition-all">
              <Download className="w-4 h-4" />
              Download Report
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-48">
            <DropdownMenuItem onClick={() => downloadReport('Weekly')} className="cursor-pointer">
              <Download className="w-4 h-4 mr-2" />
              Weekly Report
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => downloadReport('Monthly')} className="cursor-pointer">
              <Download className="w-4 h-4 mr-2" />
              Monthly Report
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => downloadReport('Yearly')} className="cursor-pointer">
              <Download className="w-4 h-4 mr-2" />
              Yearly Report
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <KPICard
          title="Active Hospitals"
          value={activeHospitals}
          subtitle={`${hospitals.length} total registered`}
          icon={Building2}
          variant="default"
        />
        <KPICard
          title="Registered Donors"
          value={donorStats?.totalRegistered.toLocaleString() || '0'}
          subtitle={`${donorStats?.activeLast30Days.toLocaleString()} active (30d)`}
          icon={Users}
          variant="success"
        />
        <KPICard
          title="Critical Requests"
          value={criticalRequests}
          subtitle="Requiring immediate attention"
          icon={Activity}
          variant={criticalRequests > 0 ? "critical" : "success"}
        />
        <KPICard
          title="Avg Time to Donation"
          value={`${Math.round(avgTimeToDonation)} min`}
          subtitle="Last 7 days average"
          icon={Clock}
          variant="default"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Daily Donations Trend</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={dailyDonations}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" tick={{ fontSize: 12 }} />
                <YAxis />
                <Tooltip />
                <Line 
                  type="monotone" 
                  dataKey="donations" 
                  stroke="hsl(var(--primary))" 
                  strokeWidth={2}
                />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Inventory by Blood Group</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={bloodGroupData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="Available" fill="hsl(var(--success))" />
                <Bar dataKey="Required" fill="hsl(var(--secondary))" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Inventory Gap</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="flex justify-between items-center">
              <span className="text-sm text-muted-foreground">Total Available</span>
              <span className="font-bold text-success">{inventoryStats?.totalAvailable.toLocaleString()}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-muted-foreground">Total Required</span>
              <span className="font-bold text-secondary">{inventoryStats?.totalRequired.toLocaleString()}</span>
            </div>
            <div className="flex justify-between items-center pt-2 border-t">
              <span className="text-sm font-medium">Gap</span>
              <span className="font-bold text-primary">{inventoryStats?.gap.toLocaleString()}</span>
            </div>
            <div className="flex justify-between items-center pt-2">
              <span className="text-sm text-muted-foreground">Expiring Soon</span>
              <span className="font-medium text-secondary">{inventoryStats?.expiringSoon}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-muted-foreground">Wastage Rate</span>
              <span className="font-medium">{inventoryStats?.wastageRate}%</span>
            </div>
          </CardContent>
        </Card>

        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>Donor Response Metrics</CardTitle>
          </CardHeader>
          <CardContent className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-sm text-muted-foreground mb-1">Response Rate</p>
              <p className="text-3xl font-bold text-success">{donorStats?.responseRate}%</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground mb-1">Avg Response Time</p>
              <p className="text-3xl font-bold">{donorStats?.avgResponseTime} min</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground mb-1">Geo Verification</p>
              <p className="text-3xl font-bold text-success">{donorStats?.geoVerificationCompliance}%</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground mb-1">Avg Donations/Year</p>
              <p className="text-3xl font-bold">{donorStats?.avgDonationsPerYear}</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
