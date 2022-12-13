import type { Principal } from '@dfinity/principal';
export interface Achievement {
  'userid' : string,
  'badges' : Array<string>,
  'credit' : bigint,
  'roles' : Array<Role>,
}
export interface Activity {
  'attendeelimit' : bigint,
  'formfields' : Array<Formfield>,
  'price' : Cost,
  'registerat' : { 'createon' : null } |
    { 'starton' : null },
}
export interface ActivitySet { 'currency' : Currency }
export type ActivitySet__1 = {};
export interface Admission { 'contact' : ContactInfo__2, 'code' : string }
export interface Appointment { 'cost' : Cost, 'guest' : ContactInfo__1 }
export type Authority = { 'admin' : null } |
  { 'edit' : null } |
  { 'read' : null };
export interface BookingSet {
  'tz' : string,
  'bookend' : string,
  'slotlength' : { 'hours' : number } |
    { 'minutes' : number },
  'bookstart' : string,
}
export interface BookingSet__1 {
  'tz' : string,
  'bookend' : string,
  'slotlength' : { 'hours' : number } |
    { 'minutes' : number },
  'bookstart' : string,
}
export interface Calendar {
  'id' : bigint,
  'url' : string,
  'status' : bigint,
  'owner' : string,
  'name' : string,
  'color' : string,
  'tags' : Array<string>,
  'ctype' : bigint,
  'description' : string,
  'ispublic' : boolean,
  'solution' : { 'appointment' : BookingSet__1 } |
    { 'schedule' : ScheduleSet__1 } |
    { 'common' : null } |
    { 'activity' : ActivitySet__1 } |
    { 'itinerary' : ItinerarySet__1 },
  'isverified' : boolean,
  'organization' : [] | [
    {
      'bn' : string,
      'taxno' : string,
      'contact' : ContactInfo__1,
      'wallet' : Wallet__1,
    }
  ],
  'attachments' : Array<string>,
}
export interface CalendarInfo {
  'cid' : Principal,
  'owner' : Principal,
  'name' : string,
  'createtime' : bigint,
}
export interface Calendar__1 {
  'id' : bigint,
  'url' : string,
  'status' : Status__2,
  'owner' : string,
  'name' : string,
  'color' : string,
  'tags' : Array<string>,
  'ctype' : Ctype,
  'description' : string,
  'ispublic' : boolean,
  'solution' : Solution,
  'isverified' : boolean,
  'organization' : [] | [Organization],
}
export interface CanisterSettings {
  'freezing_threshold' : [] | [bigint],
  'controllers' : [] | [Array<Principal>],
  'memory_allocation' : [] | [bigint],
  'compute_allocation' : [] | [bigint],
}
export interface CanisterStatus {
  'status' : Status__3,
  'memory_size' : bigint,
  'cycles' : bigint,
  'settings' : CanisterSettings,
  'module_hash' : [] | [Array<number>],
}
export interface Category {
  'id' : bigint,
  'owner' : string,
  'hook' : bigint,
  'name' : string,
  'parent' : bigint,
}
export interface Checklist {
  'id' : bigint,
  'owner' : string,
  'list' : Array<string>,
  'name' : string,
  'description' : string,
  'calendar' : bigint,
  'ispublic' : boolean,
}
export type Component = { 'contact' : null } |
  { 'note' : null } |
  { 'todo' : null } |
  { 'event' : null } |
  { 'calendar' : null } |
  { 'wallet' : null };
