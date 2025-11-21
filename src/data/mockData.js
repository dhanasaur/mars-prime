// // Mock data for MARS Prime Dashboard

// export const hospitals = [
//   {
//     id: "H001",
//     name: "City General Hospital",
//     type: "Government",
//     region: "North District",
//     status: "Active",
//     complianceRating: "A",
//     lastInventoryUpdate: "2024-01-20T14:30:00",
//     stats: {
//       requestsLast30Days: 45,
//       alerts: 2,
//       avgResponseTime: 35
//     }
//   },
//   {
//     id: "H002",
//     name: "St. Mary's Medical Center",
//     type: "Private",
//     region: "East District",
//     status: "Active",
//     complianceRating: "A",
//     lastInventoryUpdate: "2024-01-20T16:00:00",
//     stats: {
//       requestsLast30Days: 67,
//       alerts: 0,
//       avgResponseTime: 28
//     }
//   },
//   {
//     id: "H003",
//     name: "Regional Trauma Center",
//     type: "Government",
//     region: "South District",
//     status: "Active",
//     complianceRating: "B",
//     lastInventoryUpdate: "2024-01-19T10:00:00",
//     stats: {
//       requestsLast30Days: 89,
//       alerts: 5,
//       avgResponseTime: 52
//     }
//   },
//   {
//     id: "H004",
//     name: "Sunrise Healthcare",
//     type: "Private",
//     region: "West District",
//     status: "Suspended",
//     complianceRating: "C",
//     lastInventoryUpdate: "2024-01-15T09:00:00",
//     stats: {
//       requestsLast30Days: 12,
//       alerts: 12,
//       avgResponseTime: 95
//     }
//   },
//   {
//     id: "H005",
//     name: "Central Blood Bank",
//     type: "Government",
//     region: "Central District",
//     status: "Active",
//     complianceRating: "A",
//     lastInventoryUpdate: "2024-01-20T15:45:00",
//     stats: {
//       requestsLast30Days: 156,
//       alerts: 1,
//       avgResponseTime: 22
//     }
//   },
//   {
//     id: "H006",
//     name: "Coimbatore Medical College Hospital",
//     type: "Government",
//     region: "Coimbatore",
//     status: "Active",
//     complianceRating: "A",
//     lastInventoryUpdate: "2024-01-20T17:00:00",
//     stats: {
//       requestsLast30Days: 98,
//       alerts: 1,
//       avgResponseTime: 30
//     }
//   },
//   {
//     id: "H007",
//     name: "PSG Hospitals",
//     type: "Private",
//     region: "Coimbatore",
//     status: "Active",
//     complianceRating: "A",
//     lastInventoryUpdate: "2024-01-20T16:30:00",
//     stats: {
//       requestsLast30Days: 72,
//       alerts: 0,
//       avgResponseTime: 25
//     }
//   },
//   {
//     id: "H008",
//     name: "Kovai Medical Center",
//     type: "Private",
//     region: "Coimbatore",
//     status: "Active",
//     complianceRating: "A",
//     lastInventoryUpdate: "2024-01-20T15:00:00",
//     stats: {
//       requestsLast30Days: 85,
//       alerts: 2,
//       avgResponseTime: 32
//     }
//   },
//   {
//     id: "H009",
//     name: "Ganga Hospital",
//     type: "Private",
//     region: "Coimbatore",
//     status: "Active",
//     complianceRating: "B",
//     lastInventoryUpdate: "2024-01-20T14:00:00",
//     stats: {
//       requestsLast30Days: 54,
//       alerts: 3,
//       avgResponseTime: 38
//     }
//   }
// ];

