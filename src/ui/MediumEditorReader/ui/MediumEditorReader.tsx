import { type FC } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { classNames } from "../../../helpers/classNames";

interface MediumEditorReaderProps {
  text: string;
  className?: string;
  column?: number;
}
export const MediumEditorReader: FC<MediumEditorReaderProps> = ({
  text,
  className,
  column = 1,
}) => {
  return (
    <div className={classNames("", {}, [className])}>
      <ReactQuill
        value={text}
        readOnly
        modules={{ toolbar: null }}
        className={classNames("MediumText", {}, [`column-${column}`])}
      />
    </div>
  );
};
