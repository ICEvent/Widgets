'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _toConsumableArray = require('@babel/runtime/helpers/toConsumableArray');
var _slicedToArray = require('@babel/runtime/helpers/slicedToArray');
var react = require('react');
var _taggedTemplateLiteral = require('@babel/runtime/helpers/taggedTemplateLiteral');
var styled = require('styled-components');
var moment = require('moment');
var agent = require('@dfinity/agent');
var react$1 = require('@emotion/react');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var _toConsumableArray__default = /*#__PURE__*/_interopDefaultLegacy(_toConsumableArray);
var _slicedToArray__default = /*#__PURE__*/_interopDefaultLegacy(_slicedToArray);
var _taggedTemplateLiteral__default = /*#__PURE__*/_interopDefaultLegacy(_taggedTemplateLiteral);
var styled__default = /*#__PURE__*/_interopDefaultLegacy(styled);
var moment__default = /*#__PURE__*/_interopDefaultLegacy(moment);

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11;
var Frame = styled__default["default"].div(_templateObject || (_templateObject = _taggedTemplateLiteral__default["default"](["\n  width: 15rem;\n"])));
var Header = styled__default["default"].h1(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral__default["default"](["\n  font: 1rem sans-serif;\n  padding: 0 1.25rem 0 1.25rem;\n  display: flex;\n  justify-content: space-between;\n"])));
var ButtonGroup = styled__default["default"].div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral__default["default"](["\n  display: inline-flex;\n"])));
var Button = styled__default["default"].div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral__default["default"](["\ncursor: pointer;\n"])));
var ArrowLeft = styled__default["default"].i(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral__default["default"](["\n  border: solid dimgray;\n  border-width: 0 0.125rem 0.125rem 0;\n  display: inline-block;\n  padding: 0.18rem; \n  transform: rotate(135deg);\n  -webkit-transform: rotate(135deg);\n"])));
var ArrowRight = styled__default["default"].i(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral__default["default"](["\n  border: solid dimgray;\n  border-width: 0 0.125rem 0.125rem 0;\n  display: inline-block;\n  padding: 0.18rem; \n  transform: rotate(-45deg);\n  -webkit-transform: rotate(-45deg);\n"])));
var Body = styled__default["default"].div(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral__default["default"](["\n  width: 100%;\n  display: flex;\n  flex-wrap: wrap;\n  font-family: sans-serif;\n  font-size: small;\n"])));
var Day = styled__default["default"].div(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral__default["default"](["\n  width: 14%;\n  line-height: 2rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-style: ", ";\n  cursor: ", ";\n  \n  ", "\n\n  ", "\n\n  ", "\n"])), function (props) {
  return props.isCurrMonth || props.IsWeekTitle || "italic";
}, function (props) {
  return props.IsWeekTitle || !props.isCurrMonth ? "default" : "pointer";
}, function (props) {
  return props.isToday && styled.css(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral__default["default"](["\n      text-emphasis: filled circle crimson;\n      text-emphasis-position: under right;\n    "])));
}, function (props) {
  return props.isToday && styled.css(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral__default["default"](["\n      border: 0.0625rem solid royalblue;\n      border-radius: 50%;\n    "])));
}, function (props) {
  return props.isSelected && styled.css(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral__default["default"](["\n      background-color: royalblue;\n      border-radius: 50%;\n    "])));
});

var ONE_WEEK_SEC = 7 * 24 * 60 * 60;
BigInt(ONE_WEEK_SEC * 1e9);
var EVENT_ACTIVITY = "activity";

var parseEvents = function parseEvents(events) {
  var pevents = [];
  events.map(function (e) {
    var etype = Object.getOwnPropertyNames(e.etype)[0];
    var solution = e.solution;

    if (etype == EVENT_ACTIVITY) {
      solution = {
        price: {
          amount: parseFloat(e.solution["activity"].price.amount),
          currency: e.solution["activity"].price.currency
        },
        attendeelimit: parseInt(e.solution["activity"].attendeelimit),
        formfields: e.solution["activity"].formfields,
        registerat: Object.getOwnPropertyNames(e.solution["activity"].registerat)[0]
      };
    }

    var event = {
      id: parseInt(e.id),
      calendar: parseInt(e.calendar),
      title: e.title,
      description: e.description,
      start: moment__default["default"].unix(parseInt(e.start)).toDate(),
      end: moment__default["default"].unix(parseInt(e.end)).toDate(),
      tz: e.tz,
      location: e.location,
      status: Object.getOwnPropertyNames(e.status)[0],
      owner: e.owner,
      ispublic: e.ispublic,
      allDay: e.allday,
      etype: etype,
      isrepeat: e.isrepeat,
      repeatdata: e.repeatdata[0],
      tags: e.tags,
      cost: e.cost,
      solution: solution
    }; // console.log(event);

    pevents.push(event);
  });
  return pevents;
};

var HOST = process.env.NEXT_PUBLIC_DFX_NETWORK === "local" ? "http://localhost:8000" : "https://ic0.app";
process.env.IDENTITY_CANISTER_ID ? "http://".concat(process.env.IDENTITY_CANISTER_ID, ".localhost:8000") : 'https://identity.ic0.app';
var defaultAgent = new agent.HttpAgent({
  host: HOST
});