// export const requests = [
//   {
//     id: "R001",
//     hospitalId: "H001",
//     hospitalName: "City General Hospital",
//     region: "North District",
//     bloodGroup: "O+",
//     priority: "Critical",
//     status: "Resolved",
//     requestTime: "2024-01-20T10:00:00",
//     donorConfirmTime: "2024-01-20T10:12:00",
//     donationCompleteTime: "2024-01-20T10:35:00",
//     gprsTier: "Tier 1",
//     timeTaken: 35
//   },
//   {
//     id: "R002",
//     hospitalId: "H002",
//     hospitalName: "St. Mary's Medical Center",
//     region: "East District",
//     bloodGroup: "AB-",
//     priority: "High",
//     status: "In-Progress",
//     requestTime: "2024-01-20T14:00:00",
//     donorConfirmTime: "2024-01-20T14:25:00",
//     donationCompleteTime: null,
//     gprsTier: "Tier 2",
//     timeTaken: null
//   },
//   {
//     id: "R003",
//     hospitalId: "H003",
//     hospitalName: "Regional Trauma Center",
//     region: "South District",
//     bloodGroup: "A+",
//     priority: "Critical",
//     status: "Resolved",
//     requestTime: "2024-01-20T08:00:00",
//     donorConfirmTime: "2024-01-20T08:18:00",
//     donationCompleteTime: "2024-01-20T08:48:00",
//     gprsTier: "Tier 1",
//     timeTaken: 48
//   },
//   {
//     id: "R004",
//     hospitalId: "H005",
//     hospitalName: "Central Blood Bank",
//     region: "Central District",
//     bloodGroup: "B-",
//     priority: "Normal",
//     status: "Escalated",
//     requestTime: "2024-01-20T12:00:00",
//     donorConfirmTime: null,
//     donationCompleteTime: null,
//     gprsTier: "Tier 3",
//     timeTaken: null
//   }
// ];

// export const donorStats = {
//   totalRegistered: 125000,
//   activeLast30Days: 8500,
//   byBloodGroup: {
//     "O+": 42000,
//     "O-": 8000,
//     "A+": 35000,
//     "A-": 7000,
//     "B+": 20000,
//     "B-": 4000,
//     "AB+": 7000,
//     "AB-": 2000
//   },
//   byRegion: {
//     "North District": 28000,
//     "East District": 32000,
//     "South District": 30000,
//     "West District": 20000,
//     "Central District": 15000
//   },
//   responseRate: 78,
//   avgResponseTime: 8.5,
//   lambdaScoreDistribution: {
//     "0-40": 15000,
//     "41-60": 35000,
//     "61-80": 50000,
//     "81-100": 25000
//   },
//   geoVerificationCompliance: 92,
//   avgDonationsPerYear: 2.3
// };

// export const inventoryStats = {
//   totalAvailable: 15420,
//   totalRequired: 18900,
//   gap: 3480,
//   byBloodGroup: [
//     { group: "O+", available: 5200, required: 6800, gap: 1600 },
//     { group: "O-", available: 980, required: 1200, gap: 220 },
//     { group: "A+", available: 4100, required: 5200, gap: 1100 },
//     { group: "A-", available: 820, required: 980, gap: 160 },
//     { group: "B+", available: 2400, required: 2900, gap: 500 },
//     { group: "B-", available: 520, required: 650, gap: 130 },
//     { group: "AB+", available: 980, required: 890, gap: -90 },
//     { group: "AB-", available: 420, required: 280, gap: -140 }
//   ],
//   expiringSoon: 450,
//   wastageRate: 3.2
// };

// export const alerts = [
//   {
//     id: "A001",
//     type: "shortage",
//     region: "North District",
//     hospital: "City General Hospital",
//     severity: "critical",
//     status: "Open",
//     timeCreated: "2024-01-20T09:00:00",
//     description: "Critical shortage of O+ blood units"
//   },
//   {
//     id: "A002",
//     type: "non-compliance",
//     region: "West District",
//     hospital: "Sunrise Healthcare",
//     severity: "warning",
//     status: "Acknowledged",
//     timeCreated: "2024-01-19T14:00:00",
//     description: "Inventory not updated in 72 hours"
//   },
//   {
//     id: "A003",
//     type: "system",
//     region: "All",
//     hospital: null,
//     severity: "info",
//     status: "Resolved",
//     timeCreated: "2024-01-20T06:00:00",
//     description: "Scheduled maintenance completed"
//   },
//   {
//     id: "A004",
//     type: "GDRA",
//     region: "South District",
//     hospital: null,
//     severity: "critical",
//     status: "Open",
//     timeCreated: "2024-01-20T15:00:00",
//     description: "Mass casualty event - Disaster mode activated"
//   }
// ];

