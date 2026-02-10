export default function AwarenessPage() {
  const handleDownloadPDF = () => {
    // Add your PDF download logic here
    console.log("Downloading PDF...");
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log("Form submitted");
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-zinc-50 p-8 dark:bg-black">
      <div className="w-full max-w-md rounded-2xl bg-[#FFFFFF] p-8 shadow-lg dark:bg-zinc-900">
        <h1 className="mb-6 text-center text-3xl font-bold text-zinc-900 dark:text-white">
          Declare Your Identity
        </h1>

        <form className="space-y-6">
          {/* Name Field */}
          <div>
            <label 
              htmlFor="name" 
              className="mb-2 block text-[12px] font-medium text-[#888888]"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="w-full rounded-lg border border-[#888888] fill-[#BBBBBB] bg-zinc-50 p-[12px] text-[#999999]  placeholder-[#999999] focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 dark:border-zinc-700 dark:bg-zinc-800 dark:text-white"
            />
          </div>

          {/* Email Field */}
          <div>
            <label 
              htmlFor="email" 
              className="mb-2 block text-sm font-medium text-zinc-700 dark:text-zinc-300"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="w-full rounded-lg border border-zinc-300 bg-zinc-50 px-4 py-3 text-zinc-900 placeholder-zinc-500 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 dark:border-zinc-700 dark:bg-zinc-800 dark:text-white"
              placeholder="Enter your email address"
            />
          </div>

          {/* Phone Number Field */}
          <div>
            <label 
              htmlFor="phone" 
              className="mb-2 block text-sm font-medium text-zinc-700 dark:text-zinc-300"
            >
              Phone Number
            </label>
            <div className="flex">
              <div className="flex items-center rounded-l-lg border border-r-0 border-zinc-300 bg-zinc-100 px-4 dark:border-zinc-700 dark:bg-zinc-800">
                <span className="text-zinc-700 dark:text-zinc-300">+91</span>
              </div>
              <input
                type="tel"
                id="phone"
                name="phone"
                required
                className="w-full rounded-r-lg border border-zinc-300 bg-zinc-50 px-4 py-3 text-zinc-900 placeholder-zinc-500 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 dark:border-zinc-700 dark:bg-zinc-800 dark:text-white"
                placeholder="XXXXX XXXXX"
                pattern="[0-9]{10}"
                maxLength={10}
              />
            </div>
          
          </div>

          {/* Download PDF Button */}
          <div className="pt-4">
            <button
              type="button"
              className="w-full rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white transition-colors hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:bg-blue-500 dark:hover:bg-blue-600"
            >
              Download PDF
            </button>

          </div>
        </form>

      </div>
    </div>
  );
}