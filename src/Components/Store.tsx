import { ActorSubclass, HttpAgent } from "@dfinity/agent";
import { Principal } from "@dfinity/principal";
import ICEventService from "../api/icevent/icevent.did";

import { defaultAgent } from "../lib/canisters";
import * as ICEvent from "../api/icevent/index";



import React, { createContext, useContext, useReducer } from "react";

type NewNotification = any;
type NotificationType = NewNotification & { id: string };
// import {
//   // NewNotification,
//   NotificationType,
// } from "./Notifications/Notifications";


export type State = {
  agent: HttpAgent;
  icevent: ActorSubclass<ICEventService._SERVICE>;
  isAuthed: boolean;
  principal: Principal | null;
  showLoginModal: boolean;
  notifications: NotificationType[];
  menu: string;
  calendars: ICEventService.Calendar[];
  calendar: ICEventService.Calendar;
  balance: number; //$ICET balance
};

const createActors = (agent: HttpAgent = defaultAgent) => ({
  icevent: ICEvent.createActor(agent, { actorOptions: {} }),
});

const initialState: State = {
  ...createActors(),
  agent: defaultAgent,
  isAuthed: false,
  principal: null,
  showLoginModal: false,
  notifications: [],
  menu: "home",
  calendars: [],
  calendar: null,
  balance: 0
};

type Action =
  | {
    type: "SET_AGENT";
    agent: HttpAgent | null;
    isAuthed?: boolean;
  }
  | {
    type: "SET_PRINCIPAL";
    principal: Principal;
  }
  | {
    type: "SET_LOGIN_MODAL";
    open: boolean;
  }
  | {
    type: "REMOVE_NOTIFICATION";
    id: string;
  }
  | {
    type: "REMOVE_ALL_NOTIFICATION";
  }
  | {
    type: "SET_MENU";
    name: string;
  }
  | {
    type: "SET_CALENDARS";
    calendars: ICEventService.Calendar[];
  }
  | {
    type: "SET_CALENDAR";
    calendar: ICEventService.Calendar;
  }
  | {
    type: "SET_BALANCE";
    balance: number;
  };



const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "SET_AGENT":
      const agent = action.agent || defaultAgent;
      return {
        ...state,
        ...createActors(agent),
        agent,
        isAuthed: !!action.isAuthed,
      };
    case "SET_PRINCIPAL":
      return {
        ...state,
        principal: action.principal,
      };
    case "SET_LOGIN_MODAL":
      return {
        ...state,
        showLoginModal: action.open,
      };
    case "SET_MENU":
      return {
        ...state,
        menu: action.name
      };
    case "SET_CALENDARS":
      return {
        ...state,
        calendars: action.calendars
      };
    case "SET_CALENDAR":
      return {
        ...state,
        calendar: action.calendar
      };
    case "SET_BALANCE":
      return {
        ...state,
        balance: action.balance
      };
    default:
      return { ...state };

  }
};

const Context = createContext({
  state: initialState,
  dispatch: (_: Action) => null,
});

const Store = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <Context.Provider value={{ state, dispatch }}>{children}</Context.Provider>
  );
};

export const useGlobalContext = () => {
  const context = useContext(Context);
  if (context === undefined) {
    console.log("context is undefined")
    throw new Error("useGlobalContext must be used within a CountProvider");
  }
  return context;
};

export const useLoginModal = () => {
  const context = useGlobalContext();
  return [
    context.state.showLoginModal,
    (open: boolean) => context.dispatch({ type: "SET_LOGIN_MODAL", open }),
  ] as const;
};

// export const useNotifications = () => {
//   const context = useGlobalContext();
//   return {
//     list: context.state.notifications,
//     remove: (id: string) => context.dispatch({ type: "REMOVE_NOTIFICATION", id }),
//     clear: () => context.dispatch({ type: "REMOVE_ALL_NOTIFICATION" }),
//   };
// };

export const useICEvent = () => {
  const context = useGlobalContext();
  return context.state.icevent;
};

// export const useNFT = () => {
//   const context = useGlobalContext();
//   return context.state.nft;
// }

// export const useICET = () => {
//   const context = useGlobalContext();
//   return context.state.icet;
// }
// export const useStorage = () => {
//   const context = useGlobalContext();
//   return context.state.storage;
// }
// export const useRAM = () => {
//   const context = useGlobalContext();
//   return context.state.ram;
// }
// export const useLedger = () => {
//   const context = useGlobalContext();
//   return context.state.ledger;
// }
// export const useEscrow = () => {
//   const context = useGlobalContext();
//   return context.state.escrow;
// }


// export const useMenu = () => {
//   const { dispatch, state } = useGlobalContext();
//   return {
//     menu: state.menu,
//     setMenu: (name: string) => {
//       dispatch({
//         type: "SET_MENU",
//         name
//       });
//     }
//   }
// }

// export const useCalendars = () => {
//   const { dispatch, state } = useGlobalContext();
//   return {
//     calendars: state.calendars,
//     setCalendars: (calendars: ICEventService.Calendar[]) => {
//       dispatch({
//         type: "SET_CALENDARS",
//         calendars
//       });
//     }
//   };
// };
// export const useBalance = () => {
//   const { dispatch, state } = useGlobalContext();
//   return {
//     balance: state.balance,
//     setBalance: (balance: number) => {
//       dispatch({
//         type: "SET_BALANCE",
//         balance
//       });
//     }
//   };
// };
// export const useCalendar = () => {
//   const { dispatch, state } = useGlobalContext();
//   return {
//     calendar: state.calendar,
//     setCalendar: (calendar: ICEventService.Calendar) => {
//       dispatch({
//         type: "SET_CALENDAR",
//         calendar
//       });
//     }
//   };
// };
// export const useSetAgent = () => {
//   const { dispatch } = useGlobalContext();

//   return async ({
//     agent,
//     isAuthed,
//   }: {
//     agent: HttpAgent;
//     isAuthed?: boolean;
//   }) => {
//     dispatch({ type: "SET_AGENT", agent, isAuthed });

//     if (isAuthed) {
//       const principal = await agent.getPrincipal();
//       console.log("authed", principal.toText());

//       dispatch({
//         type: "SET_PRINCIPAL",
//         principal,
//       });
//     } else {
//       dispatch({ type: "SET_PRINCIPAL", principal: null });
//       console.log("not authed");
//     }
//   };
// };

export default Store;
