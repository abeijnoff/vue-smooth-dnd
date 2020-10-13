import { constants } from 'smooth-dnd';
import { getTagProps, validateTagProp } from './utils';
import { h } from 'vue'

const wrapChild = (h, ctx) => {
  const tagProps = getTagProps(ctx, constants.wrapperClass);
  return h(
    tagProps.value,
    Object.assign({}, tagProps.props),
    ctx.$slots.default
  );
};

export default {
  name: 'Draggable',
  props: {
    tag: {
      validator: validateTagProp,
      default: 'div'
    }
  },
  render: function () {
    return wrapChild(h, this);
  }
};
