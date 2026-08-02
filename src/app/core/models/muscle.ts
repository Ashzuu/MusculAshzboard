import {MuscularGroup} from './muscular-group';

export interface Muscle {
  id: number;
  name_fr: string;
  name_en: string;
  muscular_group: MuscularGroup;
  media: string;
  description?: string;
}
