import {Muscle} from './muscle';

export interface MuscularGroup {
  id: number;
  name_fr: string;
  name_en: string;
  media: string;
  muscles: Muscle[];
}
