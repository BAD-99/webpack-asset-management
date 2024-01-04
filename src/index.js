import _ from 'lodash';
import myName from './myName';
import './style.css';
import Icon from './eye.svg';


function component() {
  const element = document.createElement('div');

  element.textContent = myName('Brandon');
  element.classList.add('hello');

  const myIcon = new Image();
  myIcon.src = Icon;

  element.append(myIcon);

  return element;
}

document.body.appendChild(component());