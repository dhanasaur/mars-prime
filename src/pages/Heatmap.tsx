import { useEffect, useState, useRef } from 'react';
import L from 'leaflet';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { fetchRegionDonations } from '@/api/mockApi';
import 'leaflet/dist/leaflet.css';
import { Badge } from '@/components/ui/badge';
export default function Heatmap() {
  const [regionData, setRegionData] = useState([]);
  const mapRef = useRef<HTMLDivElement | null>(null);
  const mapInstanceRef = useRef<L.Map | null>(null);

  useEffect(() => {
    const loadData = async () => {
      const data = await fetchRegionDonations();
      setRegionData(data);
    };
    loadData();
  }, []);

  useEffect(() => {
    if (!mapRef.current) return;

    if (!mapInstanceRef.current) {
      mapInstanceRef.current = L.map(mapRef.current).setView([11.0168, 76.9558], 12);

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; OpenStreetMap contributors',
      }).addTo(mapInstanceRef.current);
    }

    const map = mapInstanceRef.current;
    if (!map) return;

    const layerGroup = L.layerGroup().addTo(map);

    regionData.forEach((region: any) => {
      const radius = getRadius(region.donations);
      const color = getColor(region.criticalRequests);

      const marker = L.circleMarker([region.lat, region.lng], {
        radius,
        color,
        fillColor: color,
        fillOpacity: 0.5,
        weight: 2,
      });

      marker.bindPopup(
        `<div>
          <strong>${region.region}</strong><br />
          Donations: ${region.donations}<br />
          Critical Requests: ${region.criticalRequests}
        </div>`
      );

      marker.addTo(layerGroup);
    });

    return () => {
      layerGroup.remove();
    };
  }, [regionData]);

  const getRadius = (donations) => {
    return Math.max(8, Math.min(35, donations / 15));
  };

  const getColor = (criticalRequests) => {
    if (criticalRequests > 15) return 'hsl(var(--primary))';
    if (criticalRequests > 10) return 'hsl(var(--secondary))';
    return 'hsl(var(--success))';
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Donation Heatmap & Geospatial View</h1>
        <p className="text-muted-foreground mt-1">Visual representation of donations and requests by region</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <div className="lg:col-span-3">
          <Card>
            <CardHeader>
              <CardTitle>Regional Donation Map</CardTitle>
            </CardHeader>
            <CardContent>
              <div
                id="donation-map"
                ref={mapRef}
                className="h-[600px] rounded-lg overflow-hidden border"
              />
            </CardContent>
          </Card>
        </div>

        <div className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="text-base">Legend</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded-full bg-success"></div>
                <span className="text-sm">Low Risk (&lt;10 critical)</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded-full bg-secondary"></div>
                <span className="text-sm">Medium Risk (10-15)</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded-full bg-primary"></div>
                <span className="text-sm">High Risk (&gt;15 critical)</span>
              </div>
              <p className="text-xs text-muted-foreground pt-2 border-t">
                Circle size indicates donation volume
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-base">Regional Stats</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4 max-h-[365px] overflow-y-auto pr-2">
                {regionData.map((region) => (
                  <div key={region.region} className="space-y-2 pb-3 border-b last:border-0">
                    <p className="font-medium text-sm">{region.region}</p>
                    <div className="space-y-1">
                      <div className="flex justify-between text-xs">
                        <span className="text-muted-foreground">Donations</span>
                        <span className="font-medium">{region.donations}</span>
                      </div>
                      <div className="flex justify-between text-xs">
                        <span className="text-muted-foreground">Critical</span>
                        <Badge 
                          variant={region.criticalRequests > 15 ? 'destructive' : 'outline'}
                          className="text-xs"
                        >
                          {region.criticalRequests}
                        </Badge>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
