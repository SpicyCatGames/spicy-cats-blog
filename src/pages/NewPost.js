import Tiptap from "../components/Tiptap";

const NewPost = () => {
  const onSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={onSubmit}>
      <label htmlFor="post-title">
        <input type="text" id="post-title" placeholder="Title" />
      </label>
      <Tiptap />
      <span>Image upload will be added later</span>
      <span>Descrription field will be added later</span>
      <span>Tag field will be added later</span>
      <span>Category field will be added later</span>
    </form>
  );
};

export default NewPost;
