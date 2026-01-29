
import React from 'react';
import { Instagram, MapPin, Phone, Heart } from 'lucide-react';
import { CONTACT_INFO } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          <div className="space-y-8">
            <h2 className="text-3xl font-black font-jakarta tracking-tighter">DR. MAPSO</h2>
            <p className="text-gray-400 text-lg leading-relaxed font-medium">
              نحن نؤمن بأن كل مريض يستحق ابتسامة مثالية. عيادتنا تجمع بين الخبرة الطبية والراحة الفندقية.
            </p>
            <div className="flex gap-4">
              <a href={CONTACT_INFO.instagram} className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center hover:bg-teal-600 transition-all">
                <Instagram size={24} />
              </a>
            </div>
          </div>

          <div className="space-y-8">
            <h3 className="text-lg font-black uppercase tracking-widest text-teal-500">ساعات العمل</h3>
            <ul className="space-y-4 text-gray-400 font-bold text-lg">
              <li className="flex justify-between"><span>الاثنين - الجمعة</span> <span className="text-white">09:00 - 18:30</span></li>
              <li className="flex justify-between"><span>السبت</span> <span className="text-white">09:00 - 14:00</span></li>
              <li className="flex justify-between text-teal-400 italic font-medium"><span>الأحد</span> <span>مغلق</span></li>
            </ul>
          </div>

          <div className="space-y-8">
            <h3 className="text-lg font-black uppercase tracking-widest text-teal-500">تواصل معنا</h3>
            <ul className="space-y-6">
              <li className="flex items-center gap-4">
                <Phone className="text-teal-500" size={20} />
                <span className="text-xl font-jakarta font-black">{CONTACT_INFO.phone}</span>
              </li>
              <li className="flex items-center gap-4 text-gray-400 font-medium">
                <MapPin className="text-teal-500" size={20} />
                <span>Casablanca, Maroc</span>
              </li>
            </ul>
          </div>

          <div className="space-y-8">
            <h3 className="text-lg font-black uppercase tracking-widest text-teal-500">حجز سريع</h3>
            <p className="text-gray-400 font-medium">لا تنتظر الألم، احجز موعدك الدوري الآن عبر الواتساب مباشرة.</p>
            <a href={`https://wa.me/212781214641`} className="inline-block bg-teal-600 text-white px-8 py-4 rounded-2xl font-black text-center w-full hover:bg-teal-700 transition-all">
              واتساب د. مابصو
            </a>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-gray-500 font-medium">&copy; {new Date().getFullYear()} Dr. Mapso Clinic. All Rights Reserved.</p>
          <p className="flex items-center gap-2 text-gray-500 font-bold">
            صنع بـ <Heart size={16} className="text-red-500 fill-red-500" /> لابتسامتكم
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
