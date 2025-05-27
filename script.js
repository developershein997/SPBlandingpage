document.addEventListener('DOMContentLoaded', () => {
    // 20 services, each with its own image/logo, name, price, and details
    const servicesData = [
      {
        id: 1,
        image: 'images/facebook.png',
        title: { en: 'Facebook Boost service', mm: 'Facebook Boost service' },
        price: '$',
        detail: {
          en: 'In the social network, may your trust and success grow.',
          mm: '"လူမှုကွန်ယက်တွင် သင်၏ယုံကြည်စိတ်ချရမှု တိုးတက်အောင်မြင်ပါစေ။"'
        }
      },
      {
        id: 2,
        image: 'images/telegram.jpg',
        title: { en: 'Telegram Premium', mm: 'Telegram Premium' },
        price: '$',
        detail: {
          en: 'Telegram Premium',
          mm: 'Telegram Premium'
        }
      },
      {
        id: 3,
        image: 'images/telegram-icon.png',
        title: { en: 'Telegram service', mm: 'Telegram service' },
        price: '$',
        detail: {
          en: 'Telegram service',
          mm: 'Telegram service'
        }
      },
      {
        id: 4,
        image: 'images/tik-tok-logo-.png',
        title: { en: 'Tiktok Boost', mm: 'Tiktok Boost' },
        price: '$',
        detail: {
          en: 'Tiktok Boost',
          mm: 'Tiktok Boost'
        }
      },
      {
        id: 5,
        image: 'images/youtube.png',
        title: { en: 'YouTube Boost', mm: 'YouTube Boost' },
        price: '$',
        detail: {
          en: 'YouTube Boost',
          mm: 'YouTube Boost'
        }
      },
      {
        id: 6,
        image: 'images/instagram-new.png',
        title: { en: 'Instagram Service', mm: 'Instagram Service' },
        price: '$',
        detail: {
          en: 'Instagram Service',
          mm: 'Instagram Service'
        }
      },
      {
        id: 7,
        image: 'images/mobilelegend.png',
        title: { en: 'MLBB Diamond', mm: 'MLBB Diamond' },
        price: '$',
        detail: {
          en: 'MLBB Diamond',
          mm: 'MLBB Diamond'
        }
      },
      {
        id: 8,
        image: 'images/pubg.png',
        title: { en: 'PUBG UC', mm: 'PUBG UC' },
        price: '$',
        detail: {
          en: 'PUBG UC',
          mm: 'PUBG UC'
        }
      },
      {
        id: 9,
        image: 'images/vpn.png',
        title: { en: 'VPN service', mm: 'VPN service' },
        price: '$',
        detail: {
          en: 'VPN service',
          mm: 'VPN service'
        }
      },
      {
        id: 10,
        image: 'images/apple.png',
        title: { en: 'Apple Music', mm: 'Apple Music' },
        price: '$',
        detail: {
          en: 'Apple Music',
          mm: 'Apple Music'
        }
      },
      {
        id: 11,
        image: 'images/exchange.jpg',
        title: { en: 'Payment Exchange', mm: 'Payment Exchange' },
        price: '$',
        detail: {
          en: 'Payment Exchange.',
          mm: 'Payment Exchange'
        }
      },
      {
        id: 12,
        image: 'images/canva.png',
        title: { en: 'Canva Pro', mm: 'Canva Pro' },
        price: '$',
        detail: {
          en: 'Canva Pro',
          mm: 'Canva Pro'
        }
      },
      {
        id: 13,
        image: 'images/spotify.png',
        title: { en: 'Spotify premium', mm: 'Spotify premium' },
        price: '$',
        detail: {
          en: 'Spotify premium',
          mm: 'Spotify premium'
        }
      },
      {
        id: 14,
        image: 'images/capcut.jpg',
        title: { en: 'CapCut Pro', mm: 'CapCut Pro' },
        price: '$',
        detail: {
          en: 'CapCut Pro',
          mm: 'CapCut Pro'
        }
      },
      {
        id: 15,
        image: 'images/retro.png',
        title: { en: 'Retro Crush', mm: 'Retro Crush' },
        price: '$',
        detail: {
          en: 'Retro Crush',
          mm: 'Retro Crush'
        }
      },
      {
        id: 16,
        image: 'images/netflix.png',
        title: { en: 'NetFlix', mm: 'NetFlix' },
        price: '$',
        detail: {
          en: 'NetFlix',
          mm: 'NetFlix'
        }
      },
      {
        id: 17,
        image: 'images/disney.png',
        title: { en: 'Diney Plus', mm: 'Diney Plus' },
        price: '$',
        detail: {
          en: 'Diney Plus',
          mm: 'Diney Plus'
        }
      },
    //   {
    //     id: 18,
    //     image: 'images/it_support.png',
    //     title: { en: 'IT Support', mm: 'IT ဆိုင်ရာ အထောက်အပံ့' },
    //     price: '$100',
    //     detail: {
    //       en: 'Technical support for your business.',
    //       mm: 'သင့်လုပ်ငန်းအတွက် နည်းပညာပိုင်း အထောက်အပံ့။'
    //     }
    //   },
    //   {
    //     id: 19,
    //     image: 'images/training.png',
    //     title: { en: 'IT Training', mm: 'IT သင်တန်း' },
    //     price: '$300',
    //     detail: {
    //       en: 'Training sessions for teams or individuals.',
    //       mm: 'အဖွဲ့လိုက်/တစ်ဦးချင်းသင်တန်းများ။'
    //     }
    //   },
    //   {
    //     id: 20,
    //     image: 'images/maintenance.png',
    //     title: { en: 'Website Maintenance', mm: 'ဝက်ဘ်ဆိုဒ် ပြုပြင်ထိန်းသိမ်းမှု' },
    //     price: '$250',
    //     detail: {
    //       en: 'Ongoing site updates and maintenance.',
    //       mm: 'ဝက်ဘ်ဆိုဒ် အပ်ဒိတ်နှင့် ပြုပြင်ထိန်းသိမ်းခြင်း။'
    //     }
    //   }
    ];
  
    let currentLang = 'en';
    const langToggleBtn = document.getElementById('lang-toggle');
    const servicesGrid = document.getElementById('services-grid');
  
    function renderServices() {
      servicesGrid.innerHTML = '';
      servicesData.forEach(service => {
        const card = document.createElement('div');
        card.className = 'service-card';
        card.setAttribute('tabindex', '0');
        card.innerHTML = `
          <div class="service-title">${service.title[currentLang]}</div>
          <div class="service-price">${service.price}</div>
          <button class="service-detail-btn" data-id="${service.id}">${currentLang === 'en' ? 'Details' : 'အသေးစိတ်'}</button>
          <img src="${service.image}" alt="${service.title[currentLang]}" class="service-image"/>
        `;
        servicesGrid.appendChild(card);
      });
    }
  
    function updateStaticText() {
      langToggleBtn.textContent = currentLang === 'en' ? 'မြန်မာ' : 'English';
      document.querySelector('[data-key="teamName"]').textContent = currentLang === 'en' ? 'Service Plus Booster' : 'Service Plus Booster';
      document.querySelector('[data-key="servicesTitle"]').textContent = currentLang === 'en' ? 'Services' : 'ဝန်ဆောင်မှုများ';
    }
  
    langToggleBtn.addEventListener('click', () => {
      currentLang = currentLang === 'en' ? 'mm' : 'en';
      updateStaticText();
      renderServices();
    });
  
    updateStaticText();
    renderServices();
  
    // Service Detail Lightbox
    const lightbox = document.getElementById('lightbox');
    const lightboxTitle = document.getElementById('lightboxTitle');
    const lightboxDesc = document.getElementById('lightboxDesc');
    const lightboxClose = document.getElementById('lightbox-close');
  
    servicesGrid.addEventListener('click', (e) => {
      if (e.target.classList.contains('service-detail-btn')) {
        const id = parseInt(e.target.getAttribute('data-id'), 10);
        const service = servicesData.find(s => s.id === id);
        if (service) {
          lightboxTitle.textContent = service.title[currentLang];
          lightboxDesc.textContent = service.detail[currentLang];
          lightbox.style.display = 'flex';
          lightboxClose.focus();
        }
      }
    });
  
    lightboxClose.addEventListener('click', () => {
      lightbox.style.display = 'none';
    });
  
    lightbox.addEventListener('click', (e) => {
      if (e.target === lightbox) {
        lightbox.style.display = 'none';
      }
    });
  
    // Chat Lightbox
    const chatLightbox = document.getElementById('chat-lightbox');
    const chatLightboxClose = document.getElementById('chat-lightbox-close');
    const chatButton = document.getElementById('chat-button');
  
    chatButton.addEventListener('click', () => {
      chatLightbox.style.display = 'flex';
      chatLightboxClose.focus();
    });
  
    chatLightboxClose.addEventListener('click', () => {
      chatLightbox.style.display = 'none';
    });
  
    chatLightbox.addEventListener('click', (e) => {
      if (e.target === chatLightbox) {
        chatLightbox.style.display = 'none';
      }
    });
  
    // Copy buttons for chat links
    document.querySelectorAll('.copy-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const targetId = btn.getAttribute('data-copy-target');
        const input = document.getElementById(targetId);
        if (input) {
          input.select();
          input.setSelectionRange(0, 99999); // for mobile
          try {
            document.execCommand('copy');
            alert('Copied: ' + input.value);
          } catch {
            alert('Copy failed. Please copy manually.');
          }
        }
      });
    });
  
    // Close lightboxes on ESC key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        if (lightbox.style.display === 'flex') lightbox.style.display = 'none';
        if (chatLightbox.style.display === 'flex') chatLightbox.style.display = 'none';
      }
    });
  });
  // Floating Chat Options Button JS
const multiChatBtn = document.getElementById('multiChatBtn');
const chatOptionsFloat = document.getElementById('chatOptionsFloat');

multiChatBtn.addEventListener('click', function(e) {
  chatOptionsFloat.style.display = (chatOptionsFloat.style.display === 'flex') ? 'none' : 'flex';
});

// Hide options if click outside
document.addEventListener('click', function(e) {
  if (!multiChatBtn.contains(e.target) && !chatOptionsFloat.contains(e.target)) {
    chatOptionsFloat.style.display = 'none';
  }
});

  