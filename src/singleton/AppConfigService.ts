export class AppConfigService {
  private static instance: AppConfigService;

  private constructor(
    public readonly companyName: string,
    public readonly footer: string
  ) {}

  static getInstance(companyName?: string, footer?: string): AppConfigService {
    if (!AppConfigService.instance) {
      AppConfigService.instance = new AppConfigService(
        companyName ?? "Default Company",
        footer ?? "Default Footer"
      );
    }
    return AppConfigService.instance;
  }
}