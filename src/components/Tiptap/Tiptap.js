// src/Tiptap.jsx
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";

const Tiptap = ({ onBodyChange }) => {
  const editor = useEditor({
    extensions: [StarterKit],
    content: "<p>Type your post here</p>",
    onUpdate({ editor }) {
      onBodyChange(editor.getHTML());
    },
  });

  return <EditorContent editor={editor} />;
};

export default Tiptap;

// https://tiptap.dev/api/events#update
