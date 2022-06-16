import React from 'react';
import { Card, Icon, Item } from 'semantic-ui-react'
import moment from 'moment-timezone';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm'
import remarkBreaks from 'remark-breaks';
import remarkGemoji from 'remark-gemoji';
import { Link } from "react-router-dom";
import EditableTag from '../EditableTag';
import { useGlobalContext, useICEvent, useMenu } from "../Store";

export default function EventListItem(props) {
    // const filterwithTag = useContext(TagContext);
    // const [event, setEvent] = useState(props.event)
    const { event, filterwithTag } = props;
    const { state: {
        isAuthed,
        principal
    } } = useGlobalContext();
    return (
        <Item key={event.id}>
            <Item.Image>
                <Card>
                    <Card.Content textAlign="center">
                        <Card.Header>{moment(event.start).tz(event.tz).format("(ddd) MMM DD")}</Card.Header>
                        <Card.Meta>{moment(event.start).tz(event.tz).format("hh:mm a")}</Card.Meta>
                        {!moment(event.end).isSame(moment(event.start), 'day') && <Card.Meta>~ {moment(event.end).format("(ddd) MMM DD")}
                        </Card.Meta>}
                        <Card.Meta>{event.tz}</Card.Meta>
                    </Card.Content>
                </Card>
            </Item.Image>

            <Item.Content>
                <Item.Header>
                    <Link to={"/event/" + event.id} key={event.id}>
                        {/* <a> {props.event.title} </a> */}
                        {event.title}
                    </Link>
                </Item.Header>
                <Item.Meta><Icon name="marker" />
                {Object.getOwnPropertyNames(event.location)[0] == "url" &&
                 <a href={Object.getOwnPropertyNames(event.location)[0]} target="_blank"> {Object.getOwnPropertyNames(event.location)[0]} </a>
                }
                
                {Object.getOwnPropertyNames(event.location)[0] == "address" &&
                    <>{Object.getOwnPropertyNames(event.location)[0]}</>
                }

                    <Link to={"/u/" + event.owner}><Icon name="user" />{event.owner ? event.owner.substring(0, 10) : ''}</Link>
                </Item.Meta>
                <Item.Description>
                    <ReactMarkdown className='break-all' children={event.description} remarkPlugins={[remarkBreaks, remarkGemoji, remarkGfm]} />

                </Item.Description>
                <Item.Extra>

                    <EditableTag readOnly={true} tags={event.tags} filterwithTag={filterwithTag} />
                </Item.Extra>
            </Item.Content>
        </Item>
    )
}