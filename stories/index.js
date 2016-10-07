import React from 'react';
import { storiesOf, action, linkTo, addDecorator } from '@kadira/storybook';
import Button from './Button';
import Welcome from './Welcome';
import Loading from '../app/components/Loading';
import { withKnobs, text, number } from '@kadira/storybook-addon-knobs';

addDecorator(withKnobs);

storiesOf('Welcome', module)
  .add('to Storybook', () => (
    <Welcome showApp={linkTo('Button')}/>
  ));

storiesOf('Button', module)
  .add('with text', () => (
    <Button onClick={action('clicked')}>Hello Button</Button>
  ))
  .add('with some emoji', () => (
    <Button onClick={action('clicked')}>😀 😎 👍 💯</Button>
  ))
  .add('with customizations', () => (
      <Button onClick={action('clicked')}>{text('Button Text', 'Hello Button')}</Button>
  ));

storiesOf('Loading', module)
    .add('with default text', () => (
        <Loading />
    ))
    .add('with custom text', () => (
        <Loading text='wait'/>
    ))
    .add('with faster speed', () => (
        <Loading speed='100'/>
    ))
    .add('with customizations', () => (
        <Loading text={text('Loading Text', 'Processing')} speed={number('Animation Spped', 200)} />
    ))
