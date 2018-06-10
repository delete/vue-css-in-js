import Vue, { CreateElement, VNode, VueConstructor, ComponentOptions, FunctionalComponentOptions } from 'vue'
import { style } from 'typestyle'
import { NestedCSSProperties } from 'typestyle/lib/types';

/**
 * Handy list of valid HTML tags
 *
 */
export enum domElements {
  'a',
  'abbr',
  'address',
  'area',
  'article',
  'aside',
  'audio',
  'b',
  'base',
  'bdi',
  'bdo',
  'big',
  'blockquote',
  'body',
  'br',
  'button',
  'canvas',
  'caption',
  'cite',
  'code',
  'col',
  'colgroup',
  'data',
  'datalist',
  'dd',
  'del',
  'details',
  'dfn',
  'dialog',
  'div',
  'dl',
  'dt',
  'em',
  'embed',
  'fieldset',
  'figcaption',
  'figure',
  'footer',
  'form',
  'h1',
  'h2',
  'h3',
  'h4',
  'h5',
  'h6',
  'head',
  'header',
  'hgroup',
  'hr',
  'html',
  'i',
  'iframe',
  'img',
  'input',
  'ins',
  'kbd',
  'keygen',
  'label',
  'legend',
  'li',
  'link',
  'main',
  'map',
  'mark',
  'menu',
  'menuitem',
  'meta',
  'meter',
  'nav',
  'noscript',
  'object',
  'ol',
  'optgroup',
  'option',
  'output',
  'p',
  'param',
  'picture',
  'pre',
  'progress',
  'q',
  'rp',
  'rt',
  'ruby',
  's',
  'samp',
  'script',
  'section',
  'select',
  'small',
  'source',
  'span',
  'strong',
  'style',
  'sub',
  'summary',
  'sup',
  'table',
  'tbody',
  'td',
  'textarea',
  'tfoot',
  'th',
  'thead',
  'time',
  'title',
  'tr',
  'track',
  'u',
  'ul',
  'var',
  'video',
  'wbr',

  // SVG
  'circle',
  'clipPath',
  'defs',
  'ellipse',
  'g',
  'image',
  'line',
  'linearGradient',
  'mask',
  'path',
  'pattern',
  'polygon',
  'polyline',
  'radialGradient',
  'rect',
  'stop',
  'svg',
  'text',
  'tspan'
}


const createStyledComponent = (component: any) => (styles: NestedCSSProperties) => {
  const isDomEl = typeof component === 'string';
  const origialProps = isDomEl ? {} : component.props;

  return Vue.extend({
    functional: true,
    render(h: CreateElement, { data, props, children }: Record<string, any>): VNode {
      return h(component,
        {
          props: { ...origialProps, ...props },
          ...data,
          class: style(styles)
        },
        children
      )
    }
  })
}

const styleIt = (vueComponent: any, styles: NestedCSSProperties) =>
  createStyledComponent(vueComponent)(styles);

  
const styled = Object.keys(domElements).reduce((obj: any, current: string) => {
  obj[current] = createStyledComponent(current);
  return obj;
}, {});

export default styled;
export {
  style,
  styleIt
};
