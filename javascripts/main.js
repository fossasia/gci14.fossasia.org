
	$(document).ready(function(){
		var owner = "fossasia";
		var repo = "fossasia.github.io";
		$.ajax({
			url: "http://api.github.com/repos/"+owner+"/"+repo+"/contributors",
			dataType: "jsonp",
			success: function(data){
				data = data.data;
				var n = data.length;
				for(var i = 0; i < n; i++)
				{
					//Please, sorry for the next lines (>_<)
					var str;
					str = '<div class="sympl onesixth"><section class="person person--student"><div class="person__img">';
					str+='<div class="person__img__info"><div class="person__img__info__cont">';
					str += '<a href="'+data[i].html_url+'"><i class="icon-github"></i></a></div></div>';
					str+='<img src="'+data[i].avatar_url+'"></div><h1 class="person__name">'+data[i].login+'</h1></section></div>';
					$("#contr").append(str);
				}
			}
		})
	});