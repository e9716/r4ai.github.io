import { parseISO, format } from 'date-fns'
import { FC } from 'react'

interface DataProps {
  dateString: string
  className?: string
}

export const Date: FC<DataProps> = ({ dateString, className }) => {
  const date = parseISO(dateString)
  return (
    <time dateTime={dateString} className={className}>
      {format(date, 'LLLL d, yyyy')}
    </time>
  )
}
