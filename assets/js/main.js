
import { siteConfig } from './config/site.config.js';
import { applyWhatsAppLinks } from './services/whatsapp.service.js';
import { initNavigation } from './controllers/navigation.controller.js';

applyWhatsAppLinks(siteConfig.whatsapp);
initNavigation();
