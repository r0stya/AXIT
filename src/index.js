import 'animate.css';

import './styles/reset-default-styles.scss';
import './styles/iconfont.scss';
import './styles/index.scss';

import BurgerMenu from './scripts/burger-menu';
import Tabs from './scripts/tabs';
import Scroll  from './scripts/scroll'

const burgerMenu = new BurgerMenu();
burgerMenu.init();

const tabs = {
  tab1: [
    'Tabs with soft transitioning effect.',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aeneaneuismod bibendum laoreet. Proin gravida dolor sit amet lacusaccumsan et viverra justo commodo. Proin sodales pulvinartempor. Cum sociis natoque penatibus et magnis dis parturientmontes.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aeneaneuismod bibendum laoreet.',
    'Download',
    'Tab 1',
  ],
  tab2: [
    'Tab 2 Headline',
    'Vide augue no quo. Ex gubergren necessitatibus eos, usu munere partem ei, ne dolores scaevola definitionem qui. Nec dolore nostro id. Ad ius scripta complectitur. Vel graeco lobortis conceptam ex. Ut justo eirmod alienum est, te pri quando quaerendum.',
    '',
    'Tab 2'
  ],
  tab3: [
    'Tab 3 Headline',
    'Nec elit scaevola consetetur in, cu meliore deterruisset duo. Novum iusto disputationi cu mea, nec ad nonumy doctus consequat, fabulas similique pri te. Ei ius suas theophrastus, utinam ridens audire duo ea, no solet menandri nam. ',
    'Call to Action',
    'Tab 3',
  ]
};

Object.keys(tabs).forEach(tab => {
  const tabEx = new Tabs(...tabs[tab]);
  tabEx.init();
});

const scroll = new Scroll();
scroll.init();




