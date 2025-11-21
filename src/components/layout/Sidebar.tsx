import { NavLink } from 'react-router-dom';
import { 
  LayoutDashboard, 
  Clock, 
  Activity, 
  Building2, 
  MapPin, 
  AlertTriangle, 
  FileText 
} from 'lucide-react';
import { cn } from '@/lib/utils';

const menuItems = [
  { icon: LayoutDashboard, label: 'Overview Dashboard', path: '/' },
  { icon: Clock, label: 'Donations & Time Analytics', path: '/donations-analytics' },
  { icon: Activity, label: 'Request Lifecycle', path: '/request-lifecycle' },
  { icon: Building2, label: 'Hospital Governance', path: '/hospital-governance' },
  { icon: MapPin, label: 'Heatmap & Geospatial', path: '/heatmap' },
  { icon: AlertTriangle, label: 'Alerts & Compliance', path: '/alerts' },
  { icon: FileText, label: 'Audit Log', path: '/audit-log' }
];

export default function Sidebar() {
  return (
    <aside className="w-64 bg-card border-r border-border min-h-screen">
      <div className="p-6 border-b border-border">
        <h1 className="text-2xl font-bold text-primary">MARS Prime</h1>
        <p className="text-xs text-muted-foreground mt-1">Governance & Command</p>
      </div>
      
      <nav className="p-4">
        <ul className="space-y-1">
          {menuItems.map((item) => (
            <li key={item.path}>
              <NavLink
                to={item.path}
                className={({ isActive }) => cn(
                  "flex items-center gap-3 px-4 py-3 rounded-lg transition-colors",
                  isActive 
                    ? "bg-primary text-primary-foreground" 
                    : "text-foreground hover:bg-accent"
                )}
              >
                <item.icon className="w-5 h-5" />
                <span className="text-sm font-medium">{item.label}</span>
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}
