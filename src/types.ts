export interface WorkData {
  [empId: string]: EmployeeData;
}

export interface EmployeeData {
  name: string;
  totalDays: number;
  totalHours: number;
  days: DayData[];
}

export interface DayData {
  date: string;
  start: TimeData;
  end: TimeData;
  time: number;
}

export interface TimeData {
  h: number;
  m: number;
  s: number;
}

export type ResultData<T> = {
  success: boolean;
  error: string;
  data: T;
};
