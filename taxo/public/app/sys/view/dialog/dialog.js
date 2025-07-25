// base: '.sys/style/widget/dialog/*'
// html: '<div class="dialog" id="app_dialog">'

dialog_clear = function() {
  app_dialog.innerHTML = '' }
dialog_content = eol( function() {/*
  <div class="dialog_content">
    <div class="dialog_head">
      <h1 class="dialog_head_title" id="app_dialog_title">DIALOG_TITLE</h1>
    </div>
    <div class="dialog_main" id="app_dialog_content">
      DIALOG_CONTENT
    </div>
    <div class="dialog_foot" id="app_dialog_foot">
      <button class="button dialog_button_cancel" id="app_dialog_cancel">Cancel</button>
      <button class="button dialog_button_action" id="app_dialog_action">Action</button>
    </div>
  </div>
  <div class="dialog_layer"></div> */});
dialog_create = function() {
  app_dialog.innerHTML = dialog_content }

