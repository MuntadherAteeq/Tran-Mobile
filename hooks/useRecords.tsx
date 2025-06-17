import React, {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import { Record } from "../models/Record"; // Adjust the import path as necessary

type RecordContextType = {
  records: Record[];
  addRecord: (record: Record) => void;
  updateRecord: (id: string, updated: Partial<Record>) => void;
  deleteRecord: (id: string) => void;
  setRecords: (records: Record[]) => void;
};

const RecordContext = createContext<RecordContextType | undefined>(undefined);

export const useRecords = () => {
  const context = useContext(RecordContext);
  if (!context) {
    throw new Error("useRecords must be used within a RecordProvider");
  }
  return context;
};

type Props = { children: ReactNode };

export const RecordProvider = ({ children }: Props) => {
  const [records, setRecords] = useState<Record[]>([]);

  const addRecord = useCallback((record: Record) => {
    setRecords((prev) => [...prev, record]);
  }, []);

  const updateRecord = useCallback((id: string, updated: Partial<Record>) => {
    setRecords((prev) =>
      prev.map((rec) => (rec.id === id ? { ...rec, ...updated } : rec))
    );
  }, []);

  const deleteRecord = useCallback((id: string) => {
    setRecords((prev) => prev.filter((rec) => rec.id !== id));
  }, []);

  const value = {
    records,
    addRecord,
    updateRecord,
    deleteRecord,
    setRecords,
  };

  useEffect(() => {
    addRecord(
      new Record(
        "1",
        "John Doe",
        "123-456-7890",
        "",
        "2023-10-01",
        "https://example.com/avatar.jpg",
        "Sample description",
        100.0
      )
    );
  }, []);

  return (
    <RecordContext.Provider value={value}>{children}</RecordContext.Provider>
  );
};
