function handleOnLoad()
{
    populateList();
}
function handleOnChange()
{
    const selectedId = document.getElementById("selectListBox").value;
    bookList.forEach((book)=>{
        if(book.id == selectedId){
            myBook = book;
        }
    });
    populateForm();
}
function handleEditClick()
{
    makeEditable();
    hideButtons();
    var buttonHtml = "<button class=\"btn btn-primary btn-lg\" onclick=\"handleEditSave("+myBook.id+")\">Save</button>"
    buttonHtml += "<button class =\"btn btn-warning btn-lg btn-cancel\" onclick =\"handleCancelSave()\">Cancel</button>"
    document.getElementById("saveButton").innerHTML = buttonHtml;
    document.getElementById("saveButton").style.display = "inline-block";
}
function handleNewClick()
{
    makeEditable();
    hideButtons();
    blankFields();
    var buttonHtml = "<button class=\"btn btn-primary btn-lg\" onclick=\"handleNewSave()\">Save</button>"
    buttonHtml += "<button class =\"btn btn-warning btn-lg btn-cancel\" onclick =\"handleCancelSave()\">Cancel</button>"
    document.getElementById("saveButton").innerHTML = buttonHtml;
    document.getElementById("saveButton").style.display = "inline-block";
}
function handleRentClick()
{
    myBook.numAvlb--;
    document.getElementById("bookAvlb").value = myBook.numAvlb;
    putBook(id);
}
function handleReturnClick()
{
    myBook.numAvlb++;
    document.getElementById("bookAvlb").value = myBook.numAvlb;
    putBook(myBook.id);
}
function handleDeleteClick()
{
    deleteBook();
}
function handleCancelSave()
{
    populateForm();
    makeReadOnly();
    showButtons();
}
function handleEditSave(id)
{
    console.log(id)
    putBook(id);
    makeReadOnly();
    showButtons();
}
function handleNewSave()
{
    postBook();
    makeReadOnly();
    showButtons();
    blankFields();
}
function populateForm()
{
    document.getElementById("bookTitle").value = myBook.title;
    document.getElementById("author").value = myBook.author;
    document.getElementById("genre").value = myBook.genre;
    document.getElementById("avlb").value = myBook.numAvlb;
    document.getElementById("isbn").value = myBook.isbn;
    document.getElementById("length").value = myBook.length;
    document.getElementById("cover").value = myBook.cover;
    var html = "<img class = \"coverArt\" src= \"" + myBook.cover + "\"></img>";
    document.getElementById("picBox").innerHTML = html;
}
function hideButtons()
{
    document.getElementById("newButton").style.display = "none";
    document.getElementById("editButton").style.display = "none";
    document.getElementById("deleteButton").style.display = "none";
    document.getElementById("rentButton").style.display = "none";
    document.getElementById("returnButton").style.display = "none";
}
function showButtons()
{
    document.getElementById("newButton").style.display = "inline-block";
    document.getElementById("editButton").style.display = "inline-block";
    document.getElementById("deleteButton").style.display = "inline-block";
    document.getElementById("rentButton").style.display = "inline-block";
    document.getElementById("returnButton").style.display = "inline-block";
    document.getElementById("saveButton").style.display = "none";
}
function makeEditable()
{
    document.getElementById("bookTitle").readOnly=false;
    document.getElementById("author").readOnly=false;
    document.getElementById("genre").readOnly=false;
    document.getElementById("avlb").readOnly=false;
    document.getElementById("isbn").readOnly=false;
    document.getElementById("length").readOnly=false;
    document.getElementById("cover").readOnly=false;
}
function blankFields()
{
    document.getElementById("bookTitle").value="";
    document.getElementById("author").value="";
    document.getElementById("genre").value="";
    document.getElementById("avlb").value="";
    document.getElementById("isbn").value="";
    document.getElementById("length").value="";
    document.getElementById("cover").value="";
}
function makeReadOnly()
{
    document.getElementById("bookTitle").readOnly=true;
    document.getElementById("author").readOnly=true;
    document.getElementById("genre").readOnly=true;
    document.getElementById("avlb").readOnly=true;
    document.getElementById("isbn").readOnly=true;
    document.getElementById("length").readOnly=true;
    document.getElementById("cover").readOnly=true;
}