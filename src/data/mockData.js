// Mock data for MARS Prime Dashboard

export const hospitals = [
  {
    id: "H001",
    name: "City General Hospital",
    type: "Government",
    region: "North District",
    status: "Active",
    complianceRating: "A",
    lastInventoryUpdate: "2024-01-20T14:30:00",
    stats: {
      requestsLast30Days: 45,
      alerts: 2,
      avgResponseTime: 35
    }
  },
  {
    id: "H002",
    name: "St. Mary's Medical Center",
    type: "Private",
    region: "East District",
    status: "Active",
    complianceRating: "A",
    lastInventoryUpdate: "2024-01-20T16:00:00",
    stats: {
      requestsLast30Days: 67,
      alerts: 0,
      avgResponseTime: 28
    }
  },
  {
    id: "H003",
    name: "Regional Trauma Center",
    type: "Government",
    region: "South District",
    status: "Active",
    complianceRating: "B",
    lastInventoryUpdate: "2024-01-19T10:00:00",
    stats: {
      requestsLast30Days: 89,
      alerts: 5,
      avgResponseTime: 52
    }
  },
  {
    id: "H004",
    name: "Sunrise Healthcare",
    type: "Private",
    region: "West District",
    status: "Suspended",
    complianceRating: "C",
    lastInventoryUpdate: "2024-01-15T09:00:00",
    stats: {
      requestsLast30Days: 12,
      alerts: 12,
      avgResponseTime: 95
    }
  },
  {
    id: "H005",
    name: "Central Blood Bank",
    type: "Government",
    region: "Central District",
    status: "Active",
    complianceRating: "A",
    lastInventoryUpdate: "2024-01-20T15:45:00",
    stats: {
      requestsLast30Days: 156,
      alerts: 1,
      avgResponseTime: 22
    }
  }
];

export const requests = [
  {
    id: "R001",
    hospitalId: "H001",
    hospitalName: "City General Hospital",
    region: "North District",
    bloodGroup: "O+",
    priority: "Critical",
    status: "Resolved",
    requestTime: "2024-01-20T10:00:00",
    donorConfirmTime: "2024-01-20T10:12:00",
    donationCompleteTime: "2024-01-20T10:35:00",
    gprsTier: "Tier 1",
    timeTaken: 35
  },
  {
    id: "R002",
    hospitalId: "H002",
    hospitalName: "St. Mary's Medical Center",
    region: "East District",
    bloodGroup: "AB-",
    priority: "High",
    status: "In-Progress",
    requestTime: "2024-01-20T14:00:00",
    donorConfirmTime: "2024-01-20T14:25:00",
    donationCompleteTime: null,
    gprsTier: "Tier 2",
    timeTaken: null
  },
  {
    id: "R003",
    hospitalId: "H003",
    hospitalName: "Regional Trauma Center",
    region: "South District",
    bloodGroup: "A+",
    priority: "Critical",
    status: "Resolved",
    requestTime: "2024-01-20T08:00:00",
    donorConfirmTime: "2024-01-20T08:18:00",
    donationCompleteTime: "2024-01-20T08:48:00",
    gprsTier: "Tier 1",
    timeTaken: 48
  },
  {
    id: "R004",
    hospitalId: "H005",
    hospitalName: "Central Blood Bank",
    region: "Central District",
    bloodGroup: "B-",
    priority: "Normal",
    status: "Escalated",
    requestTime: "2024-01-20T12:00:00",
    donorConfirmTime: null,
    donationCompleteTime: null,
    gprsTier: "Tier 3",
    timeTaken: null
  }
];

