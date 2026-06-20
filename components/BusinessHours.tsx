'use client';

import { useEffect, useState } from 'react';
import { Clock, CheckCircle, XCircle } from 'lucide-react';

function getIsOpen(): boolean {
  const now = new Date();
  // Convert to JST (UTC+9)
  const jst = new Date(now.getTime() + 9 * 60 * 60 * 1000);
  const day = jst.getUTCDay(); // 0=Sun, 1=Mon … 6=Sat
  const hours = jst.getUTCHours();
  const minutes = jst.getUTCMinutes();
  const totalMinutes = hours * 60 + minutes;
  const openMinutes = 9 * 60;   // 9:00
  const closeMinutes = 18 * 60; // 18:00
  return day >= 1 && day <= 5 && totalMinutes >= openMinutes && totalMinutes < closeMinutes;
}

const schedule = [
  { dayEn: 'Monday',    dayJa: '月曜日', time: '9:00 AM – 6:00 PM', open: true },
  { dayEn: 'Tuesday',   dayJa: '火曜日', time: '9:00 AM – 6:00 PM', open: true },
  { dayEn: 'Wednesday', dayJa: '水曜日', time: '9:00 AM – 6:00 PM', open: true },
  { dayEn: 'Thursday',  dayJa: '木曜日', time: '9:00 AM – 6:00 PM', open: true },
  { dayEn: 'Friday',    dayJa: '金曜日', time: '9:00 AM – 6:00 PM', open: true },
  { dayEn: 'Saturday',  dayJa: '土曜日', time: 'Closed / 定休日',    open: false },
  { dayEn: 'Sunday',    dayJa: '日曜日', time: 'Closed / 定休日',    open: false },
];

export default function BusinessHours() {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setIsOpen(getIsOpen());
    setMounted(true);
    const interval = setInterval(() => setIsOpen(getIsOpen()), 60_000);
    return () => clearInterval(interval);
  }, []);

  // Get today's day index in JST for row highlighting
  const todayJst = mounted
    ? (() => {
        const jst = new Date(Date.now() + 9 * 60 * 60 * 1000);
        return jst.getUTCDay(); // 0=Sun
      })()
    : -1;

  // Map Sun=0 → index 6, Mon=1 → 0 … Sat=6 → 5
  const todayRowIndex = todayJst === 0 ? 6 : todayJst - 1;

  return (
    <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
      {/* Header */}
      <div className="bg-gradient-to-r from-brand-blue-700 to-brand-blue-800 px-6 py-5">
        <div className="flex items-center justify-between flex-wrap gap-3">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-white/15 flex items-center justify-center">
              <Clock className="h-5 w-5 text-white" />
            </div>
            <div>
              <h3 className="font-bold text-white text-lg leading-tight">Business Hours</h3>
              <p className="text-brand-blue-200 text-sm">営業時間</p>
            </div>
          </div>
          {mounted && (
            <div className={`flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-semibold ${
              isOpen
                ? 'bg-green-500/20 text-green-300 border border-green-400/40'
                : 'bg-red-500/20 text-red-300 border border-red-400/40'
            }`}>
              {isOpen ? (
                <CheckCircle className="h-4 w-4" />
              ) : (
                <XCircle className="h-4 w-4" />
              )}
              <span>{isOpen ? 'Open Now' : 'Closed Now'}</span>
              <span className="text-xs opacity-70 font-normal">
                {isOpen ? '営業中' : '営業時間外'}
              </span>
            </div>
          )}
        </div>
      </div>

      {/* Summary cards */}
      <div className="grid grid-cols-2 gap-3 p-4 bg-gray-50 border-b border-gray-100">
        <div className="bg-white rounded-xl p-3 border border-brand-blue-100 hover:border-brand-blue-300 transition-colors">
          <p className="text-xs text-muted-foreground mb-0.5">Mon – Fri <span className="text-brand-blue-400">月〜金</span></p>
          <p className="text-sm font-semibold text-brand-blue-800">9:00 AM – 6:00 PM</p>
        </div>
        <div className="bg-white rounded-xl p-3 border border-gray-200 hover:border-gray-300 transition-colors">
          <p className="text-xs text-muted-foreground mb-0.5">Sat – Sun <span className="text-gray-400">土・日</span></p>
          <p className="text-sm font-semibold text-gray-500">Closed / 定休日</p>
        </div>
      </div>

      {/* Full schedule table */}
      <div className="px-4 pb-4">
        <table className="w-full text-sm mt-3">
          <tbody className="divide-y divide-gray-50">
            {schedule.map((row, i) => {
              const isToday = i === todayRowIndex;
              return (
                <tr
                  key={row.dayEn}
                  className={`transition-colors ${
                    isToday
                      ? 'bg-brand-blue-50'
                      : 'hover:bg-gray-50'
                  }`}
                >
                  <td className="py-2.5 pr-3">
                    <div className="flex items-center gap-2">
                      {isToday && (
                        <span className="w-1.5 h-1.5 rounded-full bg-brand-gold-500 flex-shrink-0" />
                      )}
                      <span className={`font-medium ${isToday ? 'text-brand-blue-700' : 'text-foreground'}`}>
                        {row.dayEn}
                      </span>
                      <span className="text-muted-foreground text-xs">{row.dayJa}</span>
                      {isToday && (
                        <span className="ml-1 text-xs bg-brand-gold-100 text-brand-gold-700 px-1.5 py-0.5 rounded font-medium">
                          Today
                        </span>
                      )}
                    </div>
                  </td>
                  <td className="py-2.5 text-right">
                    <span className={row.open ? 'text-brand-blue-700 font-medium' : 'text-gray-400'}>
                      {row.time}
                    </span>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <p className="text-xs text-muted-foreground mt-3 flex items-center gap-1">
          <Clock className="h-3 w-3" />
          All times in Japan Standard Time (JST / UTC+9)
        </p>
      </div>
    </div>
  );
}
