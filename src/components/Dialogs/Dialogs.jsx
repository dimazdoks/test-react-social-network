import React from "react";
import s from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import { Field, reduxForm } from "redux-form";
import { Textarea } from "../common/FormsControls/FormsControl";
import { maxLengthCreator, required } from "../../utils/validators/validator";

function Dialogs(props) {
  let dialogsElements = props.dialogs.map((d, key) => (
    <DialogItem name={d.name} key={key} id={d.id} image={d.image} />
  ));
  let messagesElements = props.messages.map((m, key) => (
    <Message data={m.message} key={key} sender={m.sender} receiver={m.receiver} />
  ));

  let addNewMessage = values => {
    props.addMessage(values.newMessageBody);
  };

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>{dialogsElements}</div>
      <div className={s.messages}>
        <div>{messagesElements}</div>
        <AddMessageReduxForm onSubmit={addNewMessage} />
      </div>
    </div>
  );
}

/* add message froms with redux-from */
const maxLendth300 = maxLengthCreator(300);

const AddMessageForm = props => {
  return (
    <form className={s.newMessage} onSubmit={props.handleSubmit}>
      <div>
        <Field
          component={Textarea}
          validate={[required, maxLendth300]}
          name={"newMessageBody"}
          placeholder="write some text"
        />
      </div>
      <div>
        <button>send</button>
      </div>
    </form>
  );
};

const AddMessageReduxForm = reduxForm({ form: "addMessage" })(AddMessageForm);
export default Dialogs;
