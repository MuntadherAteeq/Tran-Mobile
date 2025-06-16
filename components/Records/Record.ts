export default class Record {
  id: string;
  name: string;
  date: string;
  description: string;
  phone: string;
  avatar: string;
  email: string;
  total_amount: number;

  constructor(
    id?: string,
    name?: string,
    phone?: string,
    email?: string,
    date?: string,
    avatar?: string,
    description?: string,
    total_amount?: number
  ) {
    this.id = id || "0";
    this.name = name || "";
    this.date = date
      ? new Date(date).toLocaleDateString()
      : new Date().toISOString();
    this.description = description ? description : "";
    this.total_amount = total_amount || 0;
    this.phone = phone || "";
    this.avatar = avatar || "";
    this.email = email || "";
  }
}

export const records: Record[] = [
  new Record(
    "1",
    "John Doe",
    "123-456-7890",
    "example@gmail.com",
    "2023-10-01T12:00:00Z",
    "",
    "Description for John Doe",
    150.75
  ),
];
