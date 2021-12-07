import { parseISO, format } from 'date-fns';
// import { en } from 'date-fns/locale'


const Date = ({ dateString }) => {
    const date = parseISO(dateString)

    return <time dateTime={dateString}>{format(date, ' LLLL, d, yyyy')}</time>
}

export default Date