
$(document).ready(function(){
    $(window).scroll(function(){
        $('nav').toggleClass('scrolled',$(this).scrollTop()>50);

    });
    /*$('#ChangeToggle').click(function() {
    $('#navbar-hamburger').toggleClass('hidden');
    $('#navbar-close').toggleClass('hidden');  
  });*/
  $('.navbar-nav>li>a').on('click', function(){
    $('.navbar-collapse').collapse('hide');
  });

  $('.skill-per').each(function(){
    var $this = $(this);
    var per=$this.attr('per');
    $this.css("width",per+'%');
   

  });

  $(".scroll-top-btn").click(function(event) {
    event.preventDefault();
    $("html, body").animate({ scrollTop: 0 }, "slow");
    return false;
  });

});
/* scroll up*/
var mybutton = document.getElementById("scrbtn");
window.onscroll = function() {scrollFunction()};
function scrollFunction(){
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
var type= new Typed(".typing",{
  strings:["Web Developer.","YouTuber.","FreeLancer."],
  typeSpeed:100,
  backSpeed:60,
  loop:true
});
//hambuger to cross

$(function(){
  $("[data-trigger]").on("click",function(){
    var target_id  =$(this).attr("data-trigger");
    $(target_id).toggleClass("show");
    $('body').toggleClass("offcanvas-active")
  });
  $('.btn-close').click(function(e){
    $('.navbar-collapse').removeClass("show");
    $('body').removeClass("offcanvas-active");
  })
});


//Ajax for form submittion

window.addEventListener("DOMContentLoaded", function () {
  // get the form elements defined in your form HTML above

  var form = document.getElementById("submit-form");
  // var button = document.getElementById("my-form-button");
  var status = document.getElementById("status");

  // Success and Error functions for after the form is submitted

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
   
