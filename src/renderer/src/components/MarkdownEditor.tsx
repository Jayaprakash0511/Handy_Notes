import {
  MDXEditor,
  headingsPlugin,
  listsPlugin,
  markdownShortcutPlugin,
  quotePlugin
} from '@mdxeditor/editor'
import { useMarkdownEditor } from '@renderer/hooks/useMarkdownEditor'
import "@/assets/index.css";

export const MarkdownEditor = ({ font }) => {
  const { editorRef, selectedNote, handleAutoSaving, handleBlur } = useMarkdownEditor();

  if (!selectedNote) return null;

  // Define common styles
  const commonStyles = "outline-none min-h-screen max-w-none px-8 py-5 caret-yellow-500 prose prose-invert prose-p:my-3 prose-p:leading-relaxed prose-headings:my-4 prose-blockquote:my-4 prose-ul:my-2 prose-li:my-0 prose-code:px-1 prose-code:text-red-500 prose-code:before:content-[''] prose-code:after:content-['']";

  // Separate handling for handwritten and non-handwritten fonts
  const handwrittenContentEditableClassName = `${commonStyles} text-5xl handwrittenEditorStyle`; // Larger size for handwritten font
  const regularContentEditableClassName = `${commonStyles} text-lg`; // Regular size for other fonts

  return (
    <div className={font === "handwritten" ? "handwritten-font" : ""}>
      <MDXEditor
        ref={editorRef}
        key={selectedNote.title}
        markdown={selectedNote.content}
        onChange={handleAutoSaving}
        onBlur={handleBlur}
        plugins={[headingsPlugin(), listsPlugin(), quotePlugin(), markdownShortcutPlugin()]}
        contentEditableClassName={font === "handwritten" ? handwrittenContentEditableClassName : regularContentEditableClassName}
      />
    </div>
  );
};
