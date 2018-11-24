// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
// Require Froala Editor js file.
import 'froala-editor/js/froala_editor.pkgd.min';

// Require Froala Editor css files.
import 'froala-editor/css/froala_editor.pkgd.min.css';
import 'font-awesome/css/font-awesome.css';
import 'froala-editor/css/froala_style.min.css';
import VueFroala from 'vue-froala-wysiwyg';
import 'at.js/dist/css/jquery.atwho.min.css';
import 'at.js/dist/js/jquery.atwho.min';

Vue.config.productionTip = false;

Vue.use(VueFroala);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
});
