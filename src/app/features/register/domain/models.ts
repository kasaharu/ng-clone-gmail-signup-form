export type Gender = 'man' | 'woman' | 'other';

export interface BasicInformation {
  name: {
    firstName: string;
    familyName: string;
  };
  gender: Gender | null;
  birthday: {
    year: number | null;
    month: number | null;
    day: number | null;
  };
  emailAdress: string;
  password: string;
  passwordConfirmation: string;
}

export interface Address {
  zipCode: number | null; // 郵便番号
  prefecture: string; // 都道府県
  municipality: string; // 市区町村
  street: string; // 番地
  room: string; // 建物
}
