(function(exports){
  function SingleNoteView(note){
    this.note = note
  }

  SingleNoteView.prototype.stringfyHTML = function () {
    var text = this.note.returnNote()
    return '<div>' + text + '</div>'
  };
  exports.SingleNoteView = SingleNoteView
})(this)
