import { useState } from 'react';

export default function SloganForm({ setSlogansArray, slogansArray }) {
  // React forms are a pain! 
  // Track the sloganInput form state with a useState hook
  const [slogansInput, setSlogansInput] = useState('');
  function handleSubmit(e) {
    e.preventDefault();

    // This component takes in a prop called setSlogans, which is a function that takes in an array of slogans. 
    // Also, this component also takes in a prop called slogans, which is an arry of strings. //// On submit call the setSlogans state with a new array that is a copy of the old array with the new slogan immutably added to the end 
    setSlogansArray([...slogansArray, slogansInput]);
    // set the sloganInput form state to an empty string to reset the form
    setSlogansInput('');
  }
  function handleSlogansChange(e) {
    setSlogansInput(e.target.value);
  }

  return (
    <section>
      {/* on submit, call the handleSubmit function, defined above */}
      <form onSubmit={handleSubmit}>
        Add a slogan to the list!
        {/* on change, set the sloganInput in state to be the input value */}
        {/* also, weirdly, set the value of this input to the sloganInput tracked in state to make this a 'controlled' form input */}
        <input required value={slogansInput} onChange={handleSlogansChange}/>
        <button>Submit</button>
      </form>
    </section>
  );
}
