export default function FormInput({ label, type, name, value, onChange }) {
  return (
    <div className="mb-6">
      <label className="block text-gray-700 text-sm font-bold mb-2">{label}</label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        className="w-full px-3 py-2 border border-primary/70 focus:border-primary rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-yellow-500"
        required
      />
    </div>
  );
}