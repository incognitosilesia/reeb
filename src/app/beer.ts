export interface Beer {
  id: string;
  name: string;
  tagline: string;
  first_brewed: number;
  abv: number;
  ibu: number;
  ebc: number;
  description: string;
  brewers_tips: string;
  image_url: string;
  food_pairing: string[];
}

// export class Beer {
//   constructor(
//     public id: string,
//     public name: string,
//     public tagline: string,
//     public first_brewed: number,
//     public abv: number,
//     public ibu: number,
//     public ebc: number,
//     public description: string,
//     public brewers_tips: string,
//     public image_url: string,
//     public food_pairing: string[]
//   ) {}
// }
