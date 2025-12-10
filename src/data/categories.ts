export interface Category {
  id: string;
  title: string;
  description: string;
  certCount: number;
  color: string;
  bgColor: string;
}

export const categories: Category[] = [
  {
    id: "admin",
    title: "Administrator",
    description: "Master Salesforce administration, security, automation, and data management",
    certCount: 6,
    color: "text-sf-blue",
    bgColor: "bg-sf-blue/10",
  },
  {
    id: "developer",
    title: "Developer",
    description: "Build custom applications using Apex, Visualforce, and Lightning components",
    certCount: 5,
    color: "text-sf-green",
    bgColor: "bg-sf-green/10",
  },
  {
    id: "architect",
    title: "Architect",
    description: "Design enterprise-grade solutions and technical architectures",
    certCount: 8,
    color: "text-sf-purple",
    bgColor: "bg-sf-purple/10",
  },
  {
    id: "consultant",
    title: "Consultant",
    description: "Implement Salesforce solutions for Sales, Service, and Experience Cloud",
    certCount: 7,
    color: "text-sf-orange",
    bgColor: "bg-sf-orange/10",
  },
  {
    id: "marketing",
    title: "Marketing Cloud",
    description: "Manage digital marketing campaigns and customer journeys",
    certCount: 4,
    color: "text-sf-coral",
    bgColor: "bg-sf-coral/10",
  },
  {
    id: "analytics",
    title: "Analytics",
    description: "Build dashboards, reports, and AI-powered insights with Tableau CRM",
    certCount: 3,
    color: "text-sf-blue-light",
    bgColor: "bg-sf-blue-light/10",
  },
];

