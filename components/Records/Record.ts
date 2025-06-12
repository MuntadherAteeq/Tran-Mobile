export default class Record {
  id: string;
  title?: string;
  date?: string;
  description?: string;
  total_amount?: number;
  phone?: string;

  constructor(id: string, title: string, date?: string, description?: string) {
    this.id = id;
    this.title = title;
    this.date = date ? date : new Date().toISOString();
    this.description = description ? description : "";
    this.total_amount = 0;
  }
}
