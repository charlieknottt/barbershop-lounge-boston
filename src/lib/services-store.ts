// In-memory services store (for demo purposes)

export interface Service {
  id: string;
  name: string;
  description: string;
  price: number;
  duration: number;
  isActive: boolean;
  sortOrder: number;
}

// Initialize with default services
const defaultServices: Service[] = [
  { id: "scissor-cut", name: "Scissor Cut", description: "Classic precision scissor cut tailored to your style", price: 55, duration: 45, isActive: true, sortOrder: 1 },
  { id: "faded-haircut", name: "Faded Haircut", description: "Sharp, clean fade with expert blending", price: 45, duration: 40, isActive: true, sortOrder: 2 },
  { id: "beard-trim", name: "Beard Trim", description: "Professional beard shaping and conditioning", price: 25, duration: 20, isActive: true, sortOrder: 3 },
  { id: "haircut-beard", name: "Haircut & Beard", description: "Complete grooming experience with cut and beard service", price: 70, duration: 60, isActive: true, sortOrder: 4 },
  { id: "straight-razor-shave", name: "Straight Razor Shave", description: "Luxurious traditional straight razor shave with hot towel", price: 45, duration: 40, isActive: true, sortOrder: 5 },
  { id: "color-blending", name: "Color Blending", description: "Seamless grey blending or color enhancement", price: 40, duration: 30, isActive: true, sortOrder: 6 },
  { id: "line-up", name: "Line Up", description: "Clean edges and sharp lines", price: 15, duration: 15, isActive: true, sortOrder: 7 },
  { id: "gift-card", name: "Gift Card", description: "The perfect gift for any occasion", price: 50, duration: 5, isActive: true, sortOrder: 8 },
];

// Global store
const services: Map<string, Service> = new Map(
  defaultServices.map((s) => [s.id, s])
);

export function getAllServices(): Service[] {
  return Array.from(services.values()).sort((a, b) => a.sortOrder - b.sortOrder);
}

export function getActiveServices(): Service[] {
  return getAllServices().filter((s) => s.isActive);
}

export function getServiceById(id: string): Service | undefined {
  return services.get(id);
}

export function updateService(id: string, updates: Partial<Service>): Service | null {
  const existing = services.get(id);
  if (!existing) return null;

  const updated = { ...existing, ...updates };
  services.set(id, updated);
  return updated;
}

export function addService(service: Service): Service {
  services.set(service.id, service);
  return service;
}

export function deleteService(id: string): boolean {
  return services.delete(id);
}
