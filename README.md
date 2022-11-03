# myhooks

## useStore

```
  import useStore from './store';
  
  const store = { test: 123, abc: 'xyz' }
  const [state, setState] = useStore(store)
  
  useEffect(() => {
    setState({ test: 456 }, i => console.log(i.test));
  }, []);
  
  console.log(state);
  // {
  //     "test": 123,
  //     "abc": "xyz"
  // }
  
  // {
  //   "test": 456,
  //   "abc": "xyz"
  // }
  
  // 456
```
