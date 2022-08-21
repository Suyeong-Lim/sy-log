import { format, parseISO } from "date-fns";
import tw from "twin.macro";
import DateIcon from "public/static/icon/date.svg";

interface DateProps {
  dateTime: string;
  customClass?: string;
}

export default function Date({ dateTime, customClass }: DateProps) {
  const date = parseISO(dateTime);
  const formmatedDate = format(date, "LLLL d, yyyy");
  return (
    <Container>
      <DateIcon />
      <DateTime className={customClass}>{formmatedDate}</DateTime>
    </Container>
  );
}

const Container = tw.div`
flex 
items-center
`;

const DateTime = tw.time`
font-light
text-sm
text-text_till
ml-1
`;
