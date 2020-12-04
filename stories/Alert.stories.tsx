import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Alert, Props } from '../src/components/alert';
import { Icon } from '../src/components/icon';

const meta: Meta = {
  title: 'Alert',
  component: Alert,
  parameters: {
    controls: { expanded: true }
  }
};

export default meta;

const Template: Story<Props> = args => <Alert {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  children: <p>Hello</p>,
  variant: 'primary',
  duration: 30000,
  isOpen: true,
  isClosable: true,
  icon: <Icon name="gear" />
};

export const Success = Template.bind({});

Success.args = {
  children: <p>Success</p>,
  variant: 'success',
  duration: 30000,
  isOpen: true,
  isClosable: true,
  icon: <Icon name="check2-circle" />
};

export const Info = Template.bind({});

Info.args = {
  children: <p>Info</p>,
  variant: 'info',
  duration: 30000,
  isOpen: true,
  isClosable: true,
  icon: <Icon name="gear" />
};

export const Warning = Template.bind({});

Warning.args = {
  children: <p>Warning</p>,
  variant: 'warning',
  duration: 30000,
  isOpen: true,
  isClosable: true,
  icon: <Icon name="exclamation-triangle" />
};

export const Danger = Template.bind({});

Danger.args = {
  children: <p>Danger</p>,
  variant: 'danger',
  duration: 30000,
  isOpen: true,
  isClosable: true,
  icon: <Icon name="exclamation-octagon" />
};
