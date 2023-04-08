import { faker } from '@faker-js/faker/locale/ru';
import { sample } from 'lodash';

const users = [...Array(3)].map((_, index) => ({
    id: faker.datatype.uuid(),
    role: sample([
      'Администратор',
      'Исполнитель',
      'Инициатор',
    ]),
    col: sample([
      '1',
      '2',
      '3',
      '4',
      '5',
      '6',
    ]),
  }));
  
  export default users;
  