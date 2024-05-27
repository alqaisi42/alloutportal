<template>
  <ClientOnly fallback-tag="span" fallback="Loading comments...">
    <div
      v-show="load"
      ref="editor"
      class="quill-editor"
      v-quill:myQuillEditor="editorOption"
      @input="updateEditor"
    ></div>
  </ClientOnly>
</template>

<script>
export default {
  head() {
    return {
      script: [
        {
          src: "https://cdn.ckeditor.com/ckeditor5/41.1.0/classic/ckeditor.js",
          body: true,
        },
      ],
    };
  },
  props: {
    content: "",
  },
  data() {
    return {
      quill: null,
      load: false,
      text: "",
      editorOption: {
        modules: {
          toolbar: [
            ["bold", "italic", "underline", "strike"],
            ["blockquote", "code-block"],
          ],
        },
      },
    };
  },
  mounted() {
    ClassicEditor.create(document.querySelector("#editor"))
      .then((editor) => {
        console.log(editor);
      })
      .catch((error) => {
        console.error(error);
      });
    setTimeout(() => {
      $(".ql-editor").html(this.content);
      this.$forceUpdate();
    }, 1000);
    this.load = true;
  },
  methods: {
    updateEditor() {
      this.text = $(".ql-editor").html();
      this.$emit("updated", this.text);
    },
  },
};
</script>
