import "./index.css";
import reportWebVitals from './reportWebVitals';
import store from "./redux/state";
import ReactDOM from "react-dom/client";
import React from "react";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById('root'));
let rerenderEntireTree = (state) => {
    root.render(
        <React.StrictMode>
            <App state={store.getState()}
                 addPost={store.addPost}
                 updateNewPostText={store.updateNewPostText}
                 addMessage={store.addMessage}
                 updateNewMessageText={store.updateNewMessageText}/>
        </React.StrictMode>
    );
};

rerenderEntireTree(store.getState());
store.subscribe(rerenderEntireTree);
reportWebVitals();
