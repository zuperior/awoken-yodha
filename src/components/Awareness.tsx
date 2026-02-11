"use client";

import { useState, useRef, useEffect } from "react";
import ReactCountryFlag from 'react-country-flag';
import { ChevronDown } from 'lucide-react';
import Image from 'next/image';

type Country = {
  name: string;
  code: string;
  dialCode: string;
};

const COUNTRIES: Country[] = [
  { code: "IN", name: "India", dialCode: "+91" },
  { code: "US", name: "United States", dialCode: "+1" },
  { code: "CA", name: "Canada", dialCode: "+1" },
  { code: "GB", name: "United Kingdom", dialCode: "+44" },
  { code: "AU", name: "Australia", dialCode: "+61" },
  { code: "DE", name: "Germany", dialCode: "+49" },
  { code: "FR", name: "France", dialCode: "+33" },
  { code: "BR", name: "Brazil", dialCode: "+55" },
  { code: "JP", name: "Japan", dialCode: "+81" },
  { code: "CN", name: "China", dialCode: "+86" },
  { code: "RU", name: "Russia", dialCode: "+7" },
  { code: "MX", name: "Mexico", dialCode: "+52" },
  { code: "ZA", name: "South Africa", dialCode: "+27" },
  { code: "NG", name: "Nigeria", dialCode: "+234" },
  { code: "KE", name: "Kenya", dialCode: "+254" },
];

type AwarenessProps = {
  open: boolean;
  onClose: () => void;
};

export default function AwarenessPage({ open, onClose }: AwarenessProps) {
  const [search, setSearch] = useState("");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState<Country>(COUNTRIES[0]);
  const [phone, setPhone] = useState("");
  const dropdownRef = useRef<HTMLDivElement>(null);

  const filteredCountries = COUNTRIES.filter((country) =>
    country.name.toLowerCase().includes(search.toLowerCase())
  );

  // Close dropdown when clicking outside; also handle Escape to close dropdown/modal
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpen(false);
      }
    };

    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        if (dropdownOpen) setDropdownOpen(false);
        else onClose();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleEsc);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEsc);
    };
  }, [dropdownOpen, onClose]);

  // If not open, render nothing
  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-40 flex items-center justify-center bg-black/80 p-4"
      onClick={onClose}
    >
      <div
        className="flex w-full md:max-w-[500px] lg:max-w-[750px] flex-col rounded-[18px] bg-[#FFFFFF] shadow-lg h-auto md:h-[500px] md:flex-row "
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
      >
        <div className="relative flex w-full items-center justify-center md:w-1/2">
        <div className="relative h-[350px] w-[380px] lg:w-full md:w-full md:h-[490px] p-[5px]">
                    <div className="relative h-full w-full overflow-hidden rounded-[10px] md:rounded-[28px]">
                      <Image
                        src="/awareness/man.webp"
                        alt="Awareness Illustration"
                        fill
                        priority
                        className="object-fit lg:object-contain "
                      />
                    </div>
          </div>
        </div>

        {/* FORM */}
        <div className="flex w-full items-center justify-center px-4 py-5 md:w-1/2 md:p-6">
          <div className="w-full max-w-sm">
         

            <h1 className="mb-6 text-center text-[26px] font-medium text-[#000000] font-clash">
              Declare Your Identity
            </h1>

            <form className="space-y-3">
              <div>
                <label className="mb-1 hidden text-[12px] font-medium text-[#888888] md:block">
                  Name
                </label>
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full rounded-[12px] border border-[#f2f0f0] bg-zinc-50 p-2 text-[#999999] outline-none placeholder:text-[#888888] md:placeholder:text-transparent"
                />
              </div>

              <div>
                <label className="mb-1 hidden text-[12px] font-medium text-[#888888] md:block">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full rounded-[12px] border border-[#f2f0f0] bg-zinc-50 p-2 text-[#999999] outline-none placeholder:text-[#888888] md:placeholder:text-transparent"
                />
              </div>

              <div className="relative">
                <label className="mb-1 hidden text-[12px] font-medium text-[#888888] md:block">
                  Phone Number
                </label>

                <div className="flex items-center rounded-[12px] border border-[#f2f0f0] bg-zinc-50 px-3 py-2">
                  <button type="button" onClick={() => setDropdownOpen(!dropdownOpen)} className="flex items-center gap-2 pr-3">
                    <ReactCountryFlag svg countryCode={selectedCountry.code} className="text-xl" />
                    <span className="text-[14px] text-[#999999]">{selectedCountry.dialCode}</span>
                    <ChevronDown size={38} className="text-[#999999]" />
                  </button>

                  <div className="h-6 w-px bg-[#f2f0f0]" />

                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value.replace(/\D/g, '').slice(0, 10))}
                    placeholder="XXXXXXXXXX"
                    className="ml-3 w-full bg-transparent text-[14px] text-[#999999] outline-none"
                  />
                </div>

                {/* Dropdown */}
                {dropdownOpen && (
                  <div ref={dropdownRef} className="absolute z-20 mt-2 w-full rounded-xl bg-white shadow-lg">
                    <input
                      type="text"
                      placeholder="Search countries..."
                      value={search}
                      onChange={(e) => setSearch(e.target.value)}
                      className="w-full rounded-t-xl border-b px-4 py-3 text-sm outline-none placeholder-[#999999]"
                    />

                    <div className="max-h-44 overflow-y-auto">
                      {filteredCountries.map((country) => (
                        <button
                          key={country.code}
                          type="button"
                          onClick={() => {
                            setSelectedCountry(country);
                            setDropdownOpen(false);
                            setSearch('');
                          }}
                          className="flex w-full items-center justify-between px-4 py-3 hover:bg-zinc-100"
                        >
                          <div className="flex items-center gap-3">
                            <ReactCountryFlag svg countryCode={country.code} className="text-xl" />
                            <span className="text-sm text-[#999999]">{country.name}</span>
                          </div>
                          <span className="text-sm text-[#999999]">{country.dialCode}</span>
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <button
                type="button"
                className="w-full rounded-[10px] bg-[#333333] px-6 py-2 text-[16px] font-medium text-white hover:bg-[#444444] font-clash"
              >
                Download PDF
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

