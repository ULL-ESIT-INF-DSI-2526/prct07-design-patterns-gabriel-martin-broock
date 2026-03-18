export class AppConfig {
    private static instance: AppConfig;
    public record: Map<string, string>
    private constructor() {
        this.record = new Map<string, string>
    }

    public static getInstance(): AppConfig {
        if (!AppConfig.instance) {
            AppConfig.instance = new AppConfig();
        }
        return AppConfig.instance;
    }

    set(key: string, value: string): void {
        this.record.set(key, value)
    }

    get(key: string): string | undefined {
        for( let [k, v] of this.record) {
            if(k === key) {
                return v
            }
        }
        return undefined
    }

    // getAll():void {

    // }

    reset(): void {
        for( let [k, v] of this.record) {
            if(k === "env" && v === "test") {
                this.record = new Map<string, string>
            }
        }
        throw new Error("reset() solo está permitido en entorno de pruebas")
    }

    loadProfile(profile: "development" | "production"): void {
        if(profile === "development") {
            this.record.set("apiUrl", "http://localhost:3000")
            this.record.set("theme", "dark")
            this.record.set("lang", "es")
        } else {
            this.record.set("apiUrl", "https://api.miapp.com")
            this.record.set("theme", "light")
            this.record.set("lang", "en")
        }
    }
}