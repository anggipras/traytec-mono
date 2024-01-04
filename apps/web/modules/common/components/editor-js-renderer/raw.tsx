import React from "react";

interface RawProps {
  data: {
    html: string;
  };
}

const EditorJSRaw: React.FC<RawProps> = ({ data }) => {
  return <div dangerouslySetInnerHTML={{ __html: data.html }} />;
};

export default EditorJSRaw;
