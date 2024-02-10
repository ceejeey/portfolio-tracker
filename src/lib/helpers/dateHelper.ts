import { format, parse } from 'date-fns';

export const formatDate = (dateString: string) =>
    format(parse(dateString, 'MM/dd/yyyy', new Date()), 'yyyy-MM-dd');
