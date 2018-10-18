function MockNote() {}

MockNote.prototype.returnNote = function(){
  return 'Favourite drink: seltzer'
}
var note = new MockNote();
var singleNoteView = new SingleNoteView(note);

function testSingleNoteViewCanBeInstantiated() {
  console.log('A single note view can be instantiated:');
  assert.isTrue(singleNoteView instanceof SingleNoteView);
}

testSingleNoteViewCanBeInstantiated()


function testStringfyHTML() {
  console.log('Returns a string of HTML');
  console.log(singleNoteView.stringfyHTML)
  assert.isTrue(singleNoteView.stringfyHTML() === '<div>Favourite drink: seltzer</div>' );
}
testStringfyHTML()
