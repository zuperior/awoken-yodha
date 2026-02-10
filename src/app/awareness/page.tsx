'use client';

import { useState } from 'react';
import ReactCountryFlag from 'react-country-flag';
import { ChevronDown } from 'lucide-react';
import Image from 'next/image';

type Country = {
  name: string;
  code: string;
  dialCode: string;
};

const COUNTRIES: Country[] = [
  { code: "US", name: "United States", dialCode: "+1" },
  { code: "CA", name: "Canada", dialCode: "+1" },
  { code: "GB", name: "United Kingdom", dialCode: "+44" },
  { code: "AU", name: "Australia", dialCode: "+61" },
  { code: "DE", name: "Germany", dialCode: "+49" },
  { code: "FR", name: "France", dialCode: "+33" },
  { code: "IN", name: "India", dialCode: "+91" },
  { code: "BR", name: "Brazil", dialCode: "+55" },
  { code: "JP", name: "Japan", dialCode: "+81" },
  { code: "CN", name: "China", dialCode: "+86" },
  { code: "RU", name: "Russia", dialCode: "+7" },
  { code: "MX", name: "Mexico", dialCode: "+52" },
  { code: "ZA", name: "South Africa", dialCode: "+27" },
  { code: "NG", name: "Nigeria", dialCode: "+234" },
  { code: "KE", name: "Kenya", dialCode: "+254" },
];

export default function AwarenessPage() {
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState('');
  const [selectedCountry, setSelectedCountry] = useState<Country>(COUNTRIES[0]);
  const [phone, setPhone] = useState('');

  const filteredCountries = COUNTRIES.filter((country) =>
    country.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 p-4 dark:bg-black">
      <div className="flex w-full max-w-2xl flex-col rounded-[18px] bg-[#FFFFFF] shadow-lg md:h-[520px] md:flex-row">
        {/* Left Side - Image (Larger size) */}
        <div className="flex w-full items-center justify-center md:w-1/2">
          <div className="relative h-[300px] w-full md:h-[510px] md:rounded-l-[18px]">
            <Image
              src="/awareness/image.png"
              alt="Awareness Illustration"
              fill
              className="object-contain p-4 md:p-0"
              priority
            />
          </div>
        </div>

        {/* Right Side - Form (More compact like your first image) */}
        <div className="flex w-full items-center justify-center p-4 md:w-1/2 md:p-6">
          <div className="w-full max-w-sm">
            <h1 className="mb-8 text-center text-[26px] font-medium text-[#000000] font-clash">
              Declare Your Identity
            </h1>

            <form className="space-y-3">
              {/* Name */}
              <div>
                <label className="mb-1 block text-[12px] font-medium text-[#888888]">
                  Name
                </label>
                <input
                  type="text"
                  required
                  className="w-full rounded-[12px] border border-[#f2f0f0] bg-zinc-50 p-2 text-[#999999] outline-none"
                  placeholder=""
                />
              </div>

              {/* Email */}
              <div>
                <label className="mb-1 block text-[12px] font-medium text-[#888888]">
                  Email
                </label>
                <input
                  type="email"
                  required
                  className="w-full rounded-[12px] border border-[#f2f0f0] bg-zinc-50 p-2 text-[#999999] outline-none"
                  placeholder=""
                />
              </div>

              {/* Phone Number */}
              <div className="relative">
                <label className="mb-1 block text-[12px] font-medium text-[#888888]">
                  Phone Number
                </label>

                <div className="flex items-center rounded-[12px] border border-[#f2f0f0] bg-zinc-50 px-3 py-2">
                  {/* Country Selector */}
                  <button
                    type="button"
                    onClick={() => setOpen(!open)}
                    className="flex items-center gap-2 pr-3"
                  >
                    <ReactCountryFlag
                      svg
                      countryCode={selectedCountry.code}
                      className="text-xl"
                    />
                    <span className="text-[14px] text-[#999999]">
                      {selectedCountry.dialCode}
                    </span>

                    {/* Lucide Chevron */}
                    <ChevronDown
                      size={16}
                      className={`text-[#999999] transition-transform duration-200 ${
                        open ? 'rotate-180' : 'rotate-0'
                      }`}
                    />
                  </button>

                  <div className="ml-4 h-6 w-px bg-[#f2f0f0]" />

                  {/* Phone Input - Changed placeholder to XXXXXXXXXXXXX */}
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) =>
                      setPhone(e.target.value.replace(/\D/g, '').slice(0, 13))
                    }
                    placeholder="XXXXXXXXXXXXX"
                    className="ml-3 w-full bg-transparent text-[14px] text-[#999999] placeholder-[#999999] outline-none"
                  />
                </div>

                {/* Dropdown */}
                {open && (
                  <div className="absolute z-20 mt-2 w-full rounded-xl bg-white shadow-lg">
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
                            setOpen(false);
                            setSearch('');
                          }}
                          className="flex w-full items-center justify-between px-4 py-3 hover:bg-zinc-100"
                        >
                          <div className="flex items-center gap-3">
                            <ReactCountryFlag
                              svg
                              countryCode={country.code}
                              className="text-xl"
                            />
                            <span className="text-sm text-[#999999]">{country.name}</span>
                          </div>
                          <span className="text-sm text-[#999999]">
                            {country.dialCode}
                          </span>
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Download PDF */}
              <div className="">
                <button
                  type="button"
                  className="w-full rounded-[10px] bg-[#333333] px-6 py-2 text-[16px] font-medium text-white hover:bg-[#444444] font-clash"
                >
                  Download PDF
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}