import kickstartReact from './assets/sessions/kickstart-react.jpg';
import debugCode from './assets/sessions/debug-code.jpg';
import blueprintComponent from './assets/sessions/blueprint-component.jpg';
import stateMgmtFlow from './assets/sessions/state-mgmt-flow.jpg';
import hooks from './assets/sessions/hooks.jpg';
import styling from './assets/sessions/styling.jpg';
import dataFetching from './assets/sessions/data-fetching.jpg';
import reactTs from './assets/sessions/react-ts.jpg';
import performance from './assets/sessions/performance.jpg';
import dataStore from './assets/sessions/data-store.jpg';

export const SESSIONS = [
  {
    id: 'sess01',
    title: 'Kickstart with React: Personal Intro',
    summary: 'Tailored guidance for total beginners in React.',
    description:
      "Starting with React can be daunting.",
    duration: 1,
    date: '2023-11-01',
    image: kickstartReact,
  },
  {
    id: 'sess02',
    title: 'Debugging Your React Code',
    summary: "Stuck with a React bug? Let's squash it together.",
    description:
      "Every developer, regardless of experience, encounters bugs. Let's simulate them and solve them together in real time.",
    duration: 1.5,
    date: '2023-11-03',
    image: debugCode,
  },
  {
    id: 'sess03',
    title: 'React Component Best Practices',
    summary: 'Optimize and refactor your components.',
    description:
      "Bring your existing components and let's refactor them.",
    duration: 1.5,
    date: '2023-11-07',
    image: blueprintComponent,
  },
  {
    id: 'sess04',
    title: 'Effective State Management Tactics',
    summary: 'Strategies to manage state efficiently.',
    description:
      "Discuss your app's state challenges.",
    duration: 2,
    date: '2023-11-09',
    image: stateMgmtFlow,
  },
  {
    id: 'sess05',
    title: 'Custom Hooks Creation',
    summary: 'Craft your custom hooks.',
    description:
      "Explore the power of custom hooks.",
    duration: 1.5,
    date: '2023-11-12',
    image: hooks,
  },
  {
    id: 'sess06',
    title: 'Styling Strategies in React',
    summary: 'Discuss and implement styling solutions.',
    description:
      'From CSS modules to styled-components, discuss the pros and cons of different styling approaches.',
    duration: 2,
    date: '2023-11-15',
    image: styling,
  },
  {
    id: 'sess07',
    title: 'API Integration and Data Fetching',
    summary: 'Fetch, display, and handle data efficiently.',
    description:
      'Walk through integrating APIs, handling asynchronous operations, error handling, and setting up data fetching patterns in your app.',
    duration: 2,
    date: '2023-11-17',
    image: dataFetching,
  },
  {
    id: 'sess08',
    title: 'React with TypeScript: Type Your Code',
    summary: 'Strengthen your code with TypeScript.',
    description:
      'See the benefits of integrating TypeScript into your React projects firsthand. Get guidance on type-checking your components and defining props.',
    duration: 1.5,
    date: '2023-11-20',
    image: reactTs,
  },
  {
    id: 'sess09',
    title: 'Performance Tuning Your React App',
    summary: 'Optimizations to make your app blazing fast.',
    description:
      "Audit your React app's performance.",
    duration: 2,
    date: '2023-11-23',
    image: performance,
  },
  {
    id: 'sess10',
    title: 'Deep Dive into Redux and Middleware',
    summary: 'Master global state and async actions.',
    description:
      'An in-depth review of your Redux setup.',
    duration: 2,
    date: '2023-11-27',
    image: dataStore,
  },
];