var notelist = new NoteList();
var notelistview = new NoteListView(notelist);
notelist.create('Favourite drink: seltzer')

function testNoteListModelCreation() {
  console.log('takes a note list model upon instantiation:');
  assert.isTrue(notelistview.returnNoteList() === notelist);
}
testNoteListModelCreation();

function testViewFirstTwentyCharacters() {
  console.log('Returns 20 first characters of each note')
  assert.isTrue(notelistview.viewNoteList() === '<ul><li><div>Favourite drink: sel</div></li></ul>')
};
testViewFirstTwentyCharacters()
