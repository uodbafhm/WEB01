
import React from 'react';
import { Link } from 'react-router-dom';
import { SERVICES } from '../constants';
import { Calendar, ArrowLeft } from 'lucide-react';

const Services: React.FC = () => {
  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-20">
          <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900">خدماتنا العلاجية</h1>
          <p className="text-gray-500 max-w-2xl mx-auto text-xl">
            نحن نقدم رعاية شاملة باستخدام أحدث المعايير الطبية لضمان أفضل النتائج لمرضانا.
          </p>
        </div>

        <div className="space-y-32">
          {SERVICES.map((service, index) => (
            <div 
              key={service.id} 
              className={`flex flex-col lg:items-center gap-16 ${
                index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
              }`}
            >
              <div className="lg:w-1/2">
                <div className="relative">
                  <div className={`absolute -inset-4 bg-teal-100 rounded-[3rem] ${index % 2 === 0 ? 'rotate-3' : '-rotate-3'} scale-95 opacity-50`}></div>
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="relative z-10 w-full aspect-video object-cover rounded-[2.5rem] shadow-2xl"
                  />
                </div>
              </div>
              <div className="lg:w-1/2 space-y-8">
                <div className="text-6xl mb-4">{service.icon}</div>
                <h2 className="text-4xl font-extrabold text-gray-900 leading-tight">{service.title}</h2>
                <p className="text-xl text-gray-600 leading-relaxed">
                  {service.description}
                </p>
                <div className="pt-4 flex justify-start">
                  <Link 
                    to="/contact" 
                    className="inline-flex items-center gap-3 bg-teal-600 text-white px-10 py-5 rounded-full font-bold text-lg hover:bg-teal-700 transition-all shadow-xl shadow-teal-600/20"
                  >
                    حجز لهذا النوع من العلاج
                    <Calendar size={22} />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Closing Info */}
        <div className="mt-32 bg-gray-50 rounded-[3rem] p-16 text-center border border-gray-100 shadow-sm">
          <h3 className="text-3xl font-bold text-gray-900 mb-6">هل لديك استفسار محدد؟</h3>
          <p className="text-gray-500 mb-10 max-w-2xl mx-auto text-lg">
            عيادتنا تقدم أيضاً حالات الطوارئ وخلع الأسنان والتنظيف العميق. لا تتردد في الاتصال بنا للاستفسار عن أي خدمة غير مذكورة.
          </p>
          <a 
            href="tel:0781214641" 
            className="inline-flex items-center gap-3 text-teal-600 font-bold text-xl hover:gap-6 transition-all"
          >
            اتصل بالعيادة مباشرة <ArrowLeft size={24} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Services;