export interface Contact {
  'id' : bigint,
  'owner' : string,
  'name' : string,
  'note' : string,
  'tags' : Array<string>,
  'ctype' : bigint,
  'email' : string,
  'calendar' : bigint,
  'address' : string,
  'disable' : boolean,
  'contactid' : string,
  'phone' : string,
  'attachments' : Array<string>,
}
export interface ContactInfo {
  'dns' : [] | [string],
  'fax' : [] | [string],
  'url' : [] | [string],
  'name' : string,
  'email' : string,
  'address' : string,
  'phone' : string,
}
export interface ContactInfo__1 {
  'fax' : string,
  'contact' : string,
  'name' : string,
  'email' : string,
  'address' : string,
  'phone' : string,
}
export interface ContactInfo__2 {
  'fax' : [] | [string],
  'postcode' : string,
  'contact' : [] | [string],
  'country' : string,
  'province' : string,
  'city' : string,
  'name' : string,
  'email' : string,
  'website' : [] | [string],
  'address' : string,
  'wallet' : [] | [{ 'network' : string, 'address' : string }],
  'phone' : string,
}
export interface Contract {
  'jon' : ContactInfo__1,
  'sam' : ContactInfo__1,
  'cost' : Cost,
  'paymenterm' : string,
}
export interface Cost { 'currency' : string, 'amount' : number }
export type Ctype = { 'appointment' : null } |
  { 'schedule' : null } |
  { 'common' : null } |
  { 'activity' : null } |
  { 'itinerary' : null };
export type Currency = string;
export interface Currency__1 {
  'id' : string,
  'name' : string,
  'network' : string,
}
export type Etype = { 'appointment' : null } |
  { 'contract' : null } |
  { 'schedule' : null } |
  { 'common' : null } |
  { 'activity' : null } |
  { 'itinerary' : null };
export interface Event {
  'id' : bigint,
  'tz' : string,
  'end' : bigint,
  'status' : Status,
  'title' : string,
  'repeatdata' : [] | [RepeatData],
  'isrepeat' : boolean,
  'owner' : string,
  'allday' : boolean,
  'cost' : number,
  'tags' : Array<string>,
  'description' : string,
  'etype' : Etype,
  'calendar' : bigint,
  'start' : bigint,
  'ispublic' : boolean,
  'solution' : Solution__1,
  'location' : Location,
  'attachments' : Array<string>,
}
export interface Event__1 {
  'id' : bigint,
  'tz' : string,
  'end' : bigint,
  'status' : bigint,
  'title' : string,
  'isrepeat' : boolean,
  'owner' : string,
  'allday' : boolean,
  'cost' : number,
  'tags' : Array<string>,
  'description' : string,
  'etype' : bigint,
  'calendar' : bigint,
  'start' : bigint,
  'ispublic' : boolean,
  'location' : string,
  'attachments' : Array<string>,
}
export interface Formfield {
  'name' : string,
  'isrequired' : boolean,
  'description' : string,
}
export interface Group { 'supervisor' : string, 'members' : Array<string> }
export interface Group__1 { 'supervisor' : string, 'members' : Array<string> }
export interface Hotel { 'contact' : ContactInfo__2, 'code' : string }
export interface Iday {
  'to' : string,
  'via' : string,
  'admissions' : Array<Admission>,
  'hotel' : [] | [Hotel],
  'itineraries' : Array<string>,
  'from' : string,
  'breakfast' : [] | [Restaurant],
  'lunch' : [] | [Restaurant],
  'dinner' : [] | [Restaurant],
}
export interface Interested { 'event' : bigint, 'interester' : Principal }
export interface Invitee {
  'status' : InviteeStatus,
  'eventid' : bigint,
  'role' : { 'admin' : null } |
    { 'moderator' : null } |
    { 'viewer' : null },
  'inviteeid' : string,
  'inviteename' : string,
}
export type InviteeStatus = { 'invited' : null } |
  { 'rejected' : null } |
  { 'accepted' : null };
export interface Itinerary {
  'cost' : Cost,
  'operater' : string,
  'idays' : Array<Iday>,
  'driver' : { 'name' : string, 'phone' : string },
}
export type ItinerarySet = {};
export type ItinerarySet__1 = {};
export type Location = { 'geo' : string } |
  { 'url' : string } |
  { 'address' : string };
