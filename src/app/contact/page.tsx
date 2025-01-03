import HeroSection2 from "../components/HeroSection2";

export default function contact() {
  return (
    <div>
      <HeroSection2 title="Contact" breadcrumb="Home > Contact" />

      <div className="grid sm:grid-cols-2 items-start gap-16 p-4 mx-auto max-w-4xl bg-white font-[sans-serif]">
        <div>
          <h1 className="text-gray-800 text-3xl font-extrabold">
            Drop your message:{" "}
          </h1>
        </div>

        <form className="ml-auto space-y-4">
          <label>Your Name:</label>
          <input
            type="text"
            placeholder="ABC"
            className="w-full rounded-md py-3 px-4 bg-gray-100 text-gray-800 text-sm outline-blue-500 focus:bg-transparent"
          />
          <label>Email Address:</label>
          <input
            type="email"
            placeholder="abc@def.com"
            className="w-full rounded-md py-3 px-4 bg-gray-100 text-gray-800 text-sm outline-blue-500 focus:bg-transparent"
          />
          <label>Subject:</label>
          <input
            type="text"
            placeholder="Subject"
            className="w-full rounded-md py-3 px-4 bg-gray-100 text-gray-800 text-sm outline-blue-500 focus:bg-transparent"
          />
          <label>Message:</label>
          <textarea
            placeholder="Message"
            className="w-full rounded-md px-4 bg-gray-100 text-gray-800 text-sm pt-3 outline-blue-500 focus:bg-transparent"
          ></textarea>
          <button
            type="button"
            className="text-white bg-blue-500 hover:bg-blue-600 tracking-wide rounded-md text-sm px-4 py-3 w-full !mt-6"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
