export interface Country {
  name: string;
  official_name: string;
  topLevelDomain: [string];
  alpha2Code: string;
  alpha3Code: string;
  cioc: string;
  numericCode: string;
  callingCode: string;
  capital: string;
  altSpellings: [string, string];
  region: string;
  subregion: string;
  population: number;
  latLng: {
    country: [number, number];
    capital: [number, number];
  };
  demonyms: {
    eng: {
      f: string;
      m: string;
    };
    fra: {
      f: string;
      m: string;
    };
  };
  area: number;
  gini: string;
  timezones: [string];
  borders: [string, string, string, string, string, string];
  nativeNames: {
    prs: {
      official: string;
      common: string;
    };
    pus: {
      official: string;
      common: string;
    };
    tuk: {
      official: string;
      common: string;
    };
  };
  currencies: {
    AFN: {
      name: string;
      symbol: string;
    };
  };
  languages: {
    prs: string;
    pus: string;
    tuk: string;
  };
  translations: {
    ara: string;
    ces: string;
    cym: string;
    deu: string;
    est: string;
    fin: string;
    fra: string;
    hrv: string;
    hun: string;
    ita: string;
    jpn: string;
    kor: string;
    nld: string;
    per: string;
    pol: string;
    por: string;
    rus: string;
    slk: string;
    spa: string;
    swe: string;
    urd: string;
    zho: string;
  };
  flag: {
    small: string;
    medium: string;
    large: string;
  };
  regionalBlocs: [
    {
      acronym: string;
      name: string;
    }
  ];
}
