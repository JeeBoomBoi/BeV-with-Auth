export interface Poll extends PollForm{
  id: number, // some random id, ex 11
  results: number[], // result for an option
  voted: boolean,
}

export interface PollForm {
  question: string,
  thumbnail: string,
  options: string[],
}

export interface PollVote {
  id: number,
  vote: number,
}

export interface Voter {
  id: string,
  voted: number[];
}
