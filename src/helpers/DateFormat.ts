import { parseISO, format, formatDistanceStrict, Locale } from 'date-fns';

import { IEvent } from '../pages/Home';

const sumDistances = (distances: number[]) => {
  const totalDistance = distances?.reduce(
    (total, currentElement) => total + currentElement,
  );

  return totalDistance;
};

export const formatDate = (
  date: string,
  formatType: string,
  locale?: Locale,
) => {
  const dateParsed = parseISO(date);

  console.log('@DATE-formatDate', format(dateParsed, formatType));
  return format(dateParsed, formatType, { locale });
};

export const getAmountTimeForEvents = (events: IEvent[]) => {
  const distances = events?.map(event => {
    const distance = formatDistanceStrict(
      parseISO(event.startTime),
      parseISO(event.endTime),
    );

    // Here i destructured the distance.split to get only the first value of array(['3', 'hours'])
    const [newDistance] = distance.split('');

    // eslint-disable-next-line radix
    const response = parseInt(newDistance);

    return response;
  });

  console.log('@DATE-getAmountTimeForEvents', sumDistances(distances));
  return sumDistances(distances);
};
