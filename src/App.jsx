import { useState } from 'react';
import Accordion from './components/Accordion';

const process = [
  {
    phase: 'Render Phase',
    text: "When a component's state or props change, React initiates a re-render of the component. During this render phase, React creates a new virtual DOM representation of the component's UI based on its updated state and props.",
  },
  {
    phase: 'Diffing Phase',
    text: (
      <span>
        React then compares the new virtual DOM with the previous one to
        identify the differences. This is where the reconciliation algorithm
        comes into play. React doesn't update the entire DOM but only the parts
        that have changed. It does this by minimizing the number of DOM
        operations required. <br></br> <br></br> <b>Keyed Elements:</b> React
        uses keys, typically provided by developers, to identify elements in a
        list. By comparing keys, React can efficiently determine which elements
        have been added, removed, or moved within a list. <br></br> <br></br>
        <b>Component Identity:</b> React also considers the identity of
        components. If a component remains the same between renders, React can
        optimize by not recreating it in the virtual DOM.
      </span>
    ),
  },
  {
    phase: 'Reconciliation',
    text: 'Once React has identified the differences between the new and previous virtual DOM, it constructs a list of minimal changes to apply to the actual DOM. This list of changes is often referred to as a "diff" or "patch".',
  },
  {
    phase: 'Commit Phase',
    text: 'In the final phase, React applies the list of changes (the "diff") to the actual DOM. This is where the visible updates occur on the screen.',
  },
];

function App() {
  return (
    <div className="container">
      <Accordion data={process} />
    </div>
  );
}

export default App;
