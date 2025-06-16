export default class Record {
  id: string;
  name: string;
  date: string;
  description: string;
  total_amount: number;
  phone: string;
  avatar: string;
  email: string;

  constructor(
    id?: string,
    name?: string,
    date?: string,
    description?: string,
    phone?: string,
    avatar?: string,
    total_amount?: number,
    email?: string
  ) {
    this.id = id || "0";
    this.name = name || "";
    this.date = date ? date : new Date().toISOString();
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
    "2023-10-01",
    "Payment for services",
    "555-1234",
    "",
    100
  ),
  new Record(
    "2",
    "Jane Smith",
    "2023-10-02",
    "Refund for overpayment",
    "555-5678",
    "",
    -50
  ),
  new Record(
    "3",
    "Alice Johnson",
    "2023-10-03",
    "Monthly subscription fee",
    "555-8765",
    "",
    30
  ),
  new Record(
    "4",
    "Bob Brown",
    "2023-10-04",
    "Donation to charity",
    "555-4321",
    "",
    200
  ),
  new Record(
    "5",
    "Charlie White",
    "2023-10-05",
    "Payment for goods",
    "555-1357",
    "",
    75
  ),
  new Record(
    "6",
    "Diana Green",
    "2023-10-06",
    "Service charge",
    "555-2468",
    "",
    20
  ),
  new Record(
    "7",
    "Ethan Blue",
    "2023-10-07",
    "Late fee payment",
    "555-3698",
    "",
    15
  ),
  new Record(
    "8",
    "Fiona Yellow",
    "2023-10-08",
    "Payment for consulting",
    "555-2580",
    "",
    -100
  ),
  new Record(
    "9",
    "George Purple",
    "2023-10-09",
    "Refund for service",
    "555-1470",
    "",
    -75
  ),
  new Record(
    "10",
    "Hannah Orange",
    "2023-10-10",
    "Payment for freelance work",
    "555-3690",
    "",
    120
  ),
  new Record(
    "11",
    "Ian Pink",
    "2023-10-11",
    "Payment for project",
    "555-2581",
    "",
    90
  ),
  new Record(
    "12",
    "Julia Gray",
    "2023-10-12",
    "Payment for services rendered",
    "555-1471",
    "",
    60
  ),
  new Record(
    "13",
    "Kevin Black",
    "2023-10-13",
    "Payment for goods sold",
    "555-3691",
    "",
    45
  ),
];
