console.log('#editor');
console.log($("#editor").text());
var editor = CodeMirror.fromTextArea(document.getElementById('editor'), {
    mode: "solidity",
    lineNumbers: true,
});
editor.save()