// export const auditLog = [
//   {
//     id: "AL001",
//     timestamp: "2024-01-20T16:00:00",
//     actor: "Dr. Sarah Admin",
//     actionType: "Suspended Hospital",
//     target: "Sunrise Healthcare",
//     notes: "Multiple compliance violations"
//   },
//   {
//     id: "AL002",
//     timestamp: "2024-01-20T14:30:00",
//     actor: "Admin John",
//     actionType: "Approved Hospital",
//     target: "New Hope Clinic",
//     notes: "All documentation verified"
//   },
//   {
//     id: "AL003",
//     timestamp: "2024-01-20T12:00:00",
//     actor: "Dr. Sarah Admin",
//     actionType: "Activated GDRA",
//     target: "South District",
//     notes: "Mass casualty event response"
//   }
// ];

// export const dailyDonations = [
//   { date: "2024-01-14", donations: 245 },
//   { date: "2024-01-15", donations: 289 },
//   { date: "2024-01-16", donations: 312 },
//   { date: "2024-01-17", donations: 278 },
//   { date: "2024-01-18", donations: 356 },
//   { date: "2024-01-19", donations: 298 },
//   { date: "2024-01-20", donations: 334 }
// ];

// export const regionDonations = [
//   { region: "North District", lat: 28.7041, lng: 77.1025, donations: 450, criticalRequests: 12 },
//   { region: "East District", lat: 28.6139, lng: 77.2090, donations: 520, criticalRequests: 8 },
//   { region: "South District", lat: 28.5355, lng: 77.3910, donations: 380, criticalRequests: 18 },
//   { region: "West District", lat: 28.6692, lng: 77.4538, donations: 310, criticalRequests: 15 },
//   { region: "Central District", lat: 28.6448, lng: 77.2167, donations: 680, criticalRequests: 5 },
//   { region: "Coimbatore - RS Puram", lat: 11.0168, lng: 76.9558, donations: 420, criticalRequests: 9 },
//   { region: "Coimbatore - Gandhipuram", lat: 11.0183, lng: 76.9725, donations: 380, criticalRequests: 7 },
//   { region: "Coimbatore - Peelamedu", lat: 11.0271, lng: 77.0269, donations: 340, criticalRequests: 11 },
//   { region: "Coimbatore - Singanallur", lat: 10.9925, lng: 77.0251, donations: 290, criticalRequests: 6 }
// ];
// Mock data for MARS Prime Dashboard — Pan-India

// ----------------- HOSPITALS -----------------

