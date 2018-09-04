define(['app','codemirror',"css!../../../libs/codemirror/lib/codemirror.css","css!../../../libs/codemirror/theme/seti.css"], function (app,CodeMirror) {
    app.register.controller('EditController', EditController);

    EditController.$inject = ['$scope'];

    function EditController($scope) {
        console.log("EditController created successfully!!!");
        var editor1 = CodeMirror.fromTextArea(document.getElementById("editor"), {
            mode: "text/css",
            theme:'seti',
            lineNumbers: true,
            lineWrapping: true,
            onCursorActivity: function() {
              // editor.setLineClass(hlLine, null, null);
              // hlLine = editor.setLineClass(editor.getCursor().line, null, "activeline");
            }
          });
          // var hlLine = editor1.setLineClass(0, "activeline");
    }
});
