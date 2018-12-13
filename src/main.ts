import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule /*, {preserveWhitespaces: true}*/)
  .catch(err => console.error(err));

  // preserveWhitespaces - preserva espaço entre componentes em toda a aplicação
  // pode ser feito no tsconfig.json, a parti do angula 6 somente no outro arquivo
