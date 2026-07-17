import { Injectable } from '@nestjs/common';
import { PlatformModule } from './platform-module.interface';

@Injectable()
export class RegistryService {

  private readonly modules: PlatformModule[] = [

    {
      id: 'boot',
      name: 'Boot',
      version: '1.0.0',
      enabled: true,
      category: 'Kernel',
      description: 'Initializes the platform boot process.',
    },

    {
      id: 'health',
      name: 'Health',
      version: '1.0.0',
      enabled: true,
      category: 'Kernel',
      description: 'Provides platform health monitoring.',
    },

    {
      id: 'config',
      name: 'Config',
      version: '1.0.0',
      enabled: true,
      category: 'Kernel',
      description: 'Manages application configuration.',
    },

    {
      id: 'environment',
      name: 'Environment',
      version: '1.0.0',
      enabled: true,
      category: 'Kernel',
      description: 'Loads environment variables.',
    },

    {
      id: 'logging',
      name: 'Logging',
      version: '1.0.0',
      enabled: true,
      category: 'Kernel',
      description: 'Provides centralized logging services.',
    },

    {
      id: 'exceptions',
      name: 'Exceptions',
      version: '1.0.0',
      enabled: true,
      category: 'Kernel',
      description: 'Handles global exception processing.',
    },

    {
      id: 'lifecycle',
      name: 'Lifecycle',
      version: '1.0.0',
      enabled: true,
      category: 'Kernel',
      description: 'Manages application startup and shutdown.',
    },

  ];

  getModules(): PlatformModule[] {
    return this.modules;
  }

}