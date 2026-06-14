import { Mail, Lock, LogIn } from 'lucide-react';

export default function App() {
  return (
    <div dir="rtl" className="min-h-screen w-full flex items-center justify-center bg-[#020617] text-slate-200 relative overflow-hidden font-sans p-4">
      {/* Ambient Background Blobs */}
      <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[120px]"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-purple-600/20 rounded-full blur-[150px]"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-indigo-500/10 rounded-full blur-[100px] rotate-45"></div>
      
      <div className="relative z-10 w-full max-w-md bg-white/5 backdrop-blur-2xl border border-white/10 rounded-[40px] p-8 md:p-12 shadow-2xl flex flex-col items-stretch">
        <div className="flex flex-col items-center mb-10">
          <h1 className="text-3xl font-bold tracking-tight text-white mb-2">تسجيل الدخول</h1>
          <p className="text-slate-400 text-sm">الرجاء إدخال بياناتك للمتابعة</p>
        </div>
        
        <form className="space-y-6">
          <div className="space-y-2">
            <label className="block text-xs font-semibold text-slate-300 uppercase tracking-widest mr-1">البريد الإلكتروني</label>
            <div className="relative">
              <div className="absolute inset-y-0 right-0 pr-4 flex items-center pointer-events-none">
                <Mail className="h-5 w-5 text-slate-400" />
              </div>
              <input
                type="email"
                className="w-full pr-12 pl-4 py-3.5 bg-black/20 border border-white/10 rounded-xl text-white placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all"
                placeholder="name@example.com"
                dir="ltr"
              />
            </div>
          </div>

          <div className="space-y-2">
            <div className="flex justify-between items-center mr-1">
              <label className="block text-xs font-semibold text-slate-300 uppercase tracking-widest">كلمة المرور</label>
              <a href="#" className="text-xs text-blue-400 hover:text-blue-300 transition-colors">نسيت كلمة المرور؟</a>
            </div>
            <div className="relative">
              <div className="absolute inset-y-0 right-0 pr-4 flex items-center pointer-events-none">
                <Lock className="h-5 w-5 text-slate-400" />
              </div>
              <input
                type="password"
                className="w-full pr-12 pl-4 py-3.5 bg-black/20 border border-white/10 rounded-xl text-white placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all"
                placeholder="••••••••"
                dir="ltr"
              />
            </div>
          </div>

          <div className="flex items-center gap-3 mr-1">
            <input type="checkbox" id="remember" className="w-4 h-4 rounded border-white/10 bg-black/20 text-blue-500 focus:ring-offset-0 focus:ring-0 cursor-pointer" />
            <label htmlFor="remember" className="text-sm text-slate-400 cursor-pointer">تذكر بيانات الدخول</label>
          </div>

          <button
            type="submit"
            className="w-full py-4 px-4 flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-bold rounded-xl shadow-xl shadow-blue-900/20 transition-all active:scale-[0.98] mt-4"
          >
            <LogIn className="w-5 h-5 rtl:-scale-x-100" />
            <span>تسجيل الدخول</span>
          </button>
        </form>
        
        <p className="mt-8 text-center text-slate-400 text-sm">
          ليس لديك حساب؟ <a href="#" className="text-white font-semibold hover:underline decoration-blue-500 underline-offset-4 transition-all">سجل الآن</a>
        </p>
      </div>
    </div>
  );
}
