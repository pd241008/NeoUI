import type { Preview } from "@storybook/react";
import "../src/app/globals.css";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      default: 'neo-dark',
      values: [
        { name: 'neo-dark', value: '#000000' },
        { name: 'neo-light', value: '#ffffff' },
      ],
    },
  },
};

export default preview;
