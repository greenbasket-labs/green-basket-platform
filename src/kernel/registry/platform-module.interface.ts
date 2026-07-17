export interface PlatformModule {
  id: string;
  name: string;
  version: string;
  enabled: boolean;

  category?: string;
  description?: string;
}