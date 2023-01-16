import { useEffect } from "react";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "./_redux/Reducer/root.reducer";
import { fetchPostsRequest } from "./_redux/Action/postActions";

function App() {
  const dispatch = useDispatch();
  const { pending, posts, error } = useSelector(
    (state: RootState) => state.posts
  );

  // function* generator(e) {
  //   yield e + 10;
  //   yield e + 25;
  //   yield e + 33;
  // }
  // var generate = generator(27);

  useEffect(() => {
    dispatch(fetchPostsRequest());
  }, []);

  return (
    <div>
      {pending ? (
        <div>Loading...</div>
      ) : error ? (
        <div>Error</div>
      ) : (
        posts?.map((todo, index) => (
          <div key={todo.id}>
            {++index}. {todo.title}
          </div>
        ))
      )}
    </div>
  );
}

export default App;