export interface Log {
  'function' : bigint,
  'action' : bigint,
  'user' : string,
  'logtime' : bigint,
}
export interface NewCalendar {
  'url' : string,
  'name' : string,
  'color' : string,
  'tags' : Array<string>,
  'ctype' : Ctype,
  'description' : string,
  'ispublic' : boolean,
  'solution' : Solution,
  'organization' : [] | [Organization],
}
export interface NewCategory {
  'hook' : bigint,
  'name' : string,
  'parent' : bigint,
}
export interface NewChecklistReq {
  'list' : Array<string>,
  'name' : string,
  'description' : string,
  'calendar' : bigint,
  'ispublic' : boolean,
}
export interface NewContact {
  'name' : string,
  'note' : string,
  'tags' : Array<string>,
  'ctype' : bigint,
  'email' : string,
  'calendar' : bigint,
  'address' : string,
  'disable' : boolean,
  'contactid' : string,
  'phone' : string,
  'attachments' : Array<string>,
}
export interface NewEvent {
  'tz' : string,
  'end' : bigint,
  'title' : string,
  'repeatdata' : [] | [RepeatData],
  'isrepeat' : boolean,
  'allday' : boolean,
  'cost' : number,
  'tags' : Array<string>,
  'description' : string,
  'etype' : Etype,
  'calendar' : bigint,
  'start' : bigint,
  'ispublic' : boolean,
  'solution' : Solution__1,
  'location' : Location,
  'attachments' : Array<string>,
}
export interface NewInvitee {
  'eventid' : bigint,
  'role' : { 'admin' : null } |
    { 'moderator' : null } |
    { 'viewer' : null },
  'inviteeid' : string,
  'inviteename' : string,
}
export interface NewNote {
  'title' : string,
  'content' : string,
  'tags' : Array<string>,
  'calendar' : bigint,
  'ispublic' : boolean,
  'category' : bigint,
  'attachments' : Array<string>,
}
export interface NewNoteReq {
  'title' : string,
  'content' : string,
  'tags' : Array<string>,
  'calendar' : bigint,
  'ispublic' : boolean,
  'category' : bigint,
}
export interface NewRegister { 'data' : Array<RegData>, 'name' : string }
export interface NewTodo {
  'assignee' : string,
  'ttype' : TodoType,
  'tags' : Array<string>,
  'todo' : string,
  'description' : string,
  'bounty' : number,
  'duedate' : bigint,
  'calendar' : bigint,
  'ispublic' : boolean,
  'priority' : Priority,
  'attachments' : Array<string>,
  'parent' : bigint,
}
export interface Note {
  'id' : bigint,
  'title' : string,
  'content' : string,
  'owner' : string,
  'tags' : Array<string>,
  'createtime' : bigint,
  'calendar' : bigint,
  'ispublic' : boolean,
  'category' : bigint,
  'attachments' : Array<string>,
}
export interface Organization {
  'bn' : [] | [string],
  'taxno' : [] | [string],
  'contact' : [] | [ContactInfo],
  'logo' : [] | [string],
  'currency' : Currency,
  'wallet' : [] | [Wallet],
}
export interface Participant {
  'pid' : string,
  'name' : string,
  'role' : Partrole,
  'calendar' : bigint,
}
export type Partrole = { 'admin' : null } |
  { 'editor' : null } |
  { 'viewer' : null };
export interface Permission { 'component' : Component, 'authority' : Authority }
export type Priority = { 'low' : null } |
  { 'high' : null } |
  { 'medium' : null };
export interface Profile {
  'bio' : string,
  'status' : bigint,
  'username' : string,
  'lastlogin' : bigint,
  'userid' : string,
  'name' : string,
  'role' : bigint,
  'email' : string,
  'createtime' : bigint,
  'avatar' : string,
}
export interface RegData { 'value' : string, 'name' : string }
export type RegStatus = { 'regjected' : null } |
  { 'request' : null } |
  { 'paid' : null } |
  { 'approved' : null } |
  { 'confirmed' : null };
export interface Register {
  'status' : RegStatus,
  'eventid' : bigint,
  'ticket' : [] | [string],
  'data' : Array<RegData>,
  'name' : string,
  'regtime' : bigint,
  'register' : string,
}
export interface RepeatData {
  'adjusts' : Array<bigint>,
  'excludes' : Array<bigint>,
  'days' : Array<bigint>,
  'frequency' : bigint,
  'rtype' : RepeatType,
}
export type RepeatType = { 'weekday' : null } |
  { 'weekend' : null } |
  { 'monthly' : null } |
  { 'yearly' : null } |
  { 'daily' : null } |
  { 'weekly' : null };
