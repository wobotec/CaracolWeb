export function Input({
    label,
    name,
    type = "text",
    placeholder,
    error,
    disabled = false,
    value,
    onChange,
  }) {
    return (
      <div className="mb-3 w-100">
  
        {label && (
          <label className="form-label fw-semibold mb-2">
            {label}
          </label>
        )}
  
        <input
          type={type}
          name={name}
          className={`form-control form-control-lg ${error ? "is-invalid" : ""}`}
          placeholder={placeholder}
          disabled={disabled}
          value={value}
          onChange={onChange}
        />
  
        {error && (
          <div className="invalid-feedback">
            {error}
          </div>
        )}
        
      </div>
    )
  }
  