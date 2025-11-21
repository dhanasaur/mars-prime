# MARS Prime - Governance & Command Dashboard

A comprehensive blood management governance dashboard for state/national health authorities to monitor, manage, and analyze blood donation and distribution across a three-tier ecosystem.

## Overview

MARS Prime is the authority-facing portal that provides:
- Real-time monitoring of donations and hospital activity
- Time-to-donation analytics and SLA tracking
- Visual heatmaps of donation patterns by region
- Hospital permission and compliance management
- Complete audit trails of all governance actions
- Alert monitoring and disaster response coordination

## Technology Stack

- **Bundler**: Vite
- **Framework**: React
- **Language**: JavaScript (ESNext) with TypeScript support
- **Styling**: Tailwind CSS
- **Charts**: Recharts
- **Maps**: Leaflet with react-leaflet
- **State Management**: React hooks and Context API

## Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:8080`

## Features

### Dashboard Pages

1. **Overview Dashboard** - High-level KPIs and key metrics
2. **Donations & Time Analytics** - Detailed request-donation cycle analysis
3. **Request Lifecycle Tracker** - Kanban-style view of all active requests
4. **Hospital Governance** - Permission management and compliance monitoring
5. **Heatmap & Geospatial View** - Regional donation visualization
6. **Alerts & Compliance** - System alerts and non-compliance tracking
7. **Audit Log** - Complete record of governance actions

### Key Analytics

The dashboard surfaces comprehensive analytics including:

- Inventory stats (available, required, gap by blood group)
- Time-to-donation metrics (avg, median, by priority, by GPRS tier)
- SLA compliance rates
- Donor activity statistics (response rates, λ-scores, geo-verification)
- Hospital performance metrics
- Regional donation patterns
- Alert and compliance statistics

## Mock Data Structure

All data is mocked for front-end demonstration purposes:

- **Mock Data**: Located in `src/data/mockData.js`
- **Mock APIs**: Located in `src/api/mockApi.js`

The mock API functions simulate network latency using setTimeout and return realistic data structures.

### Data Files

- `hospitals` - Hospital directory with status, compliance, and stats
- `requests` - Blood requests with timing and lifecycle data
- `donorStats` - Aggregated donor metrics (no personal data)
- `inventoryStats` - Blood inventory by group and region
- `alerts` - System and compliance alerts
- `auditLog` - Governance action history
- `dailyDonations` - Time series donation data
- `regionDonations` - Geospatial donation data

## Color Palette

The application uses a medical technology theme:

- **Primary Red** (`#C62828` / `hsl(0, 65%, 46%)`): Critical actions, urgent indicators
- **Secondary Red** (`#EF5350` / `hsl(4, 82%, 62%)`): Warnings, hover states
- **Background** (`#F8F9FA` / `hsl(210, 17%, 98%)`): Page backgrounds
- **Success Green** (`#2E7D32` / `hsl(123, 46%, 34%)`): Positive states, healthy inventory

These colors are configured in `src/index.css` and `tailwind.config.ts`.

## Authentication

The login page (`/login`) provides front-end validation only. Any email and password will grant access to the dashboard for demonstration purposes.

## Building for Production

```bash
npm run build
```

The optimized production build will be in the `dist/` directory.

## Project Structure

```
src/
├── api/              # Mock API functions
├── components/
│   ├── dashboard/    # Reusable dashboard components
│   ├── layout/       # Layout components (Sidebar, Navbar)
│   └── ui/           # Shadcn UI components
├── data/             # Mock data files
├── pages/            # Page components
├── App.tsx           # Root component with routing
└── index.css         # Global styles and design system
```

## Development Notes

- All components use the design system defined in `index.css`
- Colors should be referenced via Tailwind CSS custom properties
- Mock data can be expanded in `src/data/mockData.js`
- Analytics calculations are performed on the front-end from mock data
- No actual backend is required - all functionality is front-end only

## License

This is a demonstration project for educational and portfolio purposes.