export const hospitals = [
  // Existing sample region-style records
  {
    id: "H001",
    name: "City General Hospital",
    type: "Government",
    region: "North District",
    state: "Delhi NCR",
    status: "Active",
    complianceRating: "A",
    lastInventoryUpdate: "2024-01-20T14:30:00",
    stats: {
      requestsLast30Days: 45,
      alerts: 2,
      avgResponseTime: 35,
    },
  },
  {
    id: "H002",
    name: "St. Mary's Medical Center",
    type: "Private",
    region: "East District",
    state: "Delhi NCR",
    status: "Active",
    complianceRating: "A",
    lastInventoryUpdate: "2024-01-20T16:00:00",
    stats: {
      requestsLast30Days: 67,
      alerts: 0,
      avgResponseTime: 28,
    },
  },
  {
    id: "H003",
    name: "Regional Trauma Center",
    type: "Government",
    region: "South District",
    state: "Delhi NCR",
    status: "Active",
    complianceRating: "B",
    lastInventoryUpdate: "2024-01-19T10:00:00",
    stats: {
      requestsLast30Days: 89,
      alerts: 5,
      avgResponseTime: 52,
    },
  },
  {
    id: "H004",
    name: "Sunrise Healthcare",
    type: "Private",
    region: "West District",
    state: "Delhi NCR",
    status: "Suspended",
    complianceRating: "C",
    lastInventoryUpdate: "2024-01-15T09:00:00",
    stats: {
      requestsLast30Days: 12,
      alerts: 12,
      avgResponseTime: 95,
    },
  },
  {
    id: "H005",
    name: "Central Blood Bank",
    type: "Government",
    region: "Central District",
    state: "Delhi NCR",
    status: "Active",
    complianceRating: "A",
    lastInventoryUpdate: "2024-01-20T15:45:00",
    stats: {
      requestsLast30Days: 156,
      alerts: 1,
      avgResponseTime: 22,
    },
  },

  // Coimbatore cluster (Tamil Nadu)
  {
    id: "H006",
    name: "Coimbatore Medical College Hospital",
    type: "Government",
    region: "Coimbatore",
    state: "Tamil Nadu",
    status: "Active",
    complianceRating: "A",
    lastInventoryUpdate: "2024-01-20T17:00:00",
    stats: {
      requestsLast30Days: 98,
      alerts: 1,
      avgResponseTime: 30,
    },
  },
  {
    id: "H007",
    name: "PSG Hospitals",
    type: "Private",
    region: "Coimbatore",
    state: "Tamil Nadu",
    status: "Active",
    complianceRating: "A",
    lastInventoryUpdate: "2024-01-20T16:30:00",
    stats: {
      requestsLast30Days: 72,
      alerts: 0,
      avgResponseTime: 25,
    },
  },
  {
    id: "H008",
    name: "Kovai Medical Center",
    type: "Private",
    region: "Coimbatore",
    state: "Tamil Nadu",
    status: "Active",
    complianceRating: "A",
    lastInventoryUpdate: "2024-01-20T15:00:00",
    stats: {
      requestsLast30Days: 85,
      alerts: 2,
      avgResponseTime: 32,
    },
  },
  {
    id: "H009",
    name: "Ganga Hospital",
    type: "Private",
    region: "Coimbatore",
    state: "Tamil Nadu",
    status: "Active",
    complianceRating: "B",
    lastInventoryUpdate: "2024-01-20T14:00:00",
    stats: {
      requestsLast30Days: 54,
      alerts: 3,
      avgResponseTime: 38,
    },
  },

  // Mumbai (Maharashtra)
  {
    id: "H010",
    name: "Brihanmumbai Municipal Hospital",
    type: "Government",
    region: "Mumbai City",
    state: "Maharashtra",
    status: "Active",
    complianceRating: "A",
    lastInventoryUpdate: "2024-01-20T13:20:00",
    stats: {
      requestsLast30Days: 210,
      alerts: 4,
      avgResponseTime: 27,
    },
  },
  {
    id: "H011",
    name: "Lilavati Hospital & Research Centre",
    type: "Private",
    region: "Bandra",
    state: "Maharashtra",
    status: "Active",
    complianceRating: "A",
    lastInventoryUpdate: "2024-01-19T18:40:00",
    stats: {
      requestsLast30Days: 132,
      alerts: 1,
      avgResponseTime: 24,
    },
  },

  // Bengaluru (Karnataka)
  {
    id: "H012",
    name: "Victoria Hospital",
    type: "Government",
    region: "Bengaluru Urban",
    state: "Karnataka",
    status: "Active",
    complianceRating: "A",
    lastInventoryUpdate: "2024-01-19T21:15:00",
    stats: {
      requestsLast30Days: 184,
      alerts: 3,
      avgResponseTime: 29,
    },
  },
  {
    id: "H013",
    name: "Manipal Hospitals, Old Airport Road",
    type: "Private",
    region: "Bengaluru Urban",
    state: "Karnataka",
    status: "Active",
    complianceRating: "A",
    lastInventoryUpdate: "2024-01-20T09:45:00",
    stats: {
      requestsLast30Days: 140,
      alerts: 0,
      avgResponseTime: 23,
    },
  },

  // Chennai (Tamil Nadu metro)
  {
    id: "H014",
    name: "Rajiv Gandhi Government General Hospital",
    type: "Government",
    region: "Chennai",
    state: "Tamil Nadu",
    status: "Active",
    complianceRating: "A",
    lastInventoryUpdate: "2024-01-20T10:10:00",
    stats: {
      requestsLast30Days: 195,
      alerts: 2,
      avgResponseTime: 26,
    },
  },
  {
    id: "H015",
    name: "Apollo Hospitals, Greams Road",
    type: "Private",
    region: "Chennai",
    state: "Tamil Nadu",
    status: "Active",
    complianceRating: "A",
    lastInventoryUpdate: "2024-01-19T19:32:00",
    stats: {
      requestsLast30Days: 162,
      alerts: 1,
      avgResponseTime: 24,
    },
  },

  // Delhi NCR (big tertiary)
  {
    id: "H016",
    name: "AIIMS New Delhi",
    type: "Government",
    region: "South Delhi",
    state: "Delhi NCR",
    status: "Active",
    complianceRating: "A",
    lastInventoryUpdate: "2024-01-20T11:05:00",
    stats: {
      requestsLast30Days: 260,
      alerts: 4,
      avgResponseTime: 30,
    },
  },

  // Hyderabad (Telangana)
  {
    id: "H017",
    name: "Gandhi Hospital",
    type: "Government",
    region: "Hyderabad",
    state: "Telangana",
    status: "Active",
    complianceRating: "B",
    lastInventoryUpdate: "2024-01-18T16:25:00",
    stats: {
      requestsLast30Days: 173,
      alerts: 6,
      avgResponseTime: 37,
    },
  },
  {
    id: "H018",
    name: "Yashoda Hospitals, Somajiguda",
    type: "Private",
    region: "Hyderabad",
    state: "Telangana",
    status: "Active",
    complianceRating: "A",
    lastInventoryUpdate: "2024-01-20T08:50:00",
    stats: {
      requestsLast30Days: 128,
      alerts: 1,
      avgResponseTime: 25,
    },
  },

  // Kolkata (West Bengal)
  {
    id: "H019",
    name: "S.S.K.M. Hospital",
    type: "Government",
    region: "Kolkata",
    state: "West Bengal",
    status: "Active",
    complianceRating: "B",
    lastInventoryUpdate: "2024-01-19T13:05:00",
    stats: {
      requestsLast30Days: 166,
      alerts: 5,
      avgResponseTime: 34,
    },
  },

  // Ahmedabad (Gujarat)
  {
    id: "H020",
    name: "Civil Hospital Ahmedabad",
    type: "Government",
    region: "Ahmedabad",
    state: "Gujarat",
    status: "Active",
    complianceRating: "A",
    lastInventoryUpdate: "2024-01-20T07:40:00",
    stats: {
      requestsLast30Days: 188,
      alerts: 3,
      avgResponseTime: 28,
    },
  },

  // Lucknow (Uttar Pradesh)
  {
    id: "H021",
    name: "King George's Medical University",
    type: "Government",
    region: "Lucknow",
    state: "Uttar Pradesh",
    status: "Active",
    complianceRating: "B",
    lastInventoryUpdate: "2024-01-19T20:20:00",
    stats: {
      requestsLast30Days: 172,
      alerts: 4,
      avgResponseTime: 33,
    },
  },

  // Jaipur (Rajasthan)
  {
    id: "H022",
    name: "SMS Hospital",
    type: "Government",
    region: "Jaipur",
    state: "Rajasthan",
    status: "Active",
    complianceRating: "A",
    lastInventoryUpdate: "2024-01-20T12:55:00",
    stats: {
      requestsLast30Days: 158,
      alerts: 2,
      avgResponseTime: 29,
    },
  },

  // Kochi (Kerala)
  {
    id: "H023",
    name: "Government Medical College, Ernakulam",
    type: "Government",
    region: "Kochi",
    state: "Kerala",
    status: "Active",
    complianceRating: "A",
    lastInventoryUpdate: "2024-01-20T09:15:00",
    stats: {
      requestsLast30Days: 110,
      alerts: 1,
      avgResponseTime: 26,
    },
  },

  // Guwahati (Assam / North-East)
  {
    id: "H024",
    name: "Guwahati Medical College Hospital",
    type: "Government",
    region: "Guwahati",
    state: "Assam",
    status: "Active",
    complianceRating: "B",
    lastInventoryUpdate: "2024-01-18T17:45:00",
    stats: {
      requestsLast30Days: 102,
      alerts: 3,
      avgResponseTime: 36,
    },
  },
];

