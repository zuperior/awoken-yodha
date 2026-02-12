"use client";

import { useState, useRef } from "react";
import ReactCountryFlag from 'react-country-flag';
import { ChevronDown, X } from 'lucide-react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

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
  const router = useRouter();

  const filteredCountries = COUNTRIES.filter((country) =>
    country.name.toLowerCase().includes(search.toLowerCase())
  );

  const handleClose = () => {
    onClose();
    router.replace("/");
    dropdownRef.current = null;
    setDropdownOpen(false);
    setSearch("");
    setSelectedCountry(COUNTRIES[0]);
    setPhone("");
  };

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
    >
      <div
        className="relative flex w-full md:max-w-[500px] lg:max-w-[750px] flex-col rounded-[18px] bg-[#FFFFFF] shadow-lg h-fit md:h-[500px] md:flex-row "
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
      >
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="
    absolute z-50 transition

    right-1 top-1 p-2 rounded-full bg-white shadow-md   /* Mobile style */

    md:right-2 md:top-2 md:p-2 md:rounded-full md:bg-transparent md:shadow-none  /* Desktop (your original look) */

    hover:bg-gray-100
  "
        >
          <X size={22} className="text-black" />
        </button>


        <div className="relative flex w-full items-center justify-center md:w-1/2">
          <div className="relative h-[250px] w-[250px] lg:w-full md:w-full md:h-[490px] p-[5px]">
            <div className="relative h-full w-full overflow-hidden rounded-[10px] md:rounded-[28px]">
              <Image
                src="/awareness/man.webp"
                alt="Awareness Illustration"
                fill
                priority
                className="object-cover lg:object-contain "
              />
            </div>
          </div>
        </div>

        {/* FORM */}
        <div className="flex w-full items-center justify-center md:px-4 px-2 lg:px-4 md:py-4 py-0 lg:py-5 md:w-1/2 md:p-6">
          <div className="w-full max-w-sm">
            <h1 className="lg:mb-6 md:mb-5 mb-0 text-center md:text-[22px] text-[20px] lg:text-[26px] font-medium text-[#000000] font-clash">
              Declare Your Identity
            </h1>

            <form className="space-y-3 p-2">
              {/* Name Field */}
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

              {/* Email Field */}
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

              {/* Phone Field */}
              <div className="relative">
                <label className="mb-1 block text-[12px] font-medium text-[#888888] md:hidden">
                  Phone Number
                </label>
                <label className="mb-1 hidden text-[12px] font-medium text-[#888888] md:block">
                  Phone Number
                </label>

                <div className="flex items-center rounded-[12px] border border-[#f2f0f0] bg-zinc-50 px-3 py-2">
                  <button
                    type="button"
                    onClick={() => setDropdownOpen(!dropdownOpen)}
                    className="flex items-center gap-2 pr-3 hover:opacity-80 transition-opacity"
                  >
                    <ReactCountryFlag
                      svg
                      countryCode={selectedCountry.code}
                      className="text-xl"
                      style={{
                        fontSize: '1.5rem',
                        width: '1.5rem',
                        height: '1.5rem'
                      }}
                    />
                    <span className="text-[14px] text-[#999999]">{selectedCountry.dialCode}</span>
                    <ChevronDown
                      size={36}
                      className={`text-[#999999] transition-transform duration-200 ${dropdownOpen ? 'rotate-180' : ''}`}
                    />
                  </button>

                  <div className="h-6 w-px bg-[#e0e0e0]" />

                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value.replace(/\D/g, '').slice(0, 10))}
                    placeholder="XXXXXXXXXX"
                    className="ml-3 w-full bg-transparent text-[14px] text-[#333333] outline-none placeholder:text-[#999999]"
                  />
                </div>

                {dropdownOpen && (
                  <div
                    ref={dropdownRef}
                    className="absolute z-20 mt-2 w-full rounded-xl bg-white shadow-lg border border-gray-100"
                  >
                    <input
                      type="text"
                      placeholder="Search countries..."
                      value={search}
                      onChange={(e) => setSearch(e.target.value)}
                      className="w-full rounded-t-xl border-b px-4  md:py-2 py-2 lg:py-3 text-sm outline-none placeholder:text-[#999999] focus:border-[#333333]"
                    />

                    <div
                      className="lg:max-h-44 md:max-h-40 max-h-20 overflow-y-auto"
                      onWheel={(e) => e.stopPropagation()}
                    >
                      {filteredCountries.length > 0 ? (
                        filteredCountries.map((country) => (
                          <button
                            key={country.code}
                            type="button"
                            onClick={() => {
                              setSelectedCountry(country);
                              setDropdownOpen(false);
                              setSearch('');
                            }}
                            className={`flex w-full items-center justify-between px-4 md:py-2 py-2 lg:py-3 hover:bg-zinc-50 transition-colors ${selectedCountry.code === country.code ? 'bg-zinc-50' : ''
                              }`}
                          >
                            <div className="flex items-center gap-3">
                              <ReactCountryFlag
                                svg
                                countryCode={country.code}
                                className="text-xl"
                                style={{
                                  fontSize: '1.25rem',
                                  width: '1.25rem',
                                  height: '1.25rem'
                                }}
                              />
                              <span className="text-sm text-[#333333]">{country.name}</span>
                            </div>
                            <span className="text-sm text-[#666666]">{country.dialCode}</span>
                          </button>
                        ))
                      ) : (
                        <div className="px-4 py-3 text-sm text-[#999999]">
                          No countries found
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>

              <button
                type="button"
                className="w-full rounded-[10px] bg-[#333333] px-6 py-2 text-[16px] font-medium text-white hover:bg-[#444444] transition-colors font-clash"
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
