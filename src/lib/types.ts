export interface EmilItem {
  id: string;        // unique row id
  category: string;  // for grouped headers
  name: string;      // item name
  active: boolean;   // status
  updatedAt: string; // ISO or human date
}
