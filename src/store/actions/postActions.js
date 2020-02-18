export const createPost = post => {
  return (dispacth, getState, { getFirebase, getFirestore }) => {
    //make async call to db
    const firestore = getFirestore();
    firestore
      .collection('posts')
      .add({
        ...post,
        author: 'gouze',
        authorId: 7,
        createdAt: new Date(),
      })
      .then(() => {
        dispacth({ type: 'CREATE_POST', post });
      })
      .catch(err => {
        dispacth({ type: 'CREATE_POST_ERROR', err });
      });
  };
};
