"use client";
import { motion } from "framer-motion";
import { twMerge } from "tailwind-merge";
import React from "react";

export const Circle = ({ className, children, idx, ...rest }) => {
  return (
    <motion.div
      {...rest}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: idx * 0.1, duration: 0.2 }}
      className={twMerge(
        "absolute inset-0 left-1/2 top-1/2 h-10 w-10 -translate-x-1/2 -translate-y-1/2 transform rounded-full border border-cyan-500/20",
        className
      )}
    />
  );
};

export const Radar = ({ className }) => {
  const circles = new Array(8).fill(1);
  return (
    <div
      className={twMerge(
        "relative flex h-20 w-20 items-center justify-center rounded-full",
        className
      )}
    >
      <style>{`
        @keyframes radar-spin {
          from { transform: rotate(20deg); }
          to   { transform: rotate(380deg); }
        }
        .animate-radar-spin {
          animation: radar-spin 10s linear infinite;
        }
      `}</style>
      {/* Rotating sweep line */}
      <div
        style={{ transformOrigin: "right center" }}
        className="animate-radar-spin absolute right-1/2 top-1/2 z-40 flex h-[5px] w-[400px] items-end justify-center overflow-hidden bg-transparent"
      >
        <div className="relative z-40 h-[1px] w-full bg-gradient-to-r from-transparent via-cyan-500 to-transparent shadow-[0_0_15px_rgba(6,182,212,0.8)]" />
      </div>
      {/* Concentric circles */}
      {circles.map((_, idx) => (
        <Circle
          style={{
            height: `${(idx + 1) * 5}rem`,
            width: `${(idx + 1) * 5}rem`,
            border: `1px solid rgba(6, 182, 212, ${0.4 - (idx + 1) * 0.05})`,
          }}
          key={`circle-${idx}`}
          idx={idx}
        />
      ))}
    </div>
  );
};

export const IconContainer = ({
  icon,
  text,
  delay,
  subtitle,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: delay ?? 0 }}
      className="relative z-50 flex flex-col items-center justify-center space-y-3 p-4 group"
    >
      <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-cyan-500/30 bg-[#0A0F1C]/80 shadow-[0_0_15px_rgba(6,182,212,0.15)] group-hover:shadow-[0_0_30px_rgba(217,70,239,0.3)] group-hover:border-fuchsia-500/50 transition-all duration-300">
        {icon}
      </div>
      <div className="rounded-md px-2 py-1 text-center">
        <div className="text-sm font-bold text-slate-200 group-hover:text-white transition-colors max-w-[120px] leading-tight">
          {text}
        </div>
        {subtitle && (
          <div className="text-[10px] font-medium text-cyan-400 mt-1 max-w-[120px]">
            {subtitle}
          </div>
        )}
      </div>
    </motion.div>
  );
};