const idlFactory$6 = ({ IDL }) => {
  const Ctype = IDL.Variant({
    'appointment' : IDL.Null,
    'schedule' : IDL.Null,
    'common' : IDL.Null,
    'activity' : IDL.Null,
    'itinerary' : IDL.Null,
  });
  const BookingSet = IDL.Record({
    'tz' : IDL.Text,
    'bookend' : IDL.Text,
    'slotlength' : IDL.Variant({ 'hours' : IDL.Nat8, 'minutes' : IDL.Nat8 }),
    'bookstart' : IDL.Text,
  });
  const Group = IDL.Record({
    'supervisor' : IDL.Text,
    'members' : IDL.Vec(IDL.Text),
  });
  const ScheduleSet = IDL.Record({ 'groups' : IDL.Vec(Group) });
  const Currency = IDL.Text;
  const ActivitySet = IDL.Record({ 'currency' : Currency });
  const ItinerarySet = IDL.Record({});
  const Solution = IDL.Variant({
    'appointment' : BookingSet,
    'schedule' : ScheduleSet,
    'common' : IDL.Null,
    'activity' : ActivitySet,
    'itinerary' : ItinerarySet,
  });
  const ContactInfo = IDL.Record({
    'dns' : IDL.Opt(IDL.Text),
    'fax' : IDL.Opt(IDL.Text),
    'url' : IDL.Opt(IDL.Text),
    'name' : IDL.Text,
    'email' : IDL.Text,
    'address' : IDL.Text,
    'phone' : IDL.Text,
  });
  const Wallet = IDL.Record({
    'network' : IDL.Variant({
      'ADA' : IDL.Null,
      'BTC' : IDL.Null,
      'DOT' : IDL.Null,
      'ETH' : IDL.Null,
      'ICP' : IDL.Null,
    }),
    'address' : IDL.Text,
  });
  const Organization = IDL.Record({
    'bn' : IDL.Opt(IDL.Text),
    'taxno' : IDL.Opt(IDL.Text),
    'contact' : IDL.Opt(ContactInfo),
    'logo' : IDL.Opt(IDL.Text),
    'currency' : Currency,
    'wallet' : IDL.Opt(Wallet),
  });
  const NewCalendar = IDL.Record({
    'url' : IDL.Text,
    'name' : IDL.Text,
    'color' : IDL.Text,
    'tags' : IDL.Vec(IDL.Text),
    'ctype' : Ctype,
    'description' : IDL.Text,
    'ispublic' : IDL.Bool,
    'solution' : Solution,
    'organization' : IDL.Opt(Organization),
  });
  const Result = IDL.Variant({ 'ok' : IDL.Nat, 'err' : IDL.Text });
  const NewCategory = IDL.Record({
    'hook' : IDL.Nat,
    'name' : IDL.Text,
    'parent' : IDL.Nat,
  });
  const NewChecklistReq = IDL.Record({
    'list' : IDL.Vec(IDL.Text),
    'name' : IDL.Text,
    'description' : IDL.Text,
    'calendar' : IDL.Nat,
    'ispublic' : IDL.Bool,
  });
  const NewInvitee = IDL.Record({
    'eventid' : IDL.Nat,
    'role' : IDL.Variant({
      'admin' : IDL.Null,
      'moderator' : IDL.Null,
      'viewer' : IDL.Null,
    }),
    'inviteeid' : IDL.Text,
    'inviteename' : IDL.Text,
  });
  const Address = IDL.Record({
    'postcode' : IDL.Text,
    'country' : IDL.Text,
    'province' : IDL.Text,
    'city' : IDL.Text,
    'address' : IDL.Text,
  });
  const Currency__2 = IDL.Text;
  const Wallet__2 = IDL.Record({
    'currency' : Currency__2,
    'address' : IDL.Text,
  });
  const Contact__1 = IDL.Record({
    'fax' : IDL.Opt(IDL.Text),
    'url' : IDL.Opt(IDL.Text),
    'contact' : IDL.Opt(IDL.Text),
    'name' : IDL.Text,
    'email' : IDL.Text,
    'address' : Address,
    'wallet' : IDL.Opt(Wallet__2),
    'phone' : IDL.Text,
  });
  const Tax = IDL.Record({
    'name' : IDL.Text,
    'rate' : IDL.Float64,
    'number' : IDL.Text,
    'amount' : IDL.Float64,
  });
  const Item = IDL.Record({
    'desc' : IDL.Text,
    'quantity' : IDL.Nat32,
    'itype' : IDL.Variant({ 'cost' : IDL.Null, 'income' : IDL.Null }),
    'price' : IDL.Float64,
  });
  const NewInvoice = IDL.Record({
    'id' : IDL.Text,
    'to' : Contact__1,
    'tax' : Tax,
    'paymentterms' : IDL.Vec(IDL.Text),
    'cost' : IDL.Float64,
    'from' : Contact__1,
    'note' : IDL.Text,
    'event' : IDL.Nat,
    'calendar' : IDL.Nat,
    'currency' : Currency__2,
    'adjust' : IDL.Float64,
    'discount' : IDL.Float64,
    'items' : IDL.Vec(Item),
    'amount' : IDL.Float64,
  });
  const NewNoteReq = IDL.Record({
    'title' : IDL.Text,
    'content' : IDL.Text,
    'tags' : IDL.Vec(IDL.Text),
    'calendar' : IDL.Nat,
    'ispublic' : IDL.Bool,
    'category' : IDL.Nat,
  });
  const Partrole = IDL.Variant({
    'admin' : IDL.Null,
    'editor' : IDL.Null,
    'viewer' : IDL.Null,
  });
  const Participant = IDL.Record({
    'pid' : IDL.Text,
    'name' : IDL.Text,
    'role' : Partrole,
    'calendar' : IDL.Nat,
  });
  const TodoType = IDL.Variant({
    'ticket' : IDL.Null,
    'idea' : IDL.Null,
    'task' : IDL.Null,
    'bounty' : IDL.Null,
    'proposal' : IDL.Null,
    'issue' : IDL.Null,
  });
  const Priority = IDL.Variant({
    'low' : IDL.Null,
    'high' : IDL.Null,
    'medium' : IDL.Null,
  });
  const NewTodo = IDL.Record({
    'ttype' : TodoType,
    'tags' : IDL.Vec(IDL.Text),
    'todo' : IDL.Text,
    'description' : IDL.Text,
    'bounty' : IDL.Float64,
    'duedate' : IDL.Nat,
    'calendar' : IDL.Nat,
    'ispublic' : IDL.Bool,
    'priority' : Priority,
    'attachments' : IDL.Vec(IDL.Text),
    'parent' : IDL.Nat,
  });
  const RegStatus = IDL.Variant({
    'regjected' : IDL.Null,
    'request' : IDL.Null,
    'paid' : IDL.Null,
    'approved' : IDL.Null,
    'confirmed' : IDL.Null,
  });
  const RegData = IDL.Record({ 'value' : IDL.Text, 'name' : IDL.Text });
  const Register = IDL.Record({
    'status' : RegStatus,
    'eventid' : IDL.Nat,
    'ticket' : IDL.Opt(IDL.Text),
    'data' : IDL.Vec(RegData),
    'name' : IDL.Text,
    'regtime' : IDL.Int,
    'register' : IDL.Text,
  });
  const Status__1 = IDL.Variant({
    'new' : IDL.Null,
    'done' : IDL.Null,
    'progress' : IDL.Null,
  });
  const OrderItem = IDL.Variant({
    'ticket' : IDL.Nat,
    'mint' : IDL.Nat,
    'solution' : IDL.Nat,
  });
  const RepeatType = IDL.Variant({
    'weekday' : IDL.Null,
    'weekend' : IDL.Null,
    'monthly' : IDL.Null,
    'yearly' : IDL.Null,
    'daily' : IDL.Null,
    'weekly' : IDL.Null,
  });
  const RepeatData = IDL.Record({
    'adjusts' : IDL.Vec(IDL.Nat),
    'excludes' : IDL.Vec(IDL.Nat),
    'days' : IDL.Vec(IDL.Nat),
    'frequency' : IDL.Nat,
    'rtype' : RepeatType,
  });
  const Etype = IDL.Variant({
    'appointment' : IDL.Null,
    'contract' : IDL.Null,
    'schedule' : IDL.Null,
    'common' : IDL.Null,
    'activity' : IDL.Null,
    'itinerary' : IDL.Null,
  });
  const Cost = IDL.Record({ 'currency' : IDL.Text, 'amount' : IDL.Float64 });
  const ContactInfo__1 = IDL.Record({
    'fax' : IDL.Text,
    'contact' : IDL.Text,
    'name' : IDL.Text,
    'email' : IDL.Text,
    'address' : IDL.Text,
    'phone' : IDL.Text,
  });
  const Appointment = IDL.Record({ 'cost' : Cost, 'guest' : ContactInfo__1 });
  const Contract = IDL.Record({
    'jon' : ContactInfo__1,
    'sam' : ContactInfo__1,
    'cost' : Cost,
    'paymenterm' : IDL.Text,
  });
  const Group__1 = IDL.Record({
    'supervisor' : IDL.Text,
    'members' : IDL.Vec(IDL.Text),
  });
  const Schedule = IDL.Record({ 'groups' : IDL.Vec(Group__1) });
  const Formfield = IDL.Record({
    'name' : IDL.Text,
    'isrequired' : IDL.Bool,
    'description' : IDL.Text,
  });
  const Activity = IDL.Record({
    'attendeelimit' : IDL.Nat,
    'formfields' : IDL.Vec(Formfield),
    'price' : Cost,
    'registerat' : IDL.Variant({ 'createon' : IDL.Null, 'starton' : IDL.Null }),
  });
  const ContactInfo__2 = IDL.Record({
    'fax' : IDL.Opt(IDL.Text),
    'postcode' : IDL.Text,
    'contact' : IDL.Opt(IDL.Text),
    'country' : IDL.Text,
    'province' : IDL.Text,
    'city' : IDL.Text,
    'name' : IDL.Text,
    'email' : IDL.Text,
    'website' : IDL.Opt(IDL.Text),
    'address' : IDL.Text,
    'wallet' : IDL.Opt(
      IDL.Record({ 'network' : IDL.Text, 'address' : IDL.Text })
    ),
    'phone' : IDL.Text,
  });
  const Admission = IDL.Record({
    'contact' : ContactInfo__2,
    'code' : IDL.Text,
  });
  const Hotel = IDL.Record({ 'contact' : ContactInfo__2, 'code' : IDL.Text });
  const Restaurant = IDL.Record({
    'contact' : ContactInfo__2,
    'code' : IDL.Text,
  });
  const Iday = IDL.Record({
    'to' : IDL.Text,
    'via' : IDL.Text,
    'admissions' : IDL.Vec(Admission),
    'hotel' : IDL.Opt(Hotel),
    'itineraries' : IDL.Vec(IDL.Text),
    'from' : IDL.Text,
    'breakfast' : IDL.Opt(Restaurant),
    'lunch' : IDL.Opt(Restaurant),
    'dinner' : IDL.Opt(Restaurant),
  });
  const Itinerary = IDL.Record({
    'cost' : Cost,
    'operater' : IDL.Text,
    'idays' : IDL.Vec(Iday),
    'driver' : IDL.Record({ 'name' : IDL.Text, 'phone' : IDL.Text }),
  });
  const Solution__1 = IDL.Variant({
    'appointment' : Appointment,
    'contract' : Contract,
    'schedule' : Schedule,
    'common' : IDL.Null,
    'activity' : Activity,
    'itinerary' : Itinerary,
  });
  const Location = IDL.Variant({
    'geo' : IDL.Text,
    'url' : IDL.Text,
    'address' : IDL.Text,
  });
  const NewEvent = IDL.Record({
    'tz' : IDL.Text,
    'end' : IDL.Nat,
    'title' : IDL.Text,
    'repeatdata' : IDL.Opt(RepeatData),
    'isrepeat' : IDL.Bool,
    'allday' : IDL.Bool,
    'cost' : IDL.Float64,
    'tags' : IDL.Vec(IDL.Text),
    'description' : IDL.Text,
    'etype' : Etype,
    'calendar' : IDL.Nat,
    'start' : IDL.Nat,
    'ispublic' : IDL.Bool,
    'solution' : Solution__1,
    'location' : Location,
    'attachments' : IDL.Vec(IDL.Text),
  });
  const UpdateEvent = IDL.Record({
    'tz' : IDL.Text,
    'end' : IDL.Nat,
    'title' : IDL.Text,
    'repeatdata' : IDL.Opt(RepeatData),
    'allday' : IDL.Bool,
    'cost' : IDL.Float64,
    'tags' : IDL.Vec(IDL.Text),
    'description' : IDL.Text,
    'start' : IDL.Nat,
    'ispublic' : IDL.Bool,
    'solution' : Solution__1,
    'location' : Location,
    'attachments' : IDL.Vec(IDL.Text),
  });
  const Todo__1 = IDL.Record({
    'id' : IDL.Nat,
    'status' : Status__1,
    'assignee' : IDL.Text,
    'ttype' : TodoType,
    'owner' : IDL.Text,
    'tags' : IDL.Vec(IDL.Text),
    'todo' : IDL.Text,
    'description' : IDL.Text,
    'bounty' : IDL.Float64,
    'duedate' : IDL.Nat,
    'calendar' : IDL.Nat,
    'ispublic' : IDL.Bool,
    'priority' : Priority,
    'donetime' : IDL.Int,
    'attachments' : IDL.Vec(IDL.Text),
    'parent' : IDL.Nat,
  });
  const Status__2 = IDL.Variant({ 'live' : IDL.Null, 'offline' : IDL.Null });
  const Calendar__1 = IDL.Record({
    'id' : IDL.Nat,
    'url' : IDL.Text,
    'status' : Status__2,
    'owner' : IDL.Text,
    'name' : IDL.Text,
    'color' : IDL.Text,
    'tags' : IDL.Vec(IDL.Text),
    'ctype' : Ctype,
    'description' : IDL.Text,
    'ispublic' : IDL.Bool,
    'solution' : Solution,
    'isverified' : IDL.Bool,
    'organization' : IDL.Opt(Organization),
  });
  const Result_2 = IDL.Variant({ 'ok' : Calendar__1, 'err' : IDL.Text });
  const Status = IDL.Variant({
    'new' : IDL.Null,
    'canceled' : IDL.Null,
    'finished' : IDL.Null,
    'confirmed' : IDL.Null,
  });
  const Event = IDL.Record({
    'id' : IDL.Nat,
    'tz' : IDL.Text,
    'end' : IDL.Nat,
    'status' : Status,
    'title' : IDL.Text,
    'repeatdata' : IDL.Opt(RepeatData),
    'isrepeat' : IDL.Bool,
    'owner' : IDL.Text,
    'allday' : IDL.Bool,
    'cost' : IDL.Float64,
    'tags' : IDL.Vec(IDL.Text),
    'description' : IDL.Text,
    'etype' : Etype,
    'calendar' : IDL.Nat,
    'start' : IDL.Nat,
    'ispublic' : IDL.Bool,
    'solution' : Solution__1,
    'location' : Location,
    'attachments' : IDL.Vec(IDL.Text),
  });
  const Note = IDL.Record({
    'id' : IDL.Nat,
    'title' : IDL.Text,
    'content' : IDL.Text,
    'owner' : IDL.Text,
    'tags' : IDL.Vec(IDL.Text),
    'createtime' : IDL.Int,
    'calendar' : IDL.Nat,
    'ispublic' : IDL.Bool,
    'category' : IDL.Nat,
    'attachments' : IDL.Vec(IDL.Text),
  });
  const Checklist = IDL.Record({
    'id' : IDL.Nat,
    'owner' : IDL.Text,
    'list' : IDL.Vec(IDL.Text),
    'name' : IDL.Text,
    'description' : IDL.Text,
    'calendar' : IDL.Nat,
    'ispublic' : IDL.Bool,
  });
  const InviteeStatus = IDL.Variant({
    'invited' : IDL.Null,
    'rejected' : IDL.Null,
    'accepted' : IDL.Null,
  });
  const Invitee = IDL.Record({
    'status' : InviteeStatus,
    'eventid' : IDL.Nat,
    'role' : IDL.Variant({
      'admin' : IDL.Null,
      'moderator' : IDL.Null,
      'viewer' : IDL.Null,
    }),
    'inviteeid' : IDL.Text,
    'inviteename' : IDL.Text,
  });
  const Invoice = IDL.Record({
    'id' : IDL.Text,
    'to' : Contact__1,
    'tax' : Tax,
    'status' : IDL.Variant({
      'new' : IDL.Null,
      'canceled' : IDL.Null,
      'paid' : IDL.Null,
    }),
    'paymentterms' : IDL.Vec(IDL.Text),
    'cost' : IDL.Float64,
    'from' : Contact__1,
    'note' : IDL.Text,
    'createtime' : IDL.Int,
    'event' : IDL.Nat,
    'calendar' : IDL.Nat,
    'currency' : Currency__2,
    'adjust' : IDL.Float64,
    'discount' : IDL.Float64,
    'items' : IDL.Vec(Item),
    'amount' : IDL.Float64,
  });
  const Log = IDL.Record({
    'function' : IDL.Nat,
    'action' : IDL.Nat,
    'user' : IDL.Text,
    'logtime' : IDL.Int,
  });
  const Category = IDL.Record({
    'id' : IDL.Nat,
    'owner' : IDL.Text,
    'hook' : IDL.Nat,
    'name' : IDL.Text,
    'parent' : IDL.Nat,
  });
  const Contact = IDL.Record({
    'id' : IDL.Nat,
    'owner' : IDL.Text,
    'name' : IDL.Text,
    'note' : IDL.Text,
    'tags' : IDL.Vec(IDL.Text),
    'ctype' : IDL.Nat,
    'email' : IDL.Text,
    'calendar' : IDL.Nat,
    'address' : IDL.Text,
    'disable' : IDL.Bool,
    'contactid' : IDL.Text,
    'phone' : IDL.Text,
    'attachments' : IDL.Vec(IDL.Text),
  });
  const OrderStatus = IDL.Variant({
    'new' : IDL.Text,
    'canceled' : IDL.Text,
    'paid' : IDL.Text,
    'assetquota' : IDL.Text,
    'uploaded' : IDL.Text,
    'delivered' : IDL.Text,
    'ticketquota' : IDL.Text,
  });
  const OrderData = IDL.Variant({
    'texts' : IDL.Vec(IDL.Text),
    'floats' : IDL.Vec(IDL.Float64),
    'ints' : IDL.Vec(IDL.Int),
    'nats' : IDL.Vec(IDL.Nat),
  });
  const Order = IDL.Record({
    'status' : OrderStatus,
    'changetime' : IDL.Opt(IDL.Int),
    'data' : OrderData,
    'item' : OrderItem,
    'memo' : IDL.Opt(IDL.Text),
    'count' : IDL.Nat,
    'txid' : IDL.Nat,
    'seller' : IDL.Text,
    'orderid' : IDL.Nat,
    'ordertime' : IDL.Int,
    'consumer' : IDL.Text,
    'amount' : IDL.Float64,
  });
  const Subscription = IDL.Record({
    'calendar' : IDL.Nat,
    'stype' : IDL.Nat,
    'subscriber' : IDL.Principal,
  });
  const Result_1 = IDL.Variant({ 'ok' : Todo__1, 'err' : IDL.Text });
  const Todo = IDL.Record({
    'id' : IDL.Nat,
    'status' : IDL.Nat,
    'assignee' : IDL.Text,
    'ttype' : IDL.Nat,
    'owner' : IDL.Text,
    'tags' : IDL.Vec(IDL.Text),
    'todo' : IDL.Text,
    'description' : IDL.Text,
    'duedate' : IDL.Nat,
    'calendar' : IDL.Nat,
    'ispublic' : IDL.Bool,
    'priority' : IDL.Nat,
    'donetime' : IDL.Int,
    'attachments' : IDL.Vec(IDL.Text),
    'parent' : IDL.Nat,
  });
  const Event__1 = IDL.Record({
    'id' : IDL.Nat,
    'tz' : IDL.Text,
    'end' : IDL.Nat,
    'status' : IDL.Nat,
    'title' : IDL.Text,
    'isrepeat' : IDL.Bool,
    'owner' : IDL.Text,
    'allday' : IDL.Bool,
    'cost' : IDL.Float64,
    'tags' : IDL.Vec(IDL.Text),
    'description' : IDL.Text,
    'etype' : IDL.Nat,
    'calendar' : IDL.Nat,
    'start' : IDL.Nat,
    'ispublic' : IDL.Bool,
    'location' : IDL.Text,
    'attachments' : IDL.Vec(IDL.Text),
  });
  const BookingSet__1 = IDL.Record({
    'tz' : IDL.Text,
    'bookend' : IDL.Text,
    'slotlength' : IDL.Variant({ 'hours' : IDL.Nat8, 'minutes' : IDL.Nat8 }),
    'bookstart' : IDL.Text,
  });
  const ScheduleSet__1 = IDL.Record({});
  const ActivitySet__1 = IDL.Record({});
  const ItinerarySet__1 = IDL.Record({});
  const Wallet__1 = IDL.Record({
    'network' : IDL.Variant({
      'ADA' : IDL.Null,
      'BTC' : IDL.Null,
      'DOT' : IDL.Null,
      'ETH' : IDL.Null,
      'ICP' : IDL.Null,
    }),
    'address' : IDL.Text,
  });
  const Calendar = IDL.Record({
    'id' : IDL.Nat,
    'url' : IDL.Text,
    'status' : IDL.Nat,
    'owner' : IDL.Text,
    'name' : IDL.Text,
    'color' : IDL.Text,
    'tags' : IDL.Vec(IDL.Text),
    'ctype' : IDL.Nat,
    'description' : IDL.Text,
    'ispublic' : IDL.Bool,
    'solution' : IDL.Variant({
      'appointment' : BookingSet__1,
      'schedule' : ScheduleSet__1,
      'common' : IDL.Null,
      'activity' : ActivitySet__1,
      'itinerary' : ItinerarySet__1,
    }),
    'isverified' : IDL.Bool,
    'organization' : IDL.Opt(
      IDL.Record({
        'bn' : IDL.Text,
        'taxno' : IDL.Text,
        'contact' : ContactInfo__1,
        'wallet' : Wallet__1,
      })
    ),
    'attachments' : IDL.Vec(IDL.Text),
  });
  const Profile = IDL.Record({
    'bio' : IDL.Text,
    'status' : IDL.Nat,
    'username' : IDL.Text,
    'lastlogin' : IDL.Int,
    'userid' : IDL.Text,
    'name' : IDL.Text,
    'role' : IDL.Nat,
    'email' : IDL.Text,
    'createtime' : IDL.Int,
    'avatar' : IDL.Text,
  });
  const NewRegister = IDL.Record({
    'data' : IDL.Vec(RegData),
    'name' : IDL.Text,
  });
  const TokenIdentifier = IDL.Text;
  const AccountIdentifier = IDL.Text;
  const User = IDL.Variant({
    'principal' : IDL.Principal,
    'address' : AccountIdentifier,
  });
  const Balance = IDL.Nat;
  const Memo = IDL.Vec(IDL.Nat8);
  const Currency__1 = IDL.Record({
    'id' : IDL.Text,
    'name' : IDL.Text,
    'network' : IDL.Text,
  });
  const UpdateCalendar = IDL.Record({
    'url' : IDL.Text,
    'name' : IDL.Text,
    'color' : IDL.Text,
    'tags' : IDL.Vec(IDL.Text),
    'ctype' : Ctype,
    'description' : IDL.Text,
    'ispublic' : IDL.Bool,
    'solution' : Solution,
    'organization' : IDL.Opt(Organization),
  });
  const UpdateInvoice = IDL.Record({
    'tax' : Tax,
    'status' : IDL.Variant({
      'new' : IDL.Null,
      'canceled' : IDL.Null,
      'paid' : IDL.Null,
    }),
    'paymentterms' : IDL.Vec(IDL.Text),
    'cost' : IDL.Float64,
    'note' : IDL.Text,
    'adjust' : IDL.Float64,
    'discount' : IDL.Float64,
    'items' : IDL.Vec(Item),
    'amount' : IDL.Float64,
  });
  const UpdateTodo = IDL.Record({
    'assignee' : IDL.Text,
    'ttype' : TodoType,
    'tags' : IDL.Vec(IDL.Text),
    'todo' : IDL.Text,
    'description' : IDL.Text,
    'bounty' : IDL.Float64,
    'duedate' : IDL.Nat,
    'ispublic' : IDL.Bool,
    'priority' : Priority,
    'attachments' : IDL.Vec(IDL.Text),
  });
  const Vansday = IDL.Service({
    'addCalendar' : IDL.Func([NewCalendar], [Result], []),
    'addCategory' : IDL.Func([NewCategory], [Result], []),
    'addChecklist' : IDL.Func([NewChecklistReq], [Result], []),
    'addContact' : IDL.Func(
        [IDL.Nat, IDL.Text, IDL.Text, IDL.Text, IDL.Text, IDL.Text, IDL.Text],
        [Result],
        [],
      ),
    'addEventToCalendar' : IDL.Func([IDL.Nat, IDL.Nat], [], []),
    'addInvitee' : IDL.Func([NewInvitee], [Result], []),
    'addInvoice' : IDL.Func([NewInvoice], [Result], []),
    'addMinter' : IDL.Func([IDL.Text, IDL.Nat], [Result], []),
    'addNote' : IDL.Func([NewNoteReq], [Result], []),
    'addParticipant' : IDL.Func([Participant], [Result], []),
    'addSystemTodo' : IDL.Func(
        [
          IDL.Record({
            'desc' : IDL.Text,
            'duedate' : IDL.Nat,
            'itodo' : IDL.Text,
            'attachments' : IDL.Vec(IDL.Text),
          }),
        ],
        [Result],
        [],
      ),
    'addTodo' : IDL.Func([NewTodo], [Result], []),
    'approveRegister' : IDL.Func([Register], [Result], []),
    'assignTask' : IDL.Func([IDL.Nat, IDL.Text], [Result], []),
    'availableCycles' : IDL.Func([], [IDL.Nat], ['query']),
    'backupData' : IDL.Func([], [Result], []),
    'cancelEvent' : IDL.Func(
        [IDL.Nat, IDL.Opt(IDL.Record({ 'op' : IDL.Text, 'adate' : IDL.Nat }))],
        [Result],
        [],
      ),
    'changeInvoiceStatus' : IDL.Func(
        [IDL.Text, IDL.Variant({ 'canceled' : IDL.Null, 'paid' : IDL.Null })],
        [Result],
        [],
      ),
    'changeTodoStatus' : IDL.Func([IDL.Nat, Status__1], [Result], []),
    'checkRegistration' : IDL.Func([IDL.Nat], [Result], []),
    'checkUsername' : IDL.Func([IDL.Text], [IDL.Bool], ['query']),
    'claimTicket' : IDL.Func(
        [IDL.Nat, OrderItem, IDL.Nat, IDL.Float64, IDL.Text],
        [Result],
        [],
      ),
    'createEvent' : IDL.Func([NewEvent], [Result], []),
    'createEvents' : IDL.Func([IDL.Vec(NewEvent)], [Result], []),
    'deleteCalendar' : IDL.Func([IDL.Nat], [Result], []),
    'deleteCategory' : IDL.Func([IDL.Nat], [Result], []),
    'deleteContact' : IDL.Func([IDL.Nat], [Result], []),
    'deleteInvitee' : IDL.Func([IDL.Nat, IDL.Text], [Result], []),
    'deleteNote' : IDL.Func([IDL.Nat], [Result], []),
    'deleteParticipant' : IDL.Func([IDL.Nat, IDL.Text], [Result], []),
    'deleteTodo' : IDL.Func([IDL.Nat], [Result], []),
    'editEvent' : IDL.Func([IDL.Nat, UpdateEvent], [Result], []),
    'getAppointmentSlots' : IDL.Func(
        [IDL.Nat, IDL.Nat, IDL.Nat],
        [
          IDL.Vec(
            IDL.Record({ 'id' : IDL.Nat, 'end' : IDL.Nat, 'start' : IDL.Nat })
          ),
        ],
        ['query'],
      ),
    'getBackupState' : IDL.Func(
        [],
        [IDL.Vec(IDL.Tuple(IDL.Text, IDL.Nat))],
        ['query'],
      ),
    'getBannerMessage' : IDL.Func([], [IDL.Text], ['query']),
    'getCalTodos' : IDL.Func([IDL.Nat, IDL.Nat], [IDL.Vec(Todo__1)], ['query']),
    'getCalendar' : IDL.Func([IDL.Nat], [Result_2], ['query']),
    'getCalendarEvents' : IDL.Func(
        [IDL.Nat, IDL.Nat, IDL.Nat, IDL.Nat],
        [IDL.Vec(Event)],
        ['query'],
      ),
    'getCalendarNotes' : IDL.Func([IDL.Nat], [IDL.Vec(Note)], ['query']),
    'getCalendars' : IDL.Func(
        [IDL.Opt(IDL.Text), IDL.Bool, IDL.Nat],
        [IDL.Vec(Calendar__1)],
        ['query'],
      ),
    'getChecklists' : IDL.Func([IDL.Nat], [IDL.Vec(Checklist)], ['query']),
    'getDataState' : IDL.Func(
        [],
        [IDL.Vec(IDL.Tuple(IDL.Text, IDL.Nat))],
        ['query'],
      ),
    'getEvent' : IDL.Func([IDL.Nat], [IDL.Opt(Event)], ['query']),
    'getEvents' : IDL.Func(
        [IDL.Nat, IDL.Nat, IDL.Opt(IDL.Text), IDL.Nat],
        [IDL.Vec(Event)],
        ['query'],
      ),
    'getInvitedEvents' : IDL.Func(
        [IDL.Nat, IDL.Nat, IDL.Nat],
        [IDL.Vec(Event)],
        ['query'],
      ),
    'getInvitees' : IDL.Func([IDL.Nat], [IDL.Vec(Invitee)], ['query']),
    'getInvoices' : IDL.Func(
        [
          IDL.Variant({ 'event' : IDL.Nat, 'calendar' : IDL.Nat }),
          IDL.Variant({
            'new' : IDL.Null,
            'canceled' : IDL.Null,
            'paid' : IDL.Null,
          }),
        ],
        [IDL.Vec(Invoice)],
        ['query'],
      ),
    'getLogs' : IDL.Func([IDL.Nat], [IDL.Vec(Log)], ['query']),
    'getMyCalendars' : IDL.Func([IDL.Nat], [IDL.Vec(Calendar__1)], ['query']),
    'getMyCategories' : IDL.Func(
        [IDL.Nat, IDL.Nat],
        [IDL.Vec(Category)],
        ['query'],
      ),
    'getMyChecklists' : IDL.Func([IDL.Nat], [IDL.Vec(Checklist)], ['query']),
    'getMyContacts' : IDL.Func([IDL.Nat], [IDL.Vec(Contact)], ['query']),
    'getMyEvents' : IDL.Func(
        [IDL.Nat, IDL.Nat, IDL.Nat],
        [IDL.Vec(Event)],
        ['query'],
      ),
    'getMyNotes' : IDL.Func([IDL.Nat, IDL.Nat], [IDL.Vec(Note)], ['query']),
    'getMyOrders' : IDL.Func([], [IDL.Vec(Order)], ['query']),
    'getMyTodos' : IDL.Func(
        [Status__1, IDL.Nat],
        [IDL.Vec(Todo__1)],
        ['query'],
      ),
    'getNote' : IDL.Func([IDL.Nat], [IDL.Opt(Note)], ['query']),
    'getNotes' : IDL.Func([IDL.Nat], [IDL.Vec(Note)], ['query']),
    'getOrder' : IDL.Func([IDL.Nat], [IDL.Opt(Order)], ['query']),
    'getOrderByItem' : IDL.Func([OrderItem], [IDL.Opt(Order)], ['query']),
    'getOrders' : IDL.Func([], [IDL.Vec(Order)], ['query']),
    'getPartCalendars' : IDL.Func([IDL.Nat], [IDL.Vec(Calendar__1)], ['query']),
    'getParticipants' : IDL.Func([IDL.Nat], [IDL.Vec(Participant)], ['query']),
    'getParticipatedEvents' : IDL.Func(
        [IDL.Nat, IDL.Nat, IDL.Nat],
        [IDL.Vec(Event)],
        ['query'],
      ),
    'getPublicTodos' : IDL.Func(
        [Status__1, IDL.Nat],
        [IDL.Vec(Todo__1)],
        ['query'],
      ),
    'getRegisters' : IDL.Func([IDL.Nat], [IDL.Vec(Register)], ['query']),
    'getSubTodos' : IDL.Func([IDL.Nat], [IDL.Vec(Todo__1)], ['query']),
    'getSubscribedCalendars' : IDL.Func(
        [IDL.Nat],
        [IDL.Vec(Calendar__1)],
        ['query'],
      ),
    'getSubscribedEvents' : IDL.Func(
        [IDL.Nat, IDL.Nat, IDL.Nat],
        [IDL.Vec(Event)],
        ['query'],
      ),
    'getSubscriberCount' : IDL.Func([IDL.Nat], [IDL.Nat], ['query']),
    'getSubscribers' : IDL.Func([IDL.Nat], [IDL.Nat], ['query']),
    'getSubscriptions' : IDL.Func(
        [IDL.Nat],
        [IDL.Vec(Subscription)],
        ['query'],
      ),
    'getSystemAdmin' : IDL.Func([], [IDL.Text], ['query']),
    'getSystemCalendar' : IDL.Func([], [IDL.Nat], ['query']),
    'getTodo' : IDL.Func([IDL.Nat], [Result_1], ['query']),
    'getUserData' : IDL.Func(
        [IDL.Text],
        [
          IDL.Record({
            'todos' : IDL.Vec(Todo),
            'contacts' : IDL.Vec(Contact),
            'events' : IDL.Vec(Event__1),
            'notes' : IDL.Vec(Note),
            'calendars' : IDL.Vec(Calendar),
          }),
        ],
        [],
      ),
    'getUserEvents' : IDL.Func(
        [IDL.Text, IDL.Nat],
        [IDL.Vec(Event)],
        ['query'],
      ),
    'getVerifiedEvents' : IDL.Func(
        [IDL.Nat, IDL.Nat, IDL.Nat],
        [IDL.Vec(Event)],
        ['query'],
      ),
    'leaveParticipants' : IDL.Func([IDL.Nat], [Result], []),
    'listUsers' : IDL.Func([IDL.Nat], [IDL.Vec(Profile)], ['query']),
    'lookupUser' : IDL.Func([IDL.Text], [IDL.Opt(Profile)], ['query']),
    'payOrder' : IDL.Func(
        [IDL.Nat, IDL.Nat, OrderItem, IDL.Nat, IDL.Float64, IDL.Text],
        [Result],
        [],
      ),
    'registerActivity' : IDL.Func([IDL.Nat, NewRegister], [Result], []),
    'removeEvent' : IDL.Func([IDL.Nat], [Result], []),
    'requestMintQuota' : IDL.Func([IDL.Nat, IDL.Text, IDL.Nat], [Result], []),
    'requestUploadQuota' : IDL.Func([IDL.Nat, IDL.Text, IDL.Nat], [Result], []),
    'searchContacts' : IDL.Func(
        [IDL.Text, IDL.Nat, IDL.Nat],
        [IDL.Vec(Contact)],
        ['query'],
      ),
    'searchNotes' : IDL.Func(
        [IDL.Bool, IDL.Text, IDL.Nat],
        [IDL.Vec(Note)],
        ['query'],
      ),
    'setAdmin' : IDL.Func([IDL.Principal], [], []),
    'setBannerMessage' : IDL.Func([IDL.Text], [], []),
    'setDefaultPageSize' : IDL.Func([IDL.Nat], [], []),
    'setSystemAdmin' : IDL.Func([IDL.Text], [Result], []),
    'setSystemCalendar' : IDL.Func([IDL.Nat], [Result], []),
    'subscribe' : IDL.Func([IDL.Nat], [Result], []),
    'tokenTransferNotification' : IDL.Func(
        [TokenIdentifier, User, Balance, Memo],
        [IDL.Opt(Balance)],
        [],
      ),
    'transferCalendar' : IDL.Func([IDL.Nat, IDL.Principal], [Result], []),
    'unsubscribe' : IDL.Func([IDL.Nat], [Result], []),
    'updateActivity' : IDL.Func(
        [
          IDL.Nat,
          IDL.Float64,
          IDL.Nat,
          IDL.Vec(IDL.Record({ 'ticket' : IDL.Nat, 'owner' : IDL.Text })),
          Currency__1,
        ],
        [Result],
        [],
      ),
    'updateCalendar' : IDL.Func([IDL.Nat, UpdateCalendar], [Result], []),
    'updateCategory' : IDL.Func([IDL.Nat, IDL.Text], [Result], []),
    'updateChecklist' : IDL.Func([IDL.Nat, NewChecklistReq], [Result], []),
    'updateContact' : IDL.Func(
        [IDL.Nat, IDL.Text, IDL.Text, IDL.Text, IDL.Text, IDL.Text],
        [Result],
        [],
      ),
    'updateInvoice' : IDL.Func([IDL.Text, UpdateInvoice], [Result], []),
    'updateNote' : IDL.Func([IDL.Nat, NewNoteReq], [Result], []),
    'updateOrderStatus' : IDL.Func(
        [IDL.Nat, OrderStatus, OrderData],
        [Result],
        [],
      ),
    'updateProfile' : IDL.Func(
        [IDL.Text, IDL.Text, IDL.Text, IDL.Text, IDL.Text],
        [Result],
        [],
      ),
    'updateTodo' : IDL.Func([IDL.Nat, UpdateTodo], [Result], []),
    'userCount' : IDL.Func([], [IDL.Nat], ['query']),
    'verifyCalendar' : IDL.Func([IDL.Nat], [Result], []),
  });
  return Vansday;
};

