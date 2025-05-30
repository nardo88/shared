import { useMemo, useRef, useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.bubble.css";
import { classNames } from "../../../helpers/classNames";

export type OptionVariantTypes = keyof typeof optionHash;

interface MediumEditorProps {
  className?: string;
  label?: string;
  errorText?: string | null;
  value: string;
  limit?: number;
  onChange: (val: string) => void;
  disabled?: boolean;
  column?: number;
  required?: boolean;
  options?: OptionVariantTypes[];
}

type Quill = typeof ReactQuill.Quill;

interface ICustomQuill extends Quill {
  container: HTMLDivElement;
}

const optionHash = {
  bold: { value: { bold: true }, level: 1 },
  italic: { value: { italic: true }, level: 1 },
  underline: { value: { underline: true }, level: 1 },
  link: { value: { link: true }, level: 1 },
  strike: { value: { strike: true }, level: 1 },
  header1: { value: { header: 1 }, level: 2 },
  header2: { value: { header: 2 }, level: 2 },
  olList: { value: { list: "ordered" }, level: 3 },
  ulList: { value: { list: "bullet" }, level: 3 },
  color: { value: { color: [] }, level: 4 },
  background: { value: { background: [] }, level: 4 },
  size: { value: { size: ["small", false, "large", "huge"] }, level: 5 },
  scriptSub: { value: { script: "sub" }, level: 6 },
  scriptSuper: { value: { script: "super" }, level: 6 },
  alignNull: { value: { align: null }, level: 7 },
  alignJustify: { value: { align: "justify" }, level: 7 },
  alignCenter: { value: { align: "center" }, level: 7 },
  alignRight: { value: { align: "right" }, level: 7 },
};

type ToolbarType = Array<
  Array<
    Record<string, string | boolean | number | null | Array<string | boolean>>
  >
>;

const defaultToolbarOptions = [
  [
    { bold: true },
    { italic: true },
    { underline: true },
    { link: true },
    { strike: true },
  ],
  [{ header: 1 }, { header: 2 }],
  [{ list: "ordered" }, { list: "bullet" }],
  [{ color: [] }, { background: [] }],
  [{ size: ["small", false, "large", "huge"] }],
  [{ script: "sub" }, { script: "super" }],
  [
    { align: null },
    { align: "justify" },
    { align: "center" },
    { align: "right" },
  ],
];

interface IOptions {
  container: HTMLDivElement | null;
  element: HTMLDivElement | null;
}

const fixPosition = (options: IOptions) => {
  const { container, element } = options;
  if (!container || !element) return;

  const contRect = container.getBoundingClientRect();
  const elementRect = element.getBoundingClientRect();

  if (elementRect.x + elementRect.width > contRect.x + contRect.width) {
    element.style.right = "0px";
    element.style.left = "auto";
  }
  if (elementRect.x < contRect.x) {
    element.style.left = "0px";
    element.style.right = "auto";
  }
};

export const MediumEditor: React.FC<MediumEditorProps> = (props) => {
  const {
    className,
    onChange,
    value,
    errorText,
    label = "",
    limit,
    disabled = false,
    required = false,
    column = 1,
    options,
  } = props;

  const [length, setLength] = useState(0);
  const editor = useRef<ReactQuill>(null);

  const toolbarOptions = useMemo(() => {
    if (!options) return defaultToolbarOptions;
    return Object.keys(optionHash)
      .reduce((acc: ToolbarType, key) => {
        if (options.includes(key as OptionVariantTypes)) {
          const k = key as OptionVariantTypes;
          acc[optionHash[k].level] = [
            ...(acc[optionHash[k].level] || []),
            optionHash[k].value,
          ];
        }

        return acc;
      }, [])
      .filter(Boolean);
  }, []);

  return (
    <div
      className={classNames("mediumDiv", {}, [className, `column-${column}`])}
    >
      <div className="top">
        {label && (
          <span className={classNames("label", { labelError: !!errorText })}>
            {label}
            {required ? " *" : ""}
          </span>
        )}
        {limit && (
          <span className="limit">
            {length}/{limit}
          </span>
        )}
      </div>
      <ReactQuill
        ref={editor}
        value={value}
        theme="bubble"
        className={classNames("editor", { error: !!errorText, disabled })}
        modules={{ toolbar: disabled ? null : toolbarOptions }}
        onChange={(val, _d, _s, e) => {
          if (disabled && editor.current) {
            return editor.current.setEditorContents(
              editor.current.getEditor(),
              value
            );
          }
          if (value === val) return;
          const text = e.getLength();
          if (limit !== undefined && text - 1 > limit && editor.current) {
            return editor.current.setEditorContents(
              editor.current.getEditor(),
              value
            );
          }
          if (limit !== undefined) setLength(text - 1);

          const range = e.getSelection();

          if (!!range?.length && editor.current?.editor) {
            editor.current.setEditorSelection(editor.current.editor, {
              index: 0,
              length: 0,
            });
          }

          onChange(val);
        }}
        onChangeSelection={(range) => {
          if (!editor.current) return;
          // @ts-expect-error в типизации нет container
          const quill: ICustomQuill = editor.current.editor;
          const container = quill.container;
          // Появление toolbar
          if (range && range.length) {
            const element = container.querySelector(
              ".ql-tooltip"
            ) as HTMLDivElement;
            fixPosition({
              element,
              container,
            });
          } else if (!range) {
            // Появление поля для ссылки
            const element = container.querySelector(
              ".ql-editing"
            ) as HTMLDivElement;
            fixPosition({
              element,
              container,
            });
          }
        }}
      />
    </div>
  );
};
