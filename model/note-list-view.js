(function(exports) {
  function NoteListView(notelist = new NoteList) {
    this.notelist = notelist; //new NoteList;
  }

NoteListView.prototype.viewNoteList = function () {
  htmlString = '<ul>'
  this.notelist.all.map(item => htmlString += '<li><div>' + item.substring(0,20) + '</div></li>' )
  htmlString += '</ul>'
  return htmlString
};
//
// '
  // if (this.returnNoteList().all.length === 0) {
  //   return '<ul><li><div>No notes saved</div></li></ul>'
  // } else {
  //   return this.returnNoteList().all.map(function(note) {
  //     return `<ul><li><div>${note}</div></li></ul>`
  //   }).join(' ')
  // };
// };

NoteListView.prototype.returnNoteList = function () {
  return this.notelist;
};

  exports.NoteListView = NoteListView;
})(this);
