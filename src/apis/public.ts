import { fetch } from '@/utils';
import { OnePieceUrl } from './common';

export const fetchOnePiece = () => {
  return fetch<string, {}>(OnePieceUrl);
};
