import { Actor, HttpAgent } from "@dfinity/agent";

// Imports and re-exports candid interface
import { idlFactory } from './icevent.did.js';
export { idlFactory } from './icevent.did.js';
// CANISTER_ID is replaced by webpack based on node environment
export const canisterId = "ukvuy-5aaaa-aaaaj-qabva-cai";

/**
 * 
 * @param {string | import("@dfinity/principal").Principal} canisterId Canister ID of Agent
 * @param {{agentOptions?: import("@dfinity/agent").HttpAgentOptions; actorOptions?: import("@dfinity/agent").ActorConfig}} [options]
 * @return {import("@dfinity/agent").ActorSubclass<import("./icevent.did.js")._SERVICE>}
 */
 export const createActor = (canisterId, options) => {
  const agent = new HttpAgent({ ...options?.agentOptions });
  
  // Fetch root key for certificate validation during development
  // if(process.env.NODE_ENV !== "production") {
  //   agent.fetchRootKey().catch(err=>{
  //     console.warn("Unable to fetch root key. Check to ensure that your local replica is running");
  //     console.error(err);
  //   });
  // }

  // Creates an actor with using the candid interface and the HttpAgent
  return Actor.createActor(idlFactory, {
    agent:new HttpAgent({
      host: 'https://identity.ic0.app',
    }),
    canisterId,
    ...options?.actorOptions,
  });
};
  
/**
 * A ready-to-use agent for the icevent canister
 * @type {import("@dfinity/agent").ActorSubclass<import("./icevent.did.js")._SERVICE>}
 */
 export const icevent = createActor(canisterId);
