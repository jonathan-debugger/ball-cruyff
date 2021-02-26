
document.addEventListener("DOMContentLoaded", function(event) {


var thumbnailElement = document.getElementById("smart_thumbnail");

thumbnailElement.addEventListener("click", function() {


if (thumbnailElement.className=="small") {
	thumbnailElement.className = "";
}else{
		thumbnailElement.className = "small";
};

});

});

function openimg(imgs){

			   var img2= document.getElementById('img2');
			   var img3= document.getElementById('img3');
			   var img4= document.getElementById('img4');
			   var img5= document.getElementById('img5');
	if (imgs=="img2") {
   		img2.src='https://pbs.twimg.com/media/EKKpYvZXsAY74N7?format=jpg&name=4096x4096';
	}else if(imgs=="img3"){
			img3.src='https://www.lavanguardia.com/r/GODO/LV/p5/WebSite/2018/08/10/Recortada/img_amalla_20180810-134230_imagenes_lv_terceros_capitanes_fcb-kbxD-U45127528578177-992x558@LaVanguardia-Web.PNG';
	}else if(imgs=="img4"){
			img4.src='https://foto.lapaginamillonaria.com/res/fotogalerias/legacy/n61221.jpg';
	}

};

function closeimg(imgs){
			   var img2= document.getElementById('img2');
			   var img3= document.getElementById('img3');
			   var img4= document.getElementById('img4');
			   var img5= document.getElementById('img5');

	if (imgs=="img2") {
   		img2.src='https://e00-marca.uecdn.es/assets/multimedia/imagenes/2019/11/23/15745494572386.jpg';
	}else if(imgs=="img3"){
			img3.src='https://www.lavanguardia.com/r/GODO/LV/p6/Deportes/2019/11/06/Recortada/AFP_1M08BV_20191105191113-kB4C-U4714261343120zC-992x558@LaVanguardia-Web.jpg';
	}else if(imgs=="img4"){
			img4.src='https://futbolmillonario.com/wp-content/uploads/2019/10/historia-del-river-plate.jpg';
	}

};