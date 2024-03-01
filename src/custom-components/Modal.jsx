import { useState } from "react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

const Modal = (props) => {
  const [author, setAuthor] = useState("");
  const [body, setBody] = useState("");

  return (
    <>
      <AlertDialog>
        <AlertDialogTrigger
          style={{
            border: "1px solid black",
            padding: "10px 40px",
            borderRadius: "4px",
          }}
        >
          Create An Announcement
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Publish A New Announcement:</AlertDialogTitle>

            <input
              type="text"
              placeholder="Your Name"
              onChange={props.changeMessageAuthor}
            />
            <textarea
              type="text"
              rows={5}
              placeholder="Type your announcement here ..."
              onChange={props.changeMessageBody}
            />

            <AlertDialogDescription>
              <span className="text-emerald-600 text-xl font-black">
                Review Your Announcement:
              </span>
              <br />
              <span className="font-black">
                <br />
                Author:
                <br />
                {author}
                {props.author}
              </span>
              <br />
              <span className="font-black">Announcement:</span>
              <br /> {props.body}
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogAction onClick={props.addAnnouncement}>
              Publish
            </AlertDialogAction>
            <AlertDialogCancel>Close</AlertDialogCancel>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
};

export default Modal;
