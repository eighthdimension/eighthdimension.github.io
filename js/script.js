let wall = document.getElementById("wall-1-images-gif");
let spawngif=document.createElement('img');
let i=1;
function spawnspic() {
let format = document.getElementById('select-format').value;
	//for (i = 1; i >= 80; i++) {
    	spawngif.setAttribute("src", 'img/'+i+format);
		wall.appendChild(spawngif);
    	document.getElementsByName("spawn")[0].style.display='none';
    }//}
function updatepic() {
        let format = document.getElementById('select-format').value;
		i++;
    	spawngif.setAttribute("src", 'img/'+i+format);
}

let j=1;
let elem = document.getElementById("List");
function transform(){
	elem.setAttribute("start", j);
	j++;
}