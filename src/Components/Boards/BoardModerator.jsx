import React, { useEffect, useState } from "react";
import UserService from "../../Services/UserService";
import EventBus from "../../Common/EventBus";

 function BoardModerator() {
  const [content, setContent] = useState("");

  useEffect(() => {
    UserService().getModeratorBoard().then(
      (response) => {
        setContent(response.data);
      },
      (error) => {
        setContent(
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
            error.message ||
            error.toString()
        );

        if (error.response && error.response.status === 401) {
          EventBus().dispatch("logout");
        }
      }
    );
  }, []);

  return (
    <div className="container">
      <header className="jumbotron">
        <h3>{content}</h3>
      </header>
    </div>
  );
}
export default BoardModerator;