function wordcount(self) {
    var spaces = self.value.match(/\S+ /g);
    var words = spaces ? spaces.length : 0;
    
    document.getElementById('word-count').innerHTML = words+1 + " words";
    document.getElementById('clist').innerHTML = document.getElementById('contenttext').value;
    var content = document.getElementById('contenttext').value;
    content.replace(/\n/g, " ");
    var contentList = document.getElementById('clist').innerHTML.split(" ");
    console.log(contentList);
}