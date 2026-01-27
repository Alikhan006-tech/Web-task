export function Textarea({ label, ...props }) {
  return (
    <div className="relative">
      <label className="block mb-2 text-sm font-medium text-gray-700">
        {label}
      </label>

      <textarea
        rows="4"
        {...props}
        className="
          w-full rounded-xl border border-gray-300
          px-4 py-3 resize-none
          transition-all duration-300
          focus:outline-none focus:border-blue-600
          focus:ring-2 focus:ring-blue-600/20
          focus:scale-[1.02]
        "
      />
    </div>
  );
}
