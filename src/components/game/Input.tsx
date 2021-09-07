import React, { useState } from 'react';

const Input: React.FC = () => {
  const [showNext, setShowNext] = useState(false);

  return (
    <div>
      {showNext ? (
        <div>this will be the next page for game</div>
      ) : (
        <section className='content-container' id='input'>
          This is input page
        </section>
      )}
    </div>
  );
};
export default Input;
