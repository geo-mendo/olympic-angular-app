export class CountryItem  {
  id!: number
  country!: string
  participations!: Participation[]
}

export type Participation = {
  "id": number,
  "year": number,
  "city": string,
  "medalsCount": number,
  "athleteCount": number
}
