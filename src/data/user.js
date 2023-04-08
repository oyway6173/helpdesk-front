import { faker } from '@faker-js/faker/locale/ru';
import { sample } from 'lodash';

// ----------------------------------------------------------------------

const users = [...Array(24)].map((_, index) => ({
  id: faker.datatype.uuid(),
  avatarUrl: `../../../assets/images/avatars/avatar_${index + 1}.jpg`,
  name: faker.name.fullName(),
  dep: sample([
    '1-я линия СД',
    '2-я линия',
    'ESupport',
    'DevOps',
    'HD',
    'RBO_Support',
  ]),
  isVerified: faker.datatype.boolean(),
  status: sample(['Активирован', 'Заблокирован', 'Ожидает активации']),
  role: sample([
    'Инженер 1-й линии СД',
    'Младший DevOPS Инженер',
    'Инженер 2-й линии поддержки',
    'Инженер сопровождения АРМ',
    'Старший инженер',
  ]),
  img: sample([
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
  ]),
}));

export default users;
