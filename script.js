
$(document).ready(function () {
  $(window).scroll(function () {
    $('nav').toggleClass('scrolled', $(this).scrollTop() > 50);

  });

  document.querySelector('#check').addEventListener("change", (e) => {
    e.target.checked === true ? document.querySelector('.navbar-collapse').classList.add('show') : document.querySelector('.navbar-collapse').classList.remove('show')
    
  })

  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener("click", () => {
      document.querySelector('.navbar-collapse').classList.remove('show')
      document.querySelector('#check').checked = false
    })
  })
  $('.skill-per').each(function () {
    var $this = $(this);
    var per = $this.attr('per');
    $this.css("width", per + '%');


  });

  $(".scroll-top-btn").click(function (event) {
    event.preventDefault();
    $("html, body").animate({ scrollTop: 0 }, "slow");
    return false;
  });

});
/* scroll up*/
var mybutton = document.getElementById("scrbtn");
window.onscroll = function () { scrollFunction() };
function scrollFunction() {
  if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
    scrbtn.style.display = "block";
  } else {
    scrbtn.style.display = "none";
  }
};
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

//typing
var type = new Typed(".typing", {
  strings: ["Web Developer.", "YouTuber.", "FreeLancer."],
  typeSpeed: 100,
  backSpeed: 60,
  loop: true
});

//Ajax for form submittion

window.addEventListener("DOMContentLoaded", function () {

  var form = document.getElementById("submit-form");
  var status = document.getElementById("status");

  function success() {
    form.reset();
    status.classList.add("success");
    status.innerHTML = "Message Send Succesfully!";
  }

  function error() {
    status.classList.add("error");
    status.innerHTML = "Oops! There was a problem.";
  }

  // handle the form submission event

  form.addEventListener("submit", function (ev) {
    ev.preventDefault();
    var data = new FormData(form);
    ajax(form.method, form.action, data, success, error);
  });
});

// helper function for sending an AJAX request

function ajax(method, url, data, success, error) {
  var xhr = new XMLHttpRequest();
  xhr.open(method, url);
  xhr.setRequestHeader("Accept", "application/json");
  xhr.onreadystatechange = function () {
    if (xhr.readyState !== XMLHttpRequest.DONE) return;
    if (xhr.status === 200) {
      success(xhr.response, xhr.responseType);
    } else {
      error(xhr.status, xhr.response, xhr.responseType);
    }
  };
  xhr.send(data);
}

