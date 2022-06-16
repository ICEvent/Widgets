import moment from 'moment';
import { EVENT_ACTIVITY } from '../../lib/constants';

const parseEvents = (events) => {
  let pevents = []
  events.map(e => {
    let etype = Object.getOwnPropertyNames(e.etype)[0];
    let solution = e.solution;
    if (etype == EVENT_ACTIVITY) {

      solution = {
        price: {
          amount: parseFloat(e.solution["activity"].price.amount),
          currency: e.solution["activity"].price.currency
        },
        attendeelimit: parseInt(e.solution["activity"].attendeelimit),
        formfields: e.solution["activity"].formfields,
        registerat: Object.getOwnPropertyNames(e.solution["activity"].registerat)[0]
      }
    }
    let event = {
      id: parseInt(e.id),
      calendar: parseInt(e.calendar),
      title: e.title,
      description: e.description,
      start: moment.unix(parseInt(e.start)).toDate(),
      end: moment.unix(parseInt(e.end)).toDate(),
      tz: e.tz,
      location: e.location,
      status: Object.getOwnPropertyNames(e.status)[0],
      owner: e.owner,
      ispublic: e.ispublic,
      allDay: e.allday,
      etype: etype,
      isrepeat: e.isrepeat,
      repeatdata:  e.repeatdata[0] ,
      tags: e.tags,
      cost: e.cost,
      solution: solution

    }
    // console.log(event);
    pevents.push(event);
  })
  return pevents;
}
export default parseEvents;