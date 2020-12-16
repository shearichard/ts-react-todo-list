import React, { useState } from 'react';
import { BoxProps, Grid, Grommet, grommet, Box, Heading } from "grommet";
import { TodoList } from './TodoList';
import { AddTodoForm } from './AddTodoForm';


const AppBar: React.FC<BoxProps> = (props) => (
  <Box
    tag='header'
    direction='row'
    align='center'
    justify='between'
    background='neutral-3'
    pad={{ left: 'medium', right: 'small', vertical: 'small' }}
    elevation='medium'
    style={{ zIndex: 1 }}
    {...props}
  />
);

const initialTodos: Todo[] = [
  {
    text: 'Weed the garden',
    complete: false,
  },
  {
    text: 'Walk the dog',
    complete: false,
  },
  {
    text: 'Write app',
    complete: false,
  },
];


function App() {
 const [todos, setTodos] = useState(initialTodos);

 const toggleTodo = (selectedTodo: Todo) => {
    const newTodos = todos.map(todo => {
      if (todo === selectedTodo) {
        return {
          ...todo,
          complete: !todo.complete,
        };
      }
      return todo;
    });
    setTodos(newTodos);
  };

 const addTodo: AddTodo = (text: string) => {
    const newTodo = { text, complete: false };
    setTodos([...todos, newTodo]);
  };

 return( 
    <Grommet theme={grommet} full>
      <Box fill>
        <AppBar>
            <Heading level='3' margin='none'>Grommet / Typescript Experiments</Heading>
        </AppBar>
        <Grid
          border="all"
          rows={['xsmall', 'flex', 'xsmall', 'xsmall']}
          columns={['xsmall', 'flex', 'xsmall']}
          gap="small"
          areas={[
            { name: 'list', start: [1, 1], end: [1, 1] },
            { name: 'dataentry', start: [1, 2], end: [1, 2] },
          ]}
        >
          <Box 
            direction="row"
            pad="medium"
            border={{ color: 'light-6', size: 'small' }}
            align='center'
            justify='center'
            gridArea="list" 
            background="light-5" >
            <TodoList todos={todos} toggleTodo={toggleTodo} />
          </Box>
          <Box 
            direction="row"
            pad="medium"
            border={{ color: 'light-6', size: 'small' }}
            align='center'
            justify='center'
            gridArea="dataentry" 
            background="light-2" >
            <AddTodoForm addTodo={addTodo} />
          </Box>
        </Grid>
    </Box>
    </Grommet>
    );
}

export default App;
