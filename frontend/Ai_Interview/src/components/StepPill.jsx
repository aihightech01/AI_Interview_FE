// src/components/StepPill.jsx
import React from "react";

/**
 * StepPill Component
 * 
 * @param {string} label - 단계의 이름 (예: "제목 입력")
 * @param {boolean} required - 필수 단계 여부
 * @param {boolean} optional - 선택 단계 여부
 * @param {string} hint - 추가 설명(Dot 앞에 표시됨)
 * 
 * 예시:
 * <StepPill label="자소서 업로드" optional hint="없으면 기본 질문" />
 */
export default function StepPill({ label, required, optional, hint }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1 text-[12px] border border-blue-200">
      <span className="text-blue-900 font-medium">{label}</span>

      {required && (
        <span className="px-2 py-[1px] rounded-full border bg-red-50 text-red-700 text-[10px] border-red-200">
          필수
        </span>
      )}
      {optional && (
        <span className="px-2 py-[1px] rounded-full border bg-slate-50 text-slate-700 text-[10px] border-slate-200">
          선택
        </span>
      )}

      {hint && <span className="text-[11px] text-blue-700/80">· {hint}</span>}
    </span>
  );
}
