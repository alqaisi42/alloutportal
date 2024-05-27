<template>
  <div
    class="quill-editor"
    :content="content"
    v-quill:myQuillEditor="editorOption"
  ></div>
</template>

<script>
// import Quill from "quill";
export default {
  data() {
    return {
      quill: null,
      content: "<p>I am Example</p>",
      editorOption: {
        // some quill options
        modules: {
          toolbar: [
            ["bold", "italic", "underline", "strike"],
            ["blockquote", "code-block"],
          ],
        },
      },
    };
  },
  mounted() {},
};
</script>