// CANISTER_ID is replaced by webpack based on node environment
const canisterId$6 = process.env.NEXT_PUBLIC_ICEVENT_CANISTER_ID;//"";
console.log("canisterId:"+canisterId$6);
/**
 * 
 * @param {string | import("@dfinity/principal").Principal} canisterId Canister ID of Agent
 * @param {{agentOptions?: import("@dfinity/agent").HttpAgentOptions; actorOptions?: import("@dfinity/agent").ActorConfig}} [options]
 * @return {import("@dfinity/agent").ActorSubclass<import("./icevent.did.js")._SERVICE>}
 */
 const createActor$6 = (agent$1, actorOptions) => {
  //const agent = new HttpAgent({ ...options?.agentOptions });
  
  // Fetch root key for certificate validation during development
  if(process.env.NODE_ENV !== "production") {
    agent$1.fetchRootKey().catch(err=>{
      console.warn("Unable to fetch root key. Check to ensure that your local replica is running");
      console.error(err);
    });
  }

  // Creates an actor with using the candid interface and the HttpAgent
  return agent.Actor.createActor(idlFactory$6, {
    agent: agent$1,
    canisterId: canisterId$6,
    actorOptions,
  });
};
  
/**
 * A ready-to-use agent for the hello canister
 * @type {import("@dfinity/agent").ActorSubclass<import("./hello.did.js.js")._SERVICE>}
 */