export const donorStats = {
  totalRegistered: 125000,
  activeLast30Days: 8500,
  byBloodGroup: {
    "O+": 42000,
    "O-": 8000,
    "A+": 35000,
    "A-": 7000,
    "B+": 20000,
    "B-": 4000,
    "AB+": 7000,
    "AB-": 2000
  },
  byRegion: {
    "North District": 28000,
    "East District": 32000,
    "South District": 30000,
    "West District": 20000,
    "Central District": 15000
  },
  responseRate: 78,
  avgResponseTime: 8.5,
  lambdaScoreDistribution: {
    "0-40": 15000,
    "41-60": 35000,
    "61-80": 50000,
    "81-100": 25000
  },
  geoVerificationCompliance: 92,
  avgDonationsPerYear: 2.3
};

export const inventoryStats = {
  totalAvailable: 15420,
  totalRequired: 18900,
  gap: 3480,
  byBloodGroup: [
    { group: "O+", available: 5200, required: 6800, gap: 1600 },
    { group: "O-", available: 980, required: 1200, gap: 220 },
    { group: "A+", available: 4100, required: 5200, gap: 1100 },
    { group: "A-", available: 820, required: 980, gap: 160 },
    { group: "B+", available: 2400, required: 2900, gap: 500 },
    { group: "B-", available: 520, required: 650, gap: 130 },
    { group: "AB+", available: 980, required: 890, gap: -90 },
    { group: "AB-", available: 420, required: 280, gap: -140 }
  ],
  expiringSoon: 450,
  wastageRate: 3.2
};

export const alerts = [
  {
    id: "A001",
    type: "shortage",
    region: "North District",
    hospital: "City General Hospital",
    severity: "critical",
    status: "Open",
    timeCreated: "2024-01-20T09:00:00",
    description: "Critical shortage of O+ blood units"
  },
  {
    id: "A002",
    type: "non-compliance",
    region: "West District",
    hospital: "Sunrise Healthcare",
    severity: "warning",
    status: "Acknowledged",
    timeCreated: "2024-01-19T14:00:00",
    description: "Inventory not updated in 72 hours"
  },
  {
    id: "A003",
    type: "system",
    region: "All",
    hospital: null,
    severity: "info",
    status: "Resolved",
    timeCreated: "2024-01-20T06:00:00",
    description: "Scheduled maintenance completed"
  },
  {
    id: "A004",
    type: "GDRA",
    region: "South District",
    hospital: null,
    severity: "critical",
    status: "Open",
    timeCreated: "2024-01-20T15:00:00",
    description: "Mass casualty event - Disaster mode activated"
  }
];

export const auditLog = [
  {
    id: "AL001",
    timestamp: "2024-01-20T16:00:00",
    actor: "Dr. Sarah Admin",
    actionType: "Suspended Hospital",
    target: "Sunrise Healthcare",
    notes: "Multiple compliance violations"
  },
  {
    id: "AL002",
    timestamp: "2024-01-20T14:30:00",
    actor: "Admin John",
    actionType: "Approved Hospital",
    target: "New Hope Clinic",
    notes: "All documentation verified"
  },
  {
    id: "AL003",
    timestamp: "2024-01-20T12:00:00",
    actor: "Dr. Sarah Admin",
    actionType: "Activated GDRA",
    target: "South District",
    notes: "Mass casualty event response"
  }
];

export const dailyDonations = [
  { date: "2024-01-14", donations: 245 },
  { date: "2024-01-15", donations: 289 },
  { date: "2024-01-16", donations: 312 },
  { date: "2024-01-17", donations: 278 },
  { date: "2024-01-18", donations: 356 },
  { date: "2024-01-19", donations: 298 },
  { date: "2024-01-20", donations: 334 }
];

export const regionDonations = [
  { region: "North District", lat: 28.7041, lng: 77.1025, donations: 450, criticalRequests: 12 },
  { region: "East District", lat: 28.6139, lng: 77.2090, donations: 520, criticalRequests: 8 },
  { region: "South District", lat: 28.5355, lng: 77.3910, donations: 380, criticalRequests: 18 },
  { region: "West District", lat: 28.6692, lng: 77.4538, donations: 310, criticalRequests: 15 },
  { region: "Central District", lat: 28.6448, lng: 77.2167, donations: 680, criticalRequests: 5 }
];
