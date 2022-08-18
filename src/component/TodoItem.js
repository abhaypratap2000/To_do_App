import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { completed, deletetodo, updatetodo } from "../redux/Actions/action";
import { AiFillEdit } from "react-icons/ai";
import { IoCheckmarkDoneSharp, IoClose } from "react-icons/io5";

function ToDoitems(props) {
  const inputref = useRef(true);

  const dispatch = useDispatch();

  const update = (id, value, e) => {
    if (e.which === 13) {
      dispatch(updatetodo(id, value));
      inputref.current.disabled = true;
    }
  };

  const changefocus = () => {
    inputref.current.disabled = false;
    inputref.current.focus();
  };

  const handeldelete = (id) => {
    dispatch(deletetodo(id));
  };

  const handelcomplete = (id) => {
    dispatch(completed(id));
  };
  return (
    <li key={props.item.id} className="card">
      {" "}
      <textarea
        ref={inputref}
        disabled={inputref}
        defaultValue={props.item.todo}
        onKeyPress={(e) => update(props.item.id, inputref.current.value, e)}
      />
      <div className="btns">
        <button type="submit" onClick={changefocus}>
          {" "}
          <AiFillEdit />
        </button>
        <button type="submit" onClick={() => handelcomplete(props.item.id)}>
          <IoCheckmarkDoneSharp className="green" />
        </button>
        <button type="submit" onClick={() => handeldelete(props.item.id)}>
          <IoClose className="close" />
        </button>
      </div>
      {props.item.completed && <span className="completed">done</span>}
    </li>
  );
}

export default ToDoitems;
