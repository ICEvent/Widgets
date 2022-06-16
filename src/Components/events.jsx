import React, { useState, useEffect, useRef } from 'react';
import { Form, Container, Segment, Loader, Icon, Divider, Item, Header, Button, Label } from 'semantic-ui-react'
import moment from 'moment';
import parseEvents from "../components/utils/parseEvents";
import EventListItem from '../components/event/EventListItem';
import { useICEvent, useMenu } from "../components/Store";

const Events = () => {
  // const { state: {
  //   isAuthed
  // } } = useGlobalContext(); 
  const icevent = useICEvent();
  const { menu, setMenu } = useMenu();
  const [loading, setLoading] = useState(false);
  // const [activeLabel, setActiveLabel] = useState(0);
  const [criteria, setCriteria] = useState("");
  const [start, setStart] = useState(moment().format("YYYY-MM-DD"));
  const [end, setEnd] = useState(moment().add(1, "months").format("YYYY-MM-DD"));

  const [events, setEvents] = useState([]);
  const [eventsWithoutTag, seteventsWithoutTag] = useState([]);

  const [tag, setTag] = useState();

  const reFilter = (tag) => {
    const filtredEvents = eventsWithoutTag.filter(event => event.tags.includes(tag));
    setEvents(filtredEvents);
    setTag(tag)
  }
  // const eventList = events && events.length > 0 ? events.map(e =>
  const eventList = events.length > 0 ? events.map(e =>
    // <EventListItem key={e.id} event={e} />
    <EventListItem key={e.id} event={e} filterwithTag={reFilter} />
  ) : (
    <Segment placeholder>
      <Header icon>
        <Icon name='info' />
        No Events found!
      </Header>

    </Segment>
  );
  const mountedRef = useRef(true);

  useEffect(() => {
    setMenu("events")
    fetchEvents(moment(), moment().add(1, "months"));
    return () => { mountedRef.current = false; }
  }, [])

  function fetchEvents(s, e) {
    // console.log("fetch events: " + s + " - " + e)
    setLoading(true);
    icevent.getEvents(s.unix(), e.unix(), [], BigInt(1)).then(es => {
      // console.log(events)
      if (mountedRef.current) {
        setLoading(false);
        // let calevents = events.filter(e=> e.calendar && (e.calendar.length > 0 || parseInt(e.calendar[0])>0));
        let orderedEvents = es.sort((a, b) => a.start < b.start ? -1 : (a.start > b.start ? 1 : 0))
        const pevents = parseEvents(orderedEvents);
        seteventsWithoutTag(pevents);
        setEvents(pevents);

      }
      setLoading(false);
    });

    //   icevent.searchEvents(s.unix(),e.unix(),"").then(events=>{
    //      console.log(events);
    //   });

  }



  function handleChange(e) {
    // console.log(e.target.value)

    if (e.target.name == "start") {
      setStart(e.target.value);
    } else if (e.target.name == "end") {
      setEnd(e.target.value);
    } else if (e.target.name == "criteria") {
      setCriteria(e.target.value);
    }
  }

  function searchEvents() {
    if (criteria && criteria != "") {
      setLoading(true);
      icevent.getEvents(moment(start).unix(), moment(end).unix(), [criteria], BigInt(1)).then(events => {
        if (mountedRef.current) {
          let orderedEvents = events.sort((a, b) => a.start < b.start ? -1 : (a.start > b.start ? 1 : 0));
          const pevents = parseEvents(orderedEvents);
          seteventsWithoutTag(pevents);
          setEvents(pevents);
          setLoading(false);
        }
      });
    } else {

    }
  }

  function clearTag() {
    setTag();
    //refresh events
    // fetchEvents(moment(), moment().add(1, "months"));
    setEvents(eventsWithoutTag);
  }

  return (
    <div>

      <Container>

        <Form>
          <Form.Group>
            <Form.Input name="criteria" value={criteria} placeholder="searching key" onChange={handleChange} />
            <Form.Input name="start" value={start} type="date" width={3} onChange={handleChange} />
            -
            <Form.Input name="end" value={end} type="date" width={3} onChange={handleChange} />
            <Button color="green" onClick={searchEvents}>Search</Button>

          </Form.Group>
          <Form.Field>{tag && <Label active icon>{tag}<Icon onClick={clearTag} name="delete" /></Label>}</Form.Field>
        </Form>
        <Divider />
        <Item.Group divided>
          {/* <TagContext.Provider value={reFilter}> */}
          {!loading && eventList}
          {/* </TagContext.Provider> */}
          {loading && <Loader active={loading} inline='centered' />}
        </Item.Group>



      </Container>
    </div>
  )
}

export default Events;