import { Component, OnInit } from '@angular/core';
import emailjs from '@emailjs/browser';
@Component({
  selector: 'app-Contact',
  templateUrl: './Contact.component.html',
  styleUrls: ['./Contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  sendEmail(message: string) {
    if (!message) return alert("يرجى كتابة رسالة أولاً!");

    const templateParams = {
      to_name: 'Ahmed Mohemd', // اسمك
      message: message,
      reply_to: 'user_email@example.com' // ممكن تضيف Input للإيميل كمان
    };

    // هتحتاج تجيب الـ IDs دي من موقع emailjs.com (مجاني)
    emailjs.send('service_qwm2c28', 'template_lna1l2l', templateParams, '_FXXVDbdnwUM0yoM1')
      .then((response) => {
        alert('Your message has been sent successfully!✅');
        console.log('SUCCESS!', response.status, response.text);
      }, (err) => {
        alert('An error occurred while sending ❌');
        console.log('FAILED...', err);
      });
  }

}
