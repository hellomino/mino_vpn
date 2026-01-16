import React, {
    createContext,
    useContext,
    useState,
    useCallback,
    useEffect,
    ReactNode,
} from "react";

// =============================
// Types
// =============================
export type ToastType = "error" | "success" | "info";

interface ToastItem {
    id: string;
    title: string;
    message: string;
    type: ToastType;
    closing: boolean; 
}

interface ToastContextType {
    show: (title: string, message: string, type?: ToastType) => void;
    showError: (title: string, message: string) => void;
    showSuccess: (title: string, message: string) => void;
    showInfo: (title: string, message: string) => void;
}

// =============================
// Context
// =============================
const ToastContext = createContext<ToastContextType | null>(null);

export const useToast = () => {
    const ctx = useContext(ToastContext);
    if (!ctx) throw new Error("useToast must be used inside ToastProvider");
    return ctx;
};

// =============================
// Provider
// =============================
export const ToastProvider = ({ children }: React.PropsWithChildren) => {
    const [toasts, setToasts] = useState<ToastItem[]>([]);
    const timers = React.useRef<Record<string, number>>({});

    const show = useCallback(
        (title: string, message: string, type: ToastType = "info") => {
            const id = crypto.randomUUID();
            const toast: ToastItem = {
                id,
                title,
                message,
                type,
                closing: false,
            };

            setToasts((prev) => [...prev, toast]);

            timers.current[id] = window.setTimeout(() => startClose(id), 3500);
        },
        []
    );

    const startClose = useCallback((id: string) => {
        setToasts((prev) => prev.map((t) => (t.id === id ? { ...t, closing: true } : t)));
        setTimeout(() => remove(id), 300);
    }, []);

    const remove = useCallback((id: string) => {
        setToasts((prev) => prev.filter((t) => t.id !== id));
        if (timers.current[id]) {
            clearTimeout(timers.current[id]);
            delete timers.current[id];
        }
    }, []);

    useEffect(() => {
        return () => {
            Object.values(timers.current).forEach(clearTimeout);
        };
    }, []);

    const showError = (title: string, message: string) => show(title, message, "error");
    const showSuccess = (title: string, message: string) => show(title, message, "success");
    const showInfo = (title: string, message: string) => show(title, message, "info");

    return (
        <ToastContext.Provider value={{ show, showError, showSuccess, showInfo }}>
            {children}

            {/* Toast Container */}
            <div className="fixed top-4 left-1/2 -translate-x-1/2 z-[200] w-full max-w-sm px-4 flex flex-col gap-2 pointer-events-none">
                {toasts.map((t) => (
                    <div
                        key={t.id}
                        className={`pointer-events-auto flex w-full rounded-xl shadow-lg border-l-4 p-4 bg-white transition-all duration-300
            ${t.closing ? "opacity-0 -translate-y-3" : "opacity-100 translate-y-0"}
            ${t.type === "error" ? "border-red-500" : ""}
            ${t.type === "success" ? "border-green-500" : ""}
            ${t.type === "info" ? "border-indigo-500" : ""}
          `}
                    >
                        {/* Icon */}
                        <div className="flex-shrink-0 mr-3">
                            {t.type === "error" && (
                                <svg className="h-5 w-5 text-red-500" viewBox="0 0 20 20" fill="currentColor">
                                    <path
                                        fillRule="evenodd"
                                        d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            )}
                            {t.type === "success" && (
                                <svg className="h-5 w-5 text-green-500" viewBox="0 0 20 20" fill="currentColor">
                                    <path
                                        fillRule="evenodd"
                                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            )}
                            {t.type === "info" && (
                                <svg className="h-5 w-5 text-indigo-500" viewBox="0 0 20 20" fill="currentColor">
                                    <path
                                        fillRule="evenodd"
                                        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            )}
                        </div>

                        {/* Content */}
                        <div className="flex-1 min-w-0">
                            <h3 className="text-sm font-bold text-slate-900">{t.title}</h3>
                            <p className="mt-1 text-xs font-medium text-slate-600">{t.message}</p>
                        </div>

                        {/* Close Button */}
                        <button
                            onClick={() => startClose(t.id)}
                            className="ml-3 text-slate-400 hover:text-slate-600"
                        >
                            ✕
                        </button>
                    </div>
                ))}
            </div>
        </ToastContext.Provider>
    );
};