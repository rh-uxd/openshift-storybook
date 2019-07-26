import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import ReactMarkdown from 'react-markdown';
import '@patternfly/patternfly/patternfly-base.css';
import './index.css';

import { Title, Button } from '@patternfly/react-core';
import ButtonDesign from '../design/button.md';

storiesOf('Welcome', module).add('to Storybook', () => (
  <div className="pf-c-content content">
    <Title size="2xl">Hello, designer!</Title>
    <p>This storybook is here to help you write stories in Markdown of how your products should look and feel.</p>
    <p>You can even demo your designs by using PatternFly <a href="pf4.pattenfly.org">HTML</a> or <a href="patternfly-react-surge.sh">React</a> components too!</p>
  </div>
))

storiesOf('Button', module)
  .add('design', () => <div className="pf-c-content content"><ReactMarkdown source={ButtonDesign} /></div>)
  .add('React example', () => (
    <div className="pf-c-content content">
      <p>Here's an example of a Form Action button. We should just use PF4-React's button because it's a quick easy win!</p>
      <Button onClick={action('clicked')}>Hello Button</Button>
    </div>
  ))