// ----------------- REQUESTS -----------------

export const requests = [
  // Existing ones
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
    timeTaken: 35,
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
    timeTaken: null,
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
    timeTaken: 48,
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
    timeTaken: null,
  },

  // New pan-India requests
  {
    id: "R005",
    hospitalId: "H010",
    hospitalName: "Brihanmumbai Municipal Hospital",
    region: "Mumbai City",
    bloodGroup: "O-",
    priority: "Critical",
    status: "Resolved",
    requestTime: "2024-01-19T21:10:00",
    donorConfirmTime: "2024-01-19T21:25:00",
    donationCompleteTime: "2024-01-19T21:55:00",
    gprsTier: "Tier 2",
    timeTaken: 45,
  },
  {
    id: "R006",
    hospitalId: "H014",
    hospitalName: "Rajiv Gandhi Government General Hospital",
    region: "Chennai",
    bloodGroup: "A-",
    priority: "High",
    status: "Resolved",
    requestTime: "2024-01-20T06:40:00",
    donorConfirmTime: "2024-01-20T07:00:00",
    donationCompleteTime: "2024-01-20T07:32:00",
    gprsTier: "Tier 1",
    timeTaken: 52,
  },
  {
    id: "R007",
    hospitalId: "H016",
    hospitalName: "AIIMS New Delhi",
    region: "South Delhi",
    bloodGroup: "B+",
    priority: "Critical",
    status: "In-Progress",
    requestTime: "2024-01-20T15:15:00",
    donorConfirmTime: "2024-01-20T15:40:00",
    donationCompleteTime: null,
    gprsTier: "Tier 2",
    timeTaken: null,
  },
  {
    id: "R008",
    hospitalId: "H017",
    hospitalName: "Gandhi Hospital",
    region: "Hyderabad",
    bloodGroup: "AB+",
    priority: "Normal",
    status: "Resolved",
    requestTime: "2024-01-19T09:20:00",
    donorConfirmTime: "2024-01-19T09:50:00",
    donationCompleteTime: "2024-01-19T10:25:00",
    gprsTier: "Tier 1",
    timeTaken: 65,
  },
  {
    id: "R009",
    hospitalId: "H021",
    hospitalName: "King George's Medical University",
    region: "Lucknow",
    bloodGroup: "O+",
    priority: "High",
    status: "Escalated",
    requestTime: "2024-01-18T20:10:00",
    donorConfirmTime: null,
    donationCompleteTime: null,
    gprsTier: "Tier 3",
    timeTaken: null,
  },
];

