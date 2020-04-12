/* global $ */
$(document).ready(function(){
	$.getJSON("/api/titles")
	.then(addTitles)
	
	$('#titleInput').keypress(function(event){
		if(event.which == 13){
			createTitle();
		}
	});
	
	$('.list').on('click', 'li', function(){
		updateTitle($(this));
	})
	
	$('.list').on('click', 'span', function(e){
		e.stopPropagation();
		removeTitle($(this).parent());
	})
});

function addTitles(titles){
	titles.forEach(function(title){
		addTitle(title);
	});
}

function addTitle(title){
  var newTitle = $('<li class="task">'+title.name +' <span>X</span></li>');
  newTitle.data('id', title._id);
  newTitle.data('completed', title.completed);
  if(title.completed){
    newTitle.addClass("done");
  }
  $('.list').append(newTitle);
}

function createTitle(){
  //send request to create new todo
  var usrInput = $('#titleInput').val();
  $.post('/api/titles',{name: usrInput})
  .then(function(newTitle){
    $('#titleInput').val('');
    addTitle(newTitle);
  })
  .catch(function(err){
    console.log(err);
  })
}

function removeTitle(title){
  var clickedId = title.data('id');
  var deleteUrl = '/api/titles/' + clickedId; 
  $.ajax({
    method: 'DELETE',
    url: deleteUrl
  })
  .then(function(data){
    title.remove();
  })
  .catch(function(err){
    console.log(err);
  })
}

function updateTitle(title){
	var clickedId = title.data('id');
	var updateUrl = '/api/titles/' + clickedId;
  var isDone = !title.data('completed');
  var updateData = {completed: isDone}
  $.ajax({
    method: 'PUT',
    url: updateUrl,
    data: updateData
  })
  .then(function(updatedTodo){
    title.toggleClass("done");
    title.data('completed', isDone);
  })
}
