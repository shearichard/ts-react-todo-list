import { useState } from 'react';
import { Button, TextInput } from "grommet";

interface Props {
    addTodo: AddTodo;
}

/*
 1. Maintain internal `text` state using `useState`. This will allow us to maintain the state of the new todo item’s text.
 2. Bind `text` to the `input` value.
 3. Set text using `setText` in the input’s `onChange` handler. `e.target.value` contains the current value.
 4. Add an `onClick` handler to the submit button to submit the typed text.
 5. Make sure to cancel the default event of actually submitting the form.
 6. Add the todo using `addTodo` and passing it `text`.
 7. Clearing our form by setting `text` to an empty string.
*/

export const AddTodoForm: React.FC<Props> = ({ addTodo }) => {

  const [text, setText] = useState('');

  return (
    <form>
    <TextInput
      placeholder="type here"
      value={text}
        onChange={e => {
            setText(e.target.value);
        }}
    />
      <Button 
        gap="medium"
        label="Add Todo"
        primary
        type="submit"
        onClick={e => {
          e.preventDefault();
          addTodo(text);
          setText('');
        }}
      />
    </form>
  );
};
