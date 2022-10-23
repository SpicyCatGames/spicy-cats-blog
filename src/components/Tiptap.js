// src/Tiptap.jsx
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";

const Tiptap = () => {
  const editor = useEditor({
    extensions: [StarterKit],
    content: "<p>Type your post here</p>",
  });

  return <EditorContent editor={editor} />;
};

export default Tiptap;
