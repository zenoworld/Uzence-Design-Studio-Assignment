import React, { useState } from "react";
import { X, Eye, EyeOff, Loader2 } from "lucide-react";

export interface InputFieldProps {
    value?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    label?: string;
    placeholder?: string;
    helperText?: string;
    errorMessage?: string;
    disabled?: boolean;
    invalid?: boolean;
    loading?: boolean;
    type?: string;
    variant?: "filled" | "outlined" | "ghost";
    size?: "sm" | "md" | "lg";
    clearable?: boolean;
    passwordToggle?: boolean;
}

const variantClasses = {
    filled: "bg-gray-100 dark:bg-gray-700 border-transparent focus:ring-2 focus:ring-blue-500",
    outlined: "border-2 border-gray-600 dark:border-gray-600 focus:border-blue-500 focus:ring-1 focus:ring-blue-500",
    ghost: "bg-transparent border-b-2 border-gray-300 dark:border-gray-600 focus:border-blue-500",
};

const sizeClasses = {
    sm: "px-2 py-1 text-sm ",
    md: "px-3 py-2 text-base rounded-lg",
    lg: "px-4 py-3 text-lg rounded-xl",
};

export const InputField: React.FC<InputFieldProps> = ({
    value,
    onChange,
    label,
    placeholder,
    helperText,
    errorMessage,
    disabled = false,
    invalid = false,
    loading = false,
    type = "text",
    variant = "outlined",
    size = "md",
    clearable = false,
    passwordToggle = false,
}) => {
    const [showPassword, setShowPassword] = useState(false);

    const inputType =
        passwordToggle && type === "password" ? (showPassword ? "text" : "password") : type;

    return (
        <div className="w-full flex flex-col space-y-1">
            {
                label && (
                    <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                        {label}
                    </label>
                )
            }

            <div className="relative flex items-center">
                <input
                    type={inputType}
                    value={value}
                    onChange={onChange}
                    placeholder={placeholder}
                    disabled={disabled || loading}
                    className={`w-full transition-all focus:outline-none ${variantClasses[variant]} ${sizeClasses[size]} ${disabled ? "opacity-60 cursor-not-allowed" : ""
                        } ${invalid ? "border-red-500 focus:ring-red-500 focus:border-red-500" : ""}`}
                />

                {
                    loading && (
                        <Loader2 className="absolute right-3 h-4 w-4 animate-spin text-gray-500" />
                    )
                }

                {
                    clearable && value && !disabled && !loading && (
                        <button
                            type="button"
                            title="Clear input"
                            onClick={() =>
                                onChange?.({ target: { value: "" } } as React.ChangeEvent<HTMLInputElement>)
                            }
                            className="absolute right-3 text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"
                        >
                            <X className="h-4 w-4 cursor-pointer" />
                        </button>
                    )
                }

                {
                    passwordToggle && type === "password" && !loading && (
                        <button
                            type="button"
                            onClick={() => setShowPassword((prev) => !prev)}
                            className="absolute right-3 text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"
                        >
                            {showPassword ? <EyeOff className="h-6 w-6 cursor-pointer" /> : <Eye className="h-6 w-6 cursor-pointer" />}
                        </button>
                    )
                }
            </div>


            {
                invalid && errorMessage ? (
                    <p className="text-xs text-red-500">{errorMessage}</p>
                ) : helperText ? (
                    <p className="text-xs text-gray-500 dark:text-gray-400">{helperText}</p>
                ) : null
            }
        </div>
    );
};
