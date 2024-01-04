import dynamic from "next/dynamic";
import React, { useMemo } from "react";
import EditorJSLists from "./lists";
import EditorJSRaw from "./raw";
import EditorJSParagraph from "./paragraph";

const Output = dynamic(() => import("editorjs-react-renderer"), { ssr: false });

type Props = {
  content: string | null | undefined;
  outputStyle?: any;
  customClasses?: any;
  showReadMore?: boolean;
  readMoreLimit?: number;
} & React.HTMLAttributes<HTMLDivElement>;

const classes = {
  header: {
    h1: "typo-h1",
    h2: "typo-h2",
    h3: "typo-h3",
    h4: "typo-h4",
    h5: "typo-h5",
    h6: "typo-h6",
  },
  paragraph: "text-gray-600",
  image: {
    figure: "!bg-primary-50 group",
    figcaption:
      "!bg-primary-700 !left-1/2 -translate-x-1/2 !top-auto !bottom-2 shadow-xl opacity-100 medium:opacity-0 group-hover:opacity-100 transition-opacity",
  },
  table: {
    table: "table",
    th: "!bg-primary-200",
  },
  warning: {
    container: "border-l-4 border-yellow-400 bg-yellow-50 p-md !items-center",
    icon: "mr-5 w-5 h-5",
    title: "text-sm !font-medium !text-yellow-800",
    message: "text-sm !text-yellow-700",
  },
  quote: {
    author: "text-base text-gray-800",
    message: "text-xl text-gray-700",
  },
};

const EditorJSRenderer: React.FC<Props> = ({
  content,
  outputStyle = {
    table: {
      td: {
        backgroundColor: "#FF00000",
      },
    },
    p: {
      b: {
        fontWeight: "600",
      },
    },
  },
  customClasses = {},
  className,
}) => {
  const dataBlocks = useMemo(() => {
    if (!content) {
      return "";
    }

    return JSON.parse(content);
  }, [content]);

  const renderers = {
    // attaches: EditorJSAttachments,
    // checklist: EditorJSChecklist,
    list: EditorJSLists,
    raw: EditorJSRaw,
    paragraph: EditorJSParagraph,
  };

  const classNames = {
    ...classes,
    ...customClasses,
  };

  return (
    <div className={className}>
      <Output
        classNames={classNames}
        data={dataBlocks}
        renderers={renderers}
        style={outputStyle}
      />
    </div>
  );
};

export default EditorJSRenderer;