export interface Restaurant { 'contact' : ContactInfo__2, 'code' : string }
export type Result = { 'ok' : bigint } |
  { 'err' : string };
export type Result_1 = { 'ok' : Todo__1 } |
  { 'err' : string };
export type Result_2 = { 'ok' : CanisterStatus } |
  { 'err' : string };
export type Result_3 = { 'ok' : Calendar__1 } |
  { 'err' : string };
export type Result_4 = { 'ok' : CalendarInfo } |
  { 'err' : string };
export interface Role { 'privileges' : Array<Permission>, 'name' : string }
export interface Schedule { 'groups' : Array<Group__1> }
export interface ScheduleSet { 'groups' : Array<Group> }
export type ScheduleSet__1 = {};
export type Solution = { 'appointment' : BookingSet } |
  { 'schedule' : ScheduleSet } |
  { 'common' : null } |
  { 'activity' : ActivitySet } |
  { 'itinerary' : ItinerarySet };
export type Solution__1 = { 'appointment' : Appointment } |
  { 'contract' : Contract } |
  { 'schedule' : Schedule } |
  { 'common' : null } |
  { 'activity' : Activity } |
  { 'itinerary' : Itinerary };
export type Status = { 'new' : null } |
  { 'canceled' : null } |
  { 'finished' : null } |
  { 'confirmed' : null };
export type Status__1 = { 'new' : null } |
  { 'done' : null } |
  { 'progress' : null };
export type Status__2 = { 'live' : null } |
  { 'offline' : null };
export type Status__3 = { 'stopped' : null } |
  { 'stopping' : null } |
  { 'running' : null };
export interface Subscription {
  'calendar' : bigint,
  'stype' : bigint,
  'subscriber' : Principal,
}
export interface Todo {
  'id' : bigint,
  'status' : bigint,
  'assignee' : string,
  'ttype' : bigint,
  'owner' : string,
  'tags' : Array<string>,
  'todo' : string,
  'description' : string,
  'duedate' : bigint,
  'calendar' : bigint,
  'ispublic' : boolean,
  'priority' : bigint,
  'donetime' : bigint,
  'attachments' : Array<string>,
  'parent' : bigint,
}
export type TodoType = { 'ticket' : null } |
  { 'idea' : null } |
  { 'task' : null } |
  { 'bounty' : null } |
  { 'proposal' : null } |
  { 'issue' : null };
