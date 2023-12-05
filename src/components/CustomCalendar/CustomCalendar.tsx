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
};

const CustomCalendar = ({ events, onSelectEvent }: Props) => {
  console.log("events is from calnedar components: ", events)
  return (
      <>
        <Box>
          <Calendar
            localizer={localizer}
            events={events}
            startAccessor="start"
            endAccessor="end"
            onSelectEvent={onSelectEvent}
            style={{ height: 500 }}
            views={["month"]}
          />
        </Box>
      </>
  )
}

export default CustomCalendar;