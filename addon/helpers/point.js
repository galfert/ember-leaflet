import { helper } from '@ember/component/helper';
const isFastBoot = typeof FastBoot !== 'undefined';
/* global L */

export const point = isFastBoot
  ? function() {}
  : function point(params) {
      return L.point(...params);
    };

export default helper(point);
