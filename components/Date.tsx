import { format, parseISO } from "date-fns";

interface DateProps {
  dateTime: string;
  customClass?: string;
}

export default function Date({ dateTime, customClass }: DateProps) {
  const date = parseISO(dateTime);
  const formmatedDate = format(date, "LLLL d, yyyy");
  return <time className={customClass}>{formmatedDate}</time>;
}
