<template>
  <ckeditor :editor="editor" :value="value" :config="config" :tagName="tagName" :disabled="disabled" @input="event => $emit('input', event)" />
</template>

<script>
let ClassicEditor;
let CKEditor;

if (process.client) {
  ClassicEditor = require('@ckeditor/ckeditor5-build-classic');
  CKEditor = require('@ckeditor/ckeditor5-vue2');
} else {
  CKEditor = { component: { template: '<div></div>' } };
}

export default {
  components: {
    ckeditor: CKEditor.component,
  },
  props: {
    value: String,
    tagName: {
      type: String,
      default: 'div',
    },
    disabled: Boolean,
    uploadUrl: String,
    config: {
      type: Object,
      default: () => ({}),
    },
  },
  data() {
    return {
      editor: ClassicEditor,
    };
  },
};
</script>