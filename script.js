var typed2 = new Typed('.text', {
	strings:[,' Backend Development--', ' Web Development--', ' System Documentation--'],
	typeSpeed:100,
	backSpeed:100,
	cursorChar:'',
	loop:true,
});

var typed2 = new Typed('.hero_text', {
	strings:[,' Backend Developer--', ' Web Developer--', ' Digital Products Seller--'],
	typeSpeed:100,
	backSpeed:100,
	cursorChar:'',
	loop:true,
});

var swiper = new Swiper('.serviceSwiper', {
	slidesPerView:3,
	spaceBetween:30,
	loop:true,
	autoplay:true,
	breakpoints:{
		1200:{
			slidesPerView:3,
			spaceBetween:30,
		},
		900:{
			slidesPerView:2,
			spaceBetween:30,
		},
		500:{
			slidesPerView:1,
			spaceBetween:30,
		},
	},
});

var swiper = new Swiper('.testimonialSwiper', {
	slidesPerView:2,
	spaceBetween:10,
	loop:true,
	autoplay:true,
	breakpoints:{
		1200:{
			slidesPerView:2,
			spaceBetween:10,
		},
		900:{
			slidesPerView:2,
			spaceBetween:10,
		},
		500:{
			slidesPerView:1,
			spaceBetween:10,
		},
	},
});

let bar = document.querySelector('.bars');
let side_bar = document.querySelector('.side_bar');

bar.addEventListener('click',() =>{
	side_bar.classList.toggle('show_side_bar');
});



/* TAMBAHAN PRIBADI */
function sendMail(event){
    event.preventDefault(); // Mencegah Reload Halaman

    // Ambil Nilai Input
    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let subject = document.getElementById("subject").value.trim();
    let message = document.getElementById("message").value.trim();

    // Validasi Kosong
    if (!name || !email || !subject || !message) {
        alert("Failed to send message! Please fill in all fields!");
        return;
    }

    // Validasi Format Email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
        alert("Invalid email address! Please enter a valid email like example@gmail.com !");
        return;
    }

    let parms = {
        name: name,
        email: email,
        subject: subject,
        message: message
    };

    emailjs.send("service_david-portfolio", "template_david-portfolio", parms)
        .then(function(response) {
            alert("Thank you for your message! Your time and interest are truly appreciated!");
            console.log("SUCCESS!", response.status, response.text);
        }, function(error) {
            alert("Failed to send email! Please try again!");
            console.log("FAILED...", error);
        });
}