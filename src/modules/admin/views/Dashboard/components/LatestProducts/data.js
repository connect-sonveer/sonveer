import uuid from 'uuid/v1';
import moment from 'moment';
import product1 from '../../../../../../assets/admin/images/products/product_1.png';
import product2 from '../../../../../../assets/admin/images/products/product_2.png';
import product3 from '../../../../../../assets/admin/images/products/product_3.png';
import product4 from '../../../../../../assets/admin/images/products/product_4.png';
import product5 from '../../../../../../assets/admin/images/products/product_5.png';

export default [
  {
    id: uuid(),
    name: 'Dropbox',
    imageUrl: product1,
    updatedAt: moment().subtract(2, 'hours')
  },
  {
    id: uuid(),
    name: 'Medium Corporation',
    imageUrl: product2,
    updatedAt: moment().subtract(2, 'hours')
  },
  {
    id: uuid(),
    name: 'Slack',
    imageUrl: product3,
    updatedAt: moment().subtract(3, 'hours')
  },
  {
    id: uuid(),
    name: 'Lyft',
    imageUrl: product4,
    updatedAt: moment().subtract(5, 'hours')
  },
  {
    id: uuid(),
    name: 'GitHub',
    imageUrl: product5,
    updatedAt: moment().subtract(9, 'hours')
  }
];
