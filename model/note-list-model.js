(function(exports) {
  function NoteList() {
    this.all = [];
  };

NoteList.prototype.viewAll = function () {
  return this.all;
};

NoteList.prototype.create = function (text) {
  var note = new Note(text);
  return this.all.push(text);
};

exports.NoteList = NoteList;
})(this);
