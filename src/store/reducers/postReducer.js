const initState = {
  posts: [
    { id: '1', title: 'my first title', content: "My first paragraph isn't that long" },
    {
      id: '2',
      title: 'Pepito',
      content: 'meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow ',
    },
    { id: '3', title: 'mY tHiRd TiTlE', content: 'anh ouais' },
    { id: '4', title: 'penis', content: 'zizi' },
  ],
};

const postReducer = (state = initState, action) => {
  switch (action.type) {
    case 'CREATE_POST':
      console.log('created post', action.post);
      return state;
    case 'CREATE_POST_ERROR':
      console.log('post error', action.err);
      return state;
    default:
      return state;
  }
};

export default postReducer;