// ----------------- DONOR STATS -----------------

export const donorStats = {
  totalRegistered: 1250000,
  activeLast30Days: 98500,
  byBloodGroup: {
    "O+": 420000,
    "O-": 80000,
    "A+": 350000,
    "A-": 70000,
    "B+": 200000,
    "B-": 40000,
    "AB+": 70000,
    "AB-": 20000,
    "hh": 5000
  },
  byRegion: {
    "Delhi NCR": 150000,
    "Maharashtra": 180000,
    "Tamil Nadu": 140000,
    "Karnataka": 130000,
    "Telangana": 90000,
    "West Bengal": 95000,
    "Gujarat": 88000,
    "Uttar Pradesh": 160000,
    "Kerala": 65000,
    "Rajasthan": 60000,
    "Assam & North-East": 45000,
    "Rest of India": 175000,
  },
  responseRate: 81,
  avgResponseTime: 9.2,
  lambdaScoreDistribution: {
    "0-40": 120000,
    "41-60": 320000,
    "61-80": 520000,
    "81-100": 290000,
  },
  geoVerificationCompliance: 90,
  avgDonationsPerYear: 2.5,
};

// ----------------- INVENTORY STATS -----------------

export const inventoryStats = {
  totalAvailable: 185200,
  totalRequired: 219800,
  gap: 34600,
  byBloodGroup: [
    { group: "O+", available: 62000, required: 78000, gap: 16000 },
    { group: "O-", available: 10800, required: 13200, gap: 2400 },
    { group: "A+", available: 48500, required: 61000, gap: 12500 },
    { group: "A-", available: 9200, required: 11000, gap: 1800 },
    { group: "B+", available: 28500, required: 33500, gap: 5000 },
    { group: "B-", available: 6400, required: 7700, gap: 1300 },
    { group: "AB+", available: 11200, required: 10100, gap: -1100 },
    { group: "AB-", available: 4600, required: 3300, gap: -1300 },
    { group: "hh", available: 1200, required: 1300, gap: 100 }
  ],
  expiringSoon: 5600,
  wastageRate: 3.1,
};

// ----------------- ALERTS -----------------