//  export const icevent = createActor(canisterId,{
//   agentOptions: {
//     host: "https://ic0.app",//process.env.NEXT_PUBLIC_IC_HOST,
//   },
// });

const idlFactory$5 = ({ IDL }) => {
  const TokenIdentifier = IDL.Text;
  const AccountIdentifier = IDL.Text;
  const User = IDL.Variant({
    'principal' : IDL.Principal,
    'address' : AccountIdentifier,
  });
  const AllowanceRequest = IDL.Record({
    'token' : TokenIdentifier,
    'owner' : User,
    'spender' : IDL.Principal,
  });
  const Balance__1 = IDL.Nat;
  const CommonError__1 = IDL.Variant({
    'InvalidToken' : TokenIdentifier,
    'Other' : IDL.Text,
  });
  const Result_1 = IDL.Variant({ 'ok' : Balance__1, 'err' : CommonError__1 });
  const SubAccount = IDL.Vec(IDL.Nat8);
  const Balance = IDL.Nat;
  const ApproveRequest = IDL.Record({
    'token' : TokenIdentifier,
    'subaccount' : IDL.Opt(SubAccount),
    'allowance' : Balance,
    'spender' : IDL.Principal,
  });
  const BalanceRequest = IDL.Record({
    'token' : TokenIdentifier,
    'user' : User,
  });
  const CommonError = IDL.Variant({
    'InvalidToken' : TokenIdentifier,
    'Other' : IDL.Text,
  });
  const BalanceResponse = IDL.Variant({ 'ok' : Balance, 'err' : CommonError });
  const TokenIdentifier__1 = IDL.Text;
  const AccountIdentifier__1 = IDL.Text;
  const Result_5 = IDL.Variant({
    'ok' : AccountIdentifier__1,
    'err' : CommonError__1,
  });
  const Extension = IDL.Text;
  const TokenIndex = IDL.Nat32;
  const Minter = IDL.Record({
    'minted' : IDL.Vec(TokenIndex),
    'minter' : IDL.Principal,
    'quota' : IDL.Nat,
  });
  const Metadata__1 = IDL.Record({
    'event_day' : IDL.Text,
    'asset' : IDL.Opt(IDL.Text),
    'host' : IDL.Text,
    'event_location' : IDL.Text,
    'event_id' : IDL.Nat,
    'event_name' : IDL.Text,
  });
  const HeaderField = IDL.Tuple(IDL.Text, IDL.Text);
  const Request = IDL.Record({
    'url' : IDL.Text,
    'method' : IDL.Text,
    'body' : IDL.Vec(IDL.Nat8),
    'headers' : IDL.Vec(HeaderField),
  });
  const StreamingCallbackToken = IDL.Record({
    'key' : IDL.Text,
    'index' : IDL.Nat,
    'content_encoding' : IDL.Text,
  });
  const StreamingCallbackResponse = IDL.Record({
    'token' : IDL.Opt(StreamingCallbackToken),
    'body' : IDL.Vec(IDL.Nat8),
  });
  const StreamingCallback = IDL.Func(
      [StreamingCallbackToken],
      [StreamingCallbackResponse],
      ['query'],
    );
  const StreamingStrategy = IDL.Variant({
    'Callback' : IDL.Record({
      'token' : StreamingCallbackToken,
      'callback' : StreamingCallback,
    }),
  });
  const Response = IDL.Record({
    'body' : IDL.Vec(IDL.Nat8),
    'headers' : IDL.Vec(HeaderField),
    'streaming_strategy' : IDL.Opt(StreamingStrategy),
    'status_code' : IDL.Nat16,
  });
  const Result_4 = IDL.Variant({ 'ok' : Metadata__1, 'err' : CommonError__1 });
  const Metadata = IDL.Record({
    'event_day' : IDL.Text,
    'asset' : IDL.Opt(IDL.Text),
    'host' : IDL.Text,
    'event_location' : IDL.Text,
    'event_id' : IDL.Nat,
    'event_name' : IDL.Text,
  });
  const MintTicketRequest = IDL.Record({
    'metadatas' : IDL.Vec(Metadata),
    'spender' : IDL.Principal,
  });
  const Result_3 = IDL.Variant({
    'ok' : IDL.Vec(TokenIndex),
    'err' : IDL.Text,
  });
  const Result_2 = IDL.Variant({ 'ok' : IDL.Nat, 'err' : IDL.Text });
  const Date = IDL.Nat64;
  const TransactionId = IDL.Nat;
  const TransactionsRequest = IDL.Record({
    'token' : TokenIdentifier,
    'query_option' : IDL.Variant({
      'all' : IDL.Null,
      'date' : IDL.Tuple(Date, Date),
      'page' : IDL.Tuple(IDL.Nat, IDL.Nat),
      'txid' : TransactionId,
      'user' : User,
    }),
  });
  const Memo = IDL.Vec(IDL.Nat8);
  const TransferRequest__1 = IDL.Record({
    'to' : User,
    'token' : TokenIdentifier,
    'notify' : IDL.Bool,
    'from' : User,
    'memo' : Memo,
    'subaccount' : IDL.Opt(SubAccount),
    'amount' : Balance,
  });
  const Transaction = IDL.Record({
    'date' : Date,
    'request' : TransferRequest__1,
    'txid' : TransactionId,
  });
  const Result = IDL.Variant({
    'ok' : IDL.Vec(Transaction),
    'err' : CommonError,
  });
  const TransferRequest = IDL.Record({
    'to' : User,
    'token' : TokenIdentifier,
    'notify' : IDL.Bool,
    'from' : User,
    'memo' : Memo,
    'subaccount' : IDL.Opt(SubAccount),
    'amount' : Balance,
  });
  const TransferResponse = IDL.Variant({
    'ok' : Balance,
    'err' : IDL.Variant({
      'CannotNotify' : AccountIdentifier,
      'InsufficientBalance' : IDL.Null,
      'InvalidToken' : TokenIdentifier,
      'Rejected' : IDL.Null,
      'Unauthorized' : AccountIdentifier,
      'Other' : IDL.Text,
    }),
  });
  const iceventicket = IDL.Service({
    'acceptCycles' : IDL.Func([], [], []),
    'addModerator' : IDL.Func([IDL.Principal], [], []),
    'allowance' : IDL.Func([AllowanceRequest], [Result_1], ['query']),
    'approve' : IDL.Func([ApproveRequest], [], []),
    'availableCycles' : IDL.Func([], [IDL.Nat], ['query']),
    'balance' : IDL.Func([BalanceRequest], [BalanceResponse], ['query']),
    'bearer' : IDL.Func([TokenIdentifier__1], [Result_5], ['query']),
    'extensions' : IDL.Func([], [IDL.Vec(Extension)], ['query']),
    'getAdmin' : IDL.Func([], [IDL.Principal], ['query']),
    'getAllowances' : IDL.Func(
        [],
        [IDL.Vec(IDL.Tuple(TokenIndex, IDL.Principal))],
        ['query'],
      ),
    'getMinters' : IDL.Func([], [IDL.Vec(Minter)], ['query']),
    'getModerators' : IDL.Func([], [IDL.Vec(IDL.Principal)], ['query']),
    'getMyTickets' : IDL.Func(
        [],
        [IDL.Vec(IDL.Tuple(TokenIdentifier__1, Metadata__1))],
        ['query'],
      ),
    'getRegistry' : IDL.Func(
        [],
        [IDL.Vec(IDL.Tuple(TokenIndex, AccountIdentifier__1))],
        ['query'],
      ),
    'getTokenIdentifier' : IDL.Func(
        [TokenIndex],
        [TokenIdentifier__1],
        ['query'],
      ),
    'getTokens' : IDL.Func(
        [],
        [IDL.Vec(IDL.Tuple(TokenIndex, Metadata__1))],
        ['query'],
      ),
    'http_request' : IDL.Func([Request], [Response], ['query']),
    'metadata' : IDL.Func([TokenIdentifier__1], [Result_4], ['query']),
    'mintEventTickets' : IDL.Func([MintTicketRequest], [Result_3], []),
    'setAdmin' : IDL.Func([IDL.Principal], [], []),
    'setDefaultAsset' : IDL.Func([IDL.Opt(IDL.Vec(IDL.Nat8))], [], []),
    'setMinter' : IDL.Func([IDL.Principal, IDL.Nat], [Result_2], []),
    'supply' : IDL.Func([TokenIdentifier__1], [Result_1], ['query']),
    'transactions' : IDL.Func([TransactionsRequest], [Result], ['query']),
    'transfer' : IDL.Func([TransferRequest], [TransferResponse], []),
    'transferTicketWithId' : IDL.Func(
        [IDL.Principal, TokenIdentifier__1],
        [TransferResponse],
        [],
      ),
    'transferTicketWithIndex' : IDL.Func(
        [IDL.Principal, TokenIndex],
        [TransferResponse],
        [],
      ),
  });
  return iceventicket;
};

