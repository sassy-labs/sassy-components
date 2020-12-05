import React from 'react';
import { Meta } from '@storybook/react';
import { Alert, Props } from '../src/components/alert/Alert';

const meta: Meta = {
  title: 'Alert',
  component: Alert,
  argTypes: {
    isOpen: {
      control: {
        type: 'boolean',
      },
    },
    isClosable: {
      control: {
        type: 'boolean',
      },
    },
    variant: {
      control: {
        type: 'string',
        options: ['primary', 'success', 'info', 'warning', 'danger', 'gray'],
      },
    },
    duration: {
      control: {
        type: 'number',
      },
    },
  },
};

export default meta;

export const Primary: React.FC<Props> = () => (
  <Alert variant="primary">
    <Alert.Icon name="info-circle" />
    <Alert.Message>
      <p>Primary</p>
    </Alert.Message>
  </Alert>
);

export const Success: React.FC<Props> = () => (
  <Alert variant="success">
    <Alert.Icon name="check2-circle" />
    <Alert.Message>
      <p>Success</p>
    </Alert.Message>
  </Alert>
);

export const Info: React.FC<Props> = () => (
  <Alert variant="info">
    <Alert.Icon name="info-circle" />
    <Alert.Message>
      <p>Info</p>
    </Alert.Message>
  </Alert>
);

export const Warning: React.FC<Props> = () => (
  <Alert variant="warning">
    <Alert.Icon name="exclamation-triangle" />
    <Alert.Message>
      <p>Warning</p>
    </Alert.Message>
  </Alert>
);

export const Danger: React.FC<Props> = () => (
  <Alert variant="danger">
    <Alert.Icon name="exclamation-octagon" />
    <Alert.Message>
      <p>Danger</p>
    </Alert.Message>
  </Alert>
);
