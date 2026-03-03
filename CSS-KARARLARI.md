# CSS Kararları Raporu (LAB-3)

Bu çalışma, modern CSS tekniklerini ve duyarlı tasarım prensiplerini kullanarak hazırlanmıştır.

## 1. Tasarım Sistemi (Design Tokens)
- Tüm renkler, boşluklar ve font boyutları `tokens.css` dosyasında değişken olarak tanımlandı.
- Bu sayede tutarlı bir tasarım dili oluşturuldu ve merkezi yönetim sağlandı.

## 2. Akıcı Tipografi (Fluid Typography)
- Yazı boyutları için `clamp()` fonksiyonu kullanıldı.
- Yazılar, media query kullanmadan ekran genişliğine göre otomatik olarak ölçeklenmektedir.

## 3. Yerleşim Düzeni (Flexbox & Grid)
- **Flexbox:** Navigasyon çubuğu ve header elemanlarının tek eksenli hizalanması için kullanıldı.
- **CSS Grid:** Proje kartlarının ızgara düzeninde, `repeat(auto-fit, minmax(280px, 1fr))` koduyla duyarlı hale getirilmesi için kullanıldı.

## 4. Mobile-First Stratejisi
- Tasarım önce mobil cihazlar için kodlandı.
- `min-width` media query'leri kullanılarak sırasıyla Tablet (640px+) ve Masaüstü (1024px+) ekranlar için geliştirmeler yapıldı.

## 5. Erişilebilirlik ve Fokus
- Klavye ile gezinme (Tab) desteği sağlandı.
- Etkileşimli elemanlara (`:focus`) belirgin çerçeveler eklendi.
- "Skip to content" bağlantısı ile ana içeriğe hızlı erişim sağlandı.