// CANISTER_ID is replaced by webpack based on node environment
const canisterId$5 = "rvzx7-oqaaa-aaaaj-qagxq-cai";//process.env.ICEVENTICKET_CANISTER_ID;

/**
 * 
 * @param {string | import("@dfinity/principal").Principal} canisterId Canister ID of Agent
 * @param {{agentOptions?: import("@dfinity/agent").HttpAgentOptions; actorOptions?: import("@dfinity/agent").ActorConfig}} [options]
 * @return {import("@dfinity/agent").ActorSubclass<import("./iceventicket.did.js")._SERVICE>}
 */
 const createActor$5 = (agent$1, actorOptions) => {
  // const agent = new HttpAgent({ ...options?.agentOptions });
  
  // Fetch root key for certificate validation during development
  if(process.env.NODE_ENV !== "production") {
    agent$1.fetchRootKey().catch(err=>{
      console.warn("Unable to fetch root key. Check to ensure that your local replica is running");
      console.error(err);
    });
  }

  // Creates an actor with using the candid interface and the HttpAgent
  return agent.Actor.createActor(idlFactory$5, {
    agent: agent$1,
    canisterId: canisterId$5,
    actorOptions,
  });
};
  
/**
 * A ready-to-use agent for the iceventicket canister
 * @type {import("@dfinity/agent").ActorSubclass<import("./iceventicket.did.js")._SERVICE>}
 */
//  export const iceventicket = createActor(canisterId);

const idlFactory$4 = ({ IDL }) => {
  const Balance = IDL.Nat;
  const TokenIdentifier = IDL.Text;
  const AccountIdentifier = IDL.Text;
  const User = IDL.Variant({
    'principal' : IDL.Principal,
    'address' : AccountIdentifier,
  });
  const BalanceRequest = IDL.Record({
    'token' : TokenIdentifier,
    'user' : User,
  });
  const CommonError = IDL.Variant({
    'InvalidToken' : TokenIdentifier,
    'Other' : IDL.Text,
  });
  const BalanceResponse = IDL.Variant({ 'ok' : Balance, 'err' : CommonError });
  const Extension = IDL.Text;
  const TokenIdentifier__1 = IDL.Text;
  const Metadata = IDL.Variant({
    'fungible' : IDL.Record({
      'decimals' : IDL.Nat8,
      'metadata' : IDL.Opt(IDL.Vec(IDL.Nat8)),
      'name' : IDL.Text,
      'symbol' : IDL.Text,
    }),
    'nonfungible' : IDL.Record({ 'metadata' : IDL.Opt(IDL.Vec(IDL.Nat8)) }),
  });
  const CommonError__1 = IDL.Variant({
    'InvalidToken' : TokenIdentifier,
    'Other' : IDL.Text,
  });
  const Result_2 = IDL.Variant({ 'ok' : Metadata, 'err' : CommonError__1 });
  const AccountIdentifier__1 = IDL.Text;
  const Balance__1 = IDL.Nat;
  const Result_1 = IDL.Variant({ 'ok' : Balance__1, 'err' : CommonError__1 });
  const Date = IDL.Nat64;
  const TransactionId = IDL.Nat;
  const TransactionsRequest = IDL.Record({
    'token' : TokenIdentifier,
    'query_option' : IDL.Variant({
      'all' : IDL.Null,
      'date' : IDL.Tuple(Date, Date),
      'page' : IDL.Tuple(IDL.Nat, IDL.Nat),
      'txid' : TransactionId,
      'user' : User,
    }),
  });
  const Memo = IDL.Vec(IDL.Nat8);
  const SubAccount = IDL.Vec(IDL.Nat8);
  const TransferRequest__1 = IDL.Record({
    'to' : User,
    'token' : TokenIdentifier,
    'notify' : IDL.Bool,
    'from' : User,
    'memo' : Memo,
    'subaccount' : IDL.Opt(SubAccount),
    'amount' : Balance,
  });
  const Transaction = IDL.Record({
    'date' : Date,
    'request' : TransferRequest__1,
    'txid' : TransactionId,
  });
  const Result = IDL.Variant({
    'ok' : IDL.Vec(Transaction),
    'err' : CommonError,
  });
  const TransferRequest = IDL.Record({
    'to' : User,
    'token' : TokenIdentifier,
    'notify' : IDL.Bool,
    'from' : User,
    'memo' : Memo,
    'subaccount' : IDL.Opt(SubAccount),
    'amount' : Balance,
  });
  const TransferResponse = IDL.Variant({
    'ok' : Balance,
    'err' : IDL.Variant({
      'CannotNotify' : AccountIdentifier,
      'InsufficientBalance' : IDL.Null,
      'InvalidToken' : TokenIdentifier,
      'Rejected' : IDL.Null,
      'Unauthorized' : AccountIdentifier,
      'Other' : IDL.Text,
    }),
  });
  const TransferIdResponse = IDL.Variant({
    'ok' : IDL.Nat,
    'err' : IDL.Variant({
      'CannotNotify' : AccountIdentifier,
      'InsufficientBalance' : IDL.Null,
      'InvalidToken' : TokenIdentifier,
      'Rejected' : IDL.Null,
      'Unauthorized' : AccountIdentifier,
      'Other' : IDL.Text,
    }),
  });
  const icevent_token = IDL.Service({
    'acceptCycles' : IDL.Func([], [], []),
    'availableCycles' : IDL.Func([], [IDL.Nat], ['query']),
    'balance' : IDL.Func([BalanceRequest], [BalanceResponse], ['query']),
    'extensions' : IDL.Func([], [IDL.Vec(Extension)], ['query']),
    'metadata' : IDL.Func([TokenIdentifier__1], [Result_2], ['query']),
    'registry' : IDL.Func(
        [],
        [IDL.Vec(IDL.Tuple(AccountIdentifier__1, Balance__1))],
        ['query'],
      ),
    'supply' : IDL.Func([TokenIdentifier__1], [Result_1], ['query']),
    'transactions' : IDL.Func([TransactionsRequest], [Result], ['query']),
    'transfer' : IDL.Func([TransferRequest], [TransferResponse], []),
    'transferTo' : IDL.Func([TransferRequest], [TransferIdResponse], []),
  });
  return icevent_token;
};

// CANISTER_ID is replaced by webpack based on node environment
const canisterId$4 = "ot4zw-oaaaa-aaaag-qabaa-cai";//process.env.ICET_CANISTER_ID;

/**
 * 
 * @param {string | import("@dfinity/principal").Principal} canisterId Canister ID of Agent
 * @param {{agentOptions?: import("@dfinity/agent").HttpAgentOptions; actorOptions?: import("@dfinity/agent").ActorConfig}} [options]
 * @return {import("@dfinity/agent").ActorSubclass<import("./icet.did.js")._SERVICE>}
 */
 const createActor$4 = (agent$1, actorOptions) => {
  // const agent = new HttpAgent({ ...options?.agentOptions });
  
  // Fetch root key for certificate validation during development
  if(process.env.NODE_ENV !== "production") {
    agent$1.fetchRootKey().catch(err=>{
      console.warn("Unable to fetch root key. Check to ensure that your local replica is running");
      console.error(err);
    });
  }

  // Creates an actor with using the candid interface and the HttpAgent
  return agent.Actor.createActor(idlFactory$4, {
    agent: agent$1,
    canisterId: canisterId$4,
    actorOptions
  });
};
  
/**
 * A ready-to-use agent for the icet canister
 * @type {import("@dfinity/agent").ActorSubclass<import("./icet.did.js")._SERVICE>}
 */
//  export const icet = createActor(canisterId);

const idlFactory$3 = ({ IDL }) => {
  const Result = IDL.Variant({ 'ok' : IDL.Nat, 'err' : IDL.Text });
  const FileId = IDL.Text;
  const Timestamp = IDL.Int;
  const FileId__1 = IDL.Text;
  const FileExtension = IDL.Variant({
    'aac' : IDL.Null,
    'avi' : IDL.Null,
    'gif' : IDL.Null,
    'jpg' : IDL.Null,
    'mp3' : IDL.Null,
    'mp4' : IDL.Null,
    'png' : IDL.Null,
    'svg' : IDL.Null,
    'wav' : IDL.Null,
    'jpeg' : IDL.Null,
  });
  const FileData = IDL.Record({
    'cid' : IDL.Principal,
    'owner' : IDL.Principal,
    'name' : IDL.Text,
    'createdAt' : Timestamp,
    'size' : IDL.Nat,
    'fileId' : FileId__1,
    'chunkCount' : IDL.Nat,
    'extension' : FileExtension,
    'uploadedAt' : Timestamp,
  });
  const Uploader = IDL.Record({
    'files' : IDL.Vec(FileId__1),
    'quota' : IDL.Nat,
    'uploader' : IDL.Principal,
  });
  const FileInfo = IDL.Record({
    'owner' : IDL.Principal,
    'name' : IDL.Text,
    'createdAt' : Timestamp,
    'size' : IDL.Nat,
    'chunkCount' : IDL.Nat,
    'extension' : FileExtension,
  });
  const Result_1 = IDL.Variant({ 'ok' : FileId, 'err' : IDL.Text });
  const Container = IDL.Service({
    'addModerator' : IDL.Func([IDL.Principal], [Result], []),
    'availableCycles' : IDL.Func([], [IDL.Nat], ['query']),
    'fetchFileChunk' : IDL.Func(
        [FileId, IDL.Nat],
        [IDL.Opt(IDL.Vec(IDL.Nat8))],
        [],
      ),
    'fetchFileChunks' : IDL.Func([FileId], [IDL.Opt(IDL.Vec(IDL.Nat8))], []),
    'fetchFileInfo' : IDL.Func([FileId], [IDL.Opt(FileData)], []),
    'getAdmin' : IDL.Func([], [IDL.Principal], ['query']),
    'getFileIds' : IDL.Func([], [IDL.Vec(FileId)], ['query']),
    'getModerators' : IDL.Func([], [IDL.Vec(IDL.Principal)], ['query']),
    'getQuota' : IDL.Func(
        [],
        [IDL.Record({ 'used' : IDL.Nat, 'quota' : IDL.Nat })],
        ['query'],
      ),
    'getStatus' : IDL.Func(
        [],
        [IDL.Vec(IDL.Tuple(IDL.Principal, IDL.Nat))],
        ['query'],
      ),
    'getUploaders' : IDL.Func([], [IDL.Vec(Uploader)], ['query']),
    'putFileChunks' : IDL.Func(
        [FileId, IDL.Nat, IDL.Nat, IDL.Vec(IDL.Nat8)],
        [Result],
        [],
      ),
    'putFileInfo' : IDL.Func([FileInfo], [Result_1], []),
    'saveFileChunks' : IDL.Func(
        [FileId, IDL.Nat, IDL.Nat, IDL.Vec(IDL.Nat8)],
        [Result],
        [],
      ),
    'setAdmin' : IDL.Func([IDL.Principal], [Result], []),
    'setUploaders' : IDL.Func([IDL.Principal, IDL.Nat], [Result], []),
    'updateStatus' : IDL.Func([], [], []),
    'wallet_receive' : IDL.Func([], [], []),
  });
  return Container;
};

// CANISTER_ID is replaced by webpack based on node environment
const canisterId$3 = "5pqgi-saaaa-aaaal-aaavq-cai";//process.env.BACKEND_CANISTER_ID;

/**
 * 
 * @param {string | import("@dfinity/principal").Principal} canisterId Canister ID of Agent
 * @param {{agentOptions?: import("@dfinity/agent").HttpAgentOptions; actorOptions?: import("@dfinity/agent").ActorConfig}} [options]
 * @return {import("@dfinity/agent").ActorSubclass<import("./backend.did.js")._SERVICE>}
 */
 const createActor$3 = (agent$1, actorOptions) => {
  // const agent = new HttpAgent({ ...options?.agentOptions });
  
  // Fetch root key for certificate validation during development
  if(process.env.NODE_ENV !== "production") {
    agent$1.fetchRootKey().catch(err=>{
      console.warn("Unable to fetch root key. Check to ensure that your local replica is running");
      console.error(err);
    });
  }

  // Creates an actor with using the candid interface and the HttpAgent
  return agent.Actor.createActor(idlFactory$3, {
    agent: agent$1,
    canisterId: canisterId$3,
    actorOptions,
  });
};
  
/**
 * A ready-to-use agent for the backend canister
 * @type {import("@dfinity/agent").ActorSubclass<import("./backend.did.js")._SERVICE>}
 */
//  export const backend = createActor(canisterId);

const idlFactory$2 = ({ IDL }) => {
  const Comto__1 = IDL.Variant({
    'note' : IDL.Nat,
    'todo' : IDL.Nat,
    'event' : IDL.Nat,
    'calendar' : IDL.Nat,
  });
  const NewComment = IDL.Record({
    'comto' : Comto__1,
    'comment' : IDL.Text,
    'attachments' : IDL.Vec(IDL.Text),
  });
  const Result = IDL.Variant({ 'ok' : IDL.Nat, 'err' : IDL.Text });
  const Address = IDL.Record({
    'postcode' : IDL.Text,
    'country' : IDL.Text,
    'province' : IDL.Text,
    'city' : IDL.Text,
    'address' : IDL.Text,
  });
  const Currency = IDL.Text;
  const Wallet = IDL.Record({ 'currency' : Currency, 'address' : IDL.Text });
  const Contact = IDL.Record({
    'fax' : IDL.Opt(IDL.Text),
    'url' : IDL.Opt(IDL.Text),
    'contact' : IDL.Opt(IDL.Text),
    'name' : IDL.Text,
    'email' : IDL.Text,
    'address' : Address,
    'wallet' : IDL.Opt(Wallet),
    'phone' : IDL.Text,
  });
  const Tax = IDL.Record({
    'name' : IDL.Text,
    'rate' : IDL.Float64,
    'number' : IDL.Text,
    'amount' : IDL.Float64,
  });
  const PaymentTerm = IDL.Record({ 'name' : IDL.Text, 'address' : IDL.Text });
  const Item = IDL.Record({
    'desc' : IDL.Text,
    'quantity' : IDL.Nat32,
    'itype' : IDL.Variant({ 'cost' : IDL.Null, 'income' : IDL.Null }),
    'price' : IDL.Float64,
  });
  const NewInvoice = IDL.Record({
    'id' : IDL.Text,
    'to' : Contact,
    'tax' : Tax,
    'paymentterms' : IDL.Vec(PaymentTerm),
    'cost' : IDL.Float64,
    'from' : Contact,
    'note' : IDL.Text,
    'event' : IDL.Nat,
    'duetime' : IDL.Nat,
    'calendar' : IDL.Nat,
    'currency' : IDL.Text,
    'adjust' : IDL.Float64,
    'discount' : IDL.Float64,
    'items' : IDL.Vec(Item),
    'amount' : IDL.Float64,
    'receiver' : IDL.Opt(IDL.Text),
  });
  const TypeNotification = IDL.Variant({
    'contact' : IDL.Nat,
    'other' : IDL.Null,
    'note' : IDL.Nat,
    'todo' : IDL.Nat,
    'user' : IDL.Text,
    'event' : IDL.Nat,
    'calendar' : IDL.Nat,
  });
  const NewNotification = IDL.Record({
    'note' : IDL.Text,
    'sender' : IDL.Text,
    'ntype' : TypeNotification,
    'receiver' : IDL.Text,
  });
  const OrderItem = IDL.Record({
    'item' : IDL.Variant({
      'ticket' : IDL.Nat,
      'file' : IDL.Null,
      'mint' : IDL.Nat,
      'solution' : IDL.Nat,
    }),
    'count' : IDL.Nat,
  });
  const NewOrder = IDL.Record({
    'memo' : IDL.Opt(IDL.Text),
    'seller' : IDL.Text,
    'orderid' : IDL.Text,
    'items' : IDL.Vec(OrderItem),
    'amount' : IDL.Float64,
  });
  const InvoiceStatus = IDL.Variant({
    'new' : IDL.Null,
    'canceled' : IDL.Null,
    'paid' : IDL.Null,
    'confirmed' : IDL.Null,
  });
  const TXID = IDL.Nat;
  const OrderStatus__1 = IDL.Variant({
    'new' : IDL.Null,
    'canceled' : IDL.Null,
    'paid' : TXID,
    'delivered' : IDL.Null,
    'processing' : IDL.Text,
    'received' : IDL.Null,
  });
  const OrderStatus = IDL.Variant({
    'new' : IDL.Null,
    'canceled' : IDL.Null,
    'paid' : TXID,
    'delivered' : IDL.Null,
    'processing' : IDL.Text,
    'received' : IDL.Null,
  });
  const Order = IDL.Record({
    'status' : OrderStatus,
    'changetime' : IDL.Opt(IDL.Int),
    'memo' : IDL.Opt(IDL.Text),
    'seller' : IDL.Text,
    'orderid' : IDL.Text,
    'ordertime' : IDL.Int,
    'buyer' : IDL.Text,
    'items' : IDL.Vec(OrderItem),
    'amount' : IDL.Float64,
  });
  const Comto = IDL.Variant({
    'note' : IDL.Nat,
    'todo' : IDL.Nat,
    'event' : IDL.Nat,
    'calendar' : IDL.Nat,
  });
  const Comment = IDL.Record({
    'comto' : Comto__1,
    'user' : IDL.Text,
    'comment' : IDL.Text,
    'timestamp' : IDL.Int,
    'attachments' : IDL.Vec(IDL.Text),
  });
  const Function = IDL.Variant({
    'contact' : IDL.Nat,
    'other' : IDL.Null,
    'note' : IDL.Nat,
    'todo' : IDL.Nat,
    'user' : IDL.Text,
    'event' : IDL.Nat,
    'calendar' : IDL.Nat,
    'comment' : IDL.Nat,
  });
  const Action = IDL.Variant({
    'read' : IDL.Null,
    'delete' : IDL.Null,
    'create' : IDL.Null,
    'update' : IDL.Null,
  });
  const Log = IDL.Record({
    'function' : Function,
    'action' : Action,
    'user' : IDL.Text,
    'logtime' : IDL.Int,
    'message' : IDL.Text,
  });
  const Status = IDL.Variant({
    'new' : IDL.Null,
    'canceled' : IDL.Null,
    'paid' : IDL.Null,
    'confirmed' : IDL.Null,
  });
  const Invoice = IDL.Record({
    'id' : IDL.Text,
    'to' : Contact,
    'tax' : Tax,
    'status' : Status,
    'paymentterms' : IDL.Vec(PaymentTerm),
    'owner' : IDL.Text,
    'cost' : IDL.Float64,
    'from' : Contact,
    'note' : IDL.Text,
    'createtime' : IDL.Int,
    'event' : IDL.Nat,
    'duetime' : IDL.Nat,
    'calendar' : IDL.Nat,
    'currency' : IDL.Text,
    'adjust' : IDL.Float64,
    'discount' : IDL.Float64,
    'items' : IDL.Vec(Item),
    'amount' : IDL.Float64,
    'receiver' : IDL.Opt(IDL.Text),
  });
  const Message = IDL.Record({
    'id' : IDL.Nat,
    'note' : IDL.Text,
    'sender' : IDL.Text,
    'isread' : IDL.Bool,
    'readtime' : IDL.Int,
    'replyid' : IDL.Opt(IDL.Nat),
    'attachment' : IDL.Opt(IDL.Text),
    'receiver' : IDL.Text,
    'sendtime' : IDL.Int,
  });
  const Notification = IDL.Record({
    'id' : IDL.Nat,
    'note' : IDL.Text,
    'sender' : IDL.Text,
    'isread' : IDL.Bool,
    'readtime' : IDL.Int,
    'ntype' : TypeNotification,
    'receiver' : IDL.Text,
    'sendtime' : IDL.Int,
  });
  const NewLog = IDL.Record({
    'function' : Function,
    'action' : Action,
    'user' : IDL.Text,
    'message' : IDL.Text,
  });
  const NewMessage = IDL.Record({
    'note' : IDL.Text,
    'replyid' : IDL.Opt(IDL.Nat),
    'attachment' : IDL.Opt(IDL.Text),
    'receiver' : IDL.Text,
  });
  const UpdateInvoice = IDL.Record({
    'tax' : Tax,
    'status' : Status,
    'paymentterms' : IDL.Vec(PaymentTerm),
    'cost' : IDL.Float64,
    'note' : IDL.Text,
    'duetime' : IDL.Nat,
    'adjust' : IDL.Float64,
    'discount' : IDL.Float64,
    'items' : IDL.Vec(Item),
    'amount' : IDL.Float64,
  });
  const Ram = IDL.Service({
    'addComment' : IDL.Func([NewComment], [Result], []),
    'addInvoice' : IDL.Func([NewInvoice], [Result], []),
    'addNotification' : IDL.Func([NewNotification], [], []),
    'addOrder' : IDL.Func([NewOrder], [Result], []),
    'availableCycles' : IDL.Func([], [IDL.Nat], ['query']),
    'changeInvoiceStatus' : IDL.Func([IDL.Text, InvoiceStatus], [Result], []),
    'deleteNotification' : IDL.Func([IDL.Nat], [Result], []),
    'findOrdersByStatus' : IDL.Func(
        [OrderStatus__1],
        [IDL.Vec(Order)],
        ['query'],
      ),
    'getComments' : IDL.Func([Comto, IDL.Nat], [IDL.Vec(Comment)], ['query']),
    'getLogs' : IDL.Func([IDL.Nat], [IDL.Vec(Log)], ['query']),
    'getMyInvoice' : IDL.Func(
        [InvoiceStatus, IDL.Nat],
        [IDL.Vec(Invoice)],
        ['query'],
      ),
    'getMyMessages' : IDL.Func(
        [IDL.Bool, IDL.Nat],
        [IDL.Vec(Message)],
        ['query'],
      ),
    'getMyNotifications' : IDL.Func(
        [IDL.Bool, IDL.Nat],
        [IDL.Vec(Notification)],
        ['query'],
      ),
    'getOrder' : IDL.Func([IDL.Text], [IDL.Opt(Order)], ['query']),
    'getProcessOrders' : IDL.Func([], [IDL.Vec(Order)], ['query']),
    'getUserLogs' : IDL.Func([IDL.Nat], [IDL.Vec(Log)], ['query']),
    'log' : IDL.Func([NewLog], [], []),
    'message' : IDL.Func([NewMessage], [Result], []),
    'readMessage' : IDL.Func([IDL.Nat], [Result], []),
    'readNotification' : IDL.Func([IDL.Nat], [Result], []),
    'updateInvoice' : IDL.Func([IDL.Text, UpdateInvoice], [Result], []),
  });
  return Ram;
};

// CANISTER_ID is replaced by webpack based on node environment
const canisterId$2 = "pxu6k-jaaaa-aaaap-aaamq-cai";//process.env.RAM_CANISTER_ID;

/**
 * 
 * @param {string | import("@dfinity/principal").Principal} canisterId Canister ID of Agent
 * @param {{agentOptions?: import("@dfinity/agent").HttpAgentOptions; actorOptions?: import("@dfinity/agent").ActorConfig}} [options]
 * @return {import("@dfinity/agent").ActorSubclass<import("./ram.did.js")._SERVICE>}
 */
 const createActor$2 = (agent$1, actorOptions) => {
  // const agent = new HttpAgent({ ...options?.agentOptions });
  
  // Fetch root key for certificate validation during development
  if(process.env.NODE_ENV !== "production") {
    agent$1.fetchRootKey().catch(err=>{
      console.warn("Unable to fetch root key. Check to ensure that your local replica is running");
      console.error(err);
    });
  }

  // Creates an actor with using the candid interface and the HttpAgent
  return agent.Actor.createActor(idlFactory$2, {
    agent: agent$1,
    canisterId: canisterId$2,
    actorOptions
  });
};
  
/**
 * A ready-to-use agent for the ram canister
 * @type {import("@dfinity/agent").ActorSubclass<import("./ram.did.js")._SERVICE>}
 */
 //export const ram = createActor(canisterId);

const idlFactory$1 = ({ IDL }) => {
  const Address = IDL.Record({
    'postcode' : IDL.Text,
    'country' : IDL.Text,
    'province' : IDL.Text,
    'city' : IDL.Text,
    'address' : IDL.Text,
  });
  const Currency = IDL.Text;
  const Wallet = IDL.Record({ 'currency' : Currency, 'address' : IDL.Text });
  const Contact = IDL.Record({
    'fax' : IDL.Opt(IDL.Text),
    'url' : IDL.Opt(IDL.Text),
    'contact' : IDL.Opt(IDL.Text),
    'name' : IDL.Text,
    'email' : IDL.Text,
    'address' : Address,
    'wallet' : IDL.Opt(Wallet),
    'phone' : IDL.Text,
  });
  const Tax = IDL.Record({
    'name' : IDL.Text,
    'rate' : IDL.Float64,
    'number' : IDL.Text,
    'amount' : IDL.Float64,
  });
  const PaymentTerm = IDL.Record({ 'name' : IDL.Text, 'address' : IDL.Text });
  const Item = IDL.Record({
    'desc' : IDL.Text,
    'quantity' : IDL.Nat32,
    'itype' : IDL.Variant({ 'cost' : IDL.Null, 'income' : IDL.Null }),
    'price' : IDL.Float64,
  });
  const NewInvoice = IDL.Record({
    'id' : IDL.Text,
    'to' : Contact,
    'tax' : Tax,
    'paymentterms' : IDL.Vec(PaymentTerm),
    'cost' : IDL.Float64,
    'from' : Contact,
    'note' : IDL.Text,
    'event' : IDL.Nat,
    'duetime' : IDL.Nat,
    'calendar' : IDL.Nat,
    'currency' : IDL.Text,
    'adjust' : IDL.Float64,
    'discount' : IDL.Float64,
    'items' : IDL.Vec(Item),
    'amount' : IDL.Float64,
    'receiver' : IDL.Opt(IDL.Text),
  });
  const Result = IDL.Variant({ 'ok' : IDL.Nat, 'err' : IDL.Text });
  const OrderItem = IDL.Record({
    'item' : IDL.Variant({
      'ticket' : IDL.Nat,
      'file' : IDL.Null,
      'mint' : IDL.Nat,
      'solution' : IDL.Nat,
    }),
    'count' : IDL.Nat,
  });
  const NewOrder = IDL.Record({
    'memo' : IDL.Opt(IDL.Text),
    'seller' : IDL.Text,
    'orderid' : IDL.Text,
    'items' : IDL.Vec(OrderItem),
    'amount' : IDL.Float64,
  });
  const InvoiceStatus = IDL.Variant({
    'new' : IDL.Null,
    'canceled' : IDL.Null,
    'paid' : IDL.Null,
    'confirmed' : IDL.Null,
  });
  const TXID = IDL.Nat;
  const OrderStatus = IDL.Variant({
    'new' : IDL.Null,
    'canceled' : IDL.Null,
    'paid' : TXID,
    'delivered' : IDL.Null,
    'processing' : IDL.Text,
    'received' : IDL.Null,
  });
  const Order__1 = IDL.Record({
    'status' : OrderStatus,
    'changetime' : IDL.Opt(IDL.Int),
    'memo' : IDL.Opt(IDL.Text),
    'seller' : IDL.Text,
    'orderid' : IDL.Text,
    'ordertime' : IDL.Int,
    'buyer' : IDL.Text,
    'items' : IDL.Vec(OrderItem),
    'amount' : IDL.Float64,
  });
  const Result_1 = IDL.Variant({ 'ok' : Order__1, 'err' : IDL.Text });
  const OrderStatus__1 = IDL.Variant({
    'new' : IDL.Null,
    'canceled' : IDL.Null,
    'paid' : TXID,
    'delivered' : IDL.Null,
    'processing' : IDL.Text,
    'received' : IDL.Null,
  });
  const Order = IDL.Record({
    'status' : OrderStatus,
    'changetime' : IDL.Opt(IDL.Int),
    'memo' : IDL.Opt(IDL.Text),
    'seller' : IDL.Text,
    'orderid' : IDL.Text,
    'ordertime' : IDL.Int,
    'buyer' : IDL.Text,
    'items' : IDL.Vec(OrderItem),
    'amount' : IDL.Float64,
  });
  const Status = IDL.Variant({
    'new' : IDL.Null,
    'canceled' : IDL.Null,
    'paid' : IDL.Null,
    'confirmed' : IDL.Null,
  });
  const Invoice = IDL.Record({
    'id' : IDL.Text,
    'to' : Contact,
    'tax' : Tax,
    'status' : Status,
    'paymentterms' : IDL.Vec(PaymentTerm),
    'owner' : IDL.Text,
    'cost' : IDL.Float64,
    'from' : Contact,
    'note' : IDL.Text,
    'createtime' : IDL.Int,
    'event' : IDL.Nat,
    'duetime' : IDL.Nat,
    'calendar' : IDL.Nat,
    'currency' : IDL.Text,
    'adjust' : IDL.Float64,
    'discount' : IDL.Float64,
    'items' : IDL.Vec(Item),
    'amount' : IDL.Float64,
    'receiver' : IDL.Opt(IDL.Text),
  });
  const UpdateInvoice = IDL.Record({
    'tax' : Tax,
    'status' : Status,
    'paymentterms' : IDL.Vec(PaymentTerm),
    'cost' : IDL.Float64,
    'note' : IDL.Text,
    'duetime' : IDL.Nat,
    'adjust' : IDL.Float64,
    'discount' : IDL.Float64,
    'items' : IDL.Vec(Item),
    'amount' : IDL.Float64,
  });
  const Ledger = IDL.Service({
    'addInvoice' : IDL.Func([NewInvoice], [Result], []),
    'addOrder' : IDL.Func([NewOrder], [Result], []),
    'availableCycles' : IDL.Func([], [IDL.Nat], ['query']),
    'changeInvoiceStatus' : IDL.Func([IDL.Text, InvoiceStatus], [Result], []),
    'changeOrderStatus' : IDL.Func([IDL.Text, OrderStatus], [Result_1], []),
    'findOrdersByStatus' : IDL.Func(
        [OrderStatus__1],
        [IDL.Vec(Order)],
        ['query'],
      ),
    'getMyInvoice' : IDL.Func(
        [InvoiceStatus, IDL.Nat],
        [IDL.Vec(Invoice)],
        ['query'],
      ),
    'getOrder' : IDL.Func([IDL.Text], [IDL.Opt(Order)], ['query']),
    'getProcessOrders' : IDL.Func([], [IDL.Vec(Order)], ['query']),
    'requestDelivery' : IDL.Func([IDL.Text], [Result], []),
    'updateInvoice' : IDL.Func([IDL.Text, UpdateInvoice], [Result], []),
  });
  return Ledger;
};

// CANISTER_ID is replaced by webpack based on node environment
const canisterId$1 = "7qstd-hiaaa-aaaak-aariq-cai";//process.env.RAM_CANISTER_ID;

/**
 * 
 * @param {string | import("@dfinity/principal").Principal} canisterId Canister ID of Agent
 * @param {{agentOptions?: import("@dfinity/agent").HttpAgentOptions; actorOptions?: import("@dfinity/agent").ActorConfig}} [options]
 * @return {import("@dfinity/agent").ActorSubclass<import("./ledger.did.js")._SERVICE>}
 */
 const createActor$1 = (agent$1, actorOptions) => {
  // const agent = new HttpAgent({ ...options?.agentOptions });
  
  // Fetch root key for certificate validation during development
  if(process.env.NODE_ENV !== "production") {
    agent$1.fetchRootKey().catch(err=>{
      console.warn("Unable to fetch root key. Check to ensure that your local replica is running");
      console.error(err);
    });
  }

  // Creates an actor with using the candid interface and the HttpAgent
  return agent.Actor.createActor(idlFactory$1, {
    agent: agent$1,
    canisterId: canisterId$1,
    actorOptions
  });
};
  
/**
 * A ready-to-use agent for the ram canister
 * @type {import("@dfinity/agent").ActorSubclass<import("./ledger.did.js")._SERVICE>}
 */
 //export const ram = createActor(canisterId);

const idlFactory = ({ IDL }) => {
  const Result = IDL.Variant({ 'ok' : IDL.Nat, 'err' : IDL.Text });
  const Order = IDL.Record({
    'id' : IDL.Nat,
    'releasetime' : IDL.Int,
    'status' : IDL.Variant({
      'new' : IDL.Null,
      'deposited' : IDL.Null,
      'closed' : IDL.Null,
      'canceled' : IDL.Null,
      'refunded' : IDL.Null,
      'released' : IDL.Null,
      'delivered' : IDL.Null,
    }),
    'deposittime' : IDL.Int,
    'blockout' : IDL.Nat64,
    'updatetime' : IDL.Int,
    'delivertime' : IDL.Int,
    'closetime' : IDL.Int,
    'blockin' : IDL.Nat64,
    'memo' : IDL.Text,
    'seller' : IDL.Principal,
    'createtime' : IDL.Int,
    'refundtime' : IDL.Int,
    'expiration' : IDL.Int,
    'currency' : IDL.Variant({
      'ADA' : IDL.Null,
      'BTC' : IDL.Null,
      'DOT' : IDL.Null,
      'ETH' : IDL.Null,
      'ICP' : IDL.Null,
      'ICEG' : IDL.Null,
      'ICET' : IDL.Null,
      'USDC' : IDL.Null,
      'USDT' : IDL.Null,
    }),
    'account' : IDL.Text,
    'buyer' : IDL.Principal,
    'canceltime' : IDL.Int,
    'amount' : IDL.Nat64,
  });
  const EscrowService = IDL.Service({
    'availableCycles' : IDL.Func([], [IDL.Nat], ['query']),
    'cancel' : IDL.Func([IDL.Nat], [Result], []),
    'close' : IDL.Func([IDL.Nat], [Result], []),
    'confirm' : IDL.Func([IDL.Nat], [Result], []),
    'create' : IDL.Func(
        [IDL.Principal, IDL.Nat64, IDL.Text, IDL.Int],
        [Result],
        [],
      ),
    'deliver' : IDL.Func([IDL.Nat], [Result], []),
    'deposit' : IDL.Func([IDL.Nat], [Result], []),
    'getAllOrders' : IDL.Func([], [IDL.Vec(Order)], []),
    'getOrder' : IDL.Func([IDL.Nat], [Order], []),
    'getOrders' : IDL.Func([], [IDL.Vec(Order)], []),
    'refund' : IDL.Func([IDL.Nat], [Result], []),
  });
  return EscrowService;
};

// CANISTER_ID is replaced by webpack based on node environment
const canisterId = "oslfo-7iaaa-aaaag-qakra-cai";

/**
 * 
 * @param {string | import("@dfinity/principal").Principal} canisterId Canister ID of Agent
 * @param {{agentOptions?: import("@dfinity/agent").HttpAgentOptions; actorOptions?: import("@dfinity/agent").ActorConfig}} [options]
 * @return {import("@dfinity/agent").ActorSubclass<import("./icet.did.js")._SERVICE>}
 */
 const createActor = (agent$1, actorOptions) => {
  // const agent = new HttpAgent({ ...options?.agentOptions });
  
  // Fetch root key for certificate validation during development
  if(process.env.NODE_ENV !== "production") {
    agent$1.fetchRootKey().catch(err=>{
      console.warn("Unable to fetch root key. Check to ensure that your local replica is running");
      console.error(err);
    });
  }

  // Creates an actor with using the candid interface and the HttpAgent
  return agent.Actor.createActor(idlFactory, {
    agent: agent$1,
    canisterId,
    actorOptions
  });
};
  
/**
 * A ready-to-use agent for the icet canister
 * @type {import("@dfinity/agent").ActorSubclass<import("./escrow.did.js")._SERVICE>}
 */
//  export const escrow = createActor(canisterId);

var createActors = function createActors() {
  var agent = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultAgent;
  return {
    icevent: createActor$6(agent, {
      actorOptions: {}
    }),
    nft: createActor$5(agent, {
      actorOptions: {}
    }),
    icet: createActor$4(agent, {
      actorOptions: {}
    }),
    storage: createActor$3(agent, {
      actorOptions: {}
    }),
    ram: createActor$2(agent, {
      actorOptions: {}
    }),
    ledger: createActor$1(agent, {
      actorOptions: {}
    }),
    escrow: createActor(agent, {
      actorOptions: {}
    })
  };
};

var initialState = Object.assign(Object.assign({}, createActors()), {
  agent: defaultAgent,
  isAuthed: false,
  principal: null,
  showLoginModal: false,
  notifications: [],
  menu: "home",
  calendars: [],
  calendar: null,
  balance: 0
});

var Context = /*#__PURE__*/react.createContext({
  state: initialState,
  dispatch: function dispatch(_) {
    return null;
  }
});

var useGlobalContext = function useGlobalContext() {
  var context = react.useContext(Context);

  if (context === undefined) {
    console.log("context is undefined");
    throw new Error("useGlobalContext must be used within a CountProvider");
  }

  return context;
};
//   const context = useGlobalContext();
//   return {
//     list: context.state.notifications,
//     remove: (id: string) => context.dispatch({ type: "REMOVE_NOTIFICATION", id }),
//     clear: () => context.dispatch({ type: "REMOVE_ALL_NOTIFICATION" }),
//   };
// };

var useICEvent = function useICEvent() {
  var context = useGlobalContext();
  return context.state.icevent;
}; // export const useNFT = () => {

var Calendar = function Calendar() {
  var DAYS_OF_THE_WEEK = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
  var mountedRef = react.useRef(true);
  var icevent = useICEvent();

  var _useState = react.useState(false),
      _useState2 = _slicedToArray__default["default"](_useState, 2);
      _useState2[0];
      var setHasEvents = _useState2[1];

  var _useState3 = react.useState(false),
      _useState4 = _slicedToArray__default["default"](_useState3, 2);
      _useState4[0];
      var setLoading = _useState4[1];

  var _useState5 = react.useState([]),
      _useState6 = _slicedToArray__default["default"](_useState5, 2);
      _useState6[0];
      var setEvents = _useState6[1];

  var _useState7 = react.useState([]),
      _useState8 = _slicedToArray__default["default"](_useState7, 2),
      eventsWithoutTag = _useState8[0],
      seteventsWithoutTag = _useState8[1];

  var today = new Date();

  var _useState9 = react.useState(today),
      _useState10 = _slicedToArray__default["default"](_useState9, 2),
      date = _useState10[0],
      setDate = _useState10[1];

  var weekTitles = DAYS_OF_THE_WEEK.map(function (d, index) {
    return react$1.jsx(Day, {
      key: index,
      IsWeekTitle: "true"
    }, d);
  });

  var getDates = function getDates(currDate) {
    var currMonthArray = Array.from(Array(moment__default["default"](currDate).daysInMonth()), function (dt, index) {
      return moment__default["default"](currDate).startOf('month').add(index, 'd');
    });
    var startDay = moment__default["default"](currDate).startOf('month').day();
    var preMonthArray = startDay ? Array.from(Array(startDay), function (dt, index) {
      return moment__default["default"](currDate).subtract(1, 'M').endOf('month').subtract(index, 'd');
    }).reverse() : [];
    var nextMonthArray = Array.from(Array(6 - moment__default["default"](currDate).endOf('month').day()), function (dt, index) {
      return moment__default["default"](currDate).add(1, 'M').startOf('month').add(index, 'd');
    });
    return [].concat(_toConsumableArray__default["default"](preMonthArray), _toConsumableArray__default["default"](currMonthArray), _toConsumableArray__default["default"](nextMonthArray));
  };

  var _useState11 = react.useState(getDates(date)),
      _useState12 = _slicedToArray__default["default"](_useState11, 2),
      dates = _useState12[0],
      setDates = _useState12[1];

  var dateLst = dates.map(function (md, index) {
    return react$1.jsx(Day, {
      key: index,
      isToday: md.isSame(moment__default["default"](today), 'day'),
      isSelected: md.isSame(moment__default["default"](date), 'day'),
      isCurrMonth: md.month() == moment__default["default"](date).month(),
      onClick: function onClick() {
        return md.month() == moment__default["default"](date).month() && setDate(md.toDate());
      }
    }, md.date());
  });

  var fetchEvents = function fetchEvents(s, e) {
    setLoading(true);
    icevent.getEvents(s.unix(), e.unix(), [], BigInt(1)).then(function (es) {
      if (mountedRef.current) {
        setLoading(false);
        var orderedEvents = es.sort(function (a, b) {
          return a.start < b.start ? -1 : a.start > b.start ? 1 : 0;
        });
        var pevents = parseEvents(orderedEvents);
        seteventsWithoutTag(pevents);
        setEvents(pevents);
      }

      setLoading(false);
    });
  };

  react.useEffect(function () {
    setDates(getDates(date)); // fetchEvents(moment(date), moment(date).add(1, "months"));

    fetchEvents(dates[0], dates[dates.length - 1]);
    setHasEvents(eventsWithoutTag.length >= 0);
    return function () {
      mountedRef.current = false;
    };
  }, [date]);
  return react$1.jsx(Frame, null, react$1.jsx(Header, null, react$1.jsx("div", null, moment__default["default"](date).format("MMM YYYY")), react$1.jsx(ButtonGroup, null, react$1.jsx(Button, {
    onClick: function onClick() {
      return setDate(moment__default["default"](date).subtract(1, 'month'));
    }
  }, react$1.jsx(ArrowLeft, null)), react$1.jsx(Button, {
    onClick: function onClick() {
      return setDate(moment__default["default"](date).add(1, 'month'));
    }
  }, react$1.jsx(ArrowRight, null)))), react$1.jsx(Body, null, weekTitles, dateLst));
};

exports.Calendar = Calendar;
