$(function () {
   function BurgerToggle() {
      let menu = $('.header__menu').removeClass('active');
      let toggle = $('.header__toggle').removeClass('active');
      $(toggle).on('click', function () {
         $(menu).toggleClass('active');
         $(this).toggleClass('active');
         $('body').toggleClass('lock');
      })
   }
   BurgerToggle();

   function initMap() {
      const Link = $(".text__map");
      const maps = $('#map');
      Link.on('mouseover', function () {
         maps.show();
         const uluru = { lat: 52.0932789, lng: 23.6988248 };
         const map = new google.maps.Map(
            document.getElementById('map'), { zoom: 15, center: uluru });
         const marker = new google.maps.Marker({ position: uluru, map: map });
         $(this).on('click', function () {
            $(maps).toggleClass('active');
            if (maps.hasClass('active')) {
               maps.show();
            }
            else {
               maps.hide();
            }
         });
      });
      maps.on('mouseleave', function () {
         $(maps).removeClass('active');
         maps.hide();
      });
   }
   initMap();

   function Hint() {
      const CardClient_Info = $(".cardClient__info");
      const Content = $(".cardClient__content")
      CardClient_Info.on('click', function () {
         $(Content).toggleClass('active')
      })
   }
   Hint();
});

function Popup() {
   const Close_btn = document.querySelector('.popup__close');
   const Popup_body = document.querySelector('.popup__body');
   const SignUp = document.querySelector('.popup__signUp');
   const Popup_row = document.querySelector('.popup__row');
   const Close_btnOder = document.querySelector('.oder__close');
   const Popup_Oder = document.querySelector('.oder__body');
   const Popup_OderRow = document.querySelector('.oder__row');
   const Btn__oder = document.querySelector('#btn__oder');
   const Service_link = document.querySelector('.service__link');
   SignUp.addEventListener('click', () => {
      Popup_row.classList.add('active')
      Popup_body.style.visibility = "visible";
      Popup_body.style.opacity = 1;
   });
   Service_link.addEventListener('click', () => {
      Popup_row.classList.add('active')
      Popup_body.style.visibility = "visible";
      Popup_body.style.opacity = 1;
   });
   Close_btn.addEventListener('click', () => {
      Popup_row.classList.remove('active')
      Popup_body.style.visibility = "hidden";
      Popup_body.style.opacity = 0;
   });
   Btn__oder.addEventListener('click', (e) => {
      const InputCheck1 = document.querySelector('.check1').value;
      const InputCheck2 = document.querySelector('.check2').value;
      if (InputCheck1 !== '' && InputCheck2 !== '') {
         Popup_row.classList.remove('active')
         Popup_body.style.visibility = "hidden";
         Popup_body.style.opacity = 0;
         Popup_Oder.style.visibility = "visible";
         Popup_Oder.style.opacity = 1;
         Popup_OderRow.classList.add('active');
         e.preventDefault();
      }
   })
   Close_btnOder.addEventListener('click', () => {
      Popup_OderRow.classList.remove('active');
      Popup_Oder.style.visibility = "hidden";
      Popup_Oder.style.opacity = 0;
   })
}
Popup();
