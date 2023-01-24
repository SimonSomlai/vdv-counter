import React, { useState } from 'react';
import { AmountSelect } from './components/AmountSelect';
import { ContentBlock } from './components/ContentBlock';
import { Price } from './components/Price';

function App() {
  const [amount, setAmount] = useState(1);

  return (
    <ContentBlock title="App">
      <ContentBlock title="AmountSelect">
        <AmountSelect amount={amount} setAmount={setAmount} />
      </ContentBlock>
      <ContentBlock title="Price">
        <Price amount={amount} />
      </ContentBlock>
    </ContentBlock>
  );
}

export default App;
