import { useState } from "react";
import "./App.css";
import Modal from "./custom-components/Modal";
import PostList from "./custom-components/PostList";

function App() {
  return (
    <div className="w-[100vw] min-h-[100vh] py-[100px] bg-gradient-to-r from-violet-600 to-indigo-600">
      <div className="flex flex-col justify-center items-center text-center pt-12">
        <h1 className="text-slate-100 font-black text-2xl">
          Announcement Board App
        </h1>
        <p className="w-1/2 text-slate-100 mt-2">
          Ahoy! Welcome to the community announcement board app. We can't wait
          to hear your announcements. Please be considerate of others and do not
          post any profanity, vulgur, offensive,...etc
        </p>
      </div>

      <PostList />
    </div>
  );
}

export default App;
