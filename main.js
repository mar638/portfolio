window.addEventListener('DOMContentLoaded', () => {
  // 1. تأثير fade-in للصفحة
  document.body.style.opacity = '0';
  setTimeout(() => {
    document.body.style.transition = 'opacity 1s ease-in';
    document.body.style.opacity = '1';
  }, 100);

  // 2. رسالة ترحيب تظهر في الهيدر
  const header = document.querySelector('header');
  if (header) {
    const welcomeMsg = document.createElement('p');
    welcomeMsg.textContent = 'مرحبًا بك في بورتفوليو مريم أحمد! شكراً لزيارتك 😊';
    welcomeMsg.style.color = '#6c5ce7';
    welcomeMsg.style.fontWeight = '600';
    welcomeMsg.style.marginTop = '10px';
    header.appendChild(welcomeMsg);
  }

  // 3. إنشاء زر "ارجع للأعلى"
  const backToTopBtn = document.createElement('button');
  backToTopBtn.textContent = '⬆️';
  backToTopBtn.id = 'backToTopBtn';
  backToTopBtn.title = 'الرجوع للأعلى';

  // أضف الزر للصفحة
  document.body.appendChild(backToTopBtn);

  // تنسيق الزر
  Object.assign(backToTopBtn.style, {
    position: 'fixed',
    bottom: '30px',
    right: '30px',
    padding: '10px 15px',
    fontSize: '24px',
    backgroundColor: '#6c5ce7',
    color: 'white',
    border: 'none',
    borderRadius: '50%',
    cursor: 'pointer',
    boxShadow: '0 4px 10px rgba(108, 92, 231, 0.3)',
    display: 'none',
    zIndex: '1000',
  });

  // إظهار الزر عند النزول 200 بكسل
  window.addEventListener('scroll', () => {
    if (window.scrollY > 200) {
      backToTopBtn.style.display = 'block';
    } else {
      backToTopBtn.style.display = 'none';
    }
  });

  // عند الضغط على الزر - يرجع للأعلى بسلاسة
  backToTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  // 4. تفعيل smooth scroll على روابط التنقل
  const navLinks = document.querySelectorAll('nav ul li a');
  navLinks.forEach(link => {
    link.addEventListener('click', event => {
      event.preventDefault();
      const targetID = link.getAttribute('href').substring(1);
      const targetSection = document.getElementById(targetID);
      if (targetSection) {
        targetSection.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  // 5. تغيير خلفية الـ nav عند النزول
  const nav = document.querySelector('nav');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      nav.style.backgroundColor = '#5847e8cc'; // أغمق بشفافية
      nav.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.2)';
      nav.style.transition = 'background-color 0.3s ease, box-shadow 0.3s ease';
    } else {
      nav.style.backgroundColor = '#6c5ce7';
      nav.style.boxShadow = '0 2px 8px rgba(0,0,0,0.15)';
    }
  });
});
