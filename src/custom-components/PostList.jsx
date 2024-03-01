import postcss from "postcss";
import { useState, useEffect } from "react";
import Modal from "./Modal";

const PostList = () => {
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("");
  const [postList, setPostList] = useState([]);
  const [errorState, setErrorState] = useState(false);

  const handleMessageBody = (event) => {
    setBody(event.target.value);
  };

  const handleMessageAuthor = (event) => {
    setAuthor(event.target.value);
  };

  // const handleAddingAnnouncement = (event, author, body) => {
  //   event.preventDefault();
  //   setPostList((prev) => {
  //     const myList = [...prev];
  //     myList.push({
  //       id: Math.floor(Math.random() * 10000),
  //       author: author,
  //       body: body,
  //     });
  //     console.log
  //     return myList;
  //   });
  // };

  const handleAddingAnnouncement = (event) => {
    event.preventDefault();
    if (author === "" || body === "") {
      setErrorState(true);
      return;
    }
    setPostList((postList) => [
      ...postList,
      { id: Math.floor(Math.random() * 10000), author: author, body: body },
    ]);
    setAuthor("");
    setBody("");
  };

  return (
    <>
      <div className="text-center mt-12">
        <Modal
          author={author}
          body={body}
          changeMessageAuthor={handleMessageAuthor}
          changeMessageBody={handleMessageBody}
          addAnnouncement={handleAddingAnnouncement}
          error={errorState}
        />
      </div>
      <br />
      <div className="w-[100vw] flex flex-wrap gap-2 justify-center">
        {postList.length > 0 &&
          postList.map((e) => (
            <div
              style={{
                border: "1px solid white",
                borderRadius: "24px",
                padding: "20px 40px",
                width: "30%",
              }}
              key={e.id}
            >
              Author: {e.author}
              <br />
              Announcement: {e.body}
            </div>
          ))}
        {postList.length === 0 && (
          <div className="text-center w-full">
            <center>
              <h1 className="text-4xl text-white mt-12">...Loading</h1>
            </center>
          </div>
        )}
      </div>
    </>
  );
};

export default PostList;
