export const FIVE_SECONDS_MS = 5 * 1000;
export const ONE_MINUTES_MS = 60 * 1000;
export const FIVE_MINUTES_MS = 5 * 60 * 1000;
export const ONE_HOUR_MS = 60 * 60 * 1000;
export const ONE_WEEK_SEC = 7 * 24 * 60 * 60;
export const ONE_WEEK_NS = BigInt(ONE_WEEK_SEC * 1e9);

export const MINT_CYCLES_MEMO = 1347768404;

export const MAX_CHUNK_SIZE = 1024 * 500; // 500kb for file upload in storage canister

//event status
export const EVENT_STATUS_NEW = "new";
export const EVENT_STATUS_CONFIRMED = "confirmed";
export const EVENT_STATUS_FINISHED = "finished";
export const EVENT_STATUS_CANCELED = "canceled";

//todo status
export const TODO_STATUS_NEW = "new";
export const TODO_STATUS_PROGRESS = "progress";
export const TODO_STATUS_DONE = "done";

export const TODO_PRIORITY_HIGH = 'high';
export const TODO_PRIORITY_MEDIUM = 'medium';
export const TODO_PRIORITY_LOW = 'low';

//order status
export const ORDER_STATUS_NEW = "new";
export const ORDER_STATUS_PAID = "paid";
export const ORDER_STATUS_DEPOSITED = "deposited";
export const ORDER_STATUS_DELIVERED = "delivered";
export const ORDER_STATUS_RECEIVED = "received";
export const ORDER_STATUS_RELEASED = "released";
export const ORDER_STATUS_CLOSED = "closed";
export const ORDER_STATUS_CANCELED = "canceled";

//event types
export const EVENT_COMMON = "common";
export const EVENT_ACTIVITY = "activity";
export const EVENT_APPOINTMENT = "appointment";
export const EVENT_SCHEDULE = "schedule";
export const EVENT_ITINERARY = "itinerary";
export const EVENT_CONTRACT = "contract";
//todo types
export const TODO_TASK = 'task';
export const TODO_ISSUE = 'issue';
export const TODO_IDEA = 'idea';
export const TODO_TICKET = 'ticket';
export const TODO_PROPOSAL = 'proposal';
export const TODO_BOUNTY = 'bounty';

//form data
export const OPTIONS_LOCATION = [
  { key: "online", text: "Online", value: "online" },
  { key: "offline", text: "Offline", value: "offline" }
];
export const REPEATYPE_DAYLY = "daily";
export const REPEATYPE_WEEKLY = "weekly";
export const REPEATYPE_WEEKDAY = "weekday";
export const REPEATYPE_WEEKEND = "weekend";
export const REPEATYPE_MONTHLY = "monthly";
export const REPEATYPE_YEARLY = "yearly";

export const OPTIONS_REPEAT = [
  { key: 'd', text: 'Daily', value: REPEATYPE_DAYLY },
  { key: 'w', text: 'Weekly', value: REPEATYPE_WEEKLY },
  { key: 'wd', text: 'Weekday (Mon ~ Fri)', value: REPEATYPE_WEEKDAY },
  { key: 'wk', text: 'Weekend (Sat & Sun)', value: REPEATYPE_WEEKEND },
  { key: 'm', text: 'Monthly', value: REPEATYPE_MONTHLY },
  { key: 'y', text: 'Yearly', value: REPEATYPE_YEARLY },
]


//canisterids
export const CANISTER_ICEVENT = "ukvuy-5aaaa-aaaaj-qabva-cai";
export const CANISTER_ICET = "ot4zw-oaaaa-aaaag-qabaa-cai";
export const CANISTER_ICETICKET = "rvzx7-oqaaa-aaaaj-qagxq-cai";
export const CANISTER_STORAGE = "5pqgi-saaaa-aaaal-aaavq-cai";
export const CANISTER_RAM = "pxu6k-jaaaa-aaaap-aaamq-cai";
export const CANISTER_LEDGER = "7qstd-hiaaa-aaaak-aariq-cai";
export const CANISTER_ESCROW = "oslfo-7iaaa-aaaag-qakra-cai";
export const CANISTER_TREASURY = "gncpj-jyaaa-aaaan-qagta-cai";
export const CANISTER_CYCLES = "rkp4c-7iaaa-aaaaa-aaaca-cai";
export const CANISTER_ATTENDNFT = "vjod3-4iaaa-aaaan-qaoeq-cai";

export const WHITELIST = [
  CANISTER_ICEVENT,
  'owctf-4qaaa-aaaak-qaahq-cai',
  CANISTER_ICET,
  CANISTER_ICETICKET,
  'btsqz-aaaaa-aaaae-aaawq-cai',
  CANISTER_STORAGE,
  CANISTER_RAM,
  CANISTER_LEDGER,
  'gncpj-jyaaa-aaaan-qagta-cai',
  CANISTER_ESCROW,
  CANISTER_TREASURY,
  CANISTER_ATTENDNFT
].filter(
  Boolean
);
//
export const PRINCIPAL_DEV = "33cvj-3w7ku-d2k2n-nqueo-wkxpp-pmckv-rhyjh-jvn5t-fzw4x-xxwy6-qae";

//paging
export const PAGING_LENGTH = 10;
