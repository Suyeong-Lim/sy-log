import { format, parseISO } from "date-fns";
import styled from "@emotion/styled";

interface DateProps {
  dateTime: string;
  customClass?: string;
}

export default function Date({ dateTime, customClass }: DateProps) {
  const date = parseISO(dateTime);
  const formmatedDate = format(date, "LLLL d, yyyy");
  return (
    <Container>
      <time className={customClass}>{formmatedDate}</time>
    </Container>
  );
}

const Container = styled.div`
  margin-bottom: 2rem;
  margin-top: 0.5rem;
  time {
    color: var(--text-base-70);
  }
`;
