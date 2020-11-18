export interface Outcome {
  eventStage: Stage;

  offerTicketDelayLive: Number;
  offerTicketDelayUpcoming: Number;

  eventTicketDelayLive: Number;
  eventTicketDelayUpcoming: Number;

  sportTicketDelayLive: Number;
  sportTicketDelayUpcoming: Number;
};

export enum Stage {
  UPCOMING = 1,
  LIVE = 2,
}

export interface TicketType {
  offer: string;
  event: string;
  sport: string;
}

export const LIVE: TicketType = {
  offer: 'offerTicketDelayLive',
  event: 'eventTicketDelayLive',
  sport: 'sportTicketDelayLive'
}

export const UPCOMING: TicketType = {
  offer: 'offerTicketDelayUpcoming',
  event: 'eventTicketDelayUpcoming',
  sport: 'sportTicketDelayUpcoming'
}

// The calculate function must 
// - receive type: TicketType
// - receive ticket: Outcome
// - return an array of numbers based on current ticket
export type Calculate = (type: TicketType, ticket: Outcome) => Array<Number>;

export const calculate: Calculate = (type, ticket) => [ 
  ticket[type['offer']], 
  ticket[type['event']], 
  ticket[type['sport']] 
]

// The delayCalculator function must 
// - receive an input of type Outcome Array
// - return an output of type Number
export type DelayCalculator = (input: Outcome[]) => Number;

// Please put your code here
export const delayCalculator: DelayCalculator = input => input.map( ticket => {

  switch (Stage[ticket.eventStage]) {

    case 'UPCOMING':
      return calculate(UPCOMING, ticket);

    case 'LIVE':
      return calculate(LIVE, ticket);

    default:
      return calculate(UPCOMING, ticket);
  }
})
.map( result => result.sort().reverse()[0]) // Using sort().reverse() for performance reasons
.sort()
.reverse()[0];