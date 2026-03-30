export interface TemplatePalette {
  titleBg: string; titleFg: string;
  headerBg: string; headerFg: string;
  labelBg: string; labelFg: string;
  accentBg: string; accentFg: string;
  alternateBg: string;
  totalBg: string; totalFg: string;
}

export interface TemplateTypography {
  fontFamily: string;
  titleFontFamily?: string;
  titleSize: number;
  sectionHeaderSize: number;
  headerSize: number;
  bodySize: number;
}

export type TemplateZoneType = "title" | "meta" | "section_header" | "column_header" | "data" | "data_alternate" | "total" | "spacer" | "accent";

export interface TemplateZone {
  type: TemplateZoneType;
  rows: number | [number, number];
}

export interface TemplateMetaField {
  label: string; placeholder: string;
  row: number; labelCol: string; valueCol: string;
}

export interface TemplateColumn {
  header: string; col: string;
  width?: number;
  alignment?: "Left" | "Center" | "Right" | "General";
  isAccent?: boolean; isBold?: boolean;
}

export interface TemplateTotalRow {
  row: number;
  label: string;
  labelCol: string;
  values: Record<string, number | string>;
}

export interface TemplateDesign {
  palette: TemplatePalette;
  typography: TemplateTypography;
  alternatingRows: boolean;
  titleBold: boolean;
  titleRowHeight: number;
  defaultRowHeight: number;
  headerRowHeight: number;
}

export interface TemplateStructure {
  title: string;
  titleRow: number;
  metaFields: TemplateMetaField[];
  headerRow: number;
  columns: TemplateColumn[];
  sampleData: (string | number | null)[][];
  totalRow?: TemplateTotalRow;
  zones: TemplateZone[];
  columnSpan: string;
  totalRows: number;
  sections?: TemplateSection[];
}

export interface TemplateSection {
  name: string;
  headerRow: number;
  headerRow2?: number;
  columns: TemplateColumn[];
  sampleData: (string | number | null)[][];
  totalRow?: TemplateTotalRow;
}

export interface TemplateDefinition {
  id: string;
  name: string;
  category: string;
  description: string;
  design: TemplateDesign;
  structure: TemplateStructure;
  sourceKind: "bundled" | "url";
}