export const alerts = [
  {
    id: "A001",
    type: "shortage",
    region: "North District",
    hospital: "City General Hospital",
    severity: "critical",
    status: "Open",
    timeCreated: "2024-01-20T09:00:00",
    description: "Critical shortage of O+ blood units",
  },
  {
    id: "A002",
    type: "non-compliance",
    region: "West District",
    hospital: "Sunrise Healthcare",
    severity: "warning",
    status: "Acknowledged",
    timeCreated: "2024-01-19T14:00:00",
    description: "Inventory not updated in 72 hours",
  },
  {
    id: "A003",
    type: "system",
    region: "All",
    hospital: null,
    severity: "info",
    status: "Resolved",
    timeCreated: "2024-01-20T06:00:00",
    description: "Scheduled maintenance completed",
  },
  {
    id: "A004",
    type: "GDRA",
    region: "South District",
    hospital: null,
    severity: "critical",
    status: "Open",
    timeCreated: "2024-01-20T15:00:00",
    description: "Mass casualty event - Disaster mode activated",
  },
  {
    id: "A005",
    type: "shortage",
    region: "Mumbai City",
    hospital: "Brihanmumbai Municipal Hospital",
    severity: "critical",
    status: "Open",
    timeCreated: "2024-01-19T22:10:00",
    description: "Severe shortage of O- units after highway accident",
  },
  {
    id: "A006",
    type: "non-compliance",
    region: "Hyderabad",
    hospital: "Gandhi Hospital",
    severity: "warning",
    status: "Open",
    timeCreated: "2024-01-18T11:30:00",
    description: "Missed daily inventory update for 3 consecutive days",
  },
  {
    id: "A007",
    type: "shortage",
    region: "Lucknow",
    hospital: "King George's Medical University",
    severity: "warning",
    status: "Acknowledged",
    timeCreated: "2024-01-18T21:05:00",
    description: "Low stock of B- units nearing threshold",
  },
];

// ----------------- AUDIT LOG -----------------

export const auditLog = [
  {
    id: "AL001",
    timestamp: "2024-01-20T16:00:00",
    actor: "Dr. Sarah Admin",
    actionType: "Suspended Hospital",
    target: "Sunrise Healthcare",
    notes: "Multiple compliance violations",
  },
  {
    id: "AL002",
    timestamp: "2024-01-20T14:30:00",
    actor: "Admin John",
    actionType: "Approved Hospital",
    target: "New Hope Clinic",
    notes: "All documentation verified",
  },
  {
    id: "AL003",
    timestamp: "2024-01-20T12:00:00",
    actor: "Dr. Sarah Admin",
    actionType: "Activated GDRA",
    target: "South District",
    notes: "Mass casualty event response",
  },
  {
    id: "AL004",
    timestamp: "2024-01-19T22:30:00",
    actor: "State Health Officer - Maharashtra",
    actionType: "Created Shortage Alert",
    target: "Brihanmumbai Municipal Hospital",
    notes: "Highway accident cluster",
  },
  {
    id: "AL005",
    timestamp: "2024-01-19T19:00:00",
    actor: "Admin Chennai",
    actionType: "Updated Hospital Status",
    target: "Rajiv Gandhi Government General Hospital",
    notes: "Raised to critical monitoring after surge in requests",
  },
];

