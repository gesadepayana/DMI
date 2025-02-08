function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5WlladT8e4n":
        Script1();
        break;
      case "5otLtBftHzu":
        Script2();
        break;
      case "5X80ZTF7lLY":
        Script3();
        break;
      case "5wYn0Qal0mW":
        Script4();
        break;
  }
}

function Script1()
{
  function add_line() {
    var line = document.createElement("audio");
    var head=document.getElementsByTagName('body')[0];
    line.type = "audio/mp3";
    line.src="";
    line.id="bgSong" ;
	line.autoplay = true;
	line.loop = true;
    head.appendChild(line);
}

//but we only want to add these once!
if(document.getElementById('bgSong')==null){
	add_line();
var audio = document.getElementById('bgSong');
audio.volume = 0.5;
}


}

function Script2()
{
  if (!document.getElementById('bgSong')) {  // Cek apakah elemen sudah ada
    var audio = document.createElement('audio');
    audio.id = 'bgSong';
    audio.src = "story_content/external_files/Event Common - Pokkén Tournament.mp3";
    audio.preload = "auto";
    document.body.appendChild(audio);
}
}

function Script3()
{
  var audio = document.getElementById('bgSong');
audio.src="story_content/external_files/Event Common - Pokkén Tournament.mp3";
audio.load();
audio.play();
}

function Script4()
{
  var audio = document.getElementById('bgSong');
audio.src="story_content/external_files/Event Common - Pokkén Tournament";
audio.load();
audio.pause();
}

