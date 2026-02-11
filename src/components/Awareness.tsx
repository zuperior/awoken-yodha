'use client';

import { useState, useRef, useEffect } from 'react';
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

export default function AwarenessPage() {
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState('');
  const [selectedCountry, setSelectedCountry] = useState<Country>(COUNTRIES[0]);
  const [phone, setPhone] = useState('');
  const dropdownRef = useRef<HTMLDivElement>(null);

  const filteredCountries = COUNTRIES.filter((country) =>
    country.name.toLowerCase().includes(search.toLowerCase())
  );

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (


    <div
      className="
    flex min-h-[100svh] md:min-h-screen
    items-center justify-center
    bg-zinc-50 dark:bg-black
    bg-none md:bg-[initial]
    p-4
  "
    >
      <div className="flex w-full md:max-w-[500px] lg:max-w-[750px] flex-col rounded-[18px] bg-[#FFFFFF] shadow-lg h-auto md:h-[500px] md:flex-row">


        <div className="flex w-full items-center justify-center md:w-1/2">
          <div className="relative h-[270px] w-full md:h-[490px] p-[2px]">
            <div className="relative h-full w-full overflow-hidden rounded-[28px]">
              <Image
                src="/awareness/man.webp"
                alt="Awareness Illustration"
                fill
                priority
                className="object-cover lg:object-contain rounded-[28px]"
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
                  <button type="button" className="flex items-center gap-2 pr-3">
                    <ReactCountryFlag svg countryCode="IN" className="text-xl" />
                    <span className="text-[14px] text-[#999999]">+91</span>
                    <ChevronDown size={16} className="text-[#999999]" />
                  </button>

                  <div className="ml-4 h-6 w-px bg-[#f2f0f0]" />

                  <input
                    type="tel"
                    placeholder="XXXXXXXXXX"
                    className="ml-3 w-full bg-transparent text-[14px] text-[#999999] outline-none"
                  />
                </div>
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

