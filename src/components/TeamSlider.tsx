"use client";

import { User } from "lucide-react";
import Image from "next/image";

const team = [
  { name: "Zeeshaan Shafraz", role: "Founder", image: "/ze.jpeg", linkedin: "https://www.linkedin.com/in/zeeshaan-shafraz-zefura/?skipRedirect=true&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3Bb8I9%2BC8FQXaem9nyYp2FJg%3D%3D" },
  { name: "Umar Farooq", role: "Co-Founder", image: "/fa.png", linkedin: "https://www.linkedin.com/in/umar-farooq-ahamed-751439268/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3Bi8LTd9CDTYiE3s%2BNN%2BD7Dg%3D%3D" },
  { name: "Mohammed Razaullah", role: "Co-Founder", image: "/ra.jpeg", linkedin: "https://www.linkedin.com/in/mohammedrazaullah/?skipRedirect=true&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3Bt%2BFloB0lRFyVpa7%2B5iTawQ%3D%3D" },
  { name: "Saleem Akthar", role: "Co-Founder", image: "/ak.jpeg", linkedin: "https://www.linkedin.com/in/saleem-akthar-ahmed-116878359/?skipRedirect=true&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3B2MWmJpP2R2KjkWGGMXGmSg%3D%3D" },
  { name: "Umar Azath", role: "Co-Founder", image: "/um.jpeg", linkedin: "https://www.linkedin.com/in/umar-azath/?skipRedirect=true&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3BKLvWZkksQ46gNyGErHUEkg%3D%3D" },
  { name: "Abdulla Ibrahim", role: "Co-Founder", image: "/ab.jpeg", linkedin: "https://www.linkedin.com/in/abdulla-ibrahim-5451a72b8/?skipRedirect=true&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3BazEDKnZWQcagl%2Fft%2FQPM2w%3D%3D" },
];

export default function TeamSlider() {
  return (
    <section id="team" className="w-full overflow-hidden py-24 bg-[#030303]">
      <div className="mx-auto mb-12 max-w-7xl px-6 sm:px-10">
        <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">Meet the team.</h2>
      </div>

      <div className="relative flex w-full overflow-hidden">
        <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-24 bg-gradient-to-r from-[#030303] to-transparent sm:w-40" />
        <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-24 bg-gradient-to-l from-[#030303] to-transparent sm:w-40" />
        
        {/* ADDED PY-10 HERE so the top border doesn't vanish on hover */}
        <div className="flex w-max items-center gap-6 pr-6 py-10 hover:[animation-play-state:paused]" style={{ animation: 'infinite-scroll-team 30s linear infinite' }}>
          {[...team, ...team, ...team].map((member, i) => (
            <a
              key={`${member.name}-${i}`}
              href={member.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative z-0 flex w-[300px] flex-col items-center justify-center rounded-3xl border border-white/10 bg-[#0A0A0A] p-8 shadow-xl transition-all duration-500 ease-out hover:z-50 hover:-translate-y-4 hover:scale-[1.02] hover:border-[hsla(var(--theme-hue),80%,60%,0.8)] hover:bg-[#111] hover:shadow-[0_0_60px_hsla(var(--theme-hue),100%,60%,0.2)] will-change-transform"
            >
              <div className="relative mb-6 flex h-24 w-24 items-center justify-center overflow-hidden rounded-full border border-[hsla(var(--theme-hue),80%,60%,0.5)] bg-[hsla(var(--theme-hue),80%,60%,0.15)] text-[hsl(var(--theme-hue),80%,60%)] transition-transform duration-500 group-hover:scale-110">
                {member.image ? (
                  <Image src={member.image} alt={member.name} width={256} height={256} className="h-full w-full object-cover" draggable={false} />
                ) : (
                  <User size={32} />
                )}
              </div>
              <h3 className="text-center text-xl font-bold text-white">{member.name}</h3>
              <p className="mt-2 text-center text-xs font-bold uppercase tracking-widest text-[hsl(var(--theme-hue),80%,60%)]">
                {member.role}
              </p>
            </a>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes infinite-scroll-team {
          0% { transform: translate3d(0, 0, 0); }
          100% { transform: translate3d(-33.33%, 0, 0); }
        }
      `}</style>
    </section>
  );
}