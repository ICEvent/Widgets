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

var HOST = process.env.NEXT_PUBLIC_DFX_NETWORK === "local" ? "http://localhost:8000" : "https://ic0.app";
process.env.IDENTITY_CANISTER_ID ? "http://".concat(process.env.IDENTITY_CANISTER_ID, ".localhost:8000") : 'https://identity.ic0.app';
var defaultAgent = new agent.HttpAgent({
  host: HOST
});

const idlFactory = ({ IDL }) => {
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
const canisterId = process.env.NEXT_PUBLIC_ICEVENT_CANISTER_ID;//"";
console.log("canisterId:"+canisterId);
/**
 * 
 * @param {string | import("@dfinity/principal").Principal} canisterId Canister ID of Agent
 * @param {{agentOptions?: import("@dfinity/agent").HttpAgentOptions; actorOptions?: import("@dfinity/agent").ActorConfig}} [options]
 * @return {import("@dfinity/agent").ActorSubclass<import("./icevent.did.js")._SERVICE>}
 */
 const createActor = (agent$1, actorOptions) => {
  //const agent = new HttpAgent({ ...options?.agentOptions });
  
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

var createActors = function createActors() {
  var agent = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultAgent;
  return {
    icevent: createActor(agent, {
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
  useICEvent();

  var _useState = react.useState(false),
      _useState2 = _slicedToArray__default["default"](_useState, 2);
      _useState2[0];
      _useState2[1];

  var _useState3 = react.useState(false),
      _useState4 = _slicedToArray__default["default"](_useState3, 2);
      _useState4[0];
      _useState4[1];

  var _useState5 = react.useState([]),
      _useState6 = _slicedToArray__default["default"](_useState5, 2);
      _useState6[0];
      _useState6[1];

  var _useState7 = react.useState([]),
      _useState8 = _slicedToArray__default["default"](_useState7, 2);
      _useState8[0];
      _useState8[1];

  var _useState9 = react.useState(new Date()),
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
      isToday: md.isSame(moment__default["default"](new Date()), 'day'),
      isSelected: md.isSame(moment__default["default"](date), 'day'),
      isCurrMonth: md.month() == moment__default["default"](date).month(),
      onClick: function onClick() {
        return md.month() == moment__default["default"](date).month() && setDate(md.toDate());
      }
    }, md.date());
  });

  react.useEffect(function () {
    setDates(getDates(date)); // fetchEvents(dates[0], dates[dates.length - 1]);
    // setHasEvents(eventsWithoutTag.length >= 0)

    return function () {
      mountedRef.current = false;
    };
  }, [date]);
  return react$1.jsx(Frame, null, react$1.jsx(Header, null, react$1.jsx("div", null, moment__default["default"](date).format("MMM YYYY")), react$1.jsx(ButtonGroup, null, react$1.jsx(Button, {
    onClick: function onClick() {
      return setDate(moment__default["default"](date).subtract(1, 'month').toDate());
    }
  }, react$1.jsx(ArrowLeft, null)), react$1.jsx(Button, {
    onClick: function onClick() {
      return setDate(moment__default["default"](date).add(1, 'month').toDate());
    }
  }, react$1.jsx(ArrowRight, null)))), react$1.jsx(Body, null, weekTitles, dateLst));
};

exports.Calendar = Calendar;
