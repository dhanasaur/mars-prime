// Mock API functions that simulate backend calls

import {
  hospitals,
  requests,
  donorStats,
  inventoryStats,
  alerts,
  auditLog,
  dailyDonations,
  regionDonations
} from '../data/mockData';

const delay = (ms = 300) => new Promise(resolve => setTimeout(resolve, ms));

export const fetchHospitals = async () => {
  await delay();
  return hospitals;
};

export const fetchRequests = async () => {
  await delay();
  return requests;
};

export const fetchDonorStats = async () => {
  await delay();
  return donorStats;
};

export const fetchInventoryStats = async () => {
  await delay();
  return inventoryStats;
};

export const fetchAlerts = async () => {
  await delay();
  return alerts;
};

export const fetchAuditLog = async () => {
  await delay();
  return auditLog;
};

export const fetchDailyDonations = async () => {
  await delay();
  return dailyDonations;
};

export const fetchRegionDonations = async () => {
  await delay();
  return regionDonations;
};

export const updateHospitalStatus = async (hospitalId, newStatus, reason) => {
  await delay();
  const hospital = hospitals.find(h => h.id === hospitalId);
  if (hospital) {
    hospital.status = newStatus;
    auditLog.unshift({
      id: `AL${Date.now()}`,
      timestamp: new Date().toISOString(),
      actor: "Current User",
      actionType: `${newStatus} Hospital`,
      target: hospital.name,
      notes: reason
    });
  }
  return { success: true };
};
