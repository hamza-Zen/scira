export interface TemplateCatalogEntry {
  id: string;
  name: string;
  category: string;
  description: string;
  primaryColor: string;
  previewImage?: string;
  xlsxPath: string;
}

export const TEMPLATE_CATALOG: TemplateCatalogEntry[] = [
  {
    id: "daily-sales-report",
    name: "Daily Sales Report",
    category: "Sales",
    description: "Track daily item sales with unit prices, quantities, tax calculations, and line totals with alternating row shading.",
    primaryColor: "#11545B",
    xlsxPath: "public/templates/files/sales_templates_Daily-Sales-Report.xlsx",
  },
  {
    id: "sales-balanced-scorecard",
    name: "Sales Balanced Scorecard",
    category: "Sales",
    description: "Measure sales performance across financial, customer, process and growth perspectives with weighted scoring.",
    primaryColor: "#4472C4",
    xlsxPath: "public/templates/files/sales_templates_Sales-Balanced-Scorecard.xlsx",
  },
  {
    id: "sales-forecast-12m",
    name: "12-Month Sales Forecast",
    category: "Sales",
    description: "Project monthly sales revenue over a 12-month horizon with growth assumptions and quarterly subtotals.",
    primaryColor: "#2F5496",
    xlsxPath: "public/templates/files/sales_templates_Sales-Forecast-12-Months.xlsx",
  },
  {
    id: "sales-contest-tracker",
    name: "Sales Contest Tracker",
    category: "Sales",
    description: "Track sales contest standings with individual rep performance, targets, and ranking.",
    primaryColor: "#1F4E79",
    xlsxPath: "public/templates/files/sales_templates_Sales-Contest-Tracker.xlsx",
  },
  {
    id: "sales-lead-tracking",
    name: "Sales Lead Tracking Sheet",
    category: "Sales",
    description: "Manage sales leads through the pipeline with contact info, status, value and follow-up dates.",
    primaryColor: "#2F5496",
    xlsxPath: "public/templates/files/sales_templates_Sales-Lead-Tracking-Sheet.xlsx",
  },
  {
    id: "monthly-time-sheet",
    name: "Monthly Time Sheet",
    category: "Schedule",
    description: "Record daily work hours for an entire month with overtime calculations and approval fields.",
    primaryColor: "#305496",
    xlsxPath: "public/templates/files/schedule_sheets_Monthly-Time-Sheet.xlsx",
  },
  {
    id: "meeting-attendance",
    name: "Meeting Attendance Sheet",
    category: "Schedule",
    description: "Track meeting attendance with participant details, check-in times, and notes.",
    primaryColor: "#4472C4",
    xlsxPath: "public/templates/files/schedule_sheets_Meeting-Attendance-Sheet.xlsx",
  },
  {
    id: "employee-schedule",
    name: "Employee Schedule Sheet",
    category: "Schedule",
    description: "Plan weekly employee shifts with role assignments, hours tracking, and schedule overview.",
    primaryColor: "#305496",
    xlsxPath: "public/templates/files/schedule_sheets_Employee-Schedule-Sheet.xlsx",
  },
  {
    id: "resource-planning",
    name: "Resource Planning Sheet",
    category: "Planning",
    description: "Allocate team resources across projects with capacity tracking and utilization metrics.",
    primaryColor: "#4472C4",
    xlsxPath: "public/templates/files/plan_templates_Resource-Planning-Sheet.xlsx",
  },
  {
    id: "work-planner",
    name: "Work Planner Sheet",
    category: "Planning",
    description: "Organize tasks and milestones with priorities, deadlines, owners, and progress tracking.",
    primaryColor: "#375623",
    xlsxPath: "public/templates/files/plan_templates_Work-Planner-Sheet.xlsx",
  },
  {
    id: "goal-tracking",
    name: "Goal Tracking Sheet",
    category: "Tracking",
    description: "Track personal or team goals across categories like health, career, finance, and education with progress indicators.",
    primaryColor: "#385723",
    xlsxPath: "public/templates/files/tracking_templates_Goal-Tracking-Sheet.xlsx",
  },
];
