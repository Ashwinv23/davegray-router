import { useState, useEffect } from "react";
import Header from "./Header";
import Nav from "./Nav";
import Footer from "./Footer";
import About from "./About";
import Home from "./Home";
import NewPost from "./NewPost";
import EditPost from "./EditPost";
import PostPage from "./PostPage";
import Missing from "./Missing";
import { DataProvider } from "./context/DataContext";
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <DataProvider>
      <div className="App">
        <Header title="React JS Blog" />
        <Nav />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/post">
            <NewPost
              postTitle={postTitle}
              setPostTitle={setPostTitle}
              postBody={postBody}
              setPostBody={setPostBody}
              handleSubmit={handleSubmit}
            />
          </Route>
          <Route path="/edit/:id">
            <EditPost
              posts={posts}
              editTitle={editTitle}
              setEditTitle={setEditTitle}
              editBody={editBody}
              setEditBody={setEditBody}
              handleEdit={handleEdit}
            />
          </Route>
          <Route path="/post/:id">
            <PostPage posts={posts} handleDelete={handleDelete} />
          </Route>
          <Route path="/about" component={About} />
          <Route path="*" component={Missing} />
        </Switch>
        <Footer />
      </div>
    </DataProvider>
  );
}

export default App;
