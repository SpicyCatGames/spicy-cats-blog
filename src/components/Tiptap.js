// src/Tiptap.jsx
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";

const Tiptap = () => {
  const editor = useEditor({
    extensions: [StarterKit],
    content: "<p>Type your post here</p>",
    onUpdate({ editor }) {
      // content has changed
    },
  });

  return <EditorContent editor={editor} />;
};

export default Tiptap;

// https://tiptap.dev/api/events#update
