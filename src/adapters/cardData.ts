import { get } from '.';

const FIELDS =
  '&fields=brandName,brandLogoDarkSvg,bankNameLocal,bankLogoBigDarkSvg';

interface CardDataResponse {
  status: number;
  brandName: string;
  brandLogoDarkSvg: string;
  bankNameLocal: string;
  bankLogoBigDarkSvg: string;
}

export const cardData = (number: string): Promise<CardDataResponse> => {
  return get(number, FIELDS);
};