export interface Todo__1 {
  'id' : bigint,
  'status' : Status__1,
  'assignee' : string,
  'ttype' : TodoType,
  'owner' : string,
  'tags' : Array<string>,
  'todo' : string,
  'description' : string,
  'bounty' : number,
  'duedate' : bigint,
  'calendar' : bigint,
  'ispublic' : boolean,
  'priority' : Priority,
  'donetime' : bigint,
  'attachments' : Array<string>,
  'parent' : bigint,
}
export interface UpdateCalendar {
  'url' : string,
  'name' : string,
  'color' : string,
  'tags' : Array<string>,
  'ctype' : Ctype,
  'description' : string,
  'ispublic' : boolean,
  'solution' : Solution,
  'organization' : [] | [Organization],
}
export interface UpdateContact {
  'name' : string,
  'note' : string,
  'tags' : Array<string>,
  'ctype' : bigint,
  'email' : string,
  'address' : string,
  'disable' : boolean,
  'contactid' : string,
  'phone' : string,
  'attachments' : Array<string>,
}
export interface UpdateEvent {
  'tz' : string,
  'end' : bigint,
  'title' : string,
  'repeatdata' : [] | [RepeatData],
  'allday' : boolean,
  'cost' : number,
  'tags' : Array<string>,
  'description' : string,
  'start' : bigint,
  'ispublic' : boolean,
  'solution' : Solution__1,
  'location' : Location,
  'attachments' : Array<string>,
}
export interface UpdateTodo {
  'assignee' : string,
  'ttype' : TodoType,
  'tags' : Array<string>,
  'todo' : string,
  'description' : string,
  'bounty' : number,
  'duedate' : bigint,
  'ispublic' : boolean,
  'priority' : Priority,
  'attachments' : Array<string>,
}
export interface Vansday {
  'addAllowCreateCanister' : (arg_0: Principal) => Promise<Array<Principal>>,
  'addBadge' : (arg_0: string, arg_1: string) => Promise<Result>,
  'addCalendar' : (arg_0: NewCalendar) => Promise<Result>,
  'addCategory' : (arg_0: NewCategory) => Promise<Result>,
  'addChecklist' : (arg_0: NewChecklistReq) => Promise<Result>,
  'addContact' : (arg_0: NewContact) => Promise<Result>,
  'addController' : (arg_0: Principal) => Promise<Result_2>,
  'addEventToCalendar' : (arg_0: bigint, arg_1: bigint) => Promise<undefined>,
  'addInvitee' : (arg_0: NewInvitee) => Promise<Result>,
  'addNote' : (arg_0: NewNote) => Promise<Result>,
  'addParticipant' : (arg_0: Participant) => Promise<Result>,
  'addSystemTodo' : (
      arg_0: {
        'desc' : string,
        'duedate' : bigint,
        'itodo' : string,
        'attachments' : Array<string>,
      },
    ) => Promise<Result>,
  'addTodo' : (arg_0: NewTodo) => Promise<Result>,
  'approveRegister' : (arg_0: Register) => Promise<Result>,
  'assignTask' : (arg_0: bigint, arg_1: string) => Promise<Result>,
  'availableCycles' : () => Promise<bigint>,
  'backupData' : () => Promise<Result>,
  'cancelEvent' : (
      arg_0: bigint,
      arg_1: [] | [{ 'op' : string, 'adate' : bigint }],
    ) => Promise<Result>,
  'changeEventStatus' : (arg_0: bigint, arg_1: Status) => Promise<Result>,
  'changeTodoStatus' : (arg_0: bigint, arg_1: Status__1) => Promise<Result>,
  'checkRegistration' : (arg_0: bigint) => Promise<boolean>,
  'checkUsername' : (arg_0: string) => Promise<boolean>,
  'createCalendarCanister' : (arg_0: string) => Promise<Result_4>,
  'createEvent' : (arg_0: NewEvent) => Promise<Result>,
  'createEvents' : (arg_0: Array<NewEvent>) => Promise<Result>,
  'deleteCalendar' : (arg_0: bigint) => Promise<Result>,
  'deleteCalendarItem' : (
      arg_0: bigint,
      arg_1: { 'note' : bigint } |
        { 'todo' : bigint } |
        { 'event' : bigint },
    ) => Promise<Result>,
  'deleteCategory' : (arg_0: bigint) => Promise<Result>,
  'deleteContact' : (arg_0: bigint) => Promise<Result>,
  'deleteInvitee' : (arg_0: bigint, arg_1: string) => Promise<Result>,
  'deleteNote' : (arg_0: bigint) => Promise<Result>,
  'deleteParticipant' : (arg_0: bigint, arg_1: string) => Promise<Result>,
  'deleteTodo' : (arg_0: bigint) => Promise<Result>,
  'editEvent' : (arg_0: bigint, arg_1: UpdateEvent) => Promise<Result>,
  'getAchievement' : (arg_0: string) => Promise<[] | [Achievement]>,
  'getAppointmentSlots' : (
      arg_0: bigint,
      arg_1: bigint,
      arg_2: bigint,
    ) => Promise<Array<{ 'id' : bigint, 'end' : bigint, 'start' : bigint }>>,
  'getBackupState' : () => Promise<Array<[string, bigint]>>,
  'getBannerMessage' : () => Promise<string>,
  'getCalTodos' : (arg_0: bigint, arg_1: bigint) => Promise<Array<Todo__1>>,
  'getCalendar' : (arg_0: bigint) => Promise<Result_3>,
  'getCalendarEvents' : (
      arg_0: bigint,
      arg_1: bigint,
      arg_2: bigint,
      arg_3: bigint,
    ) => Promise<Array<Event>>,
  'getCalendarNotes' : (arg_0: bigint) => Promise<Array<Note>>,
  'getCalendars' : (
      arg_0: [] | [string],
      arg_1: boolean,
      arg_2: bigint,
    ) => Promise<Array<Calendar__1>>,
  'getCanisterStatus' : (arg_0: Principal) => Promise<CanisterStatus>,
  'getChecklists' : (arg_0: bigint) => Promise<Array<Checklist>>,
  'getDataState' : () => Promise<Array<[string, bigint]>>,
  'getEvent' : (arg_0: bigint) => Promise<[] | [Event]>,
  'getEvents' : (
      arg_0: bigint,
      arg_1: bigint,
      arg_2: [] | [string],
      arg_3: bigint,
    ) => Promise<Array<Event>>,
  'getInterestes' : (arg_0: bigint) => Promise<Array<Interested>>,
  'getInvitedEvents' : (arg_0: bigint, arg_1: bigint, arg_2: bigint) => Promise<
      Array<Event>
    >,
  'getInvitees' : (arg_0: bigint) => Promise<Array<Invitee>>,
  'getLogs' : (arg_0: bigint) => Promise<Array<Log>>,
  'getMyCalendarCanister' : () => Promise<[] | [CalendarInfo]>,
  'getMyCalendars' : (arg_0: bigint) => Promise<Array<Calendar__1>>,
  'getMyCanisterStatus' : () => Promise<Result_2>,
  'getMyCategories' : (arg_0: bigint, arg_1: bigint) => Promise<
      Array<Category>
    >,
  'getMyChecklists' : (arg_0: bigint) => Promise<Array<Checklist>>,
  'getMyContacts' : (arg_0: bigint) => Promise<Array<Contact>>,
  'getMyEvents' : (arg_0: bigint, arg_1: bigint, arg_2: bigint) => Promise<
      Array<Event>
    >,
  'getMyNotes' : (arg_0: bigint, arg_1: bigint) => Promise<Array<Note>>,
  'getMyParticipants' : () => Promise<Array<Participant>>,
  'getMyTodos' : (arg_0: Status__1, arg_1: boolean, arg_2: bigint) => Promise<
      Array<Todo__1>
    >,
  'getNote' : (arg_0: bigint) => Promise<[] | [Note]>,
  'getNotes' : (arg_0: bigint) => Promise<Array<Note>>,
  'getPartCalendars' : (arg_0: bigint) => Promise<Array<Calendar__1>>,
  'getParticipants' : (arg_0: bigint) => Promise<Array<Participant>>,
  'getParticipatedEvents' : (
      arg_0: bigint,
      arg_1: bigint,
      arg_2: bigint,
    ) => Promise<Array<Event>>,
  'getPublicTodos' : (
      arg_0: Status__1,
      arg_1: boolean,
      arg_2: bigint,
    ) => Promise<Array<Todo__1>>,
  'getRegisters' : (arg_0: bigint) => Promise<Array<Register>>,
  'getSubTodos' : (arg_0: bigint) => Promise<Array<Todo__1>>,
  'getSubscribedCalendars' : (arg_0: bigint) => Promise<Array<Calendar__1>>,
  'getSubscribedEvents' : (
      arg_0: bigint,
      arg_1: bigint,
      arg_2: bigint,
    ) => Promise<Array<Event>>,
  'getSubscriberCount' : (arg_0: bigint) => Promise<bigint>,
  'getSubscribers' : (arg_0: bigint) => Promise<bigint>,
  'getSubscriptions' : (arg_0: bigint) => Promise<Array<Subscription>>,
  'getSystemAdmin' : () => Promise<string>,
  'getSystemCalendar' : () => Promise<bigint>,
  'getSystemData' : () => Promise<
      { 'memory' : bigint, 'heap' : bigint, 'cycles' : bigint }
    >,
  'getSystemSupport' : () => Promise<string>,
  'getTodo' : (arg_0: bigint) => Promise<Result_1>,
  'getTypeTodos' : (arg_0: TodoType, arg_1: boolean, arg_2: bigint) => Promise<
      Array<Todo__1>
    >,
  'getUserData' : (arg_0: string) => Promise<
      {
        'todos' : Array<Todo>,
        'contacts' : Array<Contact>,
        'events' : Array<Event__1>,
        'notes' : Array<Note>,
        'calendars' : Array<Calendar>,
      }
    >,
  'getUserEvents' : (arg_0: string, arg_1: bigint) => Promise<Array<Event>>,
  'getVerifiedEvents' : (arg_0: bigint, arg_1: bigint) => Promise<Array<Event>>,
  'interested' : (arg_0: bigint) => Promise<Result>,
  'leaveParticipants' : (arg_0: bigint) => Promise<Result>,
  'listUsers' : (arg_0: bigint) => Promise<Array<Profile>>,
  'lookupUser' : (arg_0: string) => Promise<[] | [Profile]>,
  'registerActivity' : (arg_0: bigint, arg_1: NewRegister) => Promise<Result>,
  'removeEvent' : (arg_0: bigint) => Promise<Result>,
  'searchContacts' : (arg_0: string, arg_1: bigint, arg_2: bigint) => Promise<
      Array<Contact>
    >,
  'searchNotes' : (arg_0: boolean, arg_1: string, arg_2: bigint) => Promise<
      Array<Note>
    >,
  'setAdmin' : (arg_0: Principal) => Promise<undefined>,
  'setBannerMessage' : (arg_0: string) => Promise<undefined>,
  'setDefaultPageSize' : (arg_0: bigint) => Promise<undefined>,
  'setSystemAdmin' : (arg_0: string) => Promise<Result>,
  'setSystemCalendar' : (arg_0: bigint) => Promise<Result>,
  'setSystemSupport' : (arg_0: string) => Promise<Result>,
  'startCalendar' : () => Promise<Result>,
  'stopCalendar' : () => Promise<Result>,
  'subscribe' : (arg_0: bigint) => Promise<Result>,
  'transferCalendar' : (arg_0: bigint, arg_1: Principal) => Promise<Result>,
  'uninterested' : (arg_0: bigint) => Promise<Result>,
  'unsubscribe' : (arg_0: bigint) => Promise<Result>,
  'updateActivity' : (
      arg_0: bigint,
      arg_1: number,
      arg_2: bigint,
      arg_3: Array<{ 'ticket' : bigint, 'owner' : string }>,
      arg_4: Currency__1,
    ) => Promise<Result>,
  'updateCalendar' : (arg_0: bigint, arg_1: UpdateCalendar) => Promise<Result>,
  'updateCategory' : (arg_0: bigint, arg_1: string) => Promise<Result>,
  'updateChecklist' : (arg_0: bigint, arg_1: NewChecklistReq) => Promise<
      Result
    >,
  'updateContact' : (arg_0: bigint, arg_1: UpdateContact) => Promise<Result>,
  'updateNote' : (arg_0: bigint, arg_1: NewNoteReq) => Promise<Result>,
  'updateProfile' : (
      arg_0: string,
      arg_1: string,
      arg_2: string,
      arg_3: string,
      arg_4: string,
    ) => Promise<Result>,
  'updateTodo' : (arg_0: bigint, arg_1: UpdateTodo) => Promise<Result>,
  'userCount' : () => Promise<bigint>,
  'verifyCalendar' : (arg_0: bigint) => Promise<Result>,
}
export interface Wallet {
  'network' : { 'ADA' : null } |
    { 'BTC' : null } |
    { 'DOT' : null } |
    { 'ETH' : null } |
    { 'ICP' : null },
  'address' : string,
}
export interface Wallet__1 {
  'network' : { 'ADA' : null } |
    { 'BTC' : null } |
    { 'DOT' : null } |
    { 'ETH' : null } |
    { 'ICP' : null },
  'address' : string,
}
export interface _SERVICE extends Vansday {}