// ----------------- DAILY DONATIONS -----------------
// Generate highly realistic donations from 2025-04-03 to 2025-11-25
const generateDonations = () => {
  const data = [];
  const startDate = new Date('2025-04-03');
  const endDate = new Date('2025-11-25');
  let baseValue = 320;
  let momentum = 0;
  let weeklyTrend = 0;
  
  for (let d = new Date(startDate); d <= endDate; d.setDate(d.getDate() + 1)) {
    const dayOfWeek = d.getDay();
    const month = d.getMonth();
    const dayOfMonth = d.getDate();
    
    // Strong weekend effect
    const weekendDrop = (dayOfWeek === 0) ? -80 : (dayOfWeek === 6) ? -60 : 0;
    
    // Monday/Tuesday boost
    const weekdayBoost = (dayOfWeek === 1) ? 35 : (dayOfWeek === 2) ? 20 : 0;
    
    // Friday slight drop (people busy)
    const fridayDrop = (dayOfWeek === 5) ? -15 : 0;
    
    // Seasonal variation (summer lower, winter higher)
    const seasonalEffect = (month >= 5 && month <= 7) ? -30 : (month >= 10) ? 20 : 0;
    
    // Month-end/start patterns (paydays, campaigns)
    const monthPattern = (dayOfMonth <= 3 || dayOfMonth >= 28) ? 25 : 0;
    
    // Random major events (blood drives, disasters, holidays)
    const majorEvent = (Math.random() < 0.08) ? (Math.random() > 0.6 ? 120 : -70) : 0;
    
    // Weekly trending
    weeklyTrend += (Math.random() - 0.5) * 12;
    weeklyTrend *= 0.92;
    weeklyTrend = Math.max(-60, Math.min(60, weeklyTrend));
    
    // Daily momentum
    momentum += (Math.random() - 0.5) * 15;
    momentum *= 0.88;
    momentum = Math.max(-50, Math.min(50, momentum));
    
    // High daily variance
    const noise = (Math.random() - 0.5) * 80;
    
    const donations = Math.round(
      baseValue + weekendDrop + weekdayBoost + fridayDrop + 
      seasonalEffect + monthPattern + majorEvent + 
      weeklyTrend + momentum + noise
    );
    
    data.push({
      date: d.toISOString().split('T')[0],
      donations: Math.max(120, Math.min(520, donations))
    });
  }
  return data;
};

export const dailyDonations = generateDonations();

// ----------------- REGION DONATIONS (MAP) -----------------

export const regionDonations = [
  // Delhi cluster
  {
    region: "Delhi NCR - Central",
    lat: 28.6448,
    lng: 77.2167,
    donations: 680,
    criticalRequests: 14,
  },
  {
    region: "Delhi NCR - South",
    lat: 28.5355,
    lng: 77.3910,
    donations: 520,
    criticalRequests: 11,
  },

  // Mumbai
  {
    region: "Mumbai City",
    lat: 19.0760,
    lng: 72.8777,
    donations: 740,
    criticalRequests: 18,
  },

  // Bengaluru
  {
    region: "Bengaluru Urban",
    lat: 12.9716,
    lng: 77.5946,
    donations: 610,
    criticalRequests: 13,
  },

  // Chennai
  {
    region: "Chennai",
    lat: 13.0827,
    lng: 80.2707,
    donations: 580,
    criticalRequests: 12,
  },

  // Hyderabad
  {
    region: "Hyderabad",
    lat: 17.3850,
    lng: 78.4867,
    donations: 540,
    criticalRequests: 16,
  },

  // Kolkata
  {
    region: "Kolkata",
    lat: 22.5726,
    lng: 88.3639,
    donations: 495,
    criticalRequests: 10,
  },

  // Ahmedabad
  {
    region: "Ahmedabad",
    lat: 23.0225,
    lng: 72.5714,
    donations: 460,
    criticalRequests: 9,
  },

  // Lucknow
  {
    region: "Lucknow",
    lat: 26.8467,
    lng: 80.9462,
    donations: 430,
    criticalRequests: 15,
  },

  // Jaipur
  {
    region: "Jaipur",
    lat: 26.9124,
    lng: 75.7873,
    donations: 380,
    criticalRequests: 8,
  },

  // Kochi
  {
    region: "Kochi",
    lat: 9.9312,
    lng: 76.2673,
    donations: 320,
    criticalRequests: 6,
  },

  // Guwahati
  {
    region: "Guwahati",
    lat: 26.1445,
    lng: 91.7362,
    donations: 290,
    criticalRequests: 7,
  },

  // Coimbatore micro-clusters
  {
    region: "Coimbatore - RS Puram",
    lat: 11.0168,
    lng: 76.9558,
    donations: 420,
    criticalRequests: 9,
  },
  {
    region: "Coimbatore - Gandhipuram",
    lat: 11.0183,
    lng: 76.9725,
    donations: 380,
    criticalRequests: 7,
  },
  {
    region: "Coimbatore - Peelamedu",
    lat: 11.0271,
    lng: 77.0269,
    donations: 340,
    criticalRequests: 11,
  },
  {
    region: "Coimbatore - Singanallur",
    lat: 10.9925,
    lng: 77.0251,
    donations: 290,
    criticalRequests: 6,
  },
];
