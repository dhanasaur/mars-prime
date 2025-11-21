import { Bell, Search, User, LogOut, Settings, UserCircle, Building2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from '@/components/ui/command';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';
import { useState, useEffect } from 'react';
import { fetchHospitals } from '@/api/mockApi';

export default function Navbar() {
  const navigate = useNavigate();
  const [hospitals, setHospitals] = useState([]);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const loadHospitals = async () => {
      const data = await fetchHospitals();
      setHospitals(data);
    };
    loadHospitals();
  }, []);

  const handleLogout = () => {
    toast.success('Logged out successfully');
    navigate('/login');
  };

  const filteredHospitals = hospitals.filter(h => 
    h.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    h.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
    h.region.toLowerCase().includes(searchQuery.toLowerCase())
  ).slice(0, 5);

  const handleHospitalSelect = (hospital) => {
    toast.success(`Navigating to ${hospital.name}`);
    navigate('/hospitals');
    setSearchOpen(false);
    setSearchQuery('');
  };

  return (
    <header className="h-16 border-b border-border bg-card px-6 flex items-center justify-between">
      <div className="flex items-center gap-4 flex-1 max-w-xl">
        <Popover open={searchOpen} onOpenChange={setSearchOpen}>
          <PopoverTrigger asChild>
            <div className="flex items-center gap-4 flex-1 cursor-pointer">
              <Search className="w-5 h-5 text-muted-foreground" />
              <Input 
                placeholder="Search hospitals, requests, donors..." 
                className="border-0 focus-visible:ring-0 cursor-pointer"
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setSearchOpen(true);
                }}
                onFocus={() => setSearchOpen(true)}
              />
            </div>
          </PopoverTrigger>
          <PopoverContent className="w-[500px] p-0" align="start">
            <Command>
              <CommandInput 
                placeholder="Search hospitals..." 
                value={searchQuery}
                onValueChange={setSearchQuery}
              />
              <CommandList>
                <CommandEmpty>No hospitals found.</CommandEmpty>
                <CommandGroup heading="Hospitals">
                  {filteredHospitals.map((hospital) => (
                    <CommandItem
                      key={hospital.id}
                      onSelect={() => handleHospitalSelect(hospital)}
                      className="cursor-pointer"
                    >
                      <Building2 className="w-4 h-4 mr-2" />
                      <div className="flex-1">
                        <p className="font-medium">{hospital.name}</p>
                        <p className="text-xs text-muted-foreground">{hospital.region} • {hospital.type}</p>
                      </div>
                      <span className="text-xs text-muted-foreground">{hospital.id}</span>
                    </CommandItem>
                  ))}
                </CommandGroup>
              </CommandList>
            </Command>
          </PopoverContent>
        </Popover>
      </div>
      
      <div className="flex items-center gap-4">
        <Button variant="ghost" size="icon" className="relative">
          <Bell className="w-5 h-5" />
          <span className="absolute top-1 right-1 w-2 h-2 bg-primary rounded-full"></span>
        </Button>
        
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <div className="flex items-center gap-3 pl-4 border-l border-border cursor-pointer hover:bg-accent rounded-lg p-2 transition-colors">
              <div className="text-right">
                <p className="text-sm font-medium">Dr. Sarah Admin</p>
                <p className="text-xs text-muted-foreground">State Authority</p>
              </div>
              <Avatar className="h-9 w-9">
                <AvatarFallback className="bg-primary text-primary-foreground">SA</AvatarFallback>
              </Avatar>
            </div>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-56">
            <DropdownMenuLabel>
              <div>
                <p className="font-medium">Dr. Sarah Admin</p>
                <p className="text-xs text-muted-foreground font-normal">admin@mars.gov</p>
              </div>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="cursor-pointer">
              <UserCircle className="w-4 h-4 mr-2" />
              Profile
            </DropdownMenuItem>
            <DropdownMenuItem className="cursor-pointer">
              <Settings className="w-4 h-4 mr-2" />
              Settings
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={handleLogout} className="cursor-pointer text-primary">
              <LogOut className="w-4 h-4 mr-2" />
              Logout
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
}
