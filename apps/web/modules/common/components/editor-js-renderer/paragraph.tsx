import { clsx } from "clsx";
import React from "react";

interface ParagraphProps {
  data: {
    text: string;
  };
  classNames: string;
}

const EditorJSParagraph = (props: ParagraphProps) => {
  return (
    <p
      className={clsx(props.classNames)}
      dangerouslySetInnerHTML={{ __html: props.data.text }}
    />
  );
};

export default EditorJSParagraph;
