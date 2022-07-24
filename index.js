const stopwords = ['i','me','my','myself','we','our','ours','ourselves','you','your','yours','yourself','yourselves','he','him','his','himself','she','her','hers','herself','it','its','itself','they','them','their','theirs','themselves','what','which','who','whom','this','that','these','those','am','is','are','was','were','be','been','being','have','has','had','having','do','does','did','doing','a','an','the','and','but','if','or','because','as','until','while','of','at','by','for','with','about','against','between','into','through','during','before','after','above','below','to','from','up','down','in','out','on','off','over','under','again','further','then','once','here','there','when','where','why','how','all','any','both','each','few','more','most','other','some','such','no','nor','not','only','own','same','so','than','too','very','s','t','can','will','just','don','should','now']

function firstLetterUpper(theString) {
	var newString = theString.replace(/(^\s*\w|[\.\!\?]\s*\w)/g,function(c){return c.toUpperCase()});
    return newString;
}

function removeDuplicates(contentArray){
    ContentString = new Set(contentArray);
    console.log(new Set(contentArray));
    return Array.from(ContentString);
}

function wordcount(self) {
    var content = document.getElementById('contenttext').value;
    content = content.replace(/  /g, " ");
    contentstring = content.replace(/\n/g, " ");
    var contentList = contentstring.split(" ");
    console.log(contentList);
    document.getElementById('word-count').innerHTML = contentList.length;
    document.getElementById('contentKeywords').innerHTML = firstLetterUpper(content);
}

function removestopwords() {
    res = []
    contentstring = contentstring.replace(/[.,\/#!$%\^&\*;:{}=\-_`~?()]/g,"");
    contentstring = contentstring.toLowerCase();
    words = contentstring.split(' ')
    for(i=0;i<words.length;i++) {
        word_clean = words[i].split(".").join("")
        if(!stopwords.includes(word_clean)) {
            res.push(word_clean)
        }
    }
    document.getElementById('contentKeywords').innerHTML = removeDuplicates(res);
    document.getElementById('clist').innerHTML = res.length;
    
}  

