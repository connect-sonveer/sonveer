import uuid from 'uuid/v1';
import product1 from '../../../../assets/admin/images/products/product_1.png';
import product2 from '../../../../assets/admin/images/products/product_2.png';
import product3 from '../../../../assets/admin/images/products/product_3.png';
import product4 from '../../../../assets/admin/images/products/product_4.png';
import product5 from '../../../../assets/admin/images/products/product_5.png';
import product6 from '../../../../assets/admin/images/products/product_6.png';

export default [
  {
    id: uuid(),
    title: 'Dropbox',
    description:
      'Dropbox is a file hosting service that offers cloud storage, file synchronization, a personal cloud.',
    imageUrl: product1,
    totalDownloads: '594',
    updatedAt: '27/03/2019'
  },
  {
    id: uuid(),
    title: 'Medium Corporation',
    description:
      'Medium is an online publishing platform developed by Evan Williams, and launched in August 2012.',
    imageUrl: product2,
    totalDownloads: '625',
    createdAt: '31/03/2019'
  },
  {
    id: uuid(),
    title: 'Slack',
    description:
      'Slack is a cloud-based set of team collaboration tools and services, founded by Stewart Butterfield.',
    imageUrl: product3,
    totalDownloads: '857',
    createdAt: '03/04/2019'
  },
  {
    id: uuid(),
    title: 'Lyft',
    description:
      'Lyft is an on-demand transportation company based in San Francisco, California.',
    imageUrl: product4,
    totalDownloads: '406',
    createdAt: '04/04/2019'
  },
  {
    id: uuid(),
    title: 'GitHub',
    description:
      'GitHub is a web-based hosting service for version control of code using Git.',
    imageUrl: product5,
    totalDownloads: '835',
    createdAt: '04/04/2019'
  },
  {
    id: uuid(),
    title: 'Squarespace',
    description:
      'Squarespace provides software as a service for website building and hosting. Headquartered in NYC.',
    imageUrl: product6,
    totalDownloads: '835',
    createdAt: '04/04/2019'
  }
];
