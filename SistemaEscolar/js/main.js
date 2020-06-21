$(document).ready(function(){
	/***** Mostrar/Ocultar menu mobil *****/
	$(".show-close-menu-m").click(function(){
		var menu=$(".navigation");
		if(menu.css("opacity")=="0"){ 
		  menu.addClass("show-navigations");
		  $(this).css({ "color":"#FFCA28" });
		}else{ 
		  menu.removeClass("show-navigations"); 
		  $(this).css({ "color":"#fff" });
		}
	  });
		/***** Mostrar/ocultar mega-menu *****/
	  $('.btm-mega-menu').click(function(e){
		e.preventDefault();
			 var megamenu=$(".mega-menu");
			 if(megamenu.css("opacity")=="0"){ 
				 megamenu.addClass("show-mega-menu"); 
				 $('.btm-mega-menu').css({ "color":"#FFA726" });
			 }else{ 
				 megamenu.removeClass("show-mega-menu");
				 $('.btm-mega-menu').css({ "color":"#fff" });
			 }
	  });  
	  /***** Abrir link en una nueva ventana *****/
	  $(".open-link-newTab").click(function(e){
			 e.preventDefault();
			 var HrefLink=$(this).attr("href");
			 window.open(HrefLink,'_blank');
	  });
	  /***** Moverse el la pagina institucion con Scroll *****/
		$('.scroll-navigation-ins ul li').click(function(){
			var seccion=$(this).attr('data-href');
		$('body,html').animate({
		  scrollTop:$(seccion).offset().top-70
		},1000);
		return false; 
		});
	  /***** boton ir arriba *****/
	  $('.btn-up').click(function(){
		$('body,html').animate({scrollTop:'0px'}, 300);
	  });
	  /*****Mostrar y ocultar boton ir arriba *****/
	  $(window).scroll(function(){
		if($(this).scrollTop() >= 500){
		  $('.btn-up').fadeIn();
		}else{
		  $('.btn-up').fadeOut();
		}
	  });
		/***** Mapa de GoogleMaps del Instituto *****/
		var map;
		function initialize() {
		  var myLatlng = new google.maps.LatLng(13.869727, -88.628943);
		  var mapOptions = {
			zoom: 16,
			center: new google.maps.LatLng(13.869727, -88.628943),
			mapTypeId: google.maps.MapTypeId.HYBRID
		  };
		  map = new google.maps.Map(document.getElementById('mapa-ins'),
			mapOptions);
		  var marker = new google.maps.Marker({
			position: myLatlng,
			map: map,
			title: 'Instituto Nacional de Sensuntepeque'
		  });
		}
		google.maps.event.addDomListener(window, 'load', initialize);
	$('.btn-sideBar-SubMenu').on('click', function(){
		var SubMenu=$(this).next('ul');
		var iconBtn=$(this).children('.zmdi-caret-down');
		if(SubMenu.hasClass('show-sideBar-SubMenu')){
			iconBtn.removeClass('zmdi-hc-rotate-180');
			SubMenu.removeClass('show-sideBar-SubMenu');
		}else{
			iconBtn.addClass('zmdi-hc-rotate-180');
			SubMenu.addClass('show-sideBar-SubMenu');
		}
	});
	$('.btn-exit-system').on('click', function(){
		swal({
		  	title: 'Are you sure?',
		  	text: "The current session will be closed",
		  	type: 'warning',
		  	showCancelButton: true,
		  	confirmButtonColor: '#03A9F4',
		  	cancelButtonColor: '#F44336',
		  	confirmButtonText: '<i class="zmdi zmdi-run"></i> Yes, Exit!',
		  	cancelButtonText: '<i class="zmdi zmdi-close-circle"></i> No, Cancel!'
		}).then(function () {
			window.location.href="index.html";
		});
	});
	$('.btn-menu-dashboard').on('click', function(){
		var body=$('.dashboard-contentPage');
		var sidebar=$('.dashboard-sideBar');
		if(sidebar.css('pointer-events')=='none'){
			body.removeClass('no-paddin-left');
			sidebar.removeClass('hide-sidebar').addClass('show-sidebar');
		}else{
			body.addClass('no-paddin-left');
			sidebar.addClass('hide-sidebar').removeClass('show-sidebar');
		}
	});
	$('.btn-Notifications-area').on('click', function(){
		var NotificationsArea=$('.Notifications-area');
		if(NotificationsArea.css('opacity')=="0"){
			NotificationsArea.addClass('show-Notification-area');
		}else{
			NotificationsArea.removeClass('show-Notification-area');
		}
	});
	$('.btn-search').on('click', function(){
		swal({
		  title: 'What are you looking for?',
		  confirmButtonText: '<i class="zmdi zmdi-search"></i>  Search',
		  confirmButtonColor: '#03A9F4',
		  showCancelButton: true,
		  cancelButtonColor: '#F44336',
		  cancelButtonText: '<i class="zmdi zmdi-close-circle"></i> Cancel',
		  html: '<div class="form-group label-floating">'+
			  		'<label class="control-label" for="InputSearch">write here</label>'+
			  		'<input class="form-control" id="InputSearch" type="text">'+
				'</div>'
		}).then(function () {
		  swal(
		    'You wrote',
		    ''+$('#InputSearch').val()+'',
		    'success'
		  )
		});
	});
	$('.btn-modal-help').on('click', function(){
		$('#Dialog-Help').modal('show');
	});
});
(function($){
    $(window).on("load",function(){
        $(".dashboard-sideBar-ct").mCustomScrollbar({
        	theme:"light-thin",
        	scrollbarPosition: "inside",
        	autoHideScrollbar: true,
        	scrollButtons: {enable: true}
        });
        $(".dashboard-contentPage, .Notifications-body").mCustomScrollbar({
        	theme:"dark-thin",
        	scrollbarPosition: "inside",
        	autoHideScrollbar: true,
        	scrollButtons: {enable: true}
        });
    });
})(jQuery);