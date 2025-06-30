jQuery(document).ready(function() {
    var includes = $('[data-include]')
    $.each(includes, function () {
        var file = 'templates/' + $(this).data('include') + '.html'
        $(this).load(file)
    })

    $.each(data, function(i,item) {
        $('#fileList').append('<li class="li-1">' + i + '</li>');
        $.each(item, function() {
            $('#fileList').append('<li class="li-2"><a onclick=\'loadpage("'+'writeuppages/'+i+'/'+item+'.html")\'>' + item + '</a></li>');
        });
    });
});

function loadpage(page) {
    $('#content').load(encodeURI(page), function(response, status, xhr) {
        if (status == "error") {
            var msg = "Sorry but there was an error: ";
            $("#content").html(msg + xhr.status + " " + xhr.statusText);
        } else {
            window.scrollTo(0, 0);
        }
    });
}

function searchpages() {
  // Declare variables
  var input, filter, ul, li, a, i, txtValue;
  input = document.getElementById('myInput');
  filter = input.value.toUpperCase();
  ul = document.getElementById("fileList");
  li = ul.getElementsByTagName('li');

  // Loop through all list items, and hide those who don't match the search query
  for (i = 0; i < li.length; i++) {
    txtValue = li[i].innerHTML;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
}

function toggledarkmode() {
  var body = document.body;
  body.classList.toggle("darkmode");
  var darkModeToggle = document.getElementById("darkModeToggle");
  if (body.classList.contains("darkmode")) {
      darkModeToggle.innerText = "Light Mode";
  } else {
      darkModeToggle.innerText = "Dark Mode";
  }
}