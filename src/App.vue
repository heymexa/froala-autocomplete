<template>
  <div id="app">
    <froala :tag="'textarea'" :config="config" v-model="model"></froala>
  </div>
</template>

<script>
const API_URL = 'http://localhost:3000/';
const config = {
  at: '@',
  displayTpl:
    '<li><img src="${image}" height="20" width="20" alt="" /> ${name}</li>',
  insertTpl:
    '<a href="/" class="user-autocomplete__menu_item"><img src="${image}" height="20" width="20" alt="" /> ${name}</a>',
  limit: 200,
  callbacks: {
    remoteFilter: function(query, callback) {
      $.ajax(API_URL, {
        data: { q: query },
        type: 'GET',
        dataType: 'json'
      }).done(function(data) {
        callback(data);
      });
    }
  }
};

export default {
  name: 'app',
  data() {
    return {
      config: {
        events: {
          'froalaEditor.initialized': function(e, editor) {
            editor.$el.atwho(config);

            editor.events.on(
              'keydown',
              function(e) {
                if (
                  e.which === $.FroalaEditor.KEYCODE.ENTER &&
                  editor.$el.atwho('isSelecting')
                ) {
                  return false;
                }
              },
              true
            );
          }
        }
      },
      model: 'Edit Your Content Here!'
    };
  }
};
</script>
