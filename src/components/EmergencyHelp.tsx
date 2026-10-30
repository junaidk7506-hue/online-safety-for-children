import React from 'react';
import { PhoneCall, ShieldAlert, Camera, UserX, AlertOctagon, HeartHandshake, ExternalLink } from 'lucide-react';
import { EMERGENCY_RESOURCES } from '../data/safetyContent';

export const EmergencyHelp: React.FC = () => {
  const steps = [
    {
      num: 1,
      title: 'Stop & Step Back',
      desc: 'Don’t panic or reply in anger. Take your fingers off the keyboard or touch screen.',
      icon: AlertOctagon,
      color: 'bg-[#FDF1ED] text-[#C65337] border-[#F2D2C7]'
    },
    {
      num: 2,
      title: 'Screenshot the Proof',
      desc: 'Take a quick screenshot of the messages, usernames, or links so adults have evidence to investigate.',
      icon: Camera,
      color: 'bg-[#FEF6E9] text-[#B86E18] border-[#F4DCB4]'
    },
    {
      num: 3,
      title: 'Block & Report',
      desc: 'Use the in-app button to mute, block, and report the account so they can’t send you any more messages.',
      icon: UserX,
      color: 'bg-[#F2EFF7] text-[#5E4E75] border-[#DDD5E8]'
    },
    {
      num: 4,
      title: 'Tell a Trusted Adult',
      desc: 'Talk to your parent, older sibling, teacher, or school counselor right away. Remember: You are not in trouble.',
      icon: HeartHandshake,
      color: 'bg-[#E7EFE9] text-[#2E5642] border-[#C3D9C9]'
    }
  ];

  return (
    <section id="help" className="py-14 sm:py-18 bg-[#FAF7F2]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center space-y-3 mb-12">
          <span className="text-xs font-bold tracking-wider uppercase text-[#C65337] bg-[#FDF1ED] px-3 py-1 rounded-full border border-[#F2D2C7]">
            Emergency Help & Reporting
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#241F1A] tracking-tight">
            Feeling Scared or Uncomfortable Right Now?
          </h2>
          <p className="text-sm sm:text-base text-[#61574C]">
            If someone made you feel weird, threatened you, or you saw something bad, follow these four simple steps.
          </p>
        </div>

        {/* 4 Steps Banner */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {steps.map((st) => {
            const Icon = st.icon;
            return (
              <div
                key={st.num}
                className="bg-white border-2 border-[#E5DDD1] rounded-2xl p-5 space-y-3 relative overflow-hidden"
              >
                <div className="flex items-center justify-between">
                  <span className="w-8 h-8 rounded-xl bg-[#2E5642] text-white flex items-center justify-center font-bold text-sm">
                    {st.num}
                  </span>
                  <div className={`p-2 rounded-xl border ${st.color}`}>
                    <Icon className="w-4 h-4" />
                  </div>
                </div>
                <h3 className="text-base font-bold text-[#241F1A]">{st.title}</h3>
                <p className="text-xs text-[#61574C] leading-relaxed">{st.desc}</p>
              </div>
            );
          })}
        </div>

        {/* Reassuring Big Callout */}
        <div className="bg-[#2E5642] text-[#FAF7F2] rounded-3xl p-6 sm:p-8 mb-12 space-y-3 shadow-sm">
          <div className="flex items-center gap-2">
            <HeartHandshake className="w-6 h-6 text-[#A3C9A8]" />
            <h3 className="text-lg sm:text-xl font-bold">The Golden Rule for Kids: You Are Never in Trouble</h3>
          </div>
          <p className="text-xs sm:text-sm text-[#E4EDE6] leading-relaxed max-w-2xl">
            Online bad actors use fear to make you stay quiet. They might say, "Don't tell your mom or you will be grounded." That is a trick! Good parents want to protect you, not take away your games. Talk to an adult right now—they love you and will stand by your side.
          </p>
        </div>

        {/* Helplines and Official Resources */}
        <div className="space-y-4">
          <h3 className="text-lg font-bold text-[#241F1A]">
            Verified Independent Safety Helplines
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {EMERGENCY_RESOURCES.map((res, i) => (
              <div
                key={i}
                className="p-5 rounded-2xl bg-white border border-[#E5DDD1] flex flex-col justify-between space-y-2"
              >
                <div>
                  <div className="flex items-center justify-between gap-2">
                    <h4 className="text-sm font-bold text-[#241F1A]">{res.name}</h4>
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-[#FAF7F2] border border-[#E5DDD1] text-[#7A6F62]">
                      {res.tag}
                    </span>
                  </div>
                  <p className="text-xs text-[#665D52] mt-1 leading-relaxed">{res.description}</p>
                </div>
                <div className="pt-2 border-t border-[#EFE8DE] flex items-center justify-between">
                  <span className="text-xs font-bold text-[#2E5642]">{res.phone}</span>
                  <span className="text-[11px] text-[#7A6F62] flex items-center gap-1">
                    Free & Confidential
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
