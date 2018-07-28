import { PLATFORM } from 'aurelia-pal';
import { RouterConfiguration, Router } from 'aurelia-router';
import { inject, View } from 'aurelia-framework';
import environment from './environment';
import { ServiceWorkerSetup } from 'resources/registerServiceWorker';

@inject(ServiceWorkerSetup)
export class App {
  title: string = 'Aurelia HN PWA';
  router: Router;

  constructor(
    private serviceWorkerSetup: ServiceWorkerSetup,
  ) { }

  created(owningView: View, myView: View) {
    if (!environment.debug && !environment.testing) {
      this.serviceWorkerSetup.register();
    }
  }

  configureRouter(config: RouterConfiguration, router: Router): void {
    this.router = router;
    config.title = this.title;
    config.options.pushState = true;
    config.options.root = '/';
    config.map([
      {
        route: '',
        redirect: 'top'
      },
      {
        route: "top",
        name: "top",
        nav: true,
        title: 'Top',
        moduleId: PLATFORM.moduleName("resources/pages/top/top")
      },
      {
        route: "news",
        name: "news",
        nav: true,
        title: 'News',
        moduleId: PLATFORM.moduleName("resources/pages/news/news")
      },
      {
        route: "show",
        name: "show",
        nav: true,
        title: 'Show',
        moduleId: PLATFORM.moduleName("resources/pages/show/show")
      },
      {
        route: "ask",
        name: "ask",
        nav: true,
        title: 'Ask',
        moduleId: PLATFORM.moduleName("resources/pages/ask/ask")
      },
      {
        route: "jobs",
        name: "jobs",
        nav: true,
        title: 'Jobs',
        moduleId: PLATFORM.moduleName("resources/pages/jobs/jobs")
      },
      {
        route: "about",
        name: "about",
        moduleId: PLATFORM.moduleName("resources/pages/about/about")
      }
    ]);
  }
}
