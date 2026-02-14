export function Loader() {
  return (
    <div
      className="flex items-center justify-center p-8"
      role="status"
      aria-live="polite"
      aria-label="Loading"
    >
      <div className="relative h-16 w-16">
        <div className="absolute inset-0 animate-loader-spin rounded-full border-2 border-transparent border-t-blue-600 dark:border-t-blue-400" />
        <div className="absolute inset-[10%] animate-[loader-spin_1.2s_linear_infinite] rounded-full border-2 border-transparent border-t-blue-600 opacity-70 dark:border-t-blue-400" />
        <div className="absolute inset-[20%] animate-[loader-spin_1.4s_linear_infinite] rounded-full border-2 border-transparent border-t-blue-600 opacity-40 dark:border-t-blue-400" />
      </div>
    </div>
  );
}

export function PageLoader() {
  return (
    <div
      className="flex min-h-[120px] items-center justify-center"
      role="status"
      aria-live="polite"
      aria-label="Page loading"
    >
      <div className="flex h-8 items-end gap-1.5">
        {[8, 16, 24, 16, 8].map((h, i) => (
          <span
            key={i}
            className="w-1.5 rounded-sm bg-blue-600 animate-loader-bounce dark:bg-blue-400"
            style={{
              height: h,
              animationDelay: `${i * 0.1}s`,
            }}
          />
        ))}
      </div>
    </div>
  );
}
