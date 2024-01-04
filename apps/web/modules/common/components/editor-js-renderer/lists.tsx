import React from "react";

type Props = {
  data: {
    items: string[];
    type?: "ordered" | "unordered";
  };
} & React.HTMLAttributes<HTMLDivElement>;

const EditorJSLists: React.FC<Props> = ({
  data: { items, type = "unordered" },
}) => {
  if (!items.length) {
    return null;
  }
  const singleItem = items.map((item, itemIdx) => (
    <li className="py-xs text-gray-600" key={itemIdx}>
      <p dangerouslySetInnerHTML={{ __html: item }} />
    </li>
  ));

  return (
    <>
      {type === "ordered" ? (
        <ol className="list-decimal ml-5">{singleItem}</ol>
      ) : (
        <ul className="list-disc ml-5">{singleItem}</ul>
      )}
    </>
  );
};

export default EditorJSLists;
