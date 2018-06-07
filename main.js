(function(){
	var calc = function(id){
		return new Date(parseInt((id/2**22)+1288834974657));
	}
	var id = parseInt(location.href.split('/').slice(-1)[0]);
	if(isNaN(id)) return;
	var date = calc(id);
	var elem = document.querySelector('.client-and-actions>.metadata')
	elem.innerText = date.getHours()+':'+('0'+date.getMinutes()).slice(-2)+':'+('0'+date.getSeconds()).slice(-2)+'.'+('00'+date.getMilliseconds()).slice(-3)+' -'+elem.innerText.split('-')[1];
})();
