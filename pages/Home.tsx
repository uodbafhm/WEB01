
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Sparkles, Shield, Award, Clock } from 'lucide-react';
import { SERVICES } from '../constants';

const Home: React.FC = () => {
  return (
    <div className="flex flex-col bg-white overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-32 pb-20">
        <div className="absolute top-[-10%] left-[-5%] w-[40%] h-[60%] bg-teal-50 rounded-full blur-[120px] opacity-60"></div>
        <div className="absolute bottom-[-10%] right-[-5%] w-[40%] h-[60%] bg-blue-50 rounded-full blur-[120px] opacity-60"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            
            <div className="lg:col-span-7 space-y-10 text-center lg:text-right">
              <div className="inline-flex items-center gap-2 bg-teal-50 border border-teal-100 text-teal-700 px-5 py-2 rounded-full text-xs font-black uppercase tracking-wider animate-bounce">
                <Sparkles size={14} />
                ابتسامتكم تستحق الأفضل
              </div>
              
              <h1 className="text-6xl md:text-8xl font-black text-gray-900 leading-[1.1] tracking-tighter">
                فن الابتسامة <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-l from-teal-600 to-teal-400">بمعايير عالمية</span>
              </h1>
              
              <p className="text-xl text-gray-500 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-medium">
                في عيادة د. مابصو، نجمع بين التكنولوجيا المتطورة واللمسة الفنية لنمنحكم الابتسامة التي طالما حلمتم بها في قلب الدار البيضاء.
              </p>

              <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start">
                <Link
                  to="/contact"
                  className="group bg-gray-900 text-white px-10 py-5 rounded-full text-lg font-black hover:bg-teal-600 transition-all shadow-2xl shadow-gray-900/20 flex items-center justify-center gap-3 overflow-hidden relative"
                >
                  <span className="relative z-10">احجز موعدك الآن</span>
                  <ArrowLeft size={22} className="relative z-10 transition-transform group-hover:-translate-x-2" />
                </Link>
                <Link
                  to="/services"
                  className="px-10 py-5 rounded-full text-lg font-bold text-gray-900 border-2 border-gray-100 hover:border-teal-600 transition-all flex items-center justify-center"
                >
                  اكتشف خدماتنا
                </Link>
              </div>

              <div className="grid grid-cols-3 gap-8 pt-10 max-w-lg mx-auto lg:mx-0">
                <div className="text-right">
                  <p className="text-3xl font-black text-gray-900 font-jakarta">+10</p>
                  <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">سنوات خبرة</p>
                </div>
                <div className="text-right">
                  <p className="text-3xl font-black text-gray-900 font-jakarta">+2k</p>
                  <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">مريض سعيد</p>
                </div>
                <div className="text-right">
                  <p className="text-3xl font-black text-gray-900 font-jakarta">100%</p>
                  <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">جودة مضمونة</p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 relative">
              <div className="relative z-10 group">
                <div className="absolute -inset-4 bg-teal-100 rounded-[3rem] rotate-6 scale-95 transition-transform group-hover:rotate-0"></div>
                <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl animate-float">
                  <img 
                    src="https://images.pexels.com/photos/3845806/pexels-photo-3845806.jpeg?auto=compress&cs=tinysrgb&w=1260" 
                    alt="Dr Mapso Clinic" 
                    className="w-full h-full object-cover aspect-[4/5] transform hover:scale-110 transition-duration-700"
                  />
                </div>
              </div>
              
              {/* Floating Badge */}
              <div className="absolute -bottom-6 -right-6 z-20 glass p-6 rounded-3xl shadow-2xl border border-white/50 animate-pulse">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-teal-600 rounded-2xl flex items-center justify-center text-white">
                    <Shield size={24} />
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-black text-gray-900 leading-none">عيادة معتمدة</p>
                    <p className="text-[10px] text-gray-500 font-bold mt-1">أعلى معايير التعقيم</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Services Section - Next Level Grid */}
      <section className="py-32 bg-gray-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-right space-y-4 mb-20">
            <p className="text-teal-600 font-black tracking-[0.3em] uppercase text-xs">تخصصاتنا</p>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 tracking-tight">ماذا نقدم لابتسامتكم؟</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {SERVICES.map((service, idx) => (
              <div 
                key={service.id} 
                className="group bg-white p-8 rounded-[2.5rem] border border-gray-100 hover:border-teal-200 transition-all duration-500 shadow-xl shadow-transparent hover:shadow-teal-900/5 relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-teal-50 rounded-full translate-x-16 -translate-y-16 group-hover:scale-[3] transition-transform duration-700 -z-0"></div>
                
                <div className="relative z-10 space-y-6 text-right">
                  <div className="w-16 h-16 bg-white shadow-lg rounded-2xl flex items-center justify-center text-3xl group-hover:bg-teal-600 group-hover:text-white transition-colors duration-500">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-black text-gray-900">{service.title}</h3>
                  <p className="text-gray-500 font-medium leading-relaxed">
                    {service.description}
                  </p>
                  <Link 
                    to="/services" 
                    className="inline-flex items-center gap-2 text-teal-600 font-black text-sm group-hover:gap-4 transition-all"
                  >
                    تفاصيل الخدمة <ArrowLeft size={16} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gray-900 rounded-[3rem] p-12 lg:p-20 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
              <div className="absolute top-10 left-10 w-64 h-64 border-8 border-teal-500 rounded-full"></div>
              <div className="absolute bottom-10 right-10 w-40 h-40 bg-teal-500 rounded-3xl rotate-45"></div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
              <div className="text-right space-y-8">
                <h2 className="text-4xl md:text-5xl font-black text-white leading-tight">
                  لماذا يختار المرضى <br />
                  <span className="text-teal-400">Dr. Mapso؟</span>
                </h2>
                <div className="space-y-6">
                  {[
                    { icon: Award, title: 'خبرة طبية', desc: 'أطباء متخصصون بخبرة تزيد عن 10 سنوات.' },
                    { icon: Clock, title: 'احترام المواعيد', desc: 'نقدر وقتكم ونلتزم بأدق المواعيد لراحتكم.' },
                    { icon: Sparkles, title: 'أحدث الأجهزة', desc: 'نستخدم تكنولوجيا القرن الـ21 لضمان أفضل النتائج.' }
                  ].map((item, i) => (
                    <div key={i} className="flex gap-6 items-start">
                      <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center text-teal-400 flex-shrink-0">
                        <item.icon size={24} />
                      </div>
                      <div className="text-right">
                        <h4 className="text-lg font-black text-white">{item.title}</h4>
                        <p className="text-gray-400 text-sm font-medium">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="hidden lg:block relative">
                <img 
                  src="https://images.pexels.com/photos/6529110/pexels-photo-6529110.jpeg" 
                  alt="Quality Care" 
                  className="rounded-[2.5rem] shadow-2xl object-cover aspect-video"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
