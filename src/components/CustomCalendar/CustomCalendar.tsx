import { Calendar, dateFnsLocalizer } from 'react-big-calendar'
import format from 'date-fns/format'
import parse from 'date-fns/parse'
import startOfWeek from 'date-fns/startOfWeek'
import getDay from 'date-fns/getDay'
import enUS from 'date-fns/locale/en-US'
import { Box } from '@material-ui/core'

const locales = {
  'en-US': enUS,
}

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
})

interface EventInt {
  id: number;
  title: string;
  start: Date;
  end: Date;
  editable: boolean;
}

interface Props {
  events: EventInt[],
  onSelectEvent?: (event: EventInt) => void;
  handleNavigate: (date: Date) => void;
};


const CustomCalendar = ({ events, onSelectEvent, handleNavigate }: Props) => {

  return (
      <>
        <Box>
          <Calendar
            localizer={localizer}
            events={events}
            startAccessor="start"
            endAccessor="end"
            onSelectEvent={onSelectEvent}
            onNavigate={handleNavigate}
            style={{ height: 500 }}
            views={["month"]}
          />
        </Box>
      </>
  )
}

export default CustomCalendar